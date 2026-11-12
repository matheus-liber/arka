export default function PageShell({ eyebrow, title, lede, notice = true, children }) {
  return (
    <main className="page-shell">
      <header className="page-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </header>
      {notice ? (
        <p className="skeleton-note">
          Esqueleto da enciclopédia. O texto canônico virá do espelho em{' '}
          <code>content/lore/</code>.
        </p>
      ) : null}
      {children}
    </main>
  );
}
