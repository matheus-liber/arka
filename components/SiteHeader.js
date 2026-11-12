'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '../lib/catalog';

function isActive(pathname, href) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="site-mark">
        Arka
      </Link>
      <nav className="site-nav" aria-label="Seções">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(pathname, item.href) ? 'is-active' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
