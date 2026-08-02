export default function ViewingRoom() {
  return (
    <section
      data-screen-label="Viewing Room"
      className="relative overflow-hidden bg-ink"
      style={{ width: 1440, height: 860 }}
    >
      <img
        src="/uploads/_ (5).jpeg"
        alt="Arched colonnade at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: "50% 42%",
          filter: "saturate(.92) contrast(1.06) brightness(.82)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(85% 70% at 50% 46%, rgba(10,8,6,.42) 8%, rgba(10,8,6,.5) 30%, rgba(10,8,6,.72) 62%, rgba(10,8,6,.97) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,8,6,.78) 0%, rgba(10,8,6,.12) 22%, rgba(10,8,6,.2) 58%, rgba(10,8,6,.94) 100%)",
        }}
      />

      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: "52px 56px 48px" }}
      >
        <div
          className="flex items-center justify-between uppercase"
          style={{
            fontSize: 10,
            letterSpacing: "0.42em",
            color: "rgba(239,231,218,.7)",
          }}
        >
          <span>The viewing room</span>
          <span>Agra · Kachhpura, by the river</span>
        </div>

        <div
          className="flex flex-col items-center text-center"
          style={{ gap: 26, marginTop: -40 }}
        >
          <span
            className="font-display"
            style={{
              fontStyle: "italic",
              fontSize: 28,
              color: "rgba(247,240,226,.94)",
              textShadow: "0 4px 24px rgba(10,8,6,.8)",
            }}
          >
            Photographs flatten everything.
          </span>
          <h2
            className="font-display"
            style={{
              margin: 0,
              fontWeight: 300,
              fontSize: 132,
              lineHeight: 0.9,
              letterSpacing: "0.01em",
              color: "#f7f0e2",
              textShadow: "0 24px 70px rgba(0,0,0,.5)",
            }}
          >
            See it in
            <br />
            <em style={{ fontStyle: "italic", color: "#f0d79a" }}>the light.</em>
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: 480,
              fontSize: 15,
              lineHeight: 1.85,
              color: "rgba(244,237,224,.95)",
              textShadow: "0 3px 18px rgba(10,8,6,.85)",
            }}
          >
            One room, one hour, one client at a time. We open the crates in
            front of you, at the hour the sandstone turns — and nothing is
            shown that we would not keep ourselves.
          </p>
          <span
            className="inline-flex items-center uppercase"
            style={{
              padding: "17px 40px",
              background: "rgba(247,240,226,.95)",
              color: "#0a0806",
              fontSize: 11,
              letterSpacing: "0.24em",
              borderRadius: 999,
              marginTop: 6,
            }}
          >
            Book a private viewing
          </span>
        </div>

        <div
          className="flex items-end justify-between"
          style={{
            gap: 40,
            paddingTop: 26,
            borderTop: "1px solid rgba(239,231,218,.22)",
          }}
        >
          <div className="flex flex-col" style={{ gap: 7 }}>
            <span
              className="uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.28em",
                color: "rgba(239,231,218,.5)",
              }}
            >
              Hours
            </span>
            <span className="font-display" style={{ fontSize: 22, color: "#f2eadd" }}>
              Thursday — Sunday, 4 till dusk
            </span>
          </div>
          <div className="flex flex-col" style={{ gap: 7 }}>
            <span
              className="uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.28em",
                color: "rgba(239,231,218,.5)",
              }}
            >
              Also showing
            </span>
            <span className="font-display" style={{ fontSize: 22, color: "#f2eadd" }}>
              London, three weeks each spring
            </span>
          </div>
          <div className="flex flex-col text-right" style={{ gap: 7 }}>
            <span
              className="uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.28em",
                color: "rgba(239,231,218,.5)",
              }}
            >
              Appointments
            </span>
            <span className="font-display" style={{ fontSize: 22, color: "#f0d79a" }}>
              viewing@silkroutes.co
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
