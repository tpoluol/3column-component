export default function Card({ data }) {
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
  let url = data.imgUrl;
  let color = data.bgColor;
  console.log(url);
  console.log(urlVariants[url]);
  return (
    <article className="">
      <div className={`${colorVariants[color]} `}>
        <img src={`${urlVariants[url]}`} alt="asd" />
        <p className="font-BigShouldersDisplay text-white text-2xl">
          {data.title}
        </p>
        <p className="text-Verylightgray font-LexendDeca text-xs">
          {data.content}
        </p>
        <button className={`${color} rounded-full pt-2`}>Learn More</button>
      </div>
    </article>
  );
}
