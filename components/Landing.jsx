const landings = [
  { n: "01", place: "Varanasi", cargo: "Silk, brocade" },
  { n: "02", place: "Bharuch", cargo: "Indigo, resist" },
  { n: "03", place: "Tamralipti", cargo: "Bronze, shell" },
  { n: "04", place: "Debal", cargo: "Stone, lapis" },
];

export default function Landing() {
  return (
    <section
      data-screen-label="Landing"
      className="relative overflow-hidden bg-ink"
      style={{ width: 1440, height: 900 }}
    >
      <img
        src="/uploads/temple.jpeg"
        alt="River ghats at sunset"
        className="absolute w-full object-cover"
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          height: 620,
          objectPosition: "50% 40%",
          filter: "saturate(.9) contrast(1.05) brightness(.78)",
        }}
      />
      <div
        className="absolute"
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          height: 620,
          background:
            "linear-gradient(180deg, #0a0806 0%, rgba(10,8,6,.55) 22%, rgba(10,8,6,.2) 48%, rgba(10,8,6,.9) 100%)",
        }}
      />
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: "76px 56px 56px" }}
      >
        <div
          className="grid items-start"
          style={{ gridTemplateColumns: "1fr 620px", gap: 80 }}
        >
          <div className="flex flex-col" style={{ gap: 26, paddingTop: 6 }}>
            <span
              className="uppercase"
              style={{ fontSize: 10, letterSpacing: "0.46em", color: "#a08a5c" }}
            >
              Where it comes ashore
            </span>
            <div
              className="flex flex-col uppercase"
              style={{
                gap: 16,
                fontSize: 12,
                letterSpacing: "0.2em",
                color: "rgba(239,231,218,.55)",
              }}
            >
              {landings.map((l) => (
                <div
                  key={l.n}
                  className="flex justify-between"
                  style={{
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(239,231,218,.14)",
                  }}
                >
                  <span>
                    {l.n} — {l.place}
                  </span>
                  <span style={{ color: "#e0c88c" }}>{l.cargo}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col items-end text-right"
            style={{ gap: 24 }}
          >
            <h2
              className="font-display"
              style={{
                margin: 0,
                fontWeight: 300,
                fontSize: 112,
                lineHeight: 0.9,
                color: "#f2eadd",
              }}
            >
              Every river
              <br />
              was <em style={{ fontStyle: "italic", color: "#e0c88c" }}>a road.</em>
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: 440,
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(239,231,218,.6)",
              }}
            >
              Before the ports there were ghats, and before the ghats there were
              boats that left at the hour the temple lamps were lit. Four of
              those landings still supply us.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center" style={{ gap: 26 }}>
          <span
            className="inline-flex items-center uppercase"
            style={{
              padding: "17px 42px",
              background: "#c9a227",
              color: "#0a0806",
              fontSize: 11,
              letterSpacing: "0.26em",
            }}
          >
            Explore the Route
          </span>
          <span
            className="uppercase"
            style={{
              fontSize: 11,
              letterSpacing: "0.24em",
              color: "rgba(244,237,224,.75)",
              textShadow: "0 2px 12px rgba(10,8,6,.9)",
            }}
          >
            Four landings · thirty-one cities
          </span>
        </div>
      </div>
    </section>
  );
}
