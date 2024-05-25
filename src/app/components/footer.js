import React from 'react';

export default function Footer() {
  return (
    <footer className="max-w-md text-sm font-medium text-gray-500 sm:pb-0">
      <p>Built by Omar Sahl.</p>
      <p>
        Design highly inspired by Brittany Chiang&apos;s{' '}
        <a
          href="https://brittanychiang.com"
          className="font-medium text-gray-400 hover:text-strawberry-600 focus-visible:text-strawberry-600"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Brittany Chiang's website (opens in a new tab)"
        >
          website.
        </a>
      </p>
    </footer>
  );
}
