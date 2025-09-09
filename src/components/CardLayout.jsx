import React, { useEffect, useState } from "react";
import "./CardLayout.css";

// Reusable Card component
export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`card-content ${className}`}>{children}</div>;
}

// Reusable Button component
export function Button({ children, onClick, className = "" }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

// Vertical Digimon Card

const DigimonVerticalCard = ({ digimon }) => (
  <Card className="digimon-card fancy-vertical">
    <div className="header">
      <img
        src={digimon.images[0].href}
        alt={digimon.name}
        className="digimon-image circle"
      />
    </div>
    <CardContent>
      <h2 className="digimon-name">{digimon.name}</h2>

      <div className="badges">
        {digimon.levels?.map((l) => (
          <span className="badge level">{l.level}</span>
        ))}
        {digimon.types?.map((t) => (
          <span className="badge type">{t.type}</span>
        ))}
        {digimon.attributes?.map((a) => (
          <span className="badge attr">{a.attribute}</span>
        ))}
      </div>

      <p className="field">
        <strong>Field:</strong>{" "}
        {digimon.fields?.map((f) => f.field).join(", ") || "-"}
      </p>
      {digimon.releaseDate && (
        <p className="release-date">First Appearance: {digimon.releaseDate}</p>
      )}

      <div className="button-wrap">
        <Button>Learn More →</Button>
      </div>
    </CardContent>
  </Card>
);

// Compact vertical Digimon Card
const DigimonCardCompact = ({ digimon }) => (
  <Card className="digimon-card compact">
    <div className="card-inner">
      {digimon.images && digimon.images[0] && (
        <img
          src={digimon.images[0].href}
          alt={digimon.name}
          className="digimon-image"
        />
      )}
      <CardContent>
        <h2 className="digimon-name">{digimon.name}</h2>
        <div className="digimon-info">
          <div>
            <p className="label">Level:</p>
            <p>{digimon.levels?.map((l) => l.level).join(", ") || "-"}</p>
          </div>
          <div>
            <p className="label">Type:</p>
            <p>{digimon.types?.map((t) => t.type).join(", ") || "-"}</p>
          </div>
          <div>
            <p className="label">Attribute:</p>
            <p>
              {digimon.attributes?.map((a) => a.attribute).join(", ") || "-"}
            </p>
          </div>
          <div>
            <p className="label">Field:</p>
            <p>{digimon.fields?.map((f) => f.field).join(", ") || "-"}</p>
          </div>
        </div>
        {digimon.releaseDate && (
          <p className="release-date">Release Date: {digimon.releaseDate}</p>
        )}
        <div className="button-wrap">
          <Button onClick={() => alert(`More info about ${digimon.name}`)}>
            Learn More
          </Button>
        </div>
      </CardContent>
    </div>
  </Card>
);

// Horizontal Digimon Card
const DigimonCardHorizontal = ({ digimon }) => (
  <Card className="digimon-card fancy-horizontal">
    <div className="card-row">
      <div className="image-wrap">
        <img
          src={digimon.images[0].href}
          alt={digimon.name}
          className="digimon-image"
        />
      </div>
      <CardContent>
        <h2 className="digimon-name">{digimon.name}</h2>

        <div className="badges">
          {digimon.levels?.map((l) => (
            <span className="badge level">{l.level}</span>
          ))}
          {digimon.types?.map((t) => (
            <span className="badge type">{t.type}</span>
          ))}
          {digimon.attributes?.map((a) => (
            <span className="badge attr">{a.attribute}</span>
          ))}
        </div>

        <p className="field">
          <strong>Field:</strong>{" "}
          {digimon.fields?.map((f) => f.field).join(", ") || "-"}
        </p>
        {digimon.releaseDate && (
          <p className="release-date">
            First Appearance: {digimon.releaseDate}
          </p>
        )}

        <div className="button-wrap">
          <Button>Learn More →</Button>
        </div>
      </CardContent>
    </div>
  </Card>
);

// Minimal Badge-style Digimon Card
const DigimonCardBadge = ({ digimon }) => (
  <Card className="digimon-card badge">
    <h3 className="digimon-name">{digimon.name}</h3>
    {digimon.images && digimon.images[0] && (
      <img
        src={digimon.images[0].href}
        alt={digimon.name}
        className="digimon-image tiny"
      />
    )}
  </Card>
);

const DigimonCardsShowcase = ({ id = 99 }) => {
  const [digimon, setDigimon] = useState(null);

  useEffect(() => {
    fetch(`https://digi-api.com/api/v1/digimon/${id}`)
      .then((res) => res.json())
      .then((data) => setDigimon(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!digimon) return <p className="loading">Loading Digimon...</p>;

  return (
    <div className="cards-showcase">
      <DigimonVerticalCard digimon={digimon}></DigimonVerticalCard>
      {/* <DigimonCardCompact digimon={digimon} />
      <DigimonCardBadge digimon={digimon} /> */}
      <DigimonCardHorizontal digimon={digimon} />
    </div>
  );
};

export default function DigimonPage() {
  return (
    <div className="page">
      <DigimonCardsShowcase id={38} />
    </div>
  );
}
