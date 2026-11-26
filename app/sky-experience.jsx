"use client";

import { useState } from "react";
import Image from "next/image";

export default function SkyExperience() {
  const [isDusk, setIsDusk] = useState(true);

  return (
    <div className={`sky-scene ${isDusk ? "is-dusk" : "is-dawn"}`}>
      <div className="sky-sun" aria-hidden="true" />
      <div className="sky-stars" aria-hidden="true" />
      <Image
        src="/valley-glass-lodge-emblem.png"
        alt=""
        width={1158}
        height={480}
        className="scene-logo"
        aria-hidden="true"
      />
      <div className="scene-label"><span className="scene-line" /> IMAGINA DESPERTAR AQUÍ</div>
      <button
        className="sky-toggle"
        type="button"
        onClick={() => setIsDusk((value) => !value)}
        aria-label={`Cambiar a cielo de ${isDusk ? "amanecer" : "atardecer"}`}
        aria-pressed={isDusk}
      >
        <span className="toggle-icon" aria-hidden="true">{isDusk ? "☾" : "☼"}</span>
        <span>{isDusk ? "Atardecer" : "Amanecer"}</span>
        <span className="toggle-swap" aria-hidden="true">↗</span>
      </button>
      <span className="scene-coordinate">UN BOSQUE. UN VALLE. TU TIEMPO.</span>
    </div>
  );
}
