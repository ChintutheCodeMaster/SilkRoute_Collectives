export default function Hero() {
  return (
    <section
      data-screen-label="Hero"
      className="relative overflow-hidden bg-ink"
      style={{ width: 1440, height: 920 }}
    >
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "38%",
          width: 1200,
          height: 900,
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(ellipse at center, rgba(201,162,39,.16), rgba(201,162,39,.04) 45%, transparent 72%)",
        }}
      />

      <div
        className="absolute flex justify-center"
        style={{ left: 0, right: 0, top: 124 }}
      >
        <div className="relative">
          <span
            className="block font-display"
            style={{
              fontWeight: 400,
              fontSize: 214,
              lineHeight: 0.86,
              letterSpacing: "0.005em",
              color: "transparent",
              backgroundImage:
                "linear-gradient(178deg,#ffffff 0%,#f0e6d2 30%,#b9ab93 58%,#4e463d 94%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              whiteSpace: "nowrap",
              animation: "wordIn 1.4s cubic-bezier(.16,.84,.24,1) both",
            }}
          >
            SILKROUTES
          </span>
          <span
            className="block font-display"
            style={{
              marginTop: 10,
              fontWeight: 300,
              fontSize: 58,
              lineHeight: 1,
              letterSpacing: "0.208em",
              color: "#e8d5a8",
              textAlign: "left",
              animation: "riseIn 1.1s ease .5s both",
            }}
          >
            COLLECTIVES
          </span>
        </div>
      </div>

      <img
        src="/uploads/hero_asset-1785622327816.jpeg"
        alt="Carved sandstone apsara"
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-4%",
          height: "98%",
          objectFit: "contain",
          transformOrigin: "60% 70%",
          filter:
            "grayscale(1) brightness(.9) contrast(1.2) sepia(.4) saturate(1.45) hue-rotate(-8deg)",
          WebkitMaskImage:
            "radial-gradient(ellipse 58% 62% at 50% 44%, #000 46%, rgba(0,0,0,.6) 70%, transparent 88%)",
          maskImage:
            "radial-gradient(ellipse 58% 62% at 50% 44%, #000 46%, rgba(0,0,0,.6) 70%, transparent 88%)",
          animation: "swingIn 1.8s cubic-bezier(.16,.84,.24,1) both",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,8,6,.55) 0%, rgba(10,8,6,0) 20%, rgba(10,8,6,0) 62%, rgba(10,8,6,.9) 100%)",
        }}
      />

      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: "34px 56px 44px" }}
      >
        <div
          className="flex items-center justify-between"
          style={{ animation: "fadeIn 1.1s ease both" }}
        >
          <span
            className="font-display"
            style={{ fontSize: 15, letterSpacing: "0.46em", color: "#efe7da" }}
          >
            SRC · EST. 2019
          </span>
          <div
            className="flex items-center uppercase"
            style={{
              gap: 38,
              fontSize: 11,
              letterSpacing: "0.24em",
              color: "#cfc5b6",
            }}
          >
            <a href="#catalogue" style={{ color: "#cfc5b6" }}>Catalogue</a>
            <a href="#route" style={{ color: "#cfc5b6" }}>The Route</a>
            <a href="#makers" style={{ color: "#cfc5b6" }}>Makers</a>
            <a href="#enquire" style={{ color: "#cfc5b6" }}>Contact</a>
            <span
              className="inline-flex items-center"
              style={{
                padding: "9px 20px",
                border: "1px solid rgba(201,162,39,.5)",
                borderRadius: 999,
                color: "#e2c877",
                letterSpacing: "0.2em",
                fontSize: 10,
              }}
            >
              ENQUIRE
            </span>
          </div>
        </div>

        <div className="flex items-end justify-between" style={{ gap: 40 }}>
          <div
            className="flex flex-col"
            style={{ gap: 22, width: 330, animation: "riseIn 1.1s ease .7s both" }}
          >
            <div
              className="tile-hatch flex items-center justify-center"
              style={{ height: 196 }}
            >
              <span
                style={{
                  fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  color: "#7b7167",
                }}
              >
                [ atelier photograph ]
              </span>
            </div>
            <div className="flex flex-col" style={{ gap: 9 }}>
              <span className="font-display" style={{ fontSize: 23, color: "#f2eadd" }}>
                Cut by hand, in Jaipur
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(239,231,218,.55)",
                }}
              >
                Eleven weeks on a single sandstone panel. We buy the whole
                season from the workshop before it is carved.
              </p>
            </div>
            <span
              className="inline-flex items-center font-display"
              style={{ gap: 10, fontSize: 19, color: "#efe7da", letterSpacing: "0.02em" }}
            >
              Explore Further <span style={{ fontSize: 15 }}>↓</span>
            </span>
          </div>

          <div
            className="flex flex-col text-right"
            style={{
              gap: 22,
              width: 330,
              padding: "20px 0 20px 26px",
              background:
                "linear-gradient(270deg, rgba(10,8,6,.92) 45%, rgba(10,8,6,.6) 80%, rgba(10,8,6,0) 100%)",
              animation: "riseIn 1.1s ease .82s both",
            }}
          >
            <div className="flex flex-col" style={{ gap: 9 }}>
              <span
                className="font-display"
                style={{
                  fontSize: 23,
                  color: "#f7f0e2",
                  textShadow: "0 3px 16px rgba(10,8,6,.9)",
                }}
              >
                Provenance, in writing
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(242,234,221,.9)",
                  textShadow: "0 2px 14px rgba(10,8,6,.9)",
                }}
              >
                Every object leaves with the maker's name, the village it came
                from and the road it travelled to reach you.
              </p>
            </div>
            <div
              className="tile-hatch flex items-center justify-center"
              style={{ height: 196 }}
            >
              <span
                style={{
                  fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  color: "#7b7167",
                }}
              >
                [ certificate / detail shot ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
