/* ============================================================
   CN THEME RUNTIME — DOM overlay with one versioned native-logo bridge.
   Obfuscated names stay inside the build patch, never in this runtime.
   1) Replaces emoji with clean inline SVG icons (24x24 stroke set)
   2) Restyles the in-game clan leaderboard panel to the CN theme.
   ============================================================ */
(function () {
  "use strict";
  if (window.__cnTheme) return;
  window.__cnTheme = true;

  var ICON_STYLE = "display:inline-block;flex:none;width:1em;height:1em;vertical-align:-0.15em;line-height:0;white-space:nowrap;";

  function svg(inner) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="' + ICON_STYLE + '">' + inner + "</svg>";
  }
  function svgRaw(inner) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" style="' + ICON_STYLE + '">' + inner + "</svg>";
  }

  var ICONS = {
    swords: svg('<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/>'),
    sword: svg('<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/>'),
    user: svg('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    gamepad: svg('<path d="M6 11h4"/><path d="M8 9v4"/><path d="M15.5 12h.01"/><path d="M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>'),
    wrench: svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
    key: svg('<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r="1" fill="currentColor"/>'),
    trophy: svg('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>'),
    scroll: svg('<path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/>'),
    chart: svg('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>'),
    stats: svg('<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/><path d="M2 20h20"/>'),
    // Dove of peace: raised wing, eye, olive sprig held in the beak.
    dove: svg('<path d="M3 14c3.5.5 6.5-.6 8.5-3S15 6 17.5 6.2c1.5.1 2.6 1.1 2.9 2.4l1.6.9-1.7.6C19.8 14.4 16.6 17 12.5 17H9l-4.5 3 1.2-3.6C4.4 15.8 3.5 15 3 14z"/><path d="M10.5 11.5 6 4c3.2-.2 5.9 1.4 7.4 3.9M8.6 8.4c1.6-.1 3.3.4 4.6 1.5"/><path d="M17.6 8.6h.01"/><path d="m20.8 10.2-.9 3.3"/><path d="M20.3 11.8c1 .1 1.8-.4 2.1-1.2-.9-.2-1.8.2-2.1 1.2z"/><path d="M19.9 13.4c-.9.4-1.8.2-2.3-.5.8-.5 1.8-.4 2.3.5z"/>'),
    // Gold (game's 🧈): a CN-palette ingot, not a generic coin.
    gold: svgRaw('<path d="M7 7h10l3.6 12H3.4z" fill="#e8d86b" stroke="#a88d2e" stroke-width="1.4" stroke-linejoin="round"/><path d="M8.2 9.8h7.6" stroke="#fff4bf" stroke-width="1.4" stroke-linecap="round"/>'),
    play: svg('<polygon points="6 3 20 12 6 21 6 3"/>'),
    coins: svg('<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.37 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>'),
    news: svg('<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>'),
    gear: svg('<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>'),
    lock: svg('<rect width="18" height="11" x="3" y="11"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
    link: svg('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
    info: svg('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'),
    trash: svg('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>'),
    eye: svg('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'),
    arrowLeft: svg('<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>'),
    arrowRight: svg('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),
    refresh: svg('<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>'),
    alert: svg('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'),
    square: svg('<rect width="16" height="16" x="4" y="4"/>'),
    clipboard: svg('<rect width="8" height="4" x="8" y="2"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/>'),
    sparkles: svg('<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>'),
    menu: svg('<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>'),
    skull: svg('<circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/>'),
    fire: svg('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'),
    star: svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),
    heart: svg('<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'),
    crown: svg('<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.735H5.81a1 1 0 0 1-.957-.735L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>'),
    shield: svg('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'),
    lightning: svg('<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'),
    clock: svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    hourglass: svg('<path d="M6 3h12"/><path d="M6 21h12"/><path d="M6 3l6 6 6-6"/><path d="M6 21l6-6 6 6"/>'),
    chat: svg('<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>'),
    megaphone: svg('<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>'),
    medal: svg('<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><circle cx="12" cy="17" r="5"/>'),
    globe: svg('<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'),
    bell: svg('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>'),
    report: svg('<path d="M12 3 22 20H2L12 3z"/><path d="M12 10v5"/><path d="M12 17.5h.01"/>'),
    gem: svg('<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>'),
    target: svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
    rocket: svg('<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>'),
    bomb: svg('<circle cx="10" cy="14" r="7"/><path d="m14.5 9.5 5-5"/><path d="M17 4.5 19.5 7"/><path d="M20 2.5 21.5 4"/>'),
    check: svg('<path d="M20 6 9 17l-5-5"/>'),
    cross: svg('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
    radioOn: svgRaw('<circle cx="12" cy="12" r="6.5" fill="#8ff0bb"/>'),
    radioOff: svgRaw('<circle cx="12" cy="12" r="6.5" fill="none" stroke="#8b9bad" stroke-width="2"/>'),
    dotRed: svgRaw('<circle cx="12" cy="12" r="6.5" fill="#ff7d6b"/>'),
    inbox: svg('<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>'),
    ban: svg('<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>'),
    checkOn: svgRaw('<rect x="4" y="4" width="16" height="16" fill="#8ff0bb"/><path d="m8.5 12.5 2.5 2.5 5-5.5" fill="none" stroke="#0a1219" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'),
    checkOff: svgRaw('<rect x="4" y="4" width="16" height="16" fill="none" stroke="#8b9bad" stroke-width="2"/>'),
  };

  /* emoji (base char, VS16 stripped) -> icon name */
  var MAP = {
    "⚔": "swords", "🗡": "sword", "🔧": "wrench", "🛠": "wrench", "🎮": "gamepad", "🏆": "trophy",
    "🔴": "dotRed", "📥": "inbox", "🚫": "ban",
    "📜": "scroll", "📈": "chart", "📊": "stats", "▶": "play", "💰": "coins",
    "📰": "news", "⚙": "gear", "🔒": "lock", "🔗": "link",
    "ℹ": "info", "🗑": "trash", "👁": "eye", "⬅": "arrowLeft",
    "➡": "arrowRight", "🔄": "refresh", "🚨": "alert", "🔲": "square",
    "📋": "clipboard", "✨": "sparkles", "☰": "menu",
    "💀": "skull", "👀": "eye", "🔥": "fire", "⭐": "star",
    "❤": "heart", "👑": "crown", "🛡": "shield", "⚡": "lightning",
    "⏰": "clock", "⌛": "clock", "⏳": "hourglass", "🕐": "clock", "🕒": "clock",
    "◀": "arrowLeft",
    "💬": "chat", "🕊": "dove", "📢": "megaphone", "📣": "megaphone",
    "🏅": "medal", "🎖": "medal", "🥇": "medal", "🥈": "medal", "🥉": "medal",
    "🌍": "globe", "🌏": "globe", "🔔": "bell", "💣": "bomb",
    "💎": "gem", "🎯": "target", "🚀": "rocket",
    "✅": "checkOn", "❌": "cross", "✖": "cross", "✔": "check",
    "⚠": "alert", "🎯": "target", "🌟": "star", "🎉": "sparkles",
    "🟢": "radioOn", "⚪": "radioOff",
    "🧈": "gold",
  };

  /* Button-only emoji remaps（作用域：仅按钮文案，支持后缀区分）——
     提及按钮 💬 → "@"；举报按钮 🚩 → 警告三角；排行菜单按钮 🔑<br> → 奖杯。
     玩家在聊天里打的 emoji 不受影响，仍用全局 MAP / 游戏原生渲染。 */
  var BTN_MAP = [
    { e: "\u{1F4AC}", after: "", icon: "at" },
    { e: "\u{1F6A9}", after: "", icon: "report" },
    // 🔑 账户按钮形态多变（"<br>我的账户" / " 显示帐户" / 独立文本节点），
    // after:"" 兜底覆盖所有形态；🔑 在按钮里没有其他语义。
    { e: "\u{1F511}", after: "", icon: "user" },
  ];
  function btnIcon(base, after) {
    for (var i = 0; i < BTN_MAP.length; i++) {
      var r = BTN_MAP[i];
      if (r.e === base && after.indexOf(r.after) === 0) return r.icon;
    }
    return null;
  }

  var EMOJI_RE = /[\u{1F300}-\u{1F9FF}\u{1FA00}-\u{1FAFF}\u{2190}-\u{21FF}\u{2300}-\u{23FF}\u{25A0}-\u{25FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2139}\u{2630}]\uFE0F?/gu;

  function emojiIcon(ch) {
    var base = ch.replace(/\uFE0F/g, "");
    var name = MAP[base];
    return name ? ICONS[name] : null;
  }

  function replaceInTextNode(node) {
    /* usernames are the player's identity: the game wraps them in
       inline bold spans — never rewrite emoji inside them
       (S4 rank-#1 names get 800, admins get 700 — same skip) */
    var p = node.parentElement;
    // Our own hidden copy of a replaced emoji: never rewrite it again.
    if (p && p.hasAttribute && p.hasAttribute("data-cn-emoji")) return 0;
    // Release credits are identities too: preserve the contributor's full name.
    if (p && p.closest && p.closest('.cn-release-name')) return 0;
    if (p && p.closest && p.closest('.cn-release-signoff')) return 0;
    if (p && (p.style.fontWeight === "bold" || p.style.fontWeight === "700" || p.style.fontWeight === "800")) return 0;
    var inBtn = !!(p && p.closest && p.closest("button"));
    var text = node.nodeValue;
    if (!text || text.length > 2000) return 0;
    EMOJI_RE.lastIndex = 0;
    if (!EMOJI_RE.test(text)) return 0;
    EMOJI_RE.lastIndex = 0;
    var frag = document.createDocumentFragment();
    var last = 0;
    var replaced = 0;
    var m;
    while ((m = EMOJI_RE.exec(text)) !== null) {
      var base = m[0].replace(/\uFE0F/g, "");
      var after = text.slice(m.index + m[0].length);
      // <br> 是元素兄弟而非文本：如 "🔑<br>我的账户" 中 🔑 单独成文本节点，
      // 后面跟着 BR 元素。把该上下文并入 after，否则 after:"<br>" 的映射永远失配。
      if (after === "" && node.nextSibling && node.nextSibling.nodeName === "BR") after = "<br>";
      // Button-only remaps (scoped): 玩家在聊天里打的 emoji 保持原语义不变。
      var btnName = inBtn ? btnIcon(base, after) : null;
      if (btnName === "at") {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var atSpan = document.createElement("span");
        atSpan.style.cssText =
          "display:inline-block;flex:none;line-height:1;vertical-align:-0.12em;" +
          "font-weight:700;font-size:1.25em;";
        atSpan.textContent = "@";
        frag.appendChild(atSpan);
        last = m.index + m[0].length;
        replaced++;
        continue;
      }
      var icon = (btnName && ICONS[btnName]) || emojiIcon(m[0]);
      if (!icon) continue;
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var span = document.createElement("span");
      span.style.cssText = "display:inline-block;flex:none;line-height:0;vertical-align:-0.15em;";
      span.innerHTML = icon;
      // Keep the original emoji as zero-size text so element.textContent is unchanged:
      // the game's own lists toggle "⚪"/"🟢" with textContent.replace().
      var src = document.createElement("span");
      src.setAttribute("data-cn-emoji", "");
      // Out of accessible names too: buttons stay "玩", not "▶ 玩".
      src.setAttribute("aria-hidden", "true");
      src.style.cssText = "display:inline-block;width:0;height:0;overflow:hidden;font-size:0;line-height:0;";
      src.textContent = m[0];
      span.appendChild(src);
      frag.appendChild(span);
      last = m.index + m[0].length;
      replaced++;
    }
    if (!replaced) return 0;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
    return replaced;
  }

  /* ---- clan leaderboard panel CN restyle (inline styles, no hooks) ----
     Idempotent + re-runnable: the game's own row hover handler rewrites
     inline background-color, so we must re-apply on every style mutation
     (observer sees them via attributeFilter). Every write is guarded so
     re-applying is a no-op once values are CN (no observer loop). */
  var styledPanels = [];
  function restyleLeaderboard(panel) {
    if (panel.style.fontFamily !== '"Microsoft YaHei", "Microsoft YaHei UI", sans-serif')
      panel.style.fontFamily = '"Microsoft YaHei", "Microsoft YaHei UI", sans-serif';
    if (panel.style.backgroundColor !== "rgba(13, 18, 25, 0.95)")
      panel.style.backgroundColor = "rgba(13, 18, 25, 0.95)";
    // Snap-to-edge fades the panel below readable opacity — keep it legible.
    if (panel.style.opacity && parseFloat(panel.style.opacity) < 0.9)
      panel.style.opacity = "0.96";
    var all = panel.querySelectorAll("*");
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      var s = el.style;
      if (s.borderBottomWidth && s.borderBottom !== "1px solid rgb(42, 53, 66)")
        s.borderBottom = "1px solid rgba(42, 53, 66, 1)";
      if (s.borderLeftWidth && s.borderLeft !== "1px solid rgb(42, 53, 66)")
        s.borderLeft = "1px solid rgba(42, 53, 66, 1)";
      var bg = s.backgroundColor || "";
      if (/rgba?\(0,\s*120,\s*0/i.test(bg)) s.backgroundColor = "rgba(20, 36, 32, 1)";
      if (/rgba?\(130,\s*130,\s*130/i.test(bg)) s.backgroundColor = "rgba(20, 26, 34, 1)";
      if (/rgba?\(0,\s*0,\s*0/i.test(bg)) s.backgroundColor = "rgba(14, 19, 27, 1)";
      if (/rgba?\(70,\s*70,\s*0/i.test(bg)) s.backgroundColor = "rgba(143, 240, 187, 0.08)";
      if (/rgba?\(230,\s*230,\s*160/i.test(bg)) s.backgroundColor = "rgba(232, 216, 107, 0.12)";
      var tier = cnTierForColor(s.color, s.textShadow, s.background);
      if (tier) restyleTier(el, tier, false);
    }
    if (panel.style.borderLeft !== "1px solid rgb(42, 53, 66)")
      panel.style.borderLeft = "1px solid rgba(42, 53, 66, 1)";
    if (panel.style.borderTop !== "1px solid rgb(42, 53, 66)")
      panel.style.borderTop = "1px solid rgba(42, 53, 66, 1)";
  }

  /* ---- Username colors: chat, lobby player list and leaderboard ----
     The game tiers names via aEH()/up(uq): every chat name span gets
     style.color = tier color (zombies also get a 4-way lightgray outline)
     and the message container carries the tier font-size. We remap tier
     colors to the CN palette, boost leaderboard rank #1 (crown + 800 +
     1.7em), keep the existing [CN] prefix without extra ornaments, and
     preserve Zombie Rank's black fill and white outline. Same idempotent pattern as
     restyleLeaderboard: every write is guarded against its own read-back
     (browsers normalize hex -> rgb, so guards accept both forms). */
  function hexToRgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return "rgb(" + (n >> 16) + ", " + ((n >> 8) & 255) + ", " + (n & 255) + ")";
  }
  function tierRec(rec) {
    return {
      color: rec.cn,
      colorNorm: hexToRgb(rec.cn),
      bold: rec.bold,
      size: rec.size,
      glow: rec.glow,
      glow1: rec.glow1,
      msg: rec.msg,
    };
  }
  /* game tier color (style.color serialization) -> CN target.
     size = name font multiplier relative to the chat base font
     (the container already carries the game's own multiplier);
     0/undefined = keep the game's container sizing. */
  var CN_TIERS = [
    { game: "rgb(170, 170, 170)", cn: "#9aa7b5", size: 0.92, glow1: "0 0 6px rgba(154, 167, 181, 0.2)" },
    { game: "rgb(200, 235, 245)", cn: "#c8dce0", glow1: "0 0 6px rgba(200, 220, 224, 0.2)" },
    { game: "rgb(0, 255, 255)", cn: "#7cc8cf", size: 1.4, glow: "0 0 6px rgba(124, 200, 207, 0.16)", glow1: "0 0 8px rgba(124, 200, 207, 0.28)", msg: "0 0 6px rgba(124, 200, 207, 0.12)" },
    { game: "rgb(255, 255, 0)", cn: "#e8d86b", size: 1.4, glow: "0 0 6px rgba(232, 216, 107, 0.16)", glow1: "0 0 8px rgba(232, 216, 107, 0.28)", msg: "0 0 6px rgba(232, 216, 107, 0.12)" },
    { game: "rgb(255, 0, 0)", cn: "#ff7d6b", bold: "700", size: 1, glow: "0 0 6px rgba(255, 125, 107, 0.16)", glow1: "0 0 8px rgba(255, 125, 107, 0.28)", msg: "0 0 6px rgba(255, 125, 107, 0.12)" },
    { game: "rgb(255, 0, 255)", cn: "#c9a2c8", glow: "0 0 6px rgba(201, 162, 200, 0.16)", glow1: "0 0 8px rgba(201, 162, 200, 0.28)", msg: "0 0 6px rgba(201, 162, 200, 0.12)" },
    { game: "rgb(0, 255, 0)", cn: "#8ff0bb", size: 1.4, glow1: "0 0 8px rgba(143, 240, 187, 0.28)", msg: "0 0 6px rgba(143, 240, 187, 0.12)" },
    { game: "rgb(255, 150, 0)", cn: "#eab681", size: 1.4, glow1: "0 0 8px rgba(234, 182, 129, 0.28)", msg: "0 0 6px rgba(234, 182, 129, 0.12)" },
    { game: "rgb(255, 255, 140)", cn: "#e6d49f", size: 1.4, glow1: "0 0 8px rgba(230, 212, 159, 0.28)", msg: "0 0 6px rgba(230, 212, 159, 0.12)" },
  ];
  var CN_TIER_BY_COLOR = {};
  for (var ti = 0; ti < CN_TIERS.length; ti++) {
    var trec = CN_TIERS[ti];
    var tval = tierRec(trec);
    CN_TIER_BY_COLOR[trec.game] = tval;
    CN_TIER_BY_COLOR[trec.cn] = tval;
    // 浏览器把写入的 hex 序列化为 rgb——重绘后也要能识别回同档
    CN_TIER_BY_COLOR[tval.colorNorm] = tval;
  }
  var CN_TIER_ZOMBIE = {
    zombie: 1,
    size: 1.4,
    color: "#000000",
    colorNorm: hexToRgb("#000000"),
    // CSSOM's canonical form avoids repeated observer writes. Zombie Rank's
    // unique identity is black fill with a white outline, never a tier hue.
    outline: "rgb(255, 255, 255) -1px -1px 0px, rgb(255, 255, 255) 1px -1px 0px, rgb(255, 255, 255) -1px 1px 0px, rgb(255, 255, 255) 1px 1px 0px",
  };
  // Recover the previous CN solid variant, but never classify plain black text
  // as Zombie Rank: black only belongs to this tier when outlined.
  CN_TIER_BY_COLOR["#afc8ba"] = CN_TIER_ZOMBIE;
  CN_TIER_BY_COLOR["rgb(175, 200, 186)"] = CN_TIER_ZOMBIE;
  function cnTierForColor(color, textShadow, background) {
    if (!color) return null;
    var t = CN_TIER_BY_COLOR[color];
    if (t) return t;
    // Recognize both upstream lightgray and CN white outlines after CSSOM
    // serialization, including redraws that restore the upstream style.
    if ((color === "rgb(0, 0, 0)" || color === "black" || color === "#000000") && /lightgray|white|rgb\((?:211,\s*211,\s*211|255,\s*255,\s*255)\)/.test(textShadow || "")) return CN_TIER_ZOMBIE;
    if (color === "transparent" && /linear-gradient\(120deg,\s*(?:#c8f0a0|rgb\(200,\s*240,\s*160\))/.test(background || "")) return CN_TIER_ZOMBIE;
    return null;
  }
  function isChatNameSpan(el) {
    if (!el || el.nodeType !== 1 || el.tagName !== "SPAN") return false;
    var s = el.style;
    // margin 浏览器序列化为 "0px"（不是 "0"）——两种都要认
    return s.display === "inline-block" && s.minWidth === "1em" && (s.margin === "0" || s.margin === "0px") &&
      (s.font === "inherit" || s.fontFamily === "inherit") && s.cursor === "pointer";
  }
  function isLobbyNameSpan(el) {
    if (!el || el.nodeType !== 1 || el.tagName !== "SPAN") return false;
    var s = el.style;
    // The game's fixed-width player tiles are a different shape from chat
    // names. Keep this contract explicit; build and browser gates check it.
    return s.display === "inline-block" && (s.width === "9em" || s.width === "10em") && s.maxWidth === s.width &&
      s.height === "1.4em" && s.maxHeight === "1.4em" && (s.margin === "0.2em" || s.margin === "0.2em 0.2em 0.2em 0.2em") &&
      s.whiteSpace === "nowrap" && s.overflow === "hidden" && s.textOverflow === "ellipsis" &&
      (s.font === "inherit" || s.fontFamily === "inherit") && s.cursor === "pointer";
  }
  function isGameNameSpan(el) {
    return isChatNameSpan(el) || isLobbyNameSpan(el);
  }
  var reportedLobbyNameDrift = false;
  function warnLobbyNameDrift(el) {
    if (reportedLobbyNameDrift || !el || el.tagName !== "SPAN") return;
    var s = el.style;
    if (s.cursor !== "pointer" || s.textOverflow !== "ellipsis" || !cnTierForColor(s.color, s.textShadow, s.background)) return;
    if (isLobbyNameSpan(el)) return;
    reportedLobbyNameDrift = true;
    console.warn("[CN theme][WARN] 玩家列表姓名结构已变化，颜色未覆盖；按 UPDATE.md 核对宽高/省略样式并修复 isLobbyNameSpan，禁止忽略此警告。");
  }
  function containerRatio(el) {
    var fs = el && el.style ? el.style.fontSize : "";
    var n = parseFloat(fs);
    return isNaN(n) || n <= 0 ? 1 : n;
  }
  function restyleTier(el, tier, isRankOne) {
    var s = el.style;
    if (tier.zombie) {
      // Keep the original outlined identity while cleaning up old CN effects.
      if ((s.backgroundImage || s.background || "").indexOf("linear-gradient") !== -1) s.background = "";
      if (s.webkitBackgroundClip === "text") s.webkitBackgroundClip = "";
      if (s.backgroundClip === "text") s.backgroundClip = "";
      if ((s.animation || "").indexOf("cnNameBreath") !== -1) s.animation = "";
    }
    if (s.color !== tier.color && s.color !== tier.colorNorm) s.color = tier.color;
    var glow = tier.outline || (isRankOne && tier.glow1 ? tier.glow1 : tier.glow);
    if (glow && s.textShadow !== glow) s.textShadow = glow;
  }
  function ensureCrown(span) {
    if (span.querySelector('span[data-cn-crown]')) return;
    var crown = document.createElement("span");
    crown.setAttribute("data-cn-crown", "1");
    crown.style.cssText = "display:inline-block;flex:none;width:1.05em;height:1.05em;vertical-align:-0.12em;margin-right:2px;";
    crown.innerHTML = ICONS.crown;
    span.insertBefore(crown, span.firstChild);
  }
  function boostRankOneMessage(span, tier) {
    var container = span.parentElement;
    if (!container) return;
    var ratio = containerRatio(container);
    var fs = (1.15 / ratio).toFixed(2) + "em";
    for (var i = 0; i < container.children.length; i++) {
      var child = container.children[i];
      if (child === span || isChatNameSpan(child)) continue;
      if (!child.style || (child.style.font !== "inherit" && child.style.fontFamily !== "inherit")) continue;
      if (child.style.fontSize !== fs) child.style.fontSize = fs;
      if (child.style.fontWeight !== "600") child.style.fontWeight = "600";
      if (tier.msg && child.style.textShadow !== tier.msg) child.style.textShadow = tier.msg;
    }
  }
  function restyleNames(span) {
    if (!isGameNameSpan(span)) return;
    var s = span.style;
    var tier = cnTierForColor(s.color, s.textShadow, s.background);
    if (!tier) return;
    // Lobby tiles use the same palette without chat's sizing, crown or message
    // boosts. Preserve tile geometry and the existing online/status icons.
    if (isLobbyNameSpan(span)) { restyleTier(span, tier, false); return; }
    var isRankOne = s.fontWeight === "bold" || s.fontWeight === "800";
    restyleTier(span, tier, isRankOne);
    var ratio = containerRatio(span.parentElement);
    var target = isRankOne ? 1.7 : tier.size;
    if (target > 0) {
      var fs = (target / ratio).toFixed(2) + "em";
      if (s.fontSize !== fs) s.fontSize = fs;
    }
    var weight = isRankOne ? "800" : tier.bold;
    if (weight && s.fontWeight !== weight) s.fontWeight = weight;
    if (isRankOne) {
      ensureCrown(span);
      boostRankOneMessage(span, tier);
    }
  }
  function maybeGameNames(node, out) {
    if (!node || node.nodeType !== 1) return;
    if (isGameNameSpan(node)) { out.push(node); return; }
    warnLobbyNameDrift(node);
    for (var i = 0; i < node.children.length; i++) maybeGameNames(node.children[i], out);
  }

  function findLeaderboardPanel() {
    var els = document.querySelectorAll("div");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (styledPanels.indexOf(el) !== -1) continue;
      var txt = el.textContent || "";
      if (txt.indexOf("排行") !== -1 && txt.indexOf("氏族") !== -1 && txt.indexOf("等级") !== -1 && txt.indexOf("领导者") !== -1) {
        styledPanels.push(el);
        restyleLeaderboard(el);
      }
    }
  }

  function maybePanel(node, out) {
    if (!node || node.nodeType !== 1) return;
    for (var i = 0; i < styledPanels.length; i++) {
      var p = styledPanels[i];
      if (!p.isConnected) { styledPanels.splice(i, 1); i--; continue; }
      if (p.contains(node)) { out.push(p); return; }
    }
  }

  function collectTextNodes(root, out) {
    if (root.nodeType === 3) { out.push(root); return; }
    if (root.nodeType !== 1) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = walker.nextNode())) out.push(n);
  }

  function processNodes(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.parentNode && n.nodeValue && n.nodeValue.length) {
        try { replaceInTextNode(n); } catch (_) {}
      }
    }
  }

  var lastLbCheck = 0;
  function leaderboardTick() {
    var now = Date.now();
    if (now - lastLbCheck < 400) return;
    lastLbCheck = now;
    findLeaderboardPanel();
  }

  /* Synchronous processing: the observer callback runs as a microtask
     before the next paint, so emoji swap on live-updating lists
     (lobby players joining/leaving) is invisible to the eye.
     Style mutations (the game's hover lighten on leaderboard rows) are
     answered by re-applying the CN restyle — idempotent, no loop. */
  function handleMutations(records) {
    var nodes = [];
    var panels = [];
    var names = [];
    for (var i = 0; i < records.length; i++) {
      var r = records[i];
      if (r.type === "characterData") {
        nodes.push(r.target);
        maybeGameNames(r.target.parentElement, names);
      } else if (r.type === "attributes") {
        if (r.attributeName === "style") {
          maybePanel(r.target, panels);
          maybeGameNames(r.target, names);
        }
      } else {
        var added = r.addedNodes;
        for (var j = 0; j < added.length; j++) {
          collectTextNodes(added[j], nodes);
          maybePanel(added[j], panels);
          maybeGameNames(added[j], names);
        }
      }
    }
    processNodes(Array.from(new Set(nodes)));
    Array.from(new Set(panels)).forEach(restyleLeaderboard);
    Array.from(new Set(names)).forEach(restyleNames);
    leaderboardTick();
    lobbyTick();
    updateTermBg();
    syncLoadingState();
    var bodyBg = document.body.style.backgroundImage;
    if (bodyBg && bodyBg !== "none") {
      var tb = document.getElementById("cn-term-bg");
      if (tb) tb.remove();
    } else if (!document.getElementById("cn-term-bg")) {
      injectTermBg();
    }
  }

  function start() {
    new MutationObserver(handleMutations).observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["style", "data-cn-state"],
    });
    var nodes = [];
    collectTextNodes(document.body, nodes);
    processNodes(nodes);
    findLeaderboardPanel();
    lobbyTick();
    var names = [];
    maybeGameNames(document.body, names);
    for (var i = 0; i < names.length; i++) restyleNames(names[i]);
  }

  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);

  /* ---- default backdrop: native game draw owns logo geometry ----
     No viewport/menu formula, separate image request or second logo renderer.
     The patch passes the actual canvas assets and three native draw rectangles. */
  var logoReady = false, logoKey = "", logoSource = null;
  var logoWarning = "", logoWait = null, logoNative = null, logoFrame = 0, logoObserver = null;
  function logoFail(reason) {
    logoReady = false;
    logoKey = "";
    var tb = document.getElementById("cn-term-bg");
    if (tb) { tb.style.opacity = "0"; tb.setAttribute("data-cn-logo-mask", "unavailable"); }
    if (logoWarning !== reason) {
      logoWarning = reason;
      console.warn("[CN logo][WARN] " + reason + "；已撤掉背景遮挡，保留游戏原始 Logo。维护者请按 UPDATE.md 检查主页绘制钩子。");
    }
  }
  function updateTermBg() {
    var tb = document.getElementById("cn-term-bg");
    if (!tb) return;
    var onMenu = !!document.querySelector(
      'button[style*="rgba(0, 70, 0, 0.85)"], button[style*="rgba(50, 120, 50, 0.85)"]'
    );
    var opacity = onMenu && logoReady ? "1" : "0";
    if (tb.style.opacity !== opacity) tb.style.opacity = opacity;
    if (onMenu && !logoReady && !logoWait) {
      logoWait = setTimeout(function () {
        logoWait = null;
        if (!logoReady && document.getElementById("cn-term-bg") && document.querySelector(
          'button[style*="rgba(0, 70, 0, 0.85)"], button[style*="rgba(50, 120, 50, 0.85)"]'
        )) logoFail("主页 Logo 绘制钩子未就绪");
      }, 2500);
    }
  }
  function renderLogoMask(protocol, canvas, title, icon, rects) {
    var tb = document.getElementById("cn-term-bg");
    if (!tb) return;
    try {
      if (protocol !== "cn-menu-logo-v1" || !canvas || canvas.id !== "canvasA" ||
          !title || !icon || !(title.width > 0 && title.height > 0 && icon.width > 0 && icon.height > 0) ||
          !Array.isArray(rects) || rects.length !== 3 || rects.some(function (r) {
            return !Array.isArray(r) || r.length !== 4 || !r.every(Number.isFinite) || r[2] <= 0 || r[3] <= 0 ||
              r[0] < -1 || r[1] < -1 || r[0] + r[2] > canvas.width + 1 || r[1] + r[3] > canvas.height + 1;
          })) throw new Error("主页 Logo 绘制协议/矩形已变化");
      if (!CSS.supports("mask-image", "linear-gradient(white,white)") &&
          !CSS.supports("-webkit-mask-image", "linear-gradient(white,white)")) throw new Error("浏览器不支持主页背景蒙版");
      var bounds = canvas.getBoundingClientRect();
      var W = window.innerWidth, H = window.innerHeight;
      if (!(bounds.width > 0 && bounds.height > 0 && canvas.width > 0 && canvas.height > 0)) throw new Error("主页画布尺寸无效");
      var key = JSON.stringify([W, H, bounds.x, bounds.y, bounds.width, bounds.height, canvas.width, canvas.height, rects]);
      if (logoReady && key === logoKey && logoSource === title) return;
      var mask = document.createElement("canvas");
      mask.width = W; mask.height = H;
      var ctx = mask.getContext("2d");
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, W, H);
      var sx = bounds.width / canvas.width, sy = bounds.height / canvas.height;
      // Native assets already have the game's white-key/alpha conversion.
      [title, icon, icon].forEach(function (img, i) {
        var r = rects[i];
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        ctx.drawImage(img, bounds.x + r[0] * sx, bounds.y + r[1] * sy, r[2] * sx, r[3] * sy);
        ctx.restore();
      });
      var url = mask.toDataURL("image/png");
      tb.style.maskImage = tb.style.webkitMaskImage = "url(" + url + ")";
      tb.style.maskRepeat = tb.style.webkitMaskRepeat = "no-repeat";
      tb.style.maskSize = tb.style.webkitMaskSize = "100% 100%";
      tb.setAttribute("data-cn-logo-mask", "ready");
      logoKey = key; logoSource = title; logoReady = true; logoWarning = "";
      if (logoWait) { clearTimeout(logoWait); logoWait = null; }
      updateTermBg();
    } catch (error) { logoFail(error.message || "主页背景蒙版生成失败"); }
  }
  function scheduleLogoMask() {
    if (logoFrame || !logoNative) return;
    logoFrame = requestAnimationFrame(function () {
      logoFrame = 0;
      if (logoNative.canvas && (logoNative.width !== logoNative.canvas.width || logoNative.height !== logoNative.canvas.height)) {
        logoReady = false; logoKey = ""; updateTermBg();
        return; // Wait for the game's fresh draw, not stale rectangles.
      }
      renderLogoMask(logoNative.protocol, logoNative.canvas, logoNative.title, logoNative.icon, logoNative.rects);
    });
  }
  window.__cnThemeLogo = function (protocol, canvas, title, icon, rects) {
    logoNative = { protocol: protocol, canvas: canvas, title: title, icon: icon, rects: rects, width: canvas && canvas.width, height: canvas && canvas.height };
    if (!logoObserver && canvas && canvas.nodeType === 1 && typeof ResizeObserver !== "undefined") {
      logoObserver = new ResizeObserver(function () { invalidateLogoMask(); scheduleLogoMask(); });
      logoObserver.observe(canvas);
    }
    scheduleLogoMask();
  };
  function invalidateLogoMask() {
    logoReady = false; logoKey = "";
    updateTermBg();
    scheduleLogoMask();
  }
  function injectTermBg() {
    if (document.getElementById("cn-term-bg")) return;
    var hasCustom = false;
    try { hasCustom = !!localStorage.getItem("fx_custom_bg_data"); } catch (_) {}
    if (!hasCustom && window.__fx && __fx.settings && __fx.settings.customBackgroundUrl) hasCustom = true;
    if (hasCustom) return;
    var div = document.createElement("div");
    div.id = "cn-term-bg";
    div.style.cssText =
      "background:" +
      "radial-gradient(ellipse 120% 70% at 50% 0%,rgba(120,200,255,0.05),transparent 55%)," +
      "repeating-linear-gradient(0deg,rgba(143,240,187,0.05) 0 1px,transparent 1px 48px)," +
      "repeating-linear-gradient(90deg,rgba(143,240,187,0.05) 0 1px,transparent 1px 48px)," +
      "repeating-linear-gradient(0deg,rgba(143,240,187,0.025) 0 1px,transparent 1px 6px)," +
      "repeating-linear-gradient(90deg,rgba(143,240,187,0.025) 0 1px,transparent 1px 6px)," +
      "linear-gradient(180deg,#0b1017,#0e141c 45%,#080c12);";
    document.body.insertBefore(div, document.body.firstChild);
    logoReady = false; logoKey = "";
    updateTermBg();
  }
  window.addEventListener("resize", invalidateLogoMask);
  if (window.visualViewport) window.visualViewport.addEventListener("resize", invalidateLogoMask);
  injectTermBg();

  /* ---- DOM loading overlay (replaces the canvas Loading screen) ----
     Mirrors the welcome animation (boot.js): black backdrop, terminal
     lines with typewriter + blinking cursor, back arrow at top-left
     (pointer-events pass through to the game's canvas back area).
     Visibility driven by the game state synced to body[data-cn-state]
     (state 6 = Loading). */
  var cnLoad = null, cnLoadLog = null, cnLoadTimer = null, cnLoadDots = 0;
  function loadingTick() {
    cnLoadDots = (cnLoadDots % 4) + 1;
    var txt = "加载中" + ".".repeat(cnLoadDots);
    cnLoadLog.innerHTML =
      txt + '<span style="display:inline-block;width:10px;height:1em;background:#8ff0bb;vertical-align:bottom;animation:cnLoadBlink .5s infinite;"></span>';
  }
  function showLoadingOverlay() {
    if (!cnLoad) {
      if (!document.getElementById("cn-load-css")) {
        var st = document.createElement("style");
        st.id = "cn-load-css";
        st.textContent =
          "@keyframes cnLoadBlink{0%,100%{opacity:1;}50%{opacity:0;}}" +
          "@keyframes cnLoadFlicker{0%,100%{opacity:1;}96%{opacity:1;}97%{opacity:.86;}98%{opacity:.97;}99%{opacity:.93;}}";
        document.head.appendChild(st);
      }
      cnLoad = document.createElement("div");
      cnLoad.id = "cn-loading-overlay";
      cnLoad.style.cssText =
        "position:fixed;inset:0;background:#000;z-index:2147483000;pointer-events:none;" +
        "display:flex;align-items:center;justify-content:center;";
      var crt = document.createElement("div");
      crt.style.cssText =
        "position:absolute;inset:0;pointer-events:none;z-index:3;" +
        "background:repeating-linear-gradient(0deg,rgba(0,0,0,.24) 0 1px,transparent 1px 3px)," +
        "radial-gradient(ellipse at center,rgba(0,0,0,0) 52%,rgba(0,0,0,.55) 100%);";
      cnLoad.appendChild(crt);
      var box = document.createElement("div");
      box.style.cssText =
        "width:min(780px,96vw);padding:30px 40px 36px;background:#0a0f16;" +
        "border:1px solid rgba(143,240,187,0.45);box-shadow:0 0 24px rgba(143,240,187,0.12);" +
        "animation:cnLoadFlicker 4.5s infinite;";
      var head = document.createElement("div");
      head.style.cssText =
        "display:flex;align-items:center;gap:8px;padding-bottom:10px;margin-bottom:12px;" +
        "border-bottom:1px solid #2a3542;font-size:12px;letter-spacing:2px;color:#8b9bad;";
      head.innerHTML =
        '<span style="display:inline-block;width:8px;height:8px;background:#8ff0bb;border-radius:50%;animation:cnLoadBlink 1s infinite;"></span>CN TERMINAL';
      box.appendChild(head);
      cnLoadLog = document.createElement("div");
      cnLoadLog.style.cssText =
        "font-size:20px;color:#8ff0bb;font-family:Consolas,'Microsoft YaHei UI',monospace;letter-spacing:1px;" +
        "text-shadow:0 0 8px rgba(143,240,187,.5),0 0 2px rgba(143,240,187,.9);";
      box.appendChild(cnLoadLog);
      cnLoad.appendChild(box);
      var back = document.createElement("div");
      back.style.cssText =
        "position:fixed;left:18px;top:18px;width:26px;height:26px;" +
        "border-left:3px solid rgba(143,240,187,.85);border-bottom:3px solid rgba(143,240,187,.85);" +
        "transform:rotate(45deg);box-shadow:0 0 8px rgba(143,240,187,.5);";
      cnLoad.appendChild(back);
      document.body.appendChild(cnLoad);
    }
    if (cnLoad.style.display !== "flex") cnLoad.style.display = "flex";
    if (!cnLoadTimer) {
      cnLoadLog.textContent = "";
      cnLoadDots = 0;
      cnLoadTimer = setInterval(loadingTick, 350);
    }
  }
  function hideLoadingOverlay() {
    if (!cnLoad) return;
    if (cnLoad.style.display !== "none") cnLoad.style.display = "none";
    if (cnLoadTimer) {
      clearInterval(cnLoadTimer);
      cnLoadTimer = null;
    }
  }
  function syncLoadingState() {
    var st = document.body.getAttribute("data-cn-state");
    if (st === "6") showLoadingOverlay();
    else hideLoadingOverlay();
  }

  /* ---- Linear progress feel (low-cost) ----
     The game writes its progress fill width directly (0% -> 48% -> 100% jumps).
     Two cheap layers make it feel linear:
       1. CSS transition on the game's green progress fills (width .45s linear)
          — pure CSS, GPU-cheap, retargets smoothly on every game update.
       2. One throttled rAF loop mirrors the *rendered* (already-smoothed)
          width into the % span, so the text and the bar move together.
     The loop early-exits when no bar exists, so cost is ~zero outside
     loading screens. */
  (function smoothProgress() {
    var st = document.createElement("style");
    st.id = "cn-progress-css";
    st.textContent =
      'div[style*="rgba(0, 200, 0, 0.5)"]{transition:width .45s linear !important;}';
    document.head.appendChild(st);

    var last = 0, cached = null, cachedAt = 0;
    var raf = function (ts) {
      requestAnimationFrame(raf);
      if (ts - last < 32) return; // ~30fps：进度条无需 60fps
      last = ts;
      var bars;
      if (cached && ts - cachedAt < 900) bars = cached;
      else {
        bars = document.querySelectorAll('div[style*="rgba(0, 200, 0, 0.5)"]');
        cached = bars; cachedAt = ts;
      }
      if (!bars.length) return;
      for (var i = 0; i < bars.length; i++) {
        var fill = bars[i], outer = fill.parentElement;
        if (!outer) continue;
        var span = outer.querySelector("span");
        if (!span) continue;
        var w = fill.getBoundingClientRect().width;
        var ow = outer.getBoundingClientRect().width;
        if (ow <= 0) continue;
        var txt = (w / ow * 100).toFixed(1) + "%";
        if (span.textContent !== txt) span.textContent = txt;
      }
    };
    requestAnimationFrame(raf);
  })();

  /* ---- 大厅嵌入式 CN 聊天（玩家 tab 右侧 CN 子 tab + 覆盖聊天窗） ----
     游戏大厅底部的 tab 栏（聊天/玩家）是游戏自有 DOM。本模块在「玩家」按钮
     右侧注入冰蓝色「CN」按钮，点击后把轻量聊天窗覆盖在玩家列表区域上方
     （fixed 定位，底边贴住 tab 栏顶——绝不挡住 tab 栏，随时能点回「玩家」）。
     幂等 + 可重跑：进出大厅 tab 栏会被重建，lobbyTick() 每次重扫重注入。
     只在自己打开时才轮询（5s），关闭或离开大厅立即停表。 */
  var LOBBY_POLL_MS = 5000;
  var lobby = {
    bar: null,       // tab 栏容器（white-space:nowrap）
    btn: null,       // 注入的 CN tab 按钮（玩家右侧）
    overlay: null,   // CN 聊天窗
    open: false,
    ok: false,       // 已登录
    rooms: [],
    roomId: null,
    timer: null,
  };
  var lastLobbyCheck = 0;

  function lobbyEsc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function lobbyLsGet(k) {
    try { return localStorage.getItem(k); } catch (_) { return null; }
  }
  function lobbyLsSet(k, v) {
    try { localStorage.setItem(k, v); } catch (_) {}
  }
  function isLobbyTabBar(el) {
    if (!el || el.nodeType !== 1 || el.tagName !== "DIV") return false;
    var ct = el.style && el.style.cssText ? el.style.cssText : "";
    if (ct.indexOf("white-space: nowrap") === -1 && ct.indexOf("white-space:nowrap") === -1) return false;
    // 游戏新版把 tab 按钮包进 <div style="max-height:100%;height:100%">——按钮不是直接子元素，
    // 必须数后代 button（直接子元素只有 wrapper div，旧逻辑永远 n=0）
    var btns = el.querySelectorAll ? el.querySelectorAll("button") : [];
    return btns.length >= 2;
  }
  /* 「玩家」按钮 → 向上最多 3 层找 tab 栏（游戏可能包一层 wrapper） */
  function lobbyBarFromButton(btn) {
    if (!btn || btn.nodeType !== 1 || btn.tagName !== "BUTTON") return null;
    var txt = btn.textContent || "";
    if (txt.indexOf("玩家") === -1 && txt.indexOf("Players") === -1) return null;
    var p = btn.parentElement;
    for (var i = 0; i < 3 && p && p.nodeType === 1; i++) {
      if (isLobbyTabBar(p)) return p;
      p = p.parentElement;
    }
    return null;
  }
  function findLobbyTab() {
    var btns = document.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      if (b.getAttribute && b.getAttribute("data-cn-lobby-chat")) continue;
      var bar = lobbyBarFromButton(b);
      if (bar) return { bar: bar, playersBtn: b };
    }
    return null;
  }
  function stopLobbyPoll() {
    if (lobby.timer) {
      clearInterval(lobby.timer);
      lobby.timer = null;
    }
  }
  function closeLobbyChat() {
    lobby.open = false;
    stopLobbyPoll();
    if (lobby.overlay) lobby.overlay.style.display = "none";
  }
  function toggleLobbyChat() {
    if (lobby.open) closeLobbyChat();
    else openLobbyChat();
  }
  /* CN 按钮插在「玩家」按钮右侧（tab 栏不变：点「聊天」还是原版聊天，点 CN 才开 CN 聊天窗）。
     幂等：已插入不重复；游戏重渲染替换 tab 栏后重新插入。 */
  function ensureLobbyTab() {
    if (!lobby) return;
    var found = findLobbyTab();
    if (!found) {
      // 没找到「玩家」按钮：若已插入的 CN 按钮还在页面里，保持现状
      if (lobby.btn && lobby.bar &&
          lobby.bar.isConnected !== false && lobby.btn.isConnected !== false) {
        return;
      }
      if (lobby.open) closeLobbyChat();
      lobby.bar = null;
      lobby.btn = null;
      return;
    }
    var bar = found.bar;
    var playersBtn = found.playersBtn;
    var btn = bar.querySelector("button[data-cn-lobby-chat]");
    if (!btn) {
      btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("data-cn-lobby-chat", "1");
      btn.setAttribute("title", "CN 聊天");
      var ps = playersBtn.style;
      btn.style.cssText =
        "flex:none;white-space:nowrap;cursor:pointer;font-family:inherit;" +
        "height:" + (ps.height || "100%") + ";" +
        "font-size:" + (ps.fontSize || "inherit") + ";" +
        "margin-left:4px;padding:0 .6em;background:rgba(124, 200, 255, 0.25);" +
        "color:#7cc8ff;border:1px solid rgba(124, 200, 255, 0.45);" +
        "border-radius:4px;font-weight:700;";
      btn.textContent = "CN";
      btn.onclick = function (e) {
        if (e && e.stopPropagation) e.stopPropagation();
        if (e && e.preventDefault) e.preventDefault();
        toggleLobbyChat();
      };
      // wrapper 容器（max-height:100%;height:100%）原为 block：按钮百分比宽度已占满 100%，
      // 插入 CN 按钮会横向溢出。把 wrapper 设为 flex，CN 按钮 flex:none 自然宽度，
      // 聊天/玩家按钮 flex-shrink 自动让位。
      var wrap = playersBtn.parentNode;
      var wd = wrap && wrap.style ? wrap.style.display : null;
      if (wrap && wrap.style && wd !== "flex" && wd !== "inline-flex") {
        wrap.style.display = "flex";
      }
      playersBtn.parentNode.insertBefore(btn, playersBtn.nextSibling);
    }
    lobby.bar = bar;
    lobby.btn = btn;
  }
  /* 点「聊天/玩家」等 tab → 关闭 CN 聊天窗（原版 tab 行为不受影响） */
  function lobbyDocClick(e) {
    if (!lobby || !lobby.open) return;
    var t = e && e.target;
    if (!t || !t.closest) return;
    if (t.closest("#cn-lobby-chat") || t.closest("[data-cn-lobby-chat]")) return;
    var bar = t.closest('div[style*="white-space: nowrap"]');
    if (bar && isLobbyTabBar(bar)) closeLobbyChat();
  }
  document.addEventListener("click", lobbyDocClick);

  function lobbyChatNotice(txt) {
    var st = lobby.overlay && lobby.overlay.querySelector("[data-cn-lobby-state]");
    if (st) st.textContent = txt;
    var list = lobby.overlay && lobby.overlay.querySelector("[data-cn-lobby-msgs]");
    if (list) { list._cnMessagesHtml = null; list.innerHTML = '<div style="color:#8b9bad;font-size:12px;padding:16px 0;text-align:center;">' + lobbyEsc(txt) + "</div>"; }
  }
  function positionLobbyOverlay() {
    var ov = lobby.overlay;
    if (!ov || !lobby.bar) return;
    var r = lobby.bar.getBoundingClientRect();
    var W = window.innerWidth || 0, H = window.innerHeight || 0;
    var top = r && typeof r.bottom === "number" ? r.bottom : 0;
    var left = r && typeof r.left === "number" ? r.left : 0;
    var right = r && typeof r.right === "number" ? r.right : W;
    ov.style.left = Math.max(0, left) + "px";
    ov.style.width = Math.max(0, (right || W) - left) + "px";
    ov.style.top = Math.max(0, top) + "px";
    ov.style.bottom = "auto";
    // 盖住 tab 栏下方的游戏聊天内容区（输入框一带留给游戏）
    ov.style.height = "min(420px," + Math.max(160, H - top - 80) + "px)";
  }
  function ensureOverlay() {
    if (lobby.overlay) return;
    var ov = document.createElement("div");
    ov.id = "cn-lobby-chat";
    ov.style.cssText =
      "position:fixed;display:none;z-index:2147482800;flex-direction:column;" +
      "background:rgba(16, 22, 29, 0.97);border:1px solid rgba(124, 200, 255, 0.35);" +
      "border-top:none;box-shadow:0 8px 24px rgba(0,0,0,0.5);" +
      "font-family:'Microsoft YaHei','Microsoft YaHei UI',sans-serif;";
    var head = document.createElement("div");
    head.style.cssText = "flex:none;display:flex;align-items:center;gap:8px;padding:6px 10px;border-bottom:1px solid #2a3542;background:rgba(13,18,25,0.95);";
    var label = document.createElement("span");
    label.style.cssText = "color:#7cc8ff;font-size:12px;font-weight:700;letter-spacing:1px;";
    label.textContent = "CN 聊天";
    head.appendChild(label);
    var sel = document.createElement("select");
    sel.setAttribute("data-cn-lobby-room", "1");
    sel.style.cssText = "flex:1;min-width:0;background:#0c1219;color:#c8d3dc;border:1px solid #2a3542;border-radius:4px;font-size:12px;padding:2px 4px;";
    head.appendChild(sel);
    var st = document.createElement("span");
    st.setAttribute("data-cn-lobby-state", "1");
    st.style.cssText = "color:#8b9bad;font-size:11px;";
    st.textContent = "—";
    head.appendChild(st);
    ov.appendChild(head);
    var list = document.createElement("div");
    list.setAttribute("data-cn-lobby-msgs", "1");
    list.style.cssText = "flex:1;min-height:0;overflow-y:auto;padding:8px 10px;";
    ov.appendChild(list);
    var row = document.createElement("div");
    row.style.cssText = "flex:none;display:flex;gap:6px;padding:8px 10px;border-top:1px solid #2a3542;background:rgba(13,18,25,0.95);";
    var input = document.createElement("input");
    input.setAttribute("data-cn-lobby-input", "1");
    input.setAttribute("maxlength", "500");
    input.placeholder = "输入消息，Enter 发送";
    input.style.cssText = "flex:1;min-width:0;background:#0c1219;color:#e6edf3;border:1px solid #2a3542;border-radius:4px;font-size:13px;padding:6px 8px;outline:none;";
    row.appendChild(input);
    var send = document.createElement("button");
    send.setAttribute("data-cn-lobby-send", "1");
    send.textContent = "发送";
    send.style.cssText = "flex:none;background:#7cc8ff;color:#10161d;border:none;border-radius:4px;font-size:13px;font-weight:700;padding:6px 14px;cursor:pointer;";
    row.appendChild(send);
    ov.appendChild(row);
    document.body.appendChild(ov);
    ov.addEventListener("click", lobbyUserNameClick);
    lobby.overlay = ov;
    if (sel) {
      sel.onchange = function () {
        lobby.roomId = sel.value || null;
        lobbyLsSet("cn_lobby_room", lobby.roomId || "");
        lobbyLoadMessages();
      };
    }
    if (send) {
      send.onclick = function () { sendLobbyMessage(); };
    }
    if (input) {
      for (var keyType of ["keydown", "keyup", "keypress"]) input.addEventListener(keyType, function (e) {
        if (e.type === "keydown") window.__fx?.keyboardInput?.keyDown(e);
        if (e.type === "keyup") window.__fx?.keyboardInput?.keyUp(e);
        e.stopPropagation();
      });
      input.addEventListener("keydown", function (e) {
        if (e && e.key === "Enter" && !e.isComposing && e.keyCode !== 229 && !e.repeat) { e.preventDefault(); sendLobbyMessage(); }
      });
    }
    window.addEventListener("resize", positionLobbyOverlay);
  }
  function renderLobbyMessages(msgs) {
    var list = lobby.overlay && lobby.overlay.querySelector("[data-cn-lobby-msgs]");
    if (!list) return;
    if (!msgs || !msgs.length) {
      list._cnMessagesHtml = null;
      list.innerHTML = '<div style="color:#8b9bad;font-size:12px;padding:16px 0;text-align:center;">暂无消息，来发第一条吧。</div>';
      return;
    }
    var html = "";
    for (var i = 0; i < msgs.length; i++) {
      var m = msgs[i];
      userCardRemember(m);
      var name = m.displayName || m.username || m.userId || "?";
      var text = m.deleted ? "（消息已删除）" : (m.text || "");
      // 游戏聊天名字 span 同款结构：注入后主题观察者会自动 restyleNames（S4 档位色 / [CN] 标记）
      // data-cn-user 让点击用户名弹出 CN 用户卡片
      var color = m.authorRole === "admin" ? "rgb(255, 0, 0)" : "rgb(200, 235, 245)";
      html +=
        '<div style="margin:0 0 6px;line-height:1.5;">' +
        '<span data-cn-user="1" data-uid="' + lobbyEsc(m.userId || "") + '" data-uname="' + lobbyEsc(name) + '"' +
        ' style="display:inline-block;min-width:1em;margin:0;font:inherit;cursor:pointer;color:' + color + ';">' +
        lobbyEsc(name) + "</span>" +
        '<span style="color:#c8d3dc;font-size:13px;">: ' + lobbyEsc(text) + "</span>" +
        "</div>";
    }
    var follow = list.scrollHeight - list.clientHeight - list.scrollTop <= 2;
    var previous = list.scrollTop;
    if (list._cnMessagesHtml === html) return;
    list._cnMessagesHtml = html;
    list.innerHTML = html;
    list.scrollTop = follow ? list.scrollHeight : previous;
  }
  /* ---------- CN 用户卡片（点用户名弹出：资料/加好友/私聊/复制） ---------- */
  var userCardByName = {};
  var userCardEl = null;
  var userCardToastEl = null;
  function userCardRemember(m) {
    if (!m || !m.userId) return;
    var name = m.displayName || m.username || m.userId;
    var key = String(name).trim().toLowerCase();
    if (!userCardByName[key]) {
      userCardByName[key] = {
        userId: m.userId,
        displayName: m.displayName || name,
        username: m.username || m.userId,
        role: m.authorRole,
      };
    }
  }
  function userCardLookup(txt) {
    return userCardByName[String(txt || "").trim().toLowerCase()] || null;
  }
  /* Text as displayed: drops the hidden emoji copies kept for the game's textContent. */
  function visibleText(el) {
    var copy = el.cloneNode(true);
    var hidden = copy.querySelectorAll("[data-cn-emoji]");
    for (var i = 0; i < hidden.length; i++) hidden[i].remove();
    return copy.textContent;
  }
  function userCardToast(txt) {
    if (!userCardToastEl) {
      userCardToastEl = document.createElement("div");
      userCardToastEl.style.cssText =
        "position:fixed;right:14px;bottom:14px;z-index:2147483000;background:#10161d;" +
        "color:#dce5ef;border:1px solid rgba(124, 200, 255,0.45);border-radius:6px;" +
        "font-size:13px;padding:8px 14px;box-shadow:0 6px 18px rgba(0,0,0,0.45);" +
        "font-family:'Microsoft YaHei','Microsoft YaHei UI',sans-serif;";
      document.body.appendChild(userCardToastEl);
    }
    userCardToastEl.textContent = txt;
    userCardToastEl.style.display = "block";
    if (userCardToastEl._t) clearTimeout(userCardToastEl._t);
    userCardToastEl._t = setTimeout(function () {
      if (userCardToastEl) userCardToastEl.style.display = "none";
    }, 2400);
  }
  function closeUserCard() {
    if (userCardEl) { userCardEl.remove(); userCardEl = null; }
  }
  async function userCardAction(path, body, okMsg) {
    try {
      await window.CNApi.post(path, body || {});
      userCardToast(okMsg);
      closeUserCard();
    } catch (e) {
      userCardToast(e && e.message ? e.message : String(e));
    }
  }
  async function openUserCard(u, x, y) {
    closeUserCard();
    var me = null;
    try { me = await window.CNApi.ensureMe(); } catch (_) {}
    if (!me) { userCardToast("请先登录 CN 账号"); return; }
    var isMe = u.userId === me.id;
    var friends = [];
    if (!isMe) {
      try {
        var d = await window.CNApi.get("/friends");
        friends = Array.isArray(d.friends) ? d.friends : [];
      } catch (_) {}
    }
    var rel = null;
    for (var i = 0; i < friends.length; i++) {
      if (friends[i].id === u.userId) { rel = friends[i]; break; }
    }
    var card = document.createElement("div");
    card.id = "cn-user-card";
    card.style.cssText =
      "position:fixed;z-index:2147482900;width:264px;background:rgba(16,22,29,0.98);" +
      "border:1px solid rgba(124, 200, 255,0.4);border-radius:8px;box-shadow:0 10px 28px rgba(0,0,0,0.55);" +
      "font-family:'Microsoft YaHei','Microsoft YaHei UI',sans-serif;overflow:hidden;";
    var W = window.innerWidth || 0, H = window.innerHeight || 0;
    var cx = Math.max(8, Math.min((W || 9999) - 280, x || 0));
    var cy = Math.max(8, Math.min((H || 9999) - 220, y || 0));
    card.style.left = cx + "px";
    card.style.top = cy + "px";
    var initial = String(u.displayName || u.username || "?").slice(0, 1).toUpperCase();
    var roleBadge = u.role === "admin" ? '<span style="background:#ff5548;color:#10161d;font-size:10px;font-weight:700;border-radius:3px;padding:1px 5px;margin-left:6px;">管理员</span>'
      : u.role === "mod" ? '<span style="background:#7cc8ff;color:#10161d;font-size:10px;font-weight:700;border-radius:3px;padding:1px 5px;margin-left:6px;">版主</span>' : "";
    var friendBtn = "";
    if (!isMe) {
      if (rel && rel.status === "accepted") {
        friendBtn = '<button data-act="unfriend" style="' + cardBtnStyle(false) + '">删除好友</button>';
      } else if (rel && rel.status === "pending") {
        if (rel.by === me.id) friendBtn = '<button data-act="cancelreq" style="' + cardBtnStyle(false) + '">取消申请</button>';
        else friendBtn = '<button data-act="accept" style="' + cardBtnStyle(true) + '">接受好友</button>';
      } else {
        friendBtn = '<button data-act="addfriend" style="' + cardBtnStyle(true) + '">加好友</button>';
      }
    }
    card.innerHTML =
      '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid #2a3542;">' +
      '<span style="flex:none;width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#7cc8ff,#5caee6);color:#10161d;font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;">' + lobbyEsc(initial) + "</span>" +
      '<div style="min-width:0;flex:1;"><div style="color:#e6edf3;font-weight:700;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + lobbyEsc(u.displayName || "?") + roleBadge + "</div>" +
      '<div style="color:#8b9bad;font-size:11px;margin-top:2px;">@' + lobbyEsc(u.username || "?") + "</div></div>" +
      '<button data-act="close" style="flex:none;background:none;border:none;color:#8b9bad;font-size:16px;cursor:pointer;padding:2px 6px;">×</button></div>' +
      '<div style="display:flex;gap:6px;padding:10px 12px;">' +
      (isMe ? "" : '<button data-act="dm" style="' + cardBtnStyle(true) + '">私聊</button>') +
      friendBtn +
      '<button data-act="copy" style="' + cardBtnStyle(false) + '">复制账号</button></div>';
    document.body.appendChild(card);
    userCardEl = card;
    card.querySelectorAll("button").forEach(function (b) {
      b.onclick = function (e) {
        if (e && e.stopPropagation) e.stopPropagation();
        var act = b.getAttribute("data-act");
        if (act === "close") { closeUserCard(); return; }
        if (act === "copy") {
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(u.username || "").then(function () { userCardToast("已复制 @ " + (u.username || "")); });
            } else { userCardToast("复制失败（浏览器不支持）"); }
          } catch (_) { userCardToast("复制失败"); }
          return;
        }
        if (act === "dm") {
          userCardAction("/chat/rooms", { type: "dm", targetUserId: u.userId }, "私聊房已建，去对讲机「聊天」查看");
          return;
        }
        if (act === "addfriend") {
          userCardAction("/friends/request", { targetUserId: u.userId }, "好友申请已发送");
          return;
        }
        if (act === "accept") {
          userCardAction("/friends/accept", { targetUserId: u.userId }, "已成为好友");
          return;
        }
        if (act === "unfriend" || act === "cancelreq") {
          userCardAction("/friends/remove", { targetUserId: u.userId }, act === "unfriend" ? "已删除好友" : "已取消申请");
          return;
        }
      };
    });
  }
  function cardBtnStyle(primary) {
    return primary
      ? "flex:1;background:#7cc8ff;color:#10161d;border:none;border-radius:5px;font-size:12px;font-weight:700;padding:7px 0;cursor:pointer;"
      : "flex:1;background:#10161d;color:#c8d3dc;border:1px solid #2a3542;border-radius:5px;font-size:12px;padding:7px 0;cursor:pointer;";
  }
  function closeUserCardOnOutside(e) {
    if (!userCardEl) return;
    var t = e && e.target;
    if (t && t.closest && t.closest("#cn-user-card")) return;
    closeUserCard();
  }
  document.addEventListener("click", closeUserCardOnOutside);
  /* CN 聊天窗内：点 [data-cn-user] 名字 → 卡片 */
  function lobbyUserNameClick(e) {
    var t = e && e.target;
    if (!t || !t.closest) return;
    var n = t.closest("[data-cn-user]");
    if (!n) return;
    if (e.stopPropagation) e.stopPropagation();
    openUserCard({
      userId: n.getAttribute("data-uid"),
      displayName: n.getAttribute("data-uname"),
      username: n.getAttribute("data-uname"),
    }, e.clientX || 0, e.clientY || 0);
  }
  /* 游戏聊天（原版）里点名字 → 若名字是 CN 用户则弹卡片 */
  function gameChatNameClick(e) {
    if (!userCardEl) {
      var t = e && e.target;
      if (!t || !t.closest) return;
      if (t.closest("#cn-lobby-chat") || t.closest("[data-cn-user]")) return;
      if (t.tagName !== "SPAN") return;
      var u = userCardLookup(visibleText(t));
      if (u) {
        if (e.stopPropagation) e.stopPropagation();
        openUserCard(u, e.clientX || 0, e.clientY || 0);
      }
    }
  }
  document.addEventListener("click", gameChatNameClick);

  async function lobbyLoadRooms() {
    var data = await window.CNApi.get("/chat/rooms");
    lobby.rooms = Array.isArray(data.rooms) ? data.rooms : [];
    var sel = lobby.overlay && lobby.overlay.querySelector("[data-cn-lobby-room]");
    if (!sel) return;
    var saved = lobbyLsGet("cn_lobby_room");
    var html = "";
    for (var i = 0; i < lobby.rooms.length; i++) {
      var r = lobby.rooms[i];
      var label = r.type === "channel" ? "主频道" : (r.name || r.id || r.type);
      html += '<option value="' + lobbyEsc(r.id) + '"' + (r.id === saved ? ' data-saved="1"' : "") + ">" + lobbyEsc(label) + "</option>";
    }
    sel.innerHTML = html;
    var next = null;
    if (saved) {
      var savedOpt = sel.querySelector('option[data-saved="1"]');
      if (savedOpt) next = savedOpt.value;
    }
    if (!next) {
      for (var j = 0; j < lobby.rooms.length; j++) {
        if (lobby.rooms[j].type === "channel") { next = lobby.rooms[j].id; break; }
      }
    }
    if (!next && lobby.rooms.length) next = lobby.rooms[0].id;
    lobby.roomId = next;
    sel.value = next || "";
    lobbyLsSet("cn_lobby_room", next || "");
  }
  async function lobbyLoadMessages() {
    if (!lobby.roomId) return;
    var data = await window.CNApi.get("/chat/messages?roomId=" + encodeURIComponent(lobby.roomId) + "&limit=50");
    renderLobbyMessages(Array.isArray(data.messages) ? data.messages : []);
  }
  async function sendLobbyMessage() {
    if (!lobby.open || !lobby.roomId) return;
    var input = lobby.overlay && lobby.overlay.querySelector("[data-cn-lobby-input]");
    var text = input && input.value ? String(input.value).trim() : "";
    if (!text) return;
    try {
      await window.CNApi.post("/chat/messages", { roomId: lobby.roomId, text: text.slice(0, 500) });
      if (input) input.value = "";
      await lobbyLoadMessages();
    } catch (e) {
      lobbyChatNotice(e && e.message ? e.message : String(e));
    }
  }
  async function lobbyPoll() {
    if (!lobby.open) { stopLobbyPoll(); return; }
    if (!lobby.bar || lobby.bar.isConnected === false) { closeLobbyChat(); return; }
    if (!lobby.roomId) return;
    try {
      await lobbyLoadMessages();
    } catch (e) {
      console.warn("[CN lobby chat]", e && e.message ? e.message : e);
    }
  }
  async function startLobbyChat() {
    stopLobbyPoll();
    var sel = lobby.overlay && lobby.overlay.querySelector("[data-cn-lobby-room]");
    var input = lobby.overlay && lobby.overlay.querySelector("[data-cn-lobby-input]");
    if (sel) { sel.disabled = false; sel.innerHTML = ""; }
    if (input) { input.disabled = false; }
    lobbyChatNotice("连接中…");
    try {
      await window.CNApi.ensureMe();
      lobby.ok = true;
    } catch (_) {
      lobby.ok = false;
      lobby.roomId = null;
      lobby.rooms = [];
      if (sel) sel.disabled = true;
      if (input) { input.disabled = true; input.placeholder = "登录后可用"; }
      lobbyChatNotice("请先登录 CN 账号");
      return;
    }
    try {
      await lobbyLoadRooms();
      await lobbyLoadMessages();
    } catch (e) {
      lobbyChatNotice(e && e.message ? e.message : String(e));
      return;
    }
    lobby.timer = setInterval(lobbyPoll, LOBBY_POLL_MS);
  }
  function openLobbyChat() {
    if (!lobby.bar) return;
    ensureOverlay();
    lobby.open = true;
    lobby.overlay.style.display = "flex";
    positionLobbyOverlay();
    return startLobbyChat();
  }
  function lobbyTick() {
    if (!lobby) return;
    var now = Date.now();
    if (now - lastLobbyCheck < 400) return;
    lastLobbyCheck = now;
    ensureLobbyTab();
  }
  // 大厅 tab 栏可能在页面静止时（无 mutation）就已存在——定时扫描保证注入，
  // 不依赖 observer 触发（用户进大厅时 tab 栏可能已渲染完）。
  setInterval(lobbyTick, 1500);

  /* Exposed for scripts/test-name-tiers.mjs (Node + minimal DOM stub). */
  window.__cnThemeNames = {
    tierFor: cnTierForColor,
    isChatNameSpan: isChatNameSpan,
    isLobbyNameSpan: isLobbyNameSpan,
    restyle: restyleNames,
  };
  /* Exposed for scripts/test-lobby-chat.mjs (Node + minimal DOM stub). */
  window.__cnThemeLobby = {
    ensure: ensureLobbyTab,
    open: openLobbyChat,
    close: closeLobbyChat,
    isOpen: function () { return lobby.open; },
    overlay: function () { return lobby.overlay; },
  };
})();
