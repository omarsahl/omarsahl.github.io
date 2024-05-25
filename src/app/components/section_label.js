import React from 'react';

export default function SectionLabel({ label }) {
  return (
    <h2 className="pb-5 text-lg font-bold tracking-normal text-strawberry-600 md:pb-10 md:text-xl">
      {label}
    </h2>
  );
}
