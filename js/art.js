/* ORA Coffee — illustrated product images.
   Each menu item declares img: { type, tint } and gets an SVG drawing.
   Set item.photo = "img/flat-white.jpg" to use a real photograph instead. */
window.ORA_ART = (function () {
  var INK = "#0a0a0a", KRAFT = "#cfae82", KRAFT_D = "#b8936a", RIM = "#eadcc0", FOAM = "#f4ecdc";

  function sleeve() {
    return '<path d="M33 64 L87 64 L84 86 L36 86 Z" fill="' + KRAFT_D + '"/>' +
      '<text x="60" y="79" font-family="Archivo, Helvetica, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2.5" text-anchor="middle" fill="' + INK + '">ORA</text>';
  }
  function shadow(y, rx) {
    return '<ellipse cx="60" cy="' + y + '" rx="' + rx + '" ry="4" fill="rgba(10,10,10,.10)"/>';
  }
  function latteArt(liquid) {
    return '<path d="M60 34 C56 28 46 31 49 38 C51 42 57 45 60 48 C63 45 69 42 71 38 C74 31 64 28 60 34 Z" fill="' + FOAM + '"/>' +
      '<path d="M60 39 C58 36 53 38 55 41 C56 43 59 44 60 45 C61 44 64 43 65 41 C67 38 62 36 60 39 Z" fill="' + liquid + '" opacity=".55"/>';
  }

  var draw = {
    // short kraft cup, crema on top
    espresso: function (t) {
      return shadow(106, 26) +
        '<path d="M36 50 L84 50 L78 104 Q60 109 42 104 Z" fill="' + KRAFT + '"/>' +
        '<ellipse cx="60" cy="50" rx="24" ry="7" fill="' + RIM + '"/>' +
        '<ellipse cx="60" cy="51" rx="20" ry="5" fill="' + (t.tint || "#5a2d0c") + '"/>' +
        '<ellipse cx="60" cy="50.5" rx="14" ry="3" fill="' + (t.top || "#b8763a") + '" opacity=".9"/>' +
        (t.dot ? '<ellipse cx="60" cy="50.5" rx="6" ry="2.4" fill="' + FOAM + '"/>' : "") +
        '<path d="M39 70 L81 70 L79 86 L41 86 Z" fill="' + KRAFT_D + '"/>' +
        '<text x="60" y="81" font-family="Archivo, Helvetica, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="2" text-anchor="middle" fill="' + INK + '">ORA</text>';
    },
    // tall kraft cup, milk drink with latte art
    hot: function (t) {
      return shadow(110, 28) +
        '<path d="M30 38 L90 38 L82 108 Q60 114 38 108 Z" fill="' + KRAFT + '"/>' +
        '<ellipse cx="60" cy="38" rx="30" ry="9" fill="' + RIM + '"/>' +
        '<ellipse cx="60" cy="39" rx="26" ry="7" fill="' + t.tint + '"/>' +
        (t.art === false ? "" : latteArt(t.tint)) +
        sleeve();
    },
    // clear cup, lid, straw, layered liquid and ice
    iced: function (t) {
      var bottom = t.tint, top = t.top || "#f1e9db";
      return shadow(112, 28) +
        '<path d="M66 4 L59 44" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>' +
        '<defs><clipPath id="cup-' + t.id + '"><path d="M29 36 L91 36 L83 110 Q60 116 37 110 Z"/></clipPath></defs>' +
        '<g clip-path="url(#cup-' + t.id + ')">' +
        '<rect x="20" y="36" width="80" height="80" fill="' + top + '"/>' +
        '<path d="M20 ' + (t.split || 66) + ' Q45 ' + ((t.split || 66) - 8) + ' 60 ' + (t.split || 66) + ' T100 ' + (t.split || 66) + ' L100 120 L20 120 Z" fill="' + bottom + '"/>' +
        (t.bubbles ? '<g fill="rgba(255,255,255,.7)"><circle cx="46" cy="90" r="2"/><circle cx="70" cy="80" r="1.6"/><circle cx="58" cy="100" r="1.4"/><circle cx="76" cy="98" r="2.2"/><circle cx="50" cy="72" r="1.2"/></g>' : "") +
        '<g fill="rgba(255,255,255,.55)" stroke="rgba(255,255,255,.9)" stroke-width="1"><rect x="38" y="46" width="14" height="14" rx="3" transform="rotate(-12 45 53)"/><rect x="60" y="50" width="15" height="15" rx="3" transform="rotate(18 67 57)"/><rect x="48" y="62" width="13" height="13" rx="3" transform="rotate(35 54 68)"/></g>' +
        '</g>' +
        '<path d="M29 36 L91 36 L83 110 Q60 116 37 110 Z" fill="none" stroke="' + INK + '" stroke-width="1.6"/>' +
        '<path d="M26 30 L94 30 L92 38 L28 38 Z" fill="' + FOAM + '" stroke="' + INK + '" stroke-width="1.6" stroke-linejoin="round"/>' +
        '<text x="60" y="98" font-family="Archivo, Helvetica, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="2" text-anchor="middle" fill="' + INK + '" opacity=".75">ORA</text>';
    },
    // V60 dripper on a glass server
    v60: function () {
      return shadow(112, 26) +
        '<path d="M38 66 L82 66 L76 108 Q60 112 44 108 Z" fill="rgba(255,255,255,.5)" stroke="' + INK + '" stroke-width="1.6"/>' +
        '<path d="M46 90 L74 90 L72 108 Q60 112 48 108 Z" fill="#6b3a15"/>' +
        '<path d="M30 30 L90 30 L64 66 L56 66 Z" fill="#f6f1e6" stroke="' + INK + '" stroke-width="1.6" stroke-linejoin="round"/>' +
        '<path d="M36 36 L84 36 L62 62 L58 62 Z" fill="#7d4a20" opacity=".85"/>' +
        '<path d="M26 30 L94 30" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>' +
        '<path d="M60 66 L60 88" stroke="#6b3a15" stroke-width="2" stroke-dasharray="3 3"/>';
    },
    bread: function (t) {
      return shadow(106, 30) +
        '<path d="M30 58 Q30 30 60 30 Q90 30 90 58 L90 100 L30 100 Z" fill="' + (t.tint || "#c58a4a") + '" stroke="' + INK + '" stroke-width="1.6"/>' +
        '<path d="M36 60 Q36 38 60 38 Q84 38 84 60 L84 94 L36 94 Z" fill="' + (t.crumb || "#e2b676") + '"/>' +
        '<g fill="#3a1d0c"><circle cx="48" cy="56" r="3"/><circle cx="66" cy="50" r="2.6"/><circle cx="72" cy="72" r="3"/><circle cx="52" cy="80" r="2.6"/><circle cx="62" cy="66" r="2"/></g>';
    },
    brownie: function () {
      return shadow(108, 30) +
        '<path d="M30 46 L90 46 L90 96 L30 96 Z" fill="#3b1f10" stroke="' + INK + '" stroke-width="1.6"/>' +
        '<path d="M30 46 L90 46 L90 58 L30 58 Z" fill="#6a3a1c"/>' +
        '<path d="M42 50 L56 48 M64 52 L80 49 M48 56 L52 53" stroke="#c9a27a" stroke-width="1.4" stroke-linecap="round"/>';
    },
    cake: function () {
      return shadow(108, 30) +
        '<path d="M30 54 L90 54 L90 98 L30 98 Z" fill="#f0d36a" stroke="' + INK + '" stroke-width="1.6"/>' +
        '<path d="M28 52 Q40 44 52 52 Q64 60 76 52 Q84 47 92 52 L92 60 Q84 66 76 60 Q64 54 52 62 Q40 68 28 60 Z" fill="' + FOAM + '" stroke="' + INK + '" stroke-width="1.4"/>' +
        '<g fill="#d9b83a" opacity=".6"><circle cx="46" cy="76" r="2"/><circle cx="66" cy="84" r="2.4"/><circle cx="78" cy="70" r="1.8"/></g>';
    },
    cookie: function (t) {
      var chips = t.chips || "#3a1d0c";
      return shadow(108, 30) +
        '<circle cx="60" cy="70" r="34" fill="' + (t.tint || "#d9a35e") + '" stroke="' + INK + '" stroke-width="1.6"/>' +
        '<circle cx="60" cy="70" r="27" fill="' + (t.inner || "#e4b676") + '" opacity=".9"/>' +
        '<g fill="' + chips + '"><circle cx="46" cy="60" r="3.4"/><circle cx="70" cy="56" r="3"/><circle cx="76" cy="76" r="3.4"/><circle cx="56" cy="84" r="3"/><circle cx="60" cy="68" r="2.6"/><circle cx="42" cy="78" r="2.6"/></g>' +
        (t.filled ? '<path d="M50 70 Q60 62 70 70" stroke="#a8622a" stroke-width="3" fill="none" stroke-linecap="round"/>' : "");
    },
    water: function (t) {
      return shadow(112, 20) +
        '<path d="M50 18 L70 18 L70 28 Q80 36 80 50 L80 104 Q80 110 74 110 L46 110 Q40 110 40 104 L40 50 Q40 36 50 28 Z" fill="rgba(255,255,255,.55)" stroke="' + INK + '" stroke-width="1.6" stroke-linejoin="round"/>' +
        '<rect x="48" y="12" width="24" height="8" rx="2" fill="' + INK + '"/>' +
        '<path d="M44 62 L76 62 L76 90 L44 90 Z" fill="' + INK + '"/>' +
        '<text x="60" y="80" font-family="Archivo, Helvetica, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="2" text-anchor="middle" fill="#eee7dc">ORA</text>' +
        (t.bubbles ? '<g fill="rgba(10,10,10,.35)"><circle cx="50" cy="44" r="1.6"/><circle cx="62" cy="50" r="1.2"/><circle cx="70" cy="40" r="1.4"/><circle cx="56" cy="100" r="1.4"/><circle cx="66" cy="98" r="1.1"/></g>' : "");
    }
  };

  return function (item) {
    var t = Object.assign({ id: item.id }, item.img || { type: "hot", tint: "#c98a4d" });
    var fn = draw[t.type] || draw.hot;
    return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + item.name + '">' + fn(t) + '</svg>';
  };
})();
