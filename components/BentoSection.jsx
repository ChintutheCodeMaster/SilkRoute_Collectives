import Tile from "./Tile";

export default function BentoSection({
  screenLabel,
  eyebrow,
  title,
  titleAccent,
  titleTrailing,
  description,
  seeAll,
  tiles,
  bg = "#0a0806",
}) {
  return (
    <section
      data-screen-label={screenLabel}
      className="box-border"
      style={{
        width: 1440,
        padding: "96px 56px 40px",
        background: bg,
      }}
    >
      <div
        className="flex items-end justify-between"
        style={{ gap: 60, paddingBottom: 30 }}
      >
        <div className="flex flex-col" style={{ gap: 12 }}>
          <span
            className="uppercase"
            style={{ fontSize: 10, letterSpacing: "0.42em", color: "#a08a5c" }}
          >
            {eyebrow}
          </span>
          <h3
            className="font-display"
            style={{
              margin: 0,
              fontWeight: 300,
              fontSize: 62,
              lineHeight: 1,
              color: "#f2eadd",
            }}
          >
            {title}
            {titleAccent && (
              <>
                {" "}
                <em style={{ fontStyle: "italic", color: "#e0c88c" }}>
                  {titleAccent}
                </em>
              </>
            )}
            {titleTrailing}
          </h3>
        </div>
        <div className="flex items-end" style={{ gap: 40 }}>
          <p
            style={{
              margin: 0,
              maxWidth: 400,
              fontSize: 13,
              lineHeight: 1.8,
              color: "rgba(239,231,218,.5)",
            }}
          >
            {description}
          </p>
          <span
            className="uppercase whitespace-nowrap"
            style={{
              fontSize: 11,
              letterSpacing: "0.24em",
              color: "#efe7da",
              borderBottom: "1px solid rgba(201,162,39,.6)",
              paddingBottom: 6,
            }}
          >
            {seeAll} →
          </span>
        </div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: 268,
          gap: 18,
        }}
      >
        {tiles.map((t, i) => (
          <Tile
            key={i}
            slot={t.slot}
            image={t.image}
            title={t.title}
            price={t.price}
            captionSize={t.captionSize}
            style={{
              gridColumn: `span ${t.colSpan}`,
              gridRow: t.rowSpan ? `span ${t.rowSpan}` : undefined,
            }}
          />
        ))}
      </div>
    </section>
  );
}
