/* ORA Coffee — ordering menu
   Views: menu → order → pay → done. Cart persists in localStorage. */
(function () {
  "use strict";

  var MENU = window.ORA_MENU;
  var STORE_KEY = "ora.order.v1";
  var CURRENCY = "MAD";

  var ITEMS = {};
  MENU.forEach(function (cat) {
    cat.items.forEach(function (it) { ITEMS[it.id] = it; });
  });

  // ---------- State ----------
  var state = load() || { lines: [], name: "", method: "card-counter" };
  var view = "menu";
  var sheet = null; // { itemId, qty, notes, lineId|null }
  var lastOrder = null;

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { return null; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }

  // ---------- Helpers ----------
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] === true) n.setAttribute(k, "");
      else if (attrs[k] !== false && attrs[k] != null) n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function money(n) { return n + " " + CURRENCY; }
  function count() { return state.lines.reduce(function (s, l) { return s + l.qty; }, 0); }
  function total() { return state.lines.reduce(function (s, l) { return s + l.qty * ITEMS[l.itemId].price; }, 0); }
  function qtyOf(itemId) {
    return state.lines.filter(function (l) { return l.itemId === itemId; })
      .reduce(function (s, l) { return s + l.qty; }, 0);
  }
  function uid() { return Math.random().toString(36).slice(2, 9); }

  var toastTimer;
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1600);
  }

  // ---------- Cart ops ----------
  function addLine(itemId, qty, notes) {
    notes = (notes || "").trim();
    var existing = state.lines.find(function (l) { return l.itemId === itemId && l.notes === notes; });
    if (existing) existing.qty += qty;
    else state.lines.push({ id: uid(), itemId: itemId, qty: qty, notes: notes });
    save();
  }
  function updateLine(lineId, qty, notes) {
    var line = state.lines.find(function (l) { return l.id === lineId; });
    if (!line) return;
    if (qty <= 0) return removeLine(lineId);
    line.qty = qty;
    line.notes = (notes || "").trim();
    save();
  }
  function removeLine(lineId) {
    state.lines = state.lines.filter(function (l) { return l.id !== lineId; });
    save();
  }

  // ---------- Views ----------
  function go(next) {
    view = next;
    $("#app").setAttribute("data-view", next);
    clearTimeout(toastTimer);
    $("#toast").classList.remove("show");
    ["menu", "order", "pay", "done"].forEach(function (v) {
      $("#view-" + v).hidden = v !== next;
    });
    window.scrollTo({ top: 0 });
    render();
  }

  function render() {
    if (view === "menu") renderMenu();
    if (view === "order") renderOrder();
    if (view === "pay") renderPay();
    if (view === "done") renderDone();
    renderBar();
  }

  // Menu -----------------------------------------------------------
  var menuBuilt = false;
  function renderMenu() {
    if (!menuBuilt) buildMenu();
    // refresh quantity badges
    MENU.forEach(function (cat) {
      cat.items.forEach(function (it) {
        var b = $('[data-add="' + it.id + '"]');
        var q = qtyOf(it.id);
        b.textContent = q ? q : "+";
        b.classList.toggle("in-order", q > 0);
      });
    });
  }

  function buildMenu() {
    menuBuilt = true;
    var cats = $("#cats");
    var menu = $("#menu");
    MENU.forEach(function (cat, i) {
      cats.appendChild(el("button", {
        class: "cat", type: "button", "data-cat": cat.id, "aria-current": i === 0 ? "true" : "false",
        text: cat.name,
        onclick: function () {
          var target = $("#cat-" + cat.id);
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }));

      var list = el("ul", { class: "items" });
      cat.items.forEach(function (it) {
        list.appendChild(el("li", null, [
          el("button", { class: "item", type: "button", onclick: function () { openSheet(it.id); } }, [
            el("span", null, [
              el("span", { class: "item-name", text: it.name }),
              el("span", { class: "item-desc", text: it.desc })
            ]),
            el("span", { class: "item-price", html: it.price + "<small>" + CURRENCY + "</small>" }),
            el("span", { class: "item-add", "data-add": it.id, "aria-hidden": "true", text: "+" })
          ])
        ]));
      });

      menu.appendChild(el("section", { class: "section", id: "cat-" + cat.id }, [
        el("div", { class: "section-head" }, [
          el("div", null, [
            el("h2", { class: "section-title", text: cat.name }),
            cat.tagline ? el("p", { class: "section-tagline", text: cat.tagline }) : null
          ]),
          el("span", { class: "section-count", text: cat.items.length + (cat.items.length === 1 ? " item" : " items") })
        ]),
        list
      ]));
    });

    // highlight the category in view
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var id = e.target.id.replace("cat-", "");
          document.querySelectorAll(".cat").forEach(function (c) {
            c.setAttribute("aria-current", c.getAttribute("data-cat") === id ? "true" : "false");
          });
          var chip = $('[data-cat="' + id + '"]');
          chip.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
        });
      }, { rootMargin: "-20% 0px -70% 0px" });
      document.querySelectorAll(".section").forEach(function (s) { io.observe(s); });
    }
  }

  // Order bar ------------------------------------------------------
  function renderBar() {
    var bar = $("#orderbar");
    var n = count();
    bar.hidden = !(view === "menu" && n > 0);
    $("#orderbar-count").textContent = n + (n === 1 ? " item" : " items");
    $("#orderbar-total").textContent = money(total());
  }

  // Sheet ----------------------------------------------------------
  function openSheet(itemId, lineId) {
    var line = lineId && state.lines.find(function (l) { return l.id === lineId; });
    sheet = { itemId: itemId, qty: line ? line.qty : 1, notes: line ? line.notes : "", lineId: lineId || null };
    var it = ITEMS[itemId];
    $("#sheet-name").textContent = it.name;
    $("#sheet-desc").textContent = it.desc;
    $("#sheet-price").textContent = money(it.price);
    $("#sheet-notes").value = sheet.notes;
    $("#sheet-remove").hidden = !line;
    $("#sheet-add-label").textContent = line ? "Update" : "Add to order";
    paintSheet();
    $("#backdrop").hidden = false;
    $("#sheet").hidden = false;
    document.body.style.overflow = "hidden";
  }
  function paintSheet() {
    $("#sheet-qty").value = sheet.qty;
    $("#sheet-minus").disabled = sheet.qty <= 1 && !sheet.lineId;
    $("#sheet-add-total").textContent = money(sheet.qty * ITEMS[sheet.itemId].price);
  }
  function closeSheet() {
    sheet = null;
    $("#backdrop").hidden = true;
    $("#sheet").hidden = true;
    document.body.style.overflow = "";
  }

  $("#sheet-plus").addEventListener("click", function () { sheet.qty += 1; paintSheet(); });
  $("#sheet-minus").addEventListener("click", function () {
    if (sheet.qty > 1) { sheet.qty -= 1; paintSheet(); }
    else if (sheet.lineId) { removeLine(sheet.lineId); closeSheet(); render(); toast("Removed"); }
  });
  $("#sheet-chips").addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    var ta = $("#sheet-notes");
    var note = chip.getAttribute("data-note");
    if (ta.value.toLowerCase().indexOf(note.toLowerCase()) !== -1) return;
    ta.value = ta.value.trim() ? ta.value.trim().replace(/[.,]?$/, "") + ", " + note : note;
    ta.focus();
  });
  $("#sheet-add").addEventListener("click", function () {
    var it = ITEMS[sheet.itemId];
    var notes = $("#sheet-notes").value;
    if (sheet.lineId) { updateLine(sheet.lineId, sheet.qty, notes); toast("Updated"); }
    else { addLine(sheet.itemId, sheet.qty, notes); toast(sheet.qty + " × " + it.name + " added"); }
    closeSheet();
    render();
  });
  $("#sheet-remove").addEventListener("click", function () {
    removeLine(sheet.lineId); closeSheet(); render(); toast("Removed");
  });
  $("#backdrop").addEventListener("click", closeSheet);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && sheet) closeSheet(); });

  // Order (cart) ---------------------------------------------------
  function renderOrder() {
    var root = $("#order");
    root.innerHTML = "";
    if (!state.lines.length) {
      root.appendChild(el("div", { class: "empty-state" }, [
        el("p", { text: "Nothing in your order yet." }),
        el("button", { class: "btn btn-primary", type: "button", text: "Browse the menu", onclick: function () { go("menu"); } })
      ]));
      return;
    }

    var list = el("ul", { class: "lines" });
    state.lines.forEach(function (line) {
      var it = ITEMS[line.itemId];
      var stepper = el("div", { class: "stepper small" }, [
        el("button", { class: "step", type: "button", "aria-label": "Less", text: "−", onclick: function () {
          updateLine(line.id, line.qty - 1, line.notes); render();
        } }),
        el("output", { class: "step-val", text: line.qty }),
        el("button", { class: "step", type: "button", "aria-label": "More", text: "+", onclick: function () {
          updateLine(line.id, line.qty + 1, line.notes); render();
        } })
      ]);
      list.appendChild(el("li", { class: "line" }, [
        el("span", { class: "line-name", text: it.name }),
        el("span", { class: "line-total", text: money(line.qty * it.price) }),
        el("button", {
          class: "line-notes" + (line.notes ? "" : " empty"), type: "button",
          text: line.notes ? "“" + line.notes + "”" : "Add a note",
          onclick: function () { openSheet(line.itemId, line.id); }
        }),
        el("div", { class: "line-ctl" }, [
          stepper,
          el("button", { class: "line-remove", type: "button", text: "Remove", onclick: function () {
            removeLine(line.id); render(); toast("Removed");
          } })
        ])
      ]));
    });
    root.appendChild(list);

    root.appendChild(el("div", { class: "field" }, [
      el("label", { class: "label", for: "order-name", text: "Name for the order" }),
      el("input", { class: "input", id: "order-name", type: "text", autocomplete: "name", placeholder: "So we can call you", value: state.name,
        oninput: function (e) { state.name = e.target.value; save(); } })
    ]));

    root.appendChild(el("div", { class: "summary" }, [
      el("div", { class: "summary-row" }, [el("span", { class: "muted", text: count() + (count() === 1 ? " item" : " items") }), el("span", { class: "muted", text: "Prices include VAT" })]),
      el("div", { class: "summary-row total" }, [el("span", { text: "Total" }), el("span", { text: money(total()) })])
    ]));

    root.appendChild(el("div", { class: "cta" }, [
      el("button", { class: "btn btn-primary", type: "button", onclick: function () { go("pay"); } }, [
        el("span", { text: "Go to payment" }), el("span", { class: "btn-amount", text: money(total()) })
      ]),
      el("button", { class: "btn btn-ghost", type: "button", text: "Add more", style: "margin-top:10px", onclick: function () { go("menu"); } })
    ]));
  }

  // Payment --------------------------------------------------------
  var METHODS = [
    { id: "card-counter", name: "Card at the counter", sub: "Tap or insert when you collect" },
    { id: "cash", name: "Cash", sub: "Pay when you collect" },
    { id: "card-online", name: "Card online", sub: "Visa · Mastercard · CMI" }
  ];

  function renderPay() {
    var root = $("#pay");
    root.innerHTML = "";
    if (!state.lines.length) { go("order"); return; }

    root.appendChild(summaryList(state.lines));

    root.appendChild(el("div", { class: "field" }, [
      el("span", { class: "label", text: "How would you like to pay?" }),
      el("div", { class: "methods" }, METHODS.map(function (m) {
        return el("label", { class: "method" }, [
          el("input", { type: "radio", name: "method", id: "method-" + m.id, value: m.id, checked: state.method === m.id,
            onchange: function () { state.method = m.id; save(); } }),
          el("span", null, [el("span", { text: m.name }), el("br"), el("span", { class: "m-sub", text: m.sub })])
        ]);
      }))
    ]));

    root.appendChild(el("div", { class: "pay-total" }, [
      el("span", { class: "label", text: "Total to pay" }),
      el("span", { class: "amt", html: total() + "<small>" + CURRENCY + "</small>" })
    ]));

    root.appendChild(el("div", { class: "cta" }, [
      el("button", { class: "btn btn-primary", type: "button", onclick: confirmPay }, [
        el("span", { text: "Confirm & pay" }), el("span", { class: "btn-amount", text: money(total()) })
      ])
    ]));
    root.appendChild(el("p", { class: "fineprint", text: "By confirming you place your order with ORA Coffee, Casablanca. All prices in Moroccan dirham." }));
  }

  function summaryList(lines) {
    return el("ul", { class: "pay-lines" }, lines.map(function (line) {
      var it = ITEMS[line.itemId];
      return el("li", { class: "pay-line" }, [
        el("span", { class: "qty", text: line.qty + "×" }),
        el("span", { text: it.name }),
        el("span", { text: money(line.qty * it.price) }),
        line.notes ? el("span", { class: "n", text: line.notes }) : null
      ]);
    }));
  }

  function confirmPay() {
    lastOrder = {
      code: "ORA-" + String(Math.floor(1000 + Math.random() * 9000)),
      lines: state.lines.slice(),
      total: total(),
      name: state.name,
      method: state.method,
      at: new Date()
    };
    // Hook for a real payment provider goes here (e.g. CMI / Stripe checkout).
    state.lines = [];
    save();
    go("done");
  }

  // Done -----------------------------------------------------------
  function renderDone() {
    var root = $("#done");
    root.innerHTML = "";
    var o = lastOrder;
    if (!o) { go("menu"); return; }
    var m = METHODS.find(function (x) { return x.id === o.method; });
    root.appendChild(el("div", { class: "done-mark", "aria-hidden": "true", text: "✓" }));
    root.appendChild(el("h2", { class: "done-title", text: m.id === "card-online" ? "Paid. Thank you" + (o.name ? ", " + o.name : "") + "." : "Order placed" + (o.name ? ", " + o.name : "") + "." }));
    root.appendChild(el("p", { class: "done-no" }, ["Order number", el("span", { class: "done-code", text: o.code })]));
    root.appendChild(el("p", { class: "done-text", text: m.id === "card-online"
      ? "Show this number at the counter and we'll bring your order to you."
      : "Show this number at the counter and pay " + money(o.total) + " by " + m.name.toLowerCase() + "." }));
    root.appendChild(summaryList(o.lines));
    root.appendChild(el("div", { class: "cta" }, [
      el("button", { class: "btn btn-primary", type: "button", text: "Start a new order", onclick: function () { go("menu"); } })
    ]));
  }

  // ---------- Wiring ----------
  $("#orderbar-btn").addEventListener("click", function () { go("order"); });
  document.querySelectorAll("[data-go]").forEach(function (b) {
    b.addEventListener("click", function () { go(b.getAttribute("data-go")); });
  });

  go("menu");
})();
