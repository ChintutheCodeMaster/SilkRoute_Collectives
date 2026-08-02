export default function Enquire() {
  return (
    <section
      id="enquire"
      data-screen-label="Enquire"
      className="relative box-border overflow-hidden bg-ink"
      style={{ width: 1440, padding: "120px 56px 56px" }}
    >
      <div
        className="absolute"
        style={{
          left: "50%",
          top: 0,
          width: 1100,
          height: 600,
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at center top, rgba(201,162,39,.14), transparent 68%)",
        }}
      />
      <div
        className="relative flex flex-col items-center text-center"
        style={{ gap: 34 }}
      >
        <span
          className="uppercase"
          style={{ fontSize: 10, letterSpacing: "0.42em", color: "#a08a5c" }}
        >
          Private client desk
        </span>
        <h2
          className="font-display"
          style={{
            margin: 0,
            fontWeight: 300,
            fontSize: 118,
            lineHeight: 0.92,
            color: "#f2eadd",
          }}
        >
          Take the road
          <br />
          <em style={{ fontStyle: "italic", color: "#e0c88c" }}>with us.</em>
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: 520,
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(239,231,218,.58)",
          }}
        >
          Pieces above ₹4 lakh are released by enquiry. Tell us what you collect
          and we will send the season's catalogue before it is published.
        </p>
        <div
          className="flex items-center"
          style={{
            gap: 0,
            width: 520,
            borderBottom: "1px solid rgba(239,231,218,.28)",
            paddingBottom: 14,
            marginTop: 10,
          }}
        >
          <span
            className="flex-1 text-left"
            style={{
              fontSize: 14,
              letterSpacing: "0.04em",
              color: "rgba(239,231,218,.4)",
            }}
          >
            your@email.com
          </span>
          <span
            className="uppercase"
            style={{ fontSize: 11, letterSpacing: "0.24em", color: "#e2c877" }}
          >
            Request access →
          </span>
        </div>
      </div>
      <div
        className="relative flex items-center justify-between uppercase"
        style={{
          marginTop: 120,
          paddingTop: 30,
          borderTop: "1px solid rgba(239,231,218,.12)",
          fontSize: 10,
          letterSpacing: "0.26em",
          color: "#7b7167",
        }}
      >
        <span>Silkroutes Collectives · Jaipur &amp; London</span>
        <div className="flex" style={{ gap: 30 }}>
          <a href="#catalogue" style={{ color: "#7b7167" }}>Catalogue</a>
          <a href="#route" style={{ color: "#7b7167" }}>Route</a>
          <a href="#makers" style={{ color: "#7b7167" }}>Makers</a>
          <a href="#enquire" style={{ color: "#7b7167" }}>Instagram</a>
        </div>
        <span>© 2026</span>
      </div>
    </section>
  );
}
