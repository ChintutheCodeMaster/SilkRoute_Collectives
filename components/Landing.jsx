"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    n: "01",
    place: "The living room",
    note: "Kani shawl, thrown",
    tint: "rgba(201,162,39,.16)",
    accent: "#c9a227",
  },
  {
    n: "02",
    place: "The foyer",
    note: "Bidri casket, at rest",
    tint: "rgba(140,150,170,.14)",
    accent: "#c0b8a8",
  },
  {
    n: "03",
    place: "The study",
    note: "Bronze, on teak",
    tint: "rgba(120,72,32,.22)",
    accent: "#b17a3c",
  },
  {
    n: "04",
    place: "The verandah",
    note: "Ikat, afternoon light",
    tint: "rgba(45,120,95,.18)",
    accent: "#7fbfa0",
  },
];

const SLIDE_MS = 5200;
const TRANSITION_MS = 1100;

function VideoPlaceholder({ slide, index }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(ellipse at 30% 30%, ${slide.tint}, transparent 60%), linear-gradient(155deg, #14100c 0%, #0d0a08 55%, #0a0806 100%)`,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.16 }}
        aria-hidden
      >
        <defs>
          <pattern
            id={`video-hatch-${index}`}
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(30)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="18"
              stroke={slide.accent}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#video-hatch-${index})`} />
      </svg>

      <div
        className="absolute pointer-events-none"
        style={{
          top: 40,
          left: 40,
          right: 40,
          bottom: 40,
          border: "1px dashed rgba(239,231,218,.12)",
        }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ gap: 28 }}
      >
        <span
          className="uppercase"
          style={{
            fontSize: 10,
            letterSpacing: "0.52em",
            color: "rgba(239,231,218,.38)",
          }}
        >
          Video · Placeholder
        </span>

        <div
          style={{
            width: 148,
            height: 148,
            borderRadius: "50%",
            border: `1px solid ${slide.accent}`,
            opacity: 0.75,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 12,
              borderRadius: "50%",
              border: `1px solid ${slide.accent}`,
              opacity: 0.35,
            }}
          />
          <svg width="34" height="34" viewBox="0 0 34 34" style={{ marginLeft: 4 }}>
            <path d="M8 4 L28 17 L8 30 Z" fill={slide.accent} opacity="0.85" />
          </svg>
        </div>

        <div className="flex flex-col items-center" style={{ gap: 8 }}>
          <span
            className="font-display italic"
            style={{
              fontSize: 42,
              color: "#f2eadd",
              lineHeight: 1,
            }}
          >
            {slide.place}
          </span>
          <span
            className="uppercase"
            style={{
              fontSize: 10,
              letterSpacing: "0.36em",
              color: "rgba(239,231,218,.4)",
            }}
          >
            Reel {slide.n} — {slide.note}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, SLIDE_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (index === slides.length) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
    if (!animate) {
      const t = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(t);
    }
  }, [index, animate]);

  const activeIndex = index % slides.length;

  return (
    <section
      data-screen-label="Landing"
      className="relative overflow-hidden bg-ink"
      style={{ width: 1440, height: 900 }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateX(-${index * 1440}px)`,
          transition: animate
            ? `transform ${TRANSITION_MS}ms cubic-bezier(.65,.05,.35,1)`
            : "none",
          display: "flex",
          width: (slides.length + 1) * 1440,
        }}
      >
        {[...slides, slides[0]].map((s, i) => (
          <div
            key={`${s.n}-${i}`}
            className="relative"
            style={{ width: 1440, height: 900, flexShrink: 0 }}
          >
            <VideoPlaceholder slide={s} index={i} />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,8,6,.72) 0%, rgba(10,8,6,.15) 26%, rgba(10,8,6,.1) 60%, rgba(10,8,6,.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,8,6,.55) 0%, rgba(10,8,6,0) 32%, rgba(10,8,6,0) 68%, rgba(10,8,6,.45) 100%)",
        }}
      />

      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: "76px 56px 56px" }}
      >
        <div className="flex items-start justify-between">
          <span
            className="uppercase"
            style={{
              fontSize: 10,
              letterSpacing: "0.46em",
              color: "#a08a5c",
            }}
          >
            How it lives
          </span>
          <div
            className="flex items-center uppercase"
            style={{
              gap: 18,
              fontSize: 10,
              letterSpacing: "0.32em",
              color: "rgba(239,231,218,.65)",
            }}
          >
            <span style={{ color: "#e0c88c" }}>
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                width: 60,
                height: 1,
                background: "rgba(239,231,218,.28)",
              }}
            />
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center" style={{ gap: 28 }}>
          <div style={{ minHeight: 32 }}>
            <span
              key={slides[activeIndex].n}
              className="uppercase inline-block"
              style={{
                fontSize: 11,
                letterSpacing: "0.32em",
                color: "rgba(239,231,218,.7)",
                animation: "landingFade 900ms ease-out",
              }}
            >
              {slides[activeIndex].n} — {slides[activeIndex].place}
              <span style={{ color: "#e0c88c", marginLeft: 14 }}>
                {slides[activeIndex].note}
              </span>
            </span>
          </div>
          <h2
            className="font-display"
            style={{
              margin: 0,
              fontWeight: 300,
              fontSize: 112,
              lineHeight: 0.9,
              color: "#f2eadd",
              textShadow: "0 4px 32px rgba(10,8,6,.6)",
            }}
          >
            Made to be
            <br />
            <em style={{ fontStyle: "italic", color: "#e0c88c" }}>lived with.</em>
          </h2>

          <div className="flex items-center" style={{ gap: 10, marginTop: 6 }}>
            {slides.map((s, i) => (
              <span
                key={s.n}
                style={{
                  width: i === activeIndex ? 34 : 18,
                  height: 2,
                  background:
                    i === activeIndex
                      ? "#c9a227"
                      : "rgba(239,231,218,.28)",
                  transition:
                    "width 600ms ease, background 600ms ease",
                }}
              />
            ))}
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
            Four rooms · one long road
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes landingFade {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
