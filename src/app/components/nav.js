import React from 'react';

export default function NavTabs() {
  return (
    <nav className="nav hidden lg:block" aria-label="Navigation">
      <ul className="mt-16 w-max">
        <NavItem url="#experience" label="Experience" key="experience" />
        <NavItem url="#projects" label="Projects" key="projects" />
      </ul>
    </nav>
  );
}

function NavItem({ url, label }) {
  return (
    <li>
      <a className="group flex items-center py-3" href={url}>
        <span className="mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-200 group-focus-visible:w-16 group-focus-visible:bg-gray-200 motion-reduce:transition-none" />
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-200 group-focus-visible:text-gray-200">
          {label}
        </span>
      </a>
    </li>
  );
}
