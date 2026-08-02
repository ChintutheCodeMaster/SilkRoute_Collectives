export default function Plates() {
  return (
    <section
      data-screen-label="Plates"
      className="relative box-border"
      style={{ width: 1440, padding: "104px 56px 110px", background: "#0d0a08" }}
    >
      <div
        className="flex flex-col items-center"
        style={{ gap: 14, paddingBottom: 52 }}
      >
        <span
          className="uppercase"
          style={{ fontSize: 10, letterSpacing: "0.46em", color: "#a08a5c" }}
        >
          From the archive · plates I &amp; II
        </span>
        <h2
          className="font-display text-center"
          style={{
            margin: 0,
            fontWeight: 300,
            fontSize: 88,
            lineHeight: 1,
            color: "#f2eadd",
          }}
        >
          What the route{" "}
          <em style={{ fontStyle: "italic", color: "#e0c88c" }}>carried</em>
        </h2>
        <p
          className="text-center"
          style={{
            margin: 0,
            maxWidth: 560,
            fontSize: 14,
            lineHeight: 1.85,
            color: "rgba(239,231,218,.55)",
          }}
        >
          Not only silk and silver. Dance forms, dye recipes, the shape of a
          sleeve, a way of holding a brush — the cargo that never appears on a
          manifest.
        </p>
      </div>

      <div
        className="grid items-start"
        style={{ gridTemplateColumns: "1fr 470px", gap: 34 }}
      >
        <figure className="flex flex-col" style={{ margin: 0, gap: 18 }}>
          <div
            style={{
              padding: 14,
              border: "1px solid rgba(201,162,39,.34)",
              background: "#0a0806",
            }}
          >
            <img
              src="/uploads/radha rani.jpeg"
              alt="Dancers in a grove at dusk"
              className="block w-full object-cover"
              style={{
                height: 520,
                objectPosition: "50% 46%",
                filter: "saturate(.92) contrast(1.04) brightness(.86)",
              }}
            />
          </div>
          <figcaption
            className="flex items-baseline justify-between"
            style={{ gap: 24 }}
          >
            <span className="font-display" style={{ fontSize: 26, color: "#f2eadd" }}>
              Plate I —{" "}
              <em style={{ fontStyle: "italic", color: "#e0c88c" }}>
                The grove at dusk
              </em>
            </span>
            <span
              className="uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.26em",
                color: "#7d746a",
              }}
            >
              Oil on canvas · after the Braj school
            </span>
          </figcaption>
        </figure>

        <figure className="flex flex-col" style={{ margin: 0, gap: 18 }}>
          <div
            style={{
              padding: 14,
              border: "1px solid rgba(239,231,218,.16)",
              background: "#0a0806",
            }}
          >
            <img
              src="/uploads/Shakuntala_               _.jpeg"
              alt="Woman walking, painted study"
              className="block w-full object-cover"
              style={{
                height: 520,
                objectPosition: "50% 34%",
                filter: "saturate(.9) contrast(1.05) brightness(.84)",
              }}
            />
          </div>
          <figcaption className="flex flex-col" style={{ gap: 8 }}>
            <span className="font-display" style={{ fontSize: 26, color: "#f2eadd" }}>
              Plate II —{" "}
              <em style={{ fontStyle: "italic", color: "#e0c88c" }}>
                The turning glance
              </em>
            </span>
            <span
              className="uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.26em",
                color: "#7d746a",
              }}
            >
              Study · Kerala, late 19th c.
            </span>
          </figcaption>
        </figure>
      </div>

      <div
        className="flex items-center justify-center"
        style={{ gap: 22, paddingTop: 58 }}
      >
        <span
          className="inline-flex items-center uppercase"
          style={{
            padding: "16px 40px",
            border: "1px solid rgba(239,231,218,.3)",
            borderRadius: 999,
            color: "#efe7da",
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
            letterSpacing: "0.2em",
            color: "#7d746a",
          }}
        >
          Archive opens with each volume
        </span>
      </div>
    </section>
  );
}
