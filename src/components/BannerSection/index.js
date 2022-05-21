import productBanner from "../../assets/productbanner.png";

export default function BannerSection() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="mx-auto my-0 w-11/12 max-w-7xl relative h-screen before:content-[''] before:w-3/4 before:h-screen before:bg-accent before:absolute before:left-2/4 before:-translate-x-2/4 lg:before:w-3/6">
        <div className="bg-white shadow-md p-4 lg:p-8 w-full max-w-xl absolute bottom-0 right-0 z-10">
          <h2 className="text-accent text-3xl lg:text-4xl font-bold font-title mb-3">
            Crie um site incrível
          </h2>
          <p className="text-gray-900 text-lg">
            Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis
            tincidunt id aliquet risus feugiat in. Auctor augue mauris augue
            neque gravida in fermentum et. Feugiat in fermentum urna.
          </p>
          <button className="cta mt-4">Saber mais</button>
        </div>

        <img
          src={productBanner}
          alt=""
          className="absolute w-full max-w-4xl top-6 lg:left-2/4 lg:top-2/4 lg:-translate-x-2/4 lg:-translate-y-2/4"
        ></img>
      </div>
    </section>
  );
}
