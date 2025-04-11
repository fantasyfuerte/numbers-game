interface Props {
  title: string;
  description: string;
  img: string;
  cta: string;
}

function GameCards({ title, description, img, cta }: Props) {
  return (
    <article className="">
      <h4>{title}</h4>
      <p>{description}</p>
      <button className="bg-primary text-backgroundSecondary px-4 py-2 rounded-lg">
        {cta}
      </button>
    </article>
  );
}

export default GameCards;
