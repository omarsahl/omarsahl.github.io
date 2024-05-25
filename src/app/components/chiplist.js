import React from 'react';

export default function ChipList({ labels }) {
  return (
    labels &&
    labels.length > 0 && (
      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
        {labels.map((label, index) => (
          <li className="mr-1.5 mt-2" key={index}>
            <div className="flex items-center rounded-full bg-strawberry-600/15 px-3 py-1 text-xs font-semibold leading-5 text-strawberry-600 ">
              {label}
            </div>
          </li>
        ))}
      </ul>
    )
  );
}
