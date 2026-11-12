import Link from 'next/link';

export default function EntryList({ items }) {
  return (
    <ul className="entry-list">
      {items.map((item) => {
        const inner = (
          <>
            <span className="entry-title">{item.title}</span>
            {item.note ? <span className="entry-note">{item.note}</span> : null}
          </>
        );

        return (
          <li key={item.href || item.title}>
            {item.href ? (
              <Link href={item.href} className="entry-card">
                {inner}
              </Link>
            ) : (
              <div className="entry-card is-pending">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
