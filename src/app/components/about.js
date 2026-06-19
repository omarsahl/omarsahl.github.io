import React from 'react';
import { resumeUrl } from '../data/osdata';
import LinkArrow from '../icons/linkarrow';

export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        <a href="/">Omar Sahl</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
        Software Engineer
      </h2>
      <p className="mr-12 mt-5 leading-normal">
        Software engineer specialized in native Android development with 6+ years of experience.
      </p>
      <p className="mr-12 mt-3 leading-normal">
        Delivering high-quality software projects with precise alignment to specifications, requirements,
        and deadlines, with a focus on architecture, maintainability, and performance.
      </p>
      <div className="mt-8">
        <a
          className="group/url inline-flex items-baseline text-base font-semibold leading-tight text-white hover:text-strawberry-600 focus-visible:text-strawberry-600"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View full résumé (opens in a new tab)"
        >
          <span>
            View full résumé
            <span className="inline-block">
              <LinkArrow className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/url:-translate-y-1 group-hover/url:translate-x-1 group-focus-visible/url:-translate-y-1 group-focus-visible/url:translate-x-1 motion-reduce:transition-none" />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
