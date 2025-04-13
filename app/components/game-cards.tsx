interface Props {
  title: string;
  description: string;
  cta: string;
}

function GameCards({ title, description, cta }: Props) {
  return (
    <article className="border-primary/50 border-2 rounded-lg p-4 flex flex-col gap-16 w-[300px] justify-between bg-gradient-to-b odd:from-backgroundSecondary/70 even:from-backgroundPrimary/70 to-white/15 shadow-primary/20 shadow-2xl hover:scale-110 hover:z-20 transition duration-700">
      <div>
        <h4 className="text-primary font-bold">{title}</h4>
        <p className="text-primary/70 font-semibold">{description}</p>
      </div>
      <button className="bg-primary hover:bg-primary/80 text-backgroundSecondary px-4 py-2 rounded-lg font-bold">
        {cta}
      </button>
    </article>
  );
}

export default GameCards;
