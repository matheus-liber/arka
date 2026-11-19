export default function OfficialPending({ folder, subject }) {
  return (
    <p className="empty-copy">
      Ainda não há documento <code>OFICIAL —</code> sobre {subject} na lore oficial
      {folder ? <> (pasta <code>{folder}</code>)</> : null}. Este caminho permanece
      no esqueleto até a equipe publicar.
    </p>
  );
}
