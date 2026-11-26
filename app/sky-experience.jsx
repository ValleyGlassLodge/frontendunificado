"use client";

import { useState } from "react";

export default function SkyExperience() {
  const [isDusk, setIsDusk] = useState(true);

  return (
    <div className={`sky-scene ${isDusk ? "is-dusk" : "is-dawn"}`}>
      <div className="sky-sun" aria-hidden="true" />
      <div className="sky-stars" aria-hidden="true" />
      <div className="mountain mountain-back" aria-hidden="true" />
      <div className="mountain mountain-front" aria-hidden="true" />
      <div className="valley-fog fog-one" aria-hidden="true" />
      <div className="valley-fog fog-two" aria-hidden="true" />
      <svg className="cabin" viewBox="0 0 640 430" role="img" aria-label="Ilustración de una cabaña de vidrio entre montañas">
        <defs>
          <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#d8e5d1" stopOpacity=".12" />
            <stop offset=".55" stopColor="#e2d6b7" stopOpacity=".03" />
            <stop offset="1" stopColor="#a7c1a5" stopOpacity=".21" />
          </linearGradient>
          <linearGradient id="warm-window" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#f6d5a1" stopOpacity=".15" />
            <stop offset="1" stopColor="#ecb36c" stopOpacity=".36" />
          </linearGradient>
        </defs>
        <ellipse cx="321" cy="390" rx="250" ry="17" fill="#d5c8a5" opacity=".12" />
        <path d="M135 217 320 89l185 128v158H135z" fill="url(#glass)" stroke="#e7e5cf" strokeOpacity=".76" strokeWidth="3" />
        <path d="m135 217 185-128 185 128M320 89v286M135 217h370" fill="none" stroke="#e7e5cf" strokeOpacity=".82" strokeWidth="3" />
        <path d="M159 230h148v142H159zM333 230h148v142H333z" fill="url(#warm-window)" opacity=".74" />
        <path d="M159 230v142m148-142v142m26-142v142m148-142v142" fill="none" stroke="#e7e5cf" strokeOpacity=".48" strokeWidth="2" />
        <path d="M185 232c19 27 28 60 25 97m177-96c23 34 37 75 39 117" fill="none" stroke="#f2d8a8" strokeOpacity=".12" strokeWidth="7" />
        <path d="M310 375h21" stroke="#e7e5cf" strokeOpacity=".8" strokeWidth="3" />
      </svg>
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
