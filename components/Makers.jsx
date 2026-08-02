const cards = [
  { label: "[ maker ]", width: 250, height: 330, opacity: 0.35, blur: 2, focus: false },
  { label: "[ maker ]", width: 250, height: 390, opacity: 0.6, focus: false },
  {
    label: "[ portrait — Ustad Ibrahim ]",
    width: 330,
    height: 452,
    focus: true,
  },
  { label: "[ maker ]", width: 250, height: 390, opacity: 0.6, focus: false },
  { label: "[ maker ]", width: 250, height: 330, opacity: 0.35, blur: 2, focus: false },
];

export default function Makers() {
  return (
    <section
      id="makers"
      data-screen-label="Makers"
      className="relative overflow-hidden"
      style={{ width: 1440, height: 800, background: "#0d0a08" }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ gap: 44 }}
      >
        <div className="flex items-center" style={{ gap: 26 }}>
          {cards.map((c, i) => (
            <div
              key={i}
              className={
                c.focus ? "relative flex items-center justify-center" : "flex items-center justify-center"
              }
              style={{
                width: c.width,
                height: c.height,
                background: c.focus
                  ? "repeating-linear-gradient(135deg,#221a14 0 9px,#191310 9px 18px)"
                  : "repeating-linear-gradient(135deg,#1b1512 0 9px,#151110 9px 18px)",
                border: c.focus
                  ? "1px solid rgba(201,162,39,.35)"
                  : "1px solid rgba(239,231,218,.1)",
                opacity: c.opacity,
                filter: c.blur ? `blur(${c.blur}px)` : undefined,
                boxShadow: c.focus ? "0 40px 100px rgba(0,0,0,.6)" : undefined,
              }}
            >
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: c.focus ? 10 : 9,
                  letterSpacing: "0.18em",
                  color: c.focus ? "#8b8177" : "#6e665d",
                }}
              >
                {c.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center" style={{ gap: 10 }}>
          <span
            className="font-display"
            style={{
              fontStyle: "italic",
              fontSize: 52,
              lineHeight: 1,
              color: "#f2eadd",
            }}
          >
            Ustad Ibrahim Qureshi
          </span>
          <span
            className="uppercase"
            style={{
              fontSize: 11,
              letterSpacing: "0.34em",
              color: "#a08a5c",
            }}
          >
            Stone carver · Jaipur
          </span>
        </div>
        <div className="flex items-center" style={{ gap: 14 }}>
          <span
            className="inline-flex items-center justify-center"
            style={{
              width: 54,
              height: 38,
              border: "1px solid rgba(239,231,218,.24)",
              borderRadius: 999,
              color: "#efe7da",
            }}
          >
            ←
          </span>
          <span
            className="inline-flex items-center justify-center"
            style={{
              width: 54,
              height: 38,
              border: "1px solid rgba(239,231,218,.24)",
              borderRadius: 999,
              color: "#efe7da",
            }}
          >
            →
          </span>
        </div>
      </div>
      <span
        className="absolute uppercase"
        style={{
          left: 56,
          top: 64,
          fontSize: 10,
          letterSpacing: "0.42em",
          color: "#a08a5c",
        }}
      >
        Meet the makers
      </span>
    </section>
  );
}
