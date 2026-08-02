export default function Tile({
  slot,
  image,
  alt = "",
  title,
  price,
  tag,
  className = "",
  style = {},
  captionSize = "sm",
}) {
  const captionFont = captionSize === "lg" ? 24 : 20;
  const captionPad = captionSize === "lg" ? "20px 22px" : "16px 18px";

  return (
    <div
      className={`tile-hatch relative overflow-hidden flex items-end ${className}`}
      style={style}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 10,
            letterSpacing: "0.18em",
            color: "#6e665d",
          }}
        >
          {slot}
        </span>
      )}

      {tag && (
        <span
          className="absolute left-4 top-4"
          style={{
            fontSize: 9,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#0d0a08",
            background: "#c9a227",
            padding: "5px 10px",
          }}
        >
          {tag}
        </span>
      )}

      {(title || price) && (
        <div
          className="relative w-full flex items-baseline justify-between gap-3"
          style={{
            padding: captionPad,
            background: "linear-gradient(180deg, transparent, rgba(10,8,6,.9))",
          }}
        >
          {title && (
            <span
              className="font-display"
              style={{ fontSize: captionFont, color: "#f2eadd" }}
            >
              {title}
            </span>
          )}
          {price && (
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "#a08a5c",
                whiteSpace: "nowrap",
              }}
            >
              {price}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
