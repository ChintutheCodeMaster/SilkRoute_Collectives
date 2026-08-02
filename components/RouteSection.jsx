export default function RouteSection() {
  return (
    <section
      id="route"
      data-screen-label="The Route"
      className="relative overflow-hidden bg-ink"
      style={{ width: 1440, height: 760 }}
    >
      <img
        src="/uploads/public/package.webp"
        alt="Silk Road map"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.36,
          filter:
            "grayscale(.5) sepia(.5) saturate(1.1) contrast(1.05) brightness(.62)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 50%, rgba(10,8,6,.5), rgba(10,8,6,.94) 70%)",
        }}
      />
      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ gap: 34, padding: "0 56px" }}
      >
        <span
          className="uppercase"
          style={{
            fontSize: 10,
            letterSpacing: "0.42em",
            color: "#a08a5c",
          }}
        >
          Chang'an to Baghdad · 7,500 km
        </span>
        <h2
          className="font-display"
          style={{
            margin: 0,
            fontWeight: 400,
            fontSize: 180,
            lineHeight: 0.86,
            letterSpacing: "0.02em",
            color: "#f2eadd",
          }}
        >
          THE ROUTE
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: 520,
            fontSize: 15,
            lineHeight: 1.85,
            color: "rgba(239,231,218,.6)",
          }}
        >
          We buy where the road still runs. Trace any piece back through the map
          — Samarkand, Kashgar, Merv, the Deccan — and see the hands it passed
          through on the way here.
        </p>
        <div className="flex items-center" style={{ gap: 18, paddingTop: 6 }}>
          <span
            className="inline-flex items-center uppercase"
            style={{
              padding: "16px 36px",
              background: "#c9a227",
              color: "#0a0806",
              fontSize: 11,
              letterSpacing: "0.24em",
            }}
          >
            Open the map
          </span>
          <span
            className="uppercase"
            style={{
              fontSize: 11,
              letterSpacing: "0.24em",
              color: "rgba(239,231,218,.55)",
            }}
          >
            31 origin cities pinned
          </span>
        </div>
      </div>
    </section>
  );
}
