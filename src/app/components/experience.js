import React from 'react';
import ChipList from './chiplist';
import { workExperience } from '../data/osdata';

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-24 scroll-mt-16 md:mb-28 lg:scroll-mt-24"
      aria-label="Work Experience"
    >
      <h2 className="pb-5 text-lg font-bold tracking-normal text-strawberry-600 md:pb-10 md:text-xl">
        Experience
      </h2>
      <ol className="group/experiences">
        {workExperience.map((experience) => (
          <li className="mb-12" key={experience.order}>
            <ExperienceEntry {...experience} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function ExperienceEntry({ title, company, duration, description, skills }) {
  return (
    <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/experiences:opacity-70">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2"
        aria-label={duration}
      >
        {duration}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="text-base font-bold leading-snug text-white">{title}</h3>
        <h4 className="mt-1 text-sm font-semibold leading-snug text-strawberry-600">
          {company}
        </h4>
        <ul className="list-disc">
          {description.map((line, index) => (
            <li className="mt-1" key={index}>
              <p className="text-sm leading-normal">{line}</p>
            </li>
          ))}
        </ul>
        <ChipList labels={skills} />
      </div>
    </div>
  );
}
