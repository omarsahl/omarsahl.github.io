'use client';

import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { url: '#experience', label: 'Experience', id: 'experience' },
  { url: '#projects', label: 'Projects', id: 'projects' },
  { url: '#certification', label: 'Certification', id: 'certification' },
  { url: '#blog', label: 'Blog', id: 'blog' },
];

export default function NavTabs() {
  const [activeId, setActiveId] = useState('experience');

  useEffect(() => {
    const observers = [];

    NAV_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="Navigation">
      <ul className="mt-16 w-max">
        {NAV_ITEMS.map(({ url, label, id }) => (
          <NavItem key={id} url={url} label={label} active={activeId === id} />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ url, label, active }) {
  return (
    <li>
      <a className="group flex items-center py-3" href={url}>
        <span
          className={`mr-4 h-px transition-all motion-reduce:transition-none ${
            active
              ? 'w-16 bg-gray-200'
              : 'w-8 bg-gray-600 group-hover:w-16 group-hover:bg-gray-200 group-focus-visible:w-16 group-focus-visible:bg-gray-200'
          }`}
        />
        <span
          className={`text-xs font-bold uppercase tracking-widest transition-colors motion-reduce:transition-none ${
            active
              ? 'text-gray-200'
              : 'text-gray-500 group-hover:text-gray-200 group-focus-visible:text-gray-200'
          }`}
        >
          {label}
        </span>
      </a>
    </li>
  );
}
