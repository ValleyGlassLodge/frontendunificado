"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SkyExperience() {
  const [isDusk, setIsDusk] = useState(true);

  useEffect(() => {
    const cycle = window.setInterval(() => {
      setIsDusk((current) => !current);
    }, 16000);

    return () => window.clearInterval(cycle);
  }, []);

  return (
    <div className={`sky-scene ${isDusk ? "is-dusk" : "is-dawn"}`}>
      <div className="sky-sun" aria-hidden="true" />
      <div className="sky-stars" aria-hidden="true" />
      <span className="shooting-star" aria-hidden="true" />
      <span className="shooting-star shooting-star-two" aria-hidden="true" />
      <span className="shooting-star shooting-star-three" aria-hidden="true" />
      <span className="shooting-star shooting-star-four" aria-hidden="true" />
      <span className="shooting-star shooting-star-five" aria-hidden="true" />
      <Image
        src="/valley-glass-lodge-emblem.png"
        alt=""
        width={1158}
        height={480}
        className="scene-logo"
        aria-hidden="true"
      />
      <div className="scene-label"><span className="scene-line" /> IMAGINA DESPERTAR AQUÍ</div>
      <span className="scene-coordinate">UN BOSQUE. UN VALLE. TU TIEMPO.</span>
    </div>
  );
}
