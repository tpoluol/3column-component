export default function Card({ data, index }) {
  const textVariants = {
    orange: 'text-Brightorange',
    darkcyan: 'text-Darkcyan',
    verydarkcyan: 'text-Verydarkcyan',
  };
  const colorVariants = {
    orange: 'bg-Brightorange',
    darkcyan: 'bg-Darkcyan',
    verydarkcyan: 'bg-Verydarkcyan',
  };
  const urlVariants = {
    sedans: '/icon-sedans.svg',
    suvs: '/icon-suvs.svg',
    luxury: '/icon-luxury.svg',
  };
  const round = {
    0: 'rounded-t-xl',
    2: 'rounded-b-xl',
  };
  const round2 = {
    0: 'rounded-l-xl',
    2: 'rounded-r-xl',
  };
  let url = data.imgUrl;
  let color = data.bgColor;
  console.log(url);
  console.log(urlVariants[url]);
  let ee = index;
  return (
    <article
      className={`${round[ee]} md:rounded-none md:${round2[ee]}  max-w-[250px] ${colorVariants[color]} flex flex-col md:flex p-10 gap-5`}
    >
      <div className="max-w-[50px]">
        <img src={`${urlVariants[url]}`} alt="asd" />
      </div>
      <p className="font-BigShouldersDisplay text-white text-3xl">
        {data.title}
      </p>
      <p className="text-Verylightgray/80 leading-5 font-LexendDeca text-xs">
        {data.content}
      </p>
      <button
        className={`text-xs md:mt-10 ${textVariants[color]} hover:${colorVariants[color]} bg-white hover:text-white hover:border-2 max-w-[110px] font-LexendDeca py-3 rounded-full`}
      >
        Learn More
      </button>
    </article>
  );
}
