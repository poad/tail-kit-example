'use client';

import { ReactNode } from 'react';
import Drawer from '../components/Drawer';
import 'tailwindcss/tailwind.css';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <main className="pt-0 mt-0">
          <div className="flex flex-col min-h-screen py-2">
            <Drawer />

            {children}
          </div>
          <footer className="flex items-center justify-center w-full h-24 border-t">
            <a
              className="flex items-center justify-center"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
            </a>
          </footer>
        </main>
      </body>
    </html>
  );
}
