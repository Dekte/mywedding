"use client";
import React, { useRef, useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Autoplay: aktif saat user pertama menyentuh layar
  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
      window.removeEventListener("click", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);
  }, []);

  return (
    <html lang="en">
      <body>
        {/* AUDIO GLOBAL — tidak akan hilang meskipun halaman berubah */}
        <audio ref={audioRef} loop preload="auto">
          <source src="/music/chinese-traditional-11003.mp3" type="audio/mp3" />
        </audio>

        {children}
      </body>
    </html>
  );
}
