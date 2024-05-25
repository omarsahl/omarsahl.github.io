import React from 'react';
import ChipList from './chiplist';
import { projects } from '../data/osdata';
import LinkArrow from '../icons/linkarrow';

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected Projects"
    >
      <h2 className="pb-5 text-lg font-bold tracking-normal text-strawberry-600 md:pb-10 md:text-xl">
        Selected Projects
      </h2>
      <ol className="group/projects">
        {projects.map((project) => (
          <li className="mb-12" key={project.order}>
            <ProjectEntry {...project} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProjectEntry({
  name,
  client,
  description,
  urls,
  technologies,
  thumbnail,
}) {
  return (
    <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-6 lg:hover:!opacity-100 lg:group-hover/projects:opacity-70">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 mb-5 mt-8 flex items-start justify-center sm:col-span-2 md:my-4">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={name}
            className="aspect-square w-28 max-w-36 rounded-2xl lg:w-full lg:max-w-28 lg:rounded-3xl"
          />
        ) : (
          <div className="flex aspect-square w-28 max-w-36 items-center justify-center rounded-2xl bg-gray-700 lg:w-full lg:max-w-28 lg:rounded-3xl">
            <h1 className="p-4 text-center text-sm font-medium text-gray-400">
              {name}
            </h1>
          </div>
        )}
      </div>
      <div className="z-10 sm:col-span-6">
        <h3 className="text-base font-bold leading-snug text-white">{name}</h3>
        {client && (
          <h4 className="mt-1 text-sm font-semibold leading-snug text-strawberry-600">
            {client}
          </h4>
        )}
        <p
          className="mt-2 text-sm leading-normal"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div>
          {urls && urls.length > 0 && (
            <ul className="group mt-6">
              {urls.map((url, index) => (
                <li className="group/url mt-2" key={index}>
                  <ProjectLink {...url} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <ChipList labels={technologies} />
      </div>
    </div>
  );
}

function ProjectLink({ name, url }) {
  return (
    <a
      className="group inline-flex items-center font-mono text-sm font-semibold leading-tight"
      aria-label={`${name} (opens in a new tab)`}
      target="_blank"
      rel="noreferrer noopener"
      href={url}
    >
      <span>
        <span className="border-b border-transparent pb-px transition group-hover/url:border-strawberry-600 motion-reduce:transition-none">
          {name}
        </span>
        <span className="whitespace-nowrap">
          <LinkArrow className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/url:-translate-y-1 group-hover/url:translate-x-1 group-focus-visible/url:-translate-y-1 group-focus-visible/url:translate-x-1 motion-reduce:transition-none" />
        </span>
      </span>
    </a>
  );
}
