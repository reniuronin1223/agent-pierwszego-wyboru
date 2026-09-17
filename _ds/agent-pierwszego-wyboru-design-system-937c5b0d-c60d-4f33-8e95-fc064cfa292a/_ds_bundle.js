/* @ds-bundle: {"format":4,"namespace":"AgentPierwszegoWyboruDesignSystem_937c5b","components":[{"name":"ArrowList","sourcePath":"components/content/ArrowList.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"ClaimBanner","sourcePath":"components/content/ClaimBanner.jsx"},{"name":"CriteriaPanel","sourcePath":"components/content/CriteriaPanel.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"ProcessStep","sourcePath":"components/content/ProcessStep.jsx"},{"name":"QuoteCard","sourcePath":"components/content/QuoteCard.jsx"},{"name":"ReelCard","sourcePath":"components/content/ReelCard.jsx"},{"name":"StatTile","sourcePath":"components/content/StatTile.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"EyebrowLabel","sourcePath":"components/core/EyebrowLabel.jsx"},{"name":"IconChip","sourcePath":"components/core/IconChip.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StarRating","sourcePath":"components/core/StarRating.jsx"},{"name":"LogoTab","sourcePath":"components/navigation/LogoTab.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/ArrowList.jsx":"8ae68bf12e06","components/content/Card.jsx":"2bb2be09f26a","components/content/ClaimBanner.jsx":"29eacab9fbb3","components/content/CriteriaPanel.jsx":"2124cc8e5bdb","components/content/FeatureCard.jsx":"8bca4896df47","components/content/ProcessStep.jsx":"50505eb4d71d","components/content/QuoteCard.jsx":"1abb71f0e9d3","components/content/ReelCard.jsx":"8fdb7066c6bf","components/content/StatTile.jsx":"7e41feeeb5e2","components/core/Button.jsx":"1ceae591c28b","components/core/EyebrowLabel.jsx":"e321b1510310","components/core/IconChip.jsx":"62ae8f339e14","components/core/SectionHeading.jsx":"d742c356c680","components/core/StarRating.jsx":"7e86ff9a1803","components/navigation/LogoTab.jsx":"7f0adb748553","components/navigation/NavBar.jsx":"331311ed0e9c","ui_kits/website/Benefits.jsx":"f82e6b3c261c","ui_kits/website/CaseStudies.jsx":"42f2e4f4e9f9","ui_kits/website/Hero.jsx":"786330a5413c","ui_kits/website/PainPoints.jsx":"fc8df04b8df9","ui_kits/website/Qualify.jsx":"1e2e67edb637","ui_kits/website/SocialProof.jsx":"444426c13df6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AgentPierwszegoWyboruDesignSystem_937c5b = window.AgentPierwszegoWyboruDesignSystem_937c5b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ArrowList.jsx
try { (() => {
function ArrowList({
  items = [],
  title,
  tone = 'dark',
  style
}) {
  const color = tone === 'onDark' ? 'var(--text-on-dark)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-bold)',
      color: tone === 'onDark' ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", null, item)))));
}
Object.assign(__ds_scope, { ArrowList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArrowList.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function Card({
  children,
  tone = 'light',
  pad = 'md',
  radius = 'card',
  hoverable = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-card)'
    },
    muted: {
      background: 'var(--surface-card-muted)',
      color: 'var(--text-body)',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      boxShadow: 'var(--shadow-dark-panel)'
    },
    brand: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-yellow)',
      boxShadow: 'none'
    }
  };
  const pads = {
    none: 0,
    sm: 'var(--card-pad-sm)',
    md: 'var(--card-pad)',
    lg: 'var(--space-12)'
  };
  const radii = {
    card: 'var(--radius-card)',
    panel: 'var(--radius-panel)',
    sm: 'var(--radius-md)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: radii[radius],
      padding: pads[pad],
      ...tones[tone],
      transition: 'var(--transition-interactive)',
      transform: hoverable && hover ? 'translateY(var(--hover-lift))' : 'none',
      boxShadow: hoverable && hover ? 'var(--shadow-card-hover)' : tones[tone].boxShadow,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/ClaimBanner.jsx
try { (() => {
function ClaimBanner({
  primary,
  secondary,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand)',
      borderRadius: 'var(--radius-xs)',
      padding: 'var(--space-6) var(--space-10)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      transform: 'rotate(-1.6deg)',
      padding: '8px 22px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-heading)'
    }
  }, primary), secondary ? /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(-1.2deg)',
      color: 'var(--text-on-yellow)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-h5)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)'
    }
  }, secondary) : null);
}
Object.assign(__ds_scope, { ClaimBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ClaimBanner.jsx", error: String((e && e.message) || e) }); }

// components/content/CriteriaPanel.jsx
try { (() => {
function CriteriaPanel({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-panel)',
      boxShadow: 'var(--shadow-dark-panel)',
      padding: 'var(--space-12) var(--space-8)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      ...style
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 200px',
      minWidth: 180,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)',
      textAlign: 'center'
    }
  }, item.icon ? /*#__PURE__*/React.createElement("img", {
    src: item.icon,
    alt: "",
    style: {
      width: 52,
      height: 52,
      objectFit: 'contain'
    }
  }) : null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-h5)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      lineHeight: 'var(--lh-heading)'
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-on-dark-muted)'
    }
  }, item.body)), i < items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      alignSelf: 'center',
      color: 'var(--yellow-500)',
      fontSize: 28,
      fontWeight: 'var(--fw-regular)'
    }
  }, "+") : null)));
}
Object.assign(__ds_scope, { CriteriaPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CriteriaPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessStep.jsx
try { (() => {
function ProcessStep({
  step,
  title,
  body,
  tilt = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      transform: tilt ? 'rotate(' + tilt + 'deg)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-h5)'
    }
  }, step), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-heading)',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, body));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/content/QuoteCard.jsx
try { (() => {
function QuoteCard({
  quote,
  author,
  role,
  avatar,
  align = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      position: 'relative',
      background: 'var(--surface-card-muted)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6) var(--space-6) var(--space-8)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      textAlign: align
    }
  }, quote, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -14,
      left: align === 'center' ? 'calc(50% - 8px)' : 32,
      width: 0,
      height: 0,
      borderLeft: '9px solid transparent',
      borderRight: '9px solid transparent',
      borderTop: '15px solid var(--surface-card-muted)'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      objectFit: 'cover'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: avatar ? 'left' : align
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, author), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, role) : null)));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ReelCard.jsx
try { (() => {
function ReelCard({
  thumbnail,
  title,
  handle,
  role,
  duration,
  onPlay,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '9 / 16',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--ink-800)'
    }
  }, thumbnail ? /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null, /*#__PURE__*/React.createElement("button", {
    onClick: onPlay,
    "aria-label": "Odtw\xF3rz",
    style: {
      position: 'absolute',
      inset: 0,
      margin: 'auto',
      width: 62,
      height: 44,
      border: 'none',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--yellow-500)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-interactive)',
      transform: hover ? 'scale(1.06)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 0,
      height: 0,
      borderLeft: '16px solid var(--ink-900)',
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      marginLeft: 4
    }
  })), duration ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      bottom: 30,
      background: 'var(--ink-900)',
      color: 'var(--text-on-dark)',
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-bold)',
      padding: '2px 6px',
      borderRadius: 4
    }
  }, duration) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 8,
      right: 8,
      bottom: 10,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(253,192,51,.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '58%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--yellow-500)'
    }
  }))), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-body-sm)',
      textTransform: 'uppercase',
      lineHeight: 1.35,
      letterSpacing: 'var(--ls-label)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, handle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, handle) : null, role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, role) : null));
}
Object.assign(__ds_scope, { ReelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReelCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatTile.jsx
try { (() => {
function StatTile({
  value,
  unit,
  label,
  sublabel,
  icon,
  iconAlt = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      minWidth: 180,
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: iconAlt,
    style: {
      width: 22,
      height: 22
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 38,
      lineHeight: 1
    }
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      marginLeft: 4,
      color: 'var(--text-on-dark-muted)'
    }
  }, unit) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'right'
    }
  }, label ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)'
    }
  }, label) : null, sublabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-on-dark-muted)'
    }
  }, sublabel) : null)));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '10px 20px',
    fontSize: 'var(--fs-caption)'
  },
  md: {
    padding: '16px 30px',
    fontSize: 'var(--fs-body-sm)'
  },
  lg: {
    padding: '20px 38px',
    fontSize: 'var(--fs-body)'
  }
};
function Button({
  variant = 'dark',
  size = 'md',
  children,
  disabled,
  iconRight,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-bold)',
    letterSpacing: 'var(--ls-label)',
    borderRadius: 'var(--radius-pill)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    lineHeight: 1.2,
    transition: 'var(--transition-interactive)',
    transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
    opacity: disabled ? 0.4 : 1,
    ...sizes[size]
  };
  const variants = {
    dark: {
      background: hover && !disabled ? 'var(--action-dark-hover)' : 'var(--action-dark)',
      color: 'var(--text-on-dark)'
    },
    primary: {
      background: hover && !disabled ? 'linear-gradient(180deg,var(--yellow-400),var(--yellow-500))' : 'linear-gradient(180deg,var(--yellow-500),var(--yellow-600))',
      color: 'var(--text-on-yellow)',
      boxShadow: disabled ? 'none' : 'var(--glow-yellow)'
    },
    outline: {
      background: hover && !disabled ? 'var(--ink-900)' : 'transparent',
      color: hover && !disabled ? 'var(--text-on-dark)' : 'var(--text-strong)',
      boxShadow: 'inset 0 0 0 2px var(--border-strong)'
    },
    ghost: {
      background: hover && !disabled ? 'var(--paper-100)' : 'transparent',
      color: 'var(--text-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.1em'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowLabel.jsx
try { (() => {
function EyebrowLabel({
  children,
  tone = 'yellow',
  tilt = -2,
  style
}) {
  const tones = {
    yellow: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-yellow)'
    },
    dark: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '10px 22px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      transform: 'rotate(' + tilt + 'deg)',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/IconChip.jsx
try { (() => {
const chipSizes = {
  sm: 40,
  md: 56,
  lg: 72
};
function IconChip({
  src,
  alt = '',
  size = 'md',
  tone = 'yellow',
  children,
  style
}) {
  const px = chipSizes[size];
  const tones = {
    yellow: {
      background: 'var(--surface-chip)'
    },
    dark: {
      background: 'var(--surface-dark)'
    },
    tint: {
      background: 'var(--surface-tint)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-chip)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...tones[tone],
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: px * 0.62,
      height: px * 0.62,
      objectFit: 'contain'
    }
  }) : children);
}
Object.assign(__ds_scope, { IconChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconChip.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function FeatureCard({
  title,
  body,
  icon,
  iconAlt = '',
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: tone,
    pad: "sm",
    radius: "card",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'flex-start',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.IconChip, {
    src: icon,
    alt: iconAlt,
    size: "md",
    tone: dark ? 'yellow' : 'yellow'
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-h5)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, body)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  children,
  eyebrow,
  align = 'center',
  size = 'h2',
  as = 'h2',
  style
}) {
  const Tag = as;
  const sizes = {
    hero: 'var(--fs-hero)',
    h1: 'var(--fs-h1)',
    h2: 'var(--fs-h2)',
    h3: 'var(--fs-h3)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 'var(--space-5)',
      textAlign: align,
      ...style
    }
  }, eyebrow ? eyebrow : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: sizes[size],
      lineHeight: size === 'hero' ? 'var(--lh-hero)' : 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      textTransform: 'uppercase',
      color: 'var(--text-display)',
      textWrap: 'balance'
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StarRating.jsx
try { (() => {
function StarRating({
  count = 5,
  size = 16,
  tone = 'dark',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": count + ' / 5',
    style: {
      display: 'inline-flex',
      gap: 1,
      fontSize: size,
      lineHeight: 1,
      color: tone === 'dark' ? 'var(--ink-900)' : 'var(--yellow-500)',
      ...style
    }
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, "\u2605")));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LogoTab.jsx
try { (() => {
function LogoTab({
  logo,
  label,
  active = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": active,
    style: {
      border: 'none',
      cursor: 'pointer',
      flex: '1 1 0',
      minWidth: 160,
      height: 120,
      borderRadius: 'var(--radius-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: active ? 'var(--surface-brand)' : hover ? 'var(--paper-200)' : 'var(--surface-card-muted)',
      transition: 'var(--transition-interactive)',
      padding: 'var(--space-6)',
      ...style
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: label,
    style: {
      maxHeight: 48,
      maxWidth: '78%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-h5)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { LogoTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LogoTab.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  brand = 'Agent Pierwszego Wyboru',
  items = [],
  active,
  onSelect,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      padding: 'var(--space-5) var(--container-pad)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-caption)',
      lineHeight: 1.15,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--text-strong)',
      maxWidth: 190
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: () => onSelect && onSelect(item),
      style: {
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        padding: '10px 22px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: isActive ? 'var(--fw-bold)' : 'var(--fw-semibold)',
        background: isActive ? 'var(--action-dark)' : 'transparent',
        color: isActive ? 'var(--text-accent)' : 'var(--text-strong)',
        transition: 'var(--transition-interactive)'
      }
    }, item);
  }), action));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Benefits.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  FeatureCard
} = window.AgentPierwszegoWyboruDesignSystem_937c5b;
const items = [{
  icon: '../../assets/icon-growth.png',
  title: 'Realna cena, nie obietnice',
  body: 'Celem jest kwota na umowie, a nie liczba wyświetleń ogłoszenia.'
}, {
  icon: '../../assets/icon-time.png',
  title: 'Oszczędność czasu',
  body: 'Przejmuję cały proces — zdjęcia, prezentacje, negocjacje, dokumenty.'
}, {
  icon: '../../assets/icon-chat.png',
  title: 'Przejrzysta komunikacja',
  body: 'Luźna atmosfera, brak „korpomowy”. Mówię wprost, co się dzieje z Twoją ofertą.'
}, {
  icon: '../../assets/icon-budget.png',
  title: 'Zero ukrytych kosztów',
  body: 'Jedna, jasna prowizja ustalona na start. Bez dopisków małym drukiem.'
}];
function Benefits() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left"
  }, "Korzy\u015Bci dla Ciebie"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--card-gap)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(FeatureCard, _extends({
    key: it.title
  }, it)))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-analytics-desk.png",
    alt: "Analiza ofert",
    style: {
      width: '100%',
      height: 560,
      objectFit: 'cover',
      borderRadius: 'var(--radius-media)'
    }
  }))));
}
window.Benefits = Benefits;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Benefits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseStudies.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  LogoTab,
  Card,
  StatTile,
  QuoteCard,
  Button
} = window.AgentPierwszegoWyboruDesignSystem_937c5b;
const cases = [{
  tab: 'Osiedle Parkowe',
  title: 'Osiedle Parkowe — 3 pokoje, sprzedane w 19 dni',
  intro: 'Mieszkanie stało w ogłoszeniach cztery miesiące u dwóch innych biur. Cena była dobra, prezentacja nie.',
  did: ['Home staging i sesja zdjęciowa od nowa.', 'Kampania na Facebooku i Instagramie do kupujących z Białegostoku.', 'Trzy dni zorganizowanych prezentacji zamiast pojedynczych wizyt.'],
  stats: [{
    value: '19',
    unit: 'dni',
    label: 'Do umowy',
    sublabel: 'Od publikacji'
  }, {
    value: '41',
    label: 'Zapytań',
    sublabel: 'W pierwszym tygodniu'
  }, {
    value: '100%',
    label: 'Ceny ofertowej',
    sublabel: 'Bez negocjacji'
  }],
  quote: '„Po czterech miesiącach zastoju mieszkanie sprzedało się w trzy tygodnie, za cenę, której nikt nam nie obiecywał.”',
  author: 'Aneta D.',
  role: 'Białystok, Zielone Wzgórza'
}, {
  tab: 'Dom w Supraślu',
  title: 'Dom w Supraślu — sprzedany w 6 tygodni',
  intro: 'Nieruchomość poza miastem, z wąską grupą kupujących i wysoką ceną.',
  did: ['Sesja z drona i wideo spacer.', 'Kampania kierowana na rodziny z Warszawy szukające drugiego domu.'],
  stats: [{
    value: '6',
    unit: 'tyg.',
    label: 'Do umowy'
  }, {
    value: '12',
    label: 'Prezentacji'
  }],
  quote: '„Kupujący przyjechał z Warszawy po samym wideo.”',
  author: 'Marcin K.',
  role: 'Supraśl'
}, {
  tab: 'Kamienica Lipowa',
  title: 'Kamienica Lipowa — dwa lokale, jeden kupujący',
  intro: 'Dwa lokale inwestycyjne, które wcześniej nie miały żadnych zapytań.',
  did: ['Wycena i uporządkowanie dokumentacji.', 'Oferta skierowana do inwestorów z regionu.'],
  stats: [{
    value: '2',
    label: 'Lokale',
    sublabel: 'Jedna transakcja'
  }, {
    value: '28',
    unit: 'dni',
    label: 'Do umowy'
  }],
  quote: '„Konkretna rozmowa, konkretny efekt.”',
  author: 'Arthur D.',
  role: 'Inwestor'
}];
function CaseStudies() {
  const [i, setI] = React.useState(0);
  const c = cases[i];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page-alt)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Zobacz wyniki, jakie dowo\u017C\u0119"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, cases.map((x, ix) => /*#__PURE__*/React.createElement(LogoTab, {
    key: x.tab,
    label: x.tab,
    active: ix === i,
    onClick: () => setI(ix)
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "muted",
    pad: "lg",
    radius: "panel",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--text-strong)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)'
    }
  }, c.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-strong)'
    }
  }, "Co zrobi\u0142em?"), c.did.map(d => /*#__PURE__*/React.createElement("p", {
    key: d,
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)'
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, c.stats.map(s => /*#__PURE__*/React.createElement(StatTile, _extends({
    key: s.label
  }, s, {
    style: {
      flex: '1 1 180px'
    }
  })))), /*#__PURE__*/React.createElement(QuoteCard, {
    align: "left",
    quote: c.quote,
    author: c.author,
    role: c.role,
    style: {
      maxWidth: 560
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Chc\u0119 tak sprzeda\u0107"))));
}
window.CaseStudies = CaseStudies;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseStudies.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  NavBar,
  Button,
  StarRating
} = window.AgentPierwszegoWyboruDesignSystem_937c5b;
function Hero({
  tab,
  onTab
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      background: 'var(--surface-page-alt)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-brand)',
      clipPath: 'polygon(0 0, 60% 0, 60% 100%, 0 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: ['Reklamy', 'Mentoring', 'Kurs'],
    active: tab,
    onSelect: onTab,
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad) 80px',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      alignItems: 'end',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      paddingTop: 90
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-hero)',
      lineHeight: 'var(--lh-hero)',
      letterSpacing: 'var(--ls-hero)',
      textTransform: 'uppercase',
      color: 'var(--text-display)'
    }
  }, "Sprzedaj", /*#__PURE__*/React.createElement("br", null), "bez stresu"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 520,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Zajm\u0119 si\u0119 sprzeda\u017C\u0105 Twojego mieszkania"), " tak, \u017Ceby\u015B dosta\u0142 najlepsz\u0105 cen\u0119 \u2014 bez tygodni ogl\u0105dania, negocjacji i papier\xF3w na Twojej g\u0142owie."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg"
  }, "Chc\u0119 wycen\u0119"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(StarRating, {
    size: 14
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontStyle: 'italic',
      fontSize: 'var(--fs-caption)',
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, "\u201ESzybkie dzia\u0142anie, mieszkanie sprzedane w punkt, zrozumienie potrzeb klienta oraz sprawna komunikacja.\u201D")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 520,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-hero-desk.png",
    alt: "Agent przy biurku",
    style: {
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'bottom'
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PainPoints.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  ArrowList
} = window.AgentPierwszegoWyboruDesignSystem_937c5b;
const pains = [{
  img: '../../assets/illustration-confused-man.png',
  title: 'Wiesz, jak to się zwykle kończy:',
  lead: 'Najpierw wielkie obietnice i „wyjątkowa strategia sprzedaży”, a w praktyce mieszkanie stoi w ogłoszeniach trzeci miesiąc.',
  body: 'W pewnym momencie zacząłeś się zastanawiać, czy cena była zła — czy po prostu nikt się tym nie zajął.'
}, {
  img: '../../assets/illustration-burning-money.png',
  title: 'Miała być sprzedaż, wyszło obniżanie ceny',
  lead: '',
  body: 'Biuro się tłumaczy, termin się przesuwa, a Ty zostajesz z kredytem i propozycją „zejdźmy jeszcze 30 tysięcy”. Brzmi znajomo?'
}, {
  img: '../../assets/illustration-cash-register.png',
  title: 'Spokojnie, to nie jest kolejna gadka o „zasięgach ogłoszenia”',
  lead: '',
  body: 'U mnie konkrety idą przed pustą gadkę. Przygotuję mieszkanie, zdjęcia i kampanię tak, żeby kupujący dzwonił sam — i żebyś nie musiał schodzić z ceny.'
}];
function PainPoints() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left"
  }, "Masz do\u015B\u0107 og\u0142osze\u0144", /*#__PURE__*/React.createElement("br", null), "bez efektu?"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/arrow-curve-down.png",
    alt: "",
    style: {
      height: 120,
      marginTop: -10
    }
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    radius: "panel",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, pains.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: "",
    style: {
      width: '100%',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'var(--fs-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--text-strong)'
    }
  }, p.title), p.lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-strong)'
    }
  }, p.lead) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, p.body)))), /*#__PURE__*/React.createElement(ArrowList, {
    title: "Koniec z:",
    items: ['Chaosem i brakiem jasnej strategii sprzedaży.', 'Ogłoszeniami, których nikt nie klika.', 'Brakiem wiedzy, co się dzieje z Twoją ofertą.', 'Niepewnością, stresem i obniżaniem ceny.'],
    style: {
      paddingLeft: 260
    }
  }))));
}
window.PainPoints = PainPoints;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PainPoints.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Qualify.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  EyebrowLabel,
  CriteriaPanel,
  Button,
  ProcessStep
} = window.AgentPierwszegoWyboruDesignSystem_937c5b;
const steps = [{
  step: '1',
  title: 'Rozmowa i wycena',
  body: 'Oglądam nieruchomość, poznaję Twój cel i termin. Dostajesz realną wycenę, nie zawyżoną obietnicę.',
  tilt: -1
}, {
  step: '2',
  title: 'Przygotowanie oferty',
  body: 'Home staging, sesja zdjęciowa, opis i dokumenty. Oferta wychodzi dopiero, kiedy jest gotowa.',
  tilt: 1
}, {
  step: '3',
  title: 'Kampania i prezentacje',
  body: 'Płatne kampanie na Facebooku i Instagramie plus portale. Prezentacje zorganizowane w blokach.',
  tilt: -1
}, {
  step: '4',
  title: 'Negocjacje i umowa',
  body: 'Prowadzę negocjacje i pilnuję papierów aż do podpisu u notariusza.',
  tilt: 1
}];
function Qualify() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page-alt)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(EyebrowLabel, null, "Wa\u017Cne !")
  }, "Dla kogo jest ta wsp\xF3\u0142praca"), /*#__PURE__*/React.createElement(CriteriaPanel, {
    style: {
      width: '100%'
    },
    items: [{
      icon: '../../assets/icon-agent-yellow.png',
      title: 'Mieszkanie lub dom',
      body: 'Rynek wtórny albo pierwotny, Białystok i okolice'
    }, {
      icon: '../../assets/icon-moneybag-yellow.png',
      title: 'Konkretny cel',
      body: 'Wiesz, ile chcesz dostać i kiedy chcesz sprzedać'
    }, {
      icon: '../../assets/icon-battery-yellow.png',
      title: 'Masz dość kombinowania',
      body: 'Szukasz kogoś, kto dowozi wynik, a nie tylko obietnice'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Chc\u0119 wycen\u0119!"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Proces wsp\xF3\u0142pracy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      width: '100%'
    }
  }, steps.map(s => /*#__PURE__*/React.createElement(ProcessStep, _extends({
    key: s.step
  }, s)))))));
}
window.Qualify = Qualify;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Qualify.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SocialProof.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  EyebrowLabel,
  QuoteCard,
  ReelCard,
  ClaimBanner
} = window.AgentPierwszegoWyboruDesignSystem_937c5b;
const quotes = [{
  quote: '„Po złych doświadczeniach z dwoma biurami w końcu trafiliśmy na kogoś, kto po prostu się tym zajął. Rzeczowo, konkretnie, z bardzo dobrym podejściem do klienta. Tłumaczy każdy krok, pokazuje, co dzieje się z ofertą. Polecam serdecznie.”',
  author: 'Aneta Dowsey Juszkiewicz',
  role: 'Białystok, Wysokie Stoczek'
}, {
  quote: '„Szybkie działanie, prezentacje w punkt, zrozumienie potrzeb klienta oraz sprawna komunikacja i przepływ informacji. Szeroko rozumiany profesjonalizm.”',
  author: 'Katarzyna Kowalczyk',
  role: 'Sprzedaż mieszkania, Nowe Miasto'
}, {
  quote: '„Dzięki naszej współpracy mieszkanie zyskało nowy błysk, a cena poszła wyraźnie w górę. Polecam każdemu, kto szuka kogoś z pomysłem i konkretnymi efektami.”',
  author: 'Arthur Dada',
  role: 'Inwestor'
}];
const reels = [{
  thumbnail: '../../assets/reel-thumb-1.jpg',
  title: 'Mieszkanie sprzedane w 19 dni po 4 miesiącach zastoju',
  handle: '@aneta.bialystok',
  role: 'Sprzedaż mieszkania',
  duration: '01:27'
}, {
  thumbnail: '../../assets/reel-thumb-2.jpg',
  title: 'Pełny kalendarz prezentacji w pierwszym tygodniu',
  handle: '@joasai',
  role: 'Sprzedaż domu',
  duration: '01:16'
}, {
  thumbnail: '../../assets/reel-thumb-3.jpg',
  title: 'Sprzedał 7 mieszkań w 2 miesiące',
  handle: '@pan_od_nieruchomosci_',
  role: 'Nieruchomości',
  duration: '00:31'
}];
function SocialProof() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page-alt)',
      padding: 'var(--section-y) 0 var(--section-y-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(EyebrowLabel, null, "Opinie")
  }, "Klienci o mojej pracy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, quotes.map(q => /*#__PURE__*/React.createElement(QuoteCard, _extends({
    key: q.author
  }, q)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Tak! To dzia\u0142a w ka\u017Cdej dzielnicy"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Pos\u0142uchaj tych opinii i sam oce\u0144")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-8)'
    }
  }, reels.map(r => /*#__PURE__*/React.createElement(ReelCard, _extends({
    key: r.handle
  }, r)))), /*#__PURE__*/React.createElement(ClaimBanner, {
    primary: "Setki zadowolonych klient\xF3w!",
    secondary: "Dziesi\u0105tki mieszka\u0144 sprzedanych w cenie ofertowej.",
    style: {
      alignSelf: 'center'
    }
  })));
}
window.SocialProof = SocialProof;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SocialProof.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowList = __ds_scope.ArrowList;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ClaimBanner = __ds_scope.ClaimBanner;

__ds_ns.CriteriaPanel = __ds_scope.CriteriaPanel;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.ReelCard = __ds_scope.ReelCard;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

__ds_ns.IconChip = __ds_scope.IconChip;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.LogoTab = __ds_scope.LogoTab;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
