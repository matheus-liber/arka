export default function LoreArticle({ blocks, skipTitle }) {
  const items = skipTitle && blocks[0]?.type === 'h2' ? blocks.slice(1) : blocks;

  return (
    <article className="lore-article">
      {items.map((block, index) => {
        if (block.type === 'h2') {
          return <h2 key={index}>{block.text}</h2>;
        }

        if (block.type === 'h3') {
          return <h3 key={index}>{block.text}</h3>;
        }

        if (block.type === 'note') {
          return (
            <p key={index} className="lore-note">
              {block.text}
            </p>
          );
        }

        return <p key={index}>{block.text}</p>;
      })}
    </article>
  );
}
