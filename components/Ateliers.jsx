"use client";

import { useEffect, useRef, useState } from "react";

const products = [
  {
    hi: "ज़री",
    en: "Zari",
    tag: "Metal-thread, hand-drawn",
    meta: "01 · Textile",
    body:
      "Silver flattened into ribbon a hair wide, then wound onto silk core in a single unbroken turn. The old drawshops in Surat still work by hand — nine steps between ingot and thread, none of them fast.",
    tint: "rgba(201,162,39,.14)",
    accent: "#c9a227",
  },
  {
    hi: "अखरोट",
    en: "Akhrot",
    tag: "Kashmiri walnut, carved",
    meta: "02 · Wood",
    body:
      "Walnut cut only from trees over eighty years — closer grain, deeper figure, the pattern the chisel is looking for. A single cabinet takes a Srinagar workshop the better part of a season to finish.",
    tint: "rgba(120,72,32,.22)",
    accent: "#b17a3c",
  },
  {
    hi: "बिदरी",
    en: "Bidri",
    tag: "Silver-inlaid alloy",
    meta: "03 · Metal",
    body:
      "Zinc and copper cast dark, chased shallow, inlaid with silver wire that is hammered flush before the piece is buried in the black soil of the Bidar fort — the soil is what turns the ground the colour it stays.",
    tint: "rgba(140,150,170,.14)",
    accent: "#c0b8a8",
  },
  {
    hi: "मीनाकारी",
    en: "Meenakari",
    tag: "Vitreous enamel on brass",
    meta: "04 · Enamel",
    body:
      "Powdered glass fused to metal a colour at a time, each firing risking every colour laid before it. In Jaipur four families still know the pink — the one everyone else has stopped mixing.",
    tint: "rgba(45,120,95,.18)",
    accent: "#7fbfa0",
  },
  {
    hi: "पश्मीना",
    en: "Pashmina",
    tag: "Changthangi under-fleece",
    meta: "05 · Fibre",
    body:
      "Combed once a year from the throats of goats living above four thousand metres. Hand-spun on a wooden charkha, hand-woven on a pit loom — a shawl weighs less than a hundred grams and takes about that many days.",
    tint: "rgba(160,138,92,.18)",
    accent: "#e0c88c",
  },
];

const PANEL_H = 900;

function CornerOrnament({ rotation = 0 }) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      style={{
        transform: `rotate(${rotation}deg)`,
        display: "block",
      }}
    >
      <g stroke="#c9a227" strokeWidth="0.6" fill="none" opacity="0.7">
        <path d="M0 4 L20 4" />
        <path d="M4 0 L4 20" />
        <path d="M0 8 L14 8" />
        <path d="M8 0 L8 14" />
        <circle cx="8" cy="8" r="2.4" />
        <path d="M12 4 Q8 8 4 12" />
        <path d="M18 8 L14 8 L14 14 L8 14 L8 18" />
        <circle cx="14" cy="14" r="1.2" fill="#c9a227" fillOpacity="0.4" />
      </g>
    </svg>
  );
}

function DividerOrnament() {
  return (
    <svg width="80" height="10" viewBox="0 0 80 10" style={{ display: "block" }}>
      <g stroke="#c9a227" strokeWidth="0.7" fill="none" opacity="0.8">
        <path d="M0 5 L28 5" />
        <path d="M52 5 L80 5" />
        <circle cx="40" cy="5" r="3" />
        <circle cx="40" cy="5" r="1.2" fill="#c9a227" fillOpacity="0.7" stroke="none" />
        <path d="M32 5 L36 3 M32 5 L36 7" />
        <path d="M48 5 L44 3 M48 5 L44 7" />
      </g>
    </svg>
  );
}

function PlaceholderTile({ product, index }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(ellipse at 30% 30%, ${product.tint}, transparent 65%), linear-gradient(155deg, #14100c 0%, #0d0a08 60%, #0a0806 100%)`,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.18 }}
        aria-hidden
      >
        <defs>
          <pattern id={`hatch-${index}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="14" stroke={product.accent} strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#hatch-${index})`} />
      </svg>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ gap: 22 }}
      >
        <span
          className="uppercase"
          style={{
            fontSize: 10,
            letterSpacing: "0.48em",
            color: "rgba(239,231,218,.42)",
          }}
        >
          Image · Placeholder
        </span>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: `1px solid ${product.accent}`,
            opacity: 0.7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="font-display"
            style={{
              fontSize: 48,
              color: product.accent,
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-col items-center" style={{ gap: 6 }}>
          <span
            className="font-display italic"
            style={{
              fontSize: 22,
              color: "#f2eadd",
            }}
          >
            {product.en}
          </span>
          <span
            className="uppercase"
            style={{
              fontSize: 9,
              letterSpacing: "0.36em",
              color: "rgba(239,231,218,.35)",
            }}
          >
            {product.tag}
          </span>
        </div>
      </div>

      <div
        className="absolute"
        style={{
          left: 20,
          top: 20,
          right: 20,
          bottom: 20,
          border: `1px dashed rgba(239,231,218,.12)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function Ateliers() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = sectionRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const viewportH = window.innerHeight;
        const totalPin = Math.max(1, products.length * PANEL_H - viewportH);
        const scrolled = Math.min(Math.max(-r.top, 0), totalPin);
        const slice = totalPin / products.length;
        const idx = Math.min(
          products.length - 1,
          Math.max(0, Math.floor(scrolled / slice))
        );
        setActive(idx);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      data-screen-label="Ateliers — Pinned"
      className="relative"
      style={{
        width: 1440,
        height: products.length * PANEL_H,
        background: "#0a0806",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          minHeight: 780,
          width: 1440,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 96,
          paddingBottom: 72,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(201,162,39,0.05), transparent 70%)",
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: "1px solid rgba(224,200,140,.22)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: 48,
            left: 48,
            right: 48,
            bottom: 48,
            border: "1px solid rgba(224,200,140,.10)",
          }}
        />

        <div className="absolute" style={{ top: 28, left: 28 }}>
          <CornerOrnament rotation={0} />
        </div>
        <div className="absolute" style={{ top: 28, right: 28 }}>
          <CornerOrnament rotation={90} />
        </div>
        <div className="absolute" style={{ bottom: 28, left: 28 }}>
          <CornerOrnament rotation={270} />
        </div>
        <div className="absolute" style={{ bottom: 28, right: 28 }}>
          <CornerOrnament rotation={180} />
        </div>

        <div
          className="absolute flex items-center justify-center"
          style={{
            top: 32,
            left: 0,
            right: 0,
            gap: 24,
          }}
        >
          <div
            style={{
              width: 200,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(224,200,140,.4), rgba(224,200,140,.7))",
            }}
          />
          <DividerOrnament />
          <span
            className="font-display italic uppercase"
            style={{
              fontSize: 12,
              color: "#e0c88c",
              letterSpacing: "0.42em",
            }}
          >
            The Ateliers
          </span>
          <DividerOrnament />
          <div
            style={{
              width: 200,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(224,200,140,.7), rgba(224,200,140,.4), transparent)",
            }}
          />
        </div>

        <div
          className="relative"
          style={{
            width: 1440,
            display: "grid",
            gridTemplateColumns: "620px 1fr",
            padding: "0 88px",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div
            className="relative"
            style={{ width: 560, height: 660, overflow: "hidden" }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                inset: -6,
                border: "1px solid rgba(224,200,140,.4)",
                zIndex: 3,
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                inset: -14,
                border: "1px solid rgba(224,200,140,.15)",
                zIndex: 3,
              }}
            />
            {products.map((p, i) => (
              <div
                key={p.en}
                className="absolute inset-0"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "scale(1)" : "scale(1.04)",
                  transition:
                    "opacity 900ms cubic-bezier(.5,0,.25,1), transform 1400ms cubic-bezier(.5,0,.25,1)",
                }}
              >
                <PlaceholderTile product={p} index={i} />
              </div>
            ))}
            <div
              className="absolute uppercase"
              style={{
                left: 20,
                bottom: 20,
                fontSize: 10,
                letterSpacing: "0.36em",
                color: "rgba(239,231,218,.72)",
                zIndex: 4,
              }}
            >
              <span style={{ color: "#e0c88c" }}>
                {String(active + 1).padStart(2, "0")}
              </span>
              <span style={{ margin: "0 12px", opacity: 0.5 }}>/</span>
              <span>{String(products.length).padStart(2, "0")}</span>
            </div>
          </div>

          <div
            className="relative"
            style={{ height: 660, paddingLeft: 32 }}
          >
            {products.map((p, i) => (
              <article
                key={p.en}
                style={{
                  position: "absolute",
                  inset: 0,
                  paddingLeft: 32,
                  opacity: active === i ? 1 : 0,
                  transform:
                    active === i
                      ? "translateY(0)"
                      : active > i
                      ? "translateY(-32px)"
                      : "translateY(32px)",
                  transition:
                    "opacity 700ms ease, transform 900ms cubic-bezier(.5,0,.25,1)",
                  pointerEvents: active === i ? "auto" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 24,
                }}
              >
                <div className="flex items-center" style={{ gap: 18 }}>
                  <span
                    className="uppercase"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.46em",
                      color: "#a08a5c",
                    }}
                  >
                    {p.meta}
                  </span>
                  <span
                    style={{
                      width: 60,
                      height: 1,
                      background: "rgba(239,231,218,.2)",
                    }}
                  />
                  <span
                    className="uppercase"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.32em",
                      color: "rgba(239,231,218,.55)",
                    }}
                  >
                    From the ateliers
                  </span>
                </div>
                <h3
                  className="font-display"
                  style={{
                    margin: 0,
                    fontWeight: 300,
                    fontSize: 132,
                    lineHeight: 0.9,
                    color: "#f2eadd",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.hi}
                </h3>
                <div className="flex items-baseline flex-wrap" style={{ gap: 14 }}>
                  <span
                    className="font-display"
                    style={{
                      fontSize: 30,
                      color: "#e0c88c",
                      fontStyle: "italic",
                    }}
                  >
                    {p.en}
                  </span>
                  <span
                    className="uppercase"
                    style={{
                      fontSize: 11,
                      color: "rgba(239,231,218,.5)",
                      letterSpacing: "0.24em",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    maxWidth: 520,
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: "rgba(239,231,218,.62)",
                  }}
                >
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          className="absolute"
          style={{
            left: 88,
            bottom: 72,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {products.map((p, i) => (
            <div key={p.en} className="flex items-center" style={{ gap: 14 }}>
              <span
                style={{
                  width: i === active ? 34 : 18,
                  height: 1,
                  background:
                    i === active ? "#c9a227" : "rgba(239,231,218,.24)",
                  transition:
                    "width 500ms ease, background 500ms ease",
                }}
              />
              <span
                className="uppercase"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.32em",
                  color:
                    i === active ? "#e0c88c" : "rgba(239,231,218,.36)",
                  transition: "color 500ms ease",
                }}
              >
                {String(i + 1).padStart(2, "0")} · {p.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
