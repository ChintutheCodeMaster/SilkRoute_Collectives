const items = [
  {
    slot: "[ apsara panel — 4:5 ]",
    tag: "Enquiry",
    title: "Apsara Panel",
    price: "On request",
    origin: "Deccan · c. 11th c.",
    copy: "Carved sandstone fragment, mounted on blackened steel. One of two recovered from the same workshop.",
  },
  {
    slot: "[ ikat length — 4:5 ]",
    tag: "3 left",
    title: "Bukhara Ikat",
    price: "₹1,84,000",
    origin: "Uzbekistan · 2025",
    copy: "Silk warp, natural madder and indigo. Six weeks on the loom, tied by a single family in Margilan.",
  },
  {
    slot: "[ silver ewer — 4:5 ]",
    tag: "1 left",
    title: "Repoussé Ewer",
    price: "₹2,40,000",
    origin: "Kashmir · 2024",
    copy: "Hand-raised silver over ninety days, chased with chinar leaf. Signed on the foot by the maker.",
  },
];

export default function Catalogue() {
  return (
    <section
      id="catalogue"
      data-screen-label="Catalogue"
      className="relative box-border"
      style={{
        width: 1440,
        padding: "110px 56px 120px",
        background: "#0d0a08",
      }}
    >
      <div
        className="flex items-end justify-between"
        style={{
          paddingBottom: 40,
          borderBottom: "1px solid rgba(239,231,218,.12)",
        }}
      >
        <div className="flex flex-col" style={{ gap: 14 }}>
          <span
            className="uppercase"
            style={{ fontSize: 10, letterSpacing: "0.42em", color: "#a08a5c" }}
          >
            Volume III · 184 pieces
          </span>
          <h2
            className="font-display"
            style={{
              margin: 0,
              fontWeight: 300,
              fontSize: 92,
              lineHeight: 0.95,
              color: "#f2eadd",
            }}
          >
            The <em style={{ fontStyle: "italic", color: "#e0c88c" }}>Catalogue</em>
          </h2>
        </div>
        <div
          className="flex items-center uppercase"
          style={{
            gap: 26,
            fontSize: 11,
            letterSpacing: "0.22em",
            color: "#8a8076",
          }}
        >
          <span
            style={{
              color: "#efe7da",
              borderBottom: "1px solid #c9a227",
              paddingBottom: 6,
            }}
          >
            All
          </span>
          <span>Stone</span>
          <span>Textile</span>
          <span>Metal</span>
          <span>Paper</span>
        </div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 34,
          paddingTop: 52,
        }}
      >
        {items.map((item) => (
          <div key={item.title} className="flex flex-col" style={{ gap: 20 }}>
            <div
              className="tile-hatch relative flex items-center justify-center overflow-hidden"
              style={{ height: 430 }}
            >
              <span
                style={{
                  fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  color: "#7b7167",
                }}
              >
                {item.slot}
              </span>
              <span
                className="absolute uppercase"
                style={{
                  left: 16,
                  top: 16,
                  fontSize: 9,
                  letterSpacing: "0.24em",
                  color: "#0d0a08",
                  background: "#c9a227",
                  padding: "5px 10px",
                }}
              >
                {item.tag}
              </span>
            </div>
            <div
              className="flex items-baseline justify-between"
              style={{ gap: 16 }}
            >
              <span
                className="font-display"
                style={{ fontSize: 27, color: "#f2eadd" }}
              >
                {item.title}
              </span>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  color: "#a08a5c",
                  whiteSpace: "nowrap",
                }}
              >
                {item.price}
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                lineHeight: 1.75,
                color: "rgba(239,231,218,.52)",
              }}
            >
              {item.copy}
            </p>
            <div
              className="flex items-center justify-between uppercase"
              style={{
                paddingTop: 14,
                borderTop: "1px solid rgba(239,231,218,.1)",
                fontSize: 10,
                letterSpacing: "0.24em",
                color: "#7b7167",
              }}
            >
              <span>{item.origin}</span>
              <span style={{ color: "#efe7da" }}>View →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center" style={{ paddingTop: 64 }}>
        <span
          className="inline-flex items-center uppercase"
          style={{
            padding: "16px 40px",
            border: "1px solid rgba(239,231,218,.24)",
            borderRadius: 999,
            color: "#efe7da",
            fontSize: 11,
            letterSpacing: "0.24em",
          }}
        >
          View all 184 pieces
        </span>
      </div>
    </section>
  );
}
