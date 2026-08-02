import Hero from "@/components/Hero";
import RouteSection from "@/components/RouteSection";
import Catalogue from "@/components/Catalogue";
import Caravan from "@/components/Caravan";
import BentoSection from "@/components/BentoSection";
import Landing from "@/components/Landing";
import Story from "@/components/Story";
import Plates from "@/components/Plates";
import Makers from "@/components/Makers";
import ViewingRoom from "@/components/ViewingRoom";
import Enquire from "@/components/Enquire";

const wovenTiles = [
  { slot: "[ ikat length — 4:5 ]", title: "Bukhara Ikat, silk warp", price: "₹1,84,000", colSpan: 5, rowSpan: 2, captionSize: "lg" },
  { slot: "[ kalamkari panel ]", title: "Kalamkari Panel", price: "₹96,000", colSpan: 4 },
  { slot: "[ pashmina detail ]", title: "Kani Shawl", price: "₹3,10,000", colSpan: 3 },
  { slot: "[ suzani, wall ]", title: "Nurata Suzani", price: "₹1,28,000", colSpan: 4 },
  { slot: "[ dye vat, atelier ]", title: "Indigo Stole", price: "₹42,000", colSpan: 3 },
];

const metalTiles = [
  { slot: "[ silver ewer ]", title: "Repoussé Ewer", price: "₹2,40,000", colSpan: 4 },
  { slot: "[ brass lamp ]", title: "Deepa Lamp", price: "₹38,000", colSpan: 3 },
  { slot: "[ bronze figure — 4:5 ]", title: "Chola-method Bronze", price: "On request", colSpan: 5, rowSpan: 2, captionSize: "lg" },
  { slot: "[ bidri box ]", title: "Bidri Casket", price: "₹74,000", colSpan: 4 },
  { slot: "[ anvil, workshop ]", title: "Kaftgari Mirror", price: "₹1,15,000", colSpan: 3 },
];

const carvedTiles = [
  { slot: "[ apsara panel — 4:5 ]", title: "Apsara Panel, sandstone", price: "On request", colSpan: 5, rowSpan: 2, captionSize: "lg" },
  { slot: "[ walnut screen ]", title: "Jali Screen", price: "₹2,05,000", colSpan: 3 },
  { slot: "[ teak door fragment ]", title: "Chettinad Lintel", price: "₹88,000", colSpan: 4 },
  { slot: "[ chisel, hands ]", title: "Soapstone Bowl", price: "₹26,000", colSpan: 3 },
  { slot: "[ stone head, plinth ]", title: "Yakshi Fragment", price: "On request", colSpan: 4 },
];

const inkedTiles = [
  { slot: "[ miniature, framed ]", title: "Pahari Miniature", price: "₹1,62,000", colSpan: 4 },
  { slot: "[ block-print folio ]", title: "Sanganeri Folio", price: "₹18,000", colSpan: 3 },
  { slot: "[ illuminated manuscript — 4:5 ]", title: "Gold-leaf Manuscript Page", price: "On request", colSpan: 5, rowSpan: 2, captionSize: "lg" },
  { slot: "[ pigment tray ]", title: "Wasli Study", price: "₹34,000", colSpan: 3 },
  { slot: "[ scribe at work ]", title: "Nastaliq Panel", price: "₹58,000", colSpan: 4 },
];

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        background: "#0a0806",
      }}
    >
      <Hero />
      <RouteSection />
      <Catalogue />
      <Caravan />

      <BentoSection
        screenLabel="Bento — Woven"
        bg="#0a0806"
        eyebrow="01 — Textile · 48 pieces"
        title="Woven"
        description="Ikat, kalamkari, pashmina. Natural dye only — madder, indigo, pomegranate rind — and never a loom running faster than the weaver wants it to."
        seeAll="See all 48"
        tiles={wovenTiles}
      />

      <BentoSection
        screenLabel="Bento — Struck & Cast"
        bg="#0d0a08"
        eyebrow="02 — Metal · 36 pieces"
        title="Struck &"
        titleAccent="Cast"
        description="Silver raised from a single sheet, bronze poured by lost wax. Nothing spun, nothing plated, every foot signed by the hand that finished it."
        seeAll="See all 36"
        tiles={metalTiles}
      />

      <BentoSection
        screenLabel="Bento — Carved"
        bg="#0a0806"
        eyebrow="03 — Stone & wood · 22 pieces"
        title="Carved"
        description="Sandstone, teak, walnut root. The slowest things we sell — eleven weeks on a panel, and we hold the whole season before the first cut is made."
        seeAll="See all 22"
        tiles={carvedTiles}
      />

      <BentoSection
        screenLabel="Bento — Inked"
        bg="#0d0a08"
        eyebrow="04 — Paper · 78 pieces"
        titleAccent="Inked"
        titleTrailing=" & Illuminated"
        title=""
        description="Miniatures on wasli, block-printed folios, gold-leaf marginalia. The smallest work in the house and the hardest to replace."
        seeAll="See all 78"
        tiles={inkedTiles}
      />

      <Landing />

      <Story
        screenLabel="Story — Patience & Pigment"
        bg="#0a0806"
        align="left"
        gradientDirection="90deg"
        imageStyle={{
          right: "-2%",
          top: "-38%",
          width: 760,
          filter:
            "grayscale(1) sepia(.42) saturate(1.4) hue-rotate(-8deg) brightness(.72) contrast(1.15)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 55% 50%, #000 40%, transparent 82%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 55% 50%, #000 40%, transparent 82%)",
        }}
        title="Patience"
        titleAccent="& Pigment"
        body="Nine families, four generations, one indigo vat that has never been allowed to go cold. We commission a year ahead so nothing has to be rushed — and so the workshop is paid before the first cut is made."
        stats={[
          { value: "31", label: "Ateliers" },
          { value: "4", label: "Generations" },
          { value: <>100<span style={{ fontSize: 20 }}>%</span></>, label: "Paid upfront" },
        ]}
      />

      <Story
        screenLabel="Story — Distance & Dust"
        bg="#0d0a08"
        align="right"
        imageStyle={{
          left: "-4%",
          top: "-18%",
          width: 720,
          filter:
            "grayscale(1) sepia(.42) saturate(1.4) hue-rotate(-8deg) brightness(.7) contrast(1.15)",
          WebkitMaskImage:
            "radial-gradient(ellipse 58% 58% at 45% 50%, #000 40%, transparent 82%)",
          maskImage:
            "radial-gradient(ellipse 58% 58% at 45% 50%, #000 40%, transparent 82%)",
        }}
        title="Distance"
        titleAccent="& Dust"
        body="Two of us spend six months a year on the road — Margilan, Bukhara, Bhuj, Srinagar. Nothing is bought from a photograph, and nothing is bought from a middleman."
        stats={[
          { value: "6", label: "Months buying" },
          { value: "14", label: "Towns visited" },
          { value: "0", label: "Middlemen" },
        ]}
      />

      <Story
        screenLabel="Story — Fire & Silver"
        bg="#0a0806"
        align="left"
        imageStyle={{
          right: "-6%",
          top: "-56%",
          width: 820,
          filter:
            "grayscale(1) sepia(.46) saturate(1.5) hue-rotate(-6deg) brightness(.66) contrast(1.2)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 55% at 55% 55%, #000 38%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 55% 55% at 55% 55%, #000 38%, transparent 80%)",
        }}
        title="Fire"
        titleAccent="& Silver"
        body="A ewer is raised from one flat sheet, struck some forty thousand times. The furnace in Srinagar has not gone out since 1911 — we are its largest single buyer, and we ask for less each year, not more."
        stats={[
          { value: "40k", label: "Hammer strikes" },
          { value: "1911", label: "Furnace lit" },
          { value: "9", label: "Smiths left" },
        ]}
      />

      <Story
        screenLabel="Story — Ink & Memory"
        bg="#0d0a08"
        align="right"
        imageStyle={{
          left: "-10%",
          top: "-4%",
          width: 640,
          filter:
            "grayscale(1) sepia(.4) saturate(1.35) hue-rotate(-10deg) brightness(.74) contrast(1.12)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 45%, #000 42%, transparent 84%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 45%, #000 42%, transparent 84%)",
        }}
        title="Ink"
        titleAccent="& Memory"
        body="Squirrel-hair brushes of three bristles, ground lapis, burnished gold. A single folio takes a painter in Bikaner four months, and the last workshop teaching it has eleven students."
        stats={[
          { value: "3", label: "Bristle brush" },
          { value: "4", label: "Months a folio" },
          { value: "11", label: "Students left" },
        ]}
      />

      <Plates />
      <Makers />
      <ViewingRoom />
      <Enquire />
    </main>
  );
}
