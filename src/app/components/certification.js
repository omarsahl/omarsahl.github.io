import React from 'react';
import SectionLabel from './section_label';
import { certifications } from '../data/osdata';
import LinkArrow from '../icons/linkarrow';

export default function Certification() {
  return (
    <section
      id="certification"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Certification"
    >
      <SectionLabel label="Certification" />
      <ol className="group/certifications">
        {certifications.map((certificate) => (
          <li className="mb-12" key={certificate.order}>
            <CertificationEntry {...certificate} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function CertificationEntry({ name, date, description, url }) {
  return (
    <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/certifications:opacity-70">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2"
        aria-label={date}
      >
        {date}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="text-base font-bold leading-snug text-white">{name}</h3>
        <ul className="mt-3 list-disc">
          {description.map((line, index) => (
            <li className="mt-1" key={index}>
              <p className="text-sm leading-normal">{line}</p>
            </li>
          ))}
        </ul>
        <CertificateLink {...url} />
      </div>
    </div>
  );
}

function CertificateLink({ name, url }) {
  return (
    <a
      className="group/url mt-8 inline-flex items-center font-mono text-sm font-semibold leading-tight"
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
