// HeroSlider.jsx
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const HeroSlider = ({ images = [], speed = 160 /* seconds for one full loop */ }) => {
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);

  // Дублируем массив для бесшовной ленты
  const duplicated = [...images, ...images];

  // Измеряем ширину "одной" ленты (оригинального массива)
  const measureTrack = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // scrollWidth содержит полную ширину дублированного трека;
    // делим на 2 — получаем ширину одной ленты
    const full = el.scrollWidth || 0;
    const one = Math.floor(full / 2);
    if (one > 0) setTrackWidth(one);
  }, []);

  // Когда все изображения оригинальной ленты загрузились — измеряем
  useEffect(() => {
    if (!images.length) return;
    if (loadedCount >= images.length) {
      // небольшая задержка чтобы браузер отрисовал layout
      requestAnimationFrame(() => {
        measureTrack();
      });
    }
  }, [loadedCount, images.length, measureTrack]);

  // Перемеряем при ресайзе
  useEffect(() => {
    const onResize = () => {
      // если уже измеряли — перемеряем
      measureTrack();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureTrack]);

  // Хендлер для onLoad каждой картинки (оригинального набора)
  const handleImageLoad = () => {
    setLoadedCount((c) => c + 1);
  };

  // Не рендерим анимацию, пока не знаем trackWidth
  // однако выводим трек без анимации, чтобы пользователь видел content в момент загрузки
  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        {/* Если trackWidth известен — запускаем motion-анимацию,
            иначе рендерим статичный трек (пока грузятся картинки) */}
        {trackWidth > 0 ? (
          <motion.div
            className="slider-track"
            ref={trackRef}
            // animate x от 0 до -trackWidth (в пикселях)
            animate={{ x: [0, -trackWidth] }}
            transition={{
              repeat: Infinity,
              duration: speed,
              ease: "linear",
            }}
            style={{ translateZ: 0 /* малый perf-hack */ }}
          >
            {duplicated.map((src, i) => (
              <div className="slide" key={i}>
                <img src={src} alt={`slide-${i}`} />
              </div>
            ))}
          </motion.div>
        ) : (
          // Пока ждём измерения — рендерим тот же трек без motion, но
          // навешиваем onLoad только на первые images.length картинок
          <div className="slider-track" ref={trackRef}>
            {duplicated.map((src, i) => (
              <div className="slide" key={i}>
                <img
                  src={src}
                  alt={`slide-${i}`}
                  // callback только для первой половины (оригинальной ленты)
                  onLoad={i < images.length ? handleImageLoad : undefined}
                />
              </div>
            ))}
          </div>
        )}

        <div className="gradient left" />
        <div className="gradient right" />
      </div>
    </div>
  );
};

export default HeroSlider;