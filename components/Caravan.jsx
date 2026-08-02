export default function Caravan() {
  return (
    <section
      data-screen-label="Caravan"
      className="relative overflow-hidden bg-ink"
      style={{ width: 1440, height: 820 }}
    >
      <img
        src="/uploads/_ (6).jpeg"
        alt="Caravan crossing the dunes"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: "50% 46%",
          filter: "saturate(.86) contrast(1.04) brightness(.74)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,8,6,.6) 0%, rgba(10,8,6,.08) 30%, rgba(10,8,6,.55) 74%, rgba(10,8,6,.97) 100%)",
        }}
      />
      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={{ padding: "0 56px 64px" }}
      >
        <div className="flex items-end justify-between" style={{ gap: 60 }}>
          <div className="flex flex-col" style={{ gap: 22, maxWidth: 640 }}>
            <span
              className="uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.46em",
                color: "#e8c98a",
              }}
            >
              Still, after twelve centuries
            </span>
            <h2
              className="font-display"
              style={{
                margin: 0,
                fontWeight: 300,
                fontSize: 96,
                lineHeight: 0.94,
                color: "#f7f0e2",
                textShadow: "0 20px 60px rgba(0,0,0,.6)",
              }}
            >
              The road did not
              <br />
              <em style={{ fontStyle: "italic", color: "#f0d79a" }}>close.</em>
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: 470,
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(244,237,224,.86)",
                textShadow: "0 2px 14px rgba(10,8,6,.8)",
              }}
            >
              It only went quiet. The same passes, the same market towns, the
              same families — we simply started buying at the beginning of it
              instead of the end.
            </p>
            <span
              className="inline-flex items-center uppercase"
              style={{
                gap: 14,
                marginTop: 8,
                fontSize: 11,
                letterSpacing: "0.26em",
                color: "#f7f0e2",
                borderBottom: "1px solid rgba(240,215,154,.7)",
                paddingBottom: 8,
                width: "fit-content",
              }}
            >
              Explore the Route <span style={{ fontSize: 14 }}>→</span>
            </span>
          </div>
          <div
            className="flex flex-col items-end text-right"
            style={{ gap: 14, paddingBottom: 6 }}
          >
            <span
              className="uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.3em",
                color: "rgba(244,237,224,.6)",
              }}
            >
              Taklamakan · northern arm
            </span>
            <span
              className="font-display"
              style={{ fontSize: 52, lineHeight: 1, color: "#f7f0e2" }}
            >
              7,500
              <span style={{ fontSize: 22, letterSpacing: "0.1em" }}> KM</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
