export default function Story({
  screenLabel,
  bg = "#0a0806",
  align = "left",
  imageStyle,
  gradientDirection = "90deg",
  title,
  titleAccent,
  body,
  stats,
}) {
  const isRight = align === "right";
  const gradient = isRight
    ? `linear-gradient(270deg, ${bg} 30%, rgba(13,10,8,.45) 62%, rgba(13,10,8,.85) 100%)`
    : `linear-gradient(90deg, ${bg} 30%, rgba(10,8,6,.45) 62%, rgba(10,8,6,.85) 100%)`;

  return (
    <section
      data-screen-label={screenLabel}
      className="relative overflow-hidden"
      style={{ width: 1440, height: 720, background: bg }}
    >
      <img
        src="/uploads/hero_asset-1785622327816.jpeg"
        alt="Sandstone detail"
        className="absolute"
        style={imageStyle}
      />
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div
        className="absolute inset-0 flex items-center"
        style={{
          padding: "0 56px",
          justifyContent: isRight ? "flex-end" : "flex-start",
        }}
      >
        <div
          className="flex flex-col"
          style={{
            gap: 28,
            maxWidth: 560,
            alignItems: isRight ? "flex-end" : "flex-start",
            textAlign: isRight ? "right" : "left",
          }}
        >
          <span
            className="font-display"
            style={{ fontSize: 26, color: "rgba(239,231,218,.6)" }}
          >
            The story of
          </span>
          <h2
            className="font-display"
            style={{
              margin: 0,
              fontWeight: 300,
              fontSize: 104,
              lineHeight: 0.92,
              color: "#f2eadd",
            }}
          >
            {title}
            <br />
            <em style={{ fontStyle: "italic", color: "#e0c88c" }}>{titleAccent}</em>
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.85,
              color: "rgba(239,231,218,.58)",
            }}
          >
            {body}
          </p>
          <div className="flex" style={{ gap: 52, paddingTop: 8 }}>
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col"
                style={{
                  gap: 6,
                  alignItems: isRight ? "flex-end" : "flex-start",
                }}
              >
                <span
                  className="font-display"
                  style={{ fontSize: 38, color: "#efe7da", lineHeight: 1 }}
                >
                  {s.value}
                </span>
                <span
                  className="uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.26em",
                    color: "#7d746a",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
