import React from 'react';
import SectionLabel from './section_label';
import { articles } from '../data/osdata';
import LinkArrow from '../icons/linkarrow';

export default function Articles() {
  return (
    <section
      id="articles"
      className="mb-20 scroll-mt-16 md:mb-28 lg:mb-40 lg:scroll-mt-24"
      aria-label="Articles"
    >
      <SectionLabel label="Articles" />
      <ol className="group/articles">
        {articles.map((article) => (
          <li className="mb-12" key={article.order}>
            <ArticleEntry {...article} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function ArticleEntry({ title, date, url, thumbnail }) {
  return (
    <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/articles:opacity-70">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <img
        className="z-10 col-span-2 rounded border-2 border-gray-200/10 transition group-hover:border-gray-200/30 sm:col-span-2"
        src={thumbnail}
      />
      <div className="z-10 col-span-6">
        <p className="-mt-1 text-sm font-semibold leading-6">{date}</p>
        <h3>
          <a
            className="group/url inline-flex items-baseline text-base font-medium leading-tight text-white  hover:text-strawberry-600 focus-visible:text-strawberry-600"
            aria-label={`${title} (opens in a new tab)`}
            target="_blank"
            rel="noreferrer noopener"
            href={url}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {title}
              <span className="whitespace-nowrap">
                <LinkArrow className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/url:-translate-y-1 group-hover/url:translate-x-1 group-focus-visible/url:-translate-y-1 group-focus-visible/url:translate-x-1 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </h3>
      </div>
    </div>
  );
}
