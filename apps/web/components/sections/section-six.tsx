"use client";

import { useState } from "react";

const leftCards = [
  {
    title: "Certificado em papel",
    description: "Um pedaço de papel que pode ser perdido ou esquecido.",
    icon: "📄",
  },
  {
    title: "Plataforma que fecha a janela",
    description: "O acesso termina quando você sai da tela.",
    icon: "🪟",
  },
  {
    title: "Você é apenas aluno",
    description: "Você consome o conteúdo e segue instruções.",
    icon: "🎓",
  },
  {
    title: "Histórico preso na instituição",
    description: "Se a plataforma acabar, seu histórico some com ela.",
    icon: "🔒",
  },
];

const rightCards = [
  {
    title: "Conquista verificável on-chain",
    description:
      "Badges digitais únicas, verificáveis por qualquer instituição.",
    accentColor: "#ff4fd8",
    glowColor: "rgba(255,79,216,0.3)",
  },
  {
    title: "Mundo que continua existindo",
    description:
      "Um universo persistente que evolui com você e com outros exploradores.",
    accentColor: "#7b61ff",
    glowColor: "rgba(123,97,255,0.3)",
  },
  {
    title: "Você também é criador",
    description: "Você cria, constrói, ensina e deixa sua marca no mundo.",
    accentColor: "#00d2ff",
    glowColor: "rgba(0,210,255,0.3)",
  },
  {
    title: "Identidade digital portátil",
    description:
      "Seu histórico é seu. Leve, seguro e reconhecido em qualquer lugar.",
    accentColor: "#58a6ff",
    glowColor: "rgba(88,166,255,0.3)",
  },
];

type LeftCardData = (typeof leftCards)[number];
type RightCardData = (typeof rightCards)[number];

const DimCircleIcon = () => (
  <div
    style={{
      width: 52,
      height: 52,
      borderRadius: "50%",
      border: "1.5px solid #2a3a5a",
      background: "#0a1026",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <div
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        border: "1.5px solid #3a4a6a",
      }}
    />
  </div>
);

const GlowCircleIcon = ({ color, glow }: { color: string; glow: string }) => (
  <div
    style={{
      width: 52,
      height: 52,
      borderRadius: "50%",
      border: `1.5px solid ${color}`,
      background: "#0a1833",
      boxShadow: `0 0 22px ${glow}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <div
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        border: `1.5px solid ${color}`,
        boxShadow: `0 0 10px ${glow}`,
      }}
    />
  </div>
);

const LeftCard = ({ card }: { card: LeftCardData }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        borderRadius: 18,
        border: `1px solid ${hovered ? "#2a3f6f" : "#172554"}`,
        background: hovered ? "#06102a" : "#040b1d",
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "0 28px",
        transition: "all 0.25s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle left accent line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          bottom: "20%",
          width: 3,
          borderRadius: 4,
          background:
            "linear-gradient(to bottom, transparent, #2a3f6f, transparent)",
          opacity: hovered ? 0.8 : 0.3,
          transition: "opacity 0.25s ease",
        }}
      />

      <DimCircleIcon />

      <div>
        <h3
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: "#c8d8ee",
            lineHeight: 1.2,
            marginBottom: 6,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#6a7e9e",
            lineHeight: 1.5,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

const RightCard = ({ card }: { card: RightCardData }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        borderRadius: 18,
        border: `1px solid ${hovered ? card.accentColor + "60" : "#17325f"}`,
        background: "#081126",
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "0 28px",
        transition: "all 0.25s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at left center, ${card.glowColor} 0%, transparent 65%)`,
          opacity: hovered ? 0.6 : 0.3,
          transition: "opacity 0.25s ease",
          pointerEvents: "none",
        }}
      />

      {/* right accent line */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "20%",
          bottom: "20%",
          width: 3,
          borderRadius: 4,
          background: `linear-gradient(to bottom, transparent, ${card.accentColor}, transparent)`,
          opacity: hovered ? 0.9 : 0.35,
          transition: "opacity 0.25s ease",
        }}
      />

      <GlowCircleIcon color={card.accentColor} glow={card.glowColor} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h3
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: 6,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#9ab0cc",
            lineHeight: 1.5,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default function SectionSix({ className }: { className?: string }) {
  return (
    <section
      aria-label="Sessao 6"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 0,
        overflow: "hidden",
        background: "#050816",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
      className={className}
    >
      {/* Star field dots */}
      {[...Array(28)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: i % 5 === 0 ? 2 : 1,
            height: i % 5 === 0 ? 2 : 1,
            borderRadius: "50%",
            background: "white",
            opacity: 0.08 + (i % 4) * 0.04,
            top: `${(i * 37 + 11) % 100}%`,
            left: `${(i * 53 + 7) % 100}%`,
          }}
        />
      ))}

      <div
        style={{
          margin: "0 auto",
          display: "flex",
          height: "100%",
          width: "100%",
          maxWidth: 1760,
          flexDirection: "column",
          padding: "24px 64px 32px",
          gap: 24,
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "4px 16px",
              border: "1px solid #1a3a5a",
              borderRadius: 999,
              background: "rgba(91,192,235,0.06)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                border: "1px solid #5bc0eb",
                boxShadow: "0 0 8px rgba(91,192,235,0.6)",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.45em",
                color: "#5bc0eb",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              O QUE TORNA ÚNICO
            </span>
          </div>

          <h2
            style={{
              fontSize: 64,
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              textAlign: "center",
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <span style={{ color: "white" }}>Dois mundos. </span>
            <span
              style={{
                background: "linear-gradient(to right, #5bc0eb, #58a6ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 18px rgba(91,192,235,0.45))",
              }}
            >
              Dois futuros.
            </span>
          </h2>

          <p
            style={{
              fontSize: 16,
              fontWeight: 300,
              color: "#8aa4c0",
              letterSpacing: "-0.02em",
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Não é evolução. É uma nova forma de aprender.
          </p>
        </div>

        {/* Two containers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* LEFT CONTAINER — Educação Hoje */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              borderRadius: 24,
              border: "1px solid #172554",
              background: "rgba(4,11,29,0.7)",
              padding: "20px 20px 20px 20px",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Container title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                paddingBottom: 12,
                borderBottom: "1px solid #172554",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  border: "1.5px solid #5a6e8e",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.28em",
                  color: "#8aa4c0",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                EDUCAÇÃO HOJE
              </span>
            </div>

            {/* 4 left cards */}
            {leftCards.map((card, i) => (
              <LeftCard key={i} card={card} />
            ))}
          </div>

          {/* RIGHT CONTAINER — Mnemos-Mundi */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              borderRadius: 24,
              border: "1px solid #17325f",
              background: "rgba(8,17,38,0.7)",
              padding: "20px 20px 20px 20px",
              backdropFilter: "blur(12px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Container ambient glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "10%",
                right: "10%",
                height: 2,
                background:
                  "linear-gradient(to right, transparent, #33d1ff80, #7b61ff80, transparent)",
                borderRadius: 999,
              }}
            />

            {/* Container title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                paddingBottom: 12,
                borderBottom: "1px solid #1a3a5f",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  border: "1.5px solid #33d1ff",
                  boxShadow: "0 0 12px rgba(51,209,255,0.5)",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.28em",
                  color: "#5bc0eb",
                  fontFamily: "'Space Grotesk', sans-serif",
                  textShadow: "0 0 12px rgba(91,192,235,0.4)",
                }}
              >
                MNEMOS-MUNDI
              </span>
            </div>

            {/* 4 right cards */}
            {rightCards.map((card, i) => (
              <RightCard key={i} card={card} />
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            flexShrink: 0,
            borderRadius: 999,
            border: "1px solid #1a3050",
            background: "rgba(6,14,36,0.85)",
            backdropFilter: "blur(16px)",
            padding: "14px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            boxShadow:
              "0 0 40px rgba(51,209,255,0.06), inset 0 1px 0 rgba(91,192,235,0.08)",
          }}
        >
          {/* Star icon */}
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "1.5px solid #33d1ff",
              background: "rgba(51,209,255,0.06)",
              boxShadow: "0 0 16px rgba(51,209,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
                stroke="#5bc0eb"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="rgba(91,192,235,0.15)"
              />
            </svg>
          </div>

          {/* Text left */}
          <span
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "#c8d8ee",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            O futuro da educação não é assistir conteúdo.
          </span>

          {/* Divider */}

          <div
            style={{
              width: 1,
              height: 22,
              background:
                "linear-gradient(to bottom, transparent, #2a4a6a, transparent)",
              flexShrink: 0,
            }}
          />

          {/* Text right */}
          <span
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "#c8d8ee",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            É construir uma{" "}
            <span
              style={{
                color: "#5bc0eb",
                textShadow: "0 0 12px rgba(91,192,235,0.5)",
              }}
            >
              identidade
            </span>{" "}
            através do{" "}
            <span
              style={{
                color: "#5bc0eb",
                textShadow: "0 0 12px rgba(91,192,235,0.5)",
              }}
            >
              conhecimento.
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
