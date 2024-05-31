'use client';

import React from 'react';
import { useState, useEffect } from 'react';

export default function MouseTracker() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    background: `radial-gradient(700px at ${mousePos.x}px ${mousePos.y}px, rgba(244, 39, 78, 0.11), transparent)`,
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 hidden transition duration-300 lg:block"
      style={style}
    />
  );
}
