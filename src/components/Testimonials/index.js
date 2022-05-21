import man01 from "../../assets/man01.jpg";

export default function Testimonials() {
  return (
    <section className="py-12">
      <div className="max-w-7xl w-11/12 mx-auto my-0">
        <span className="uppercase text-gray-900 tracking-widest text-lg font-body block text-center font-bold">
          depoimentos
        </span>
        <h2 className="font-title font-bold text-accent text-4xl lg:text-5xl text-center my-4">
          O que os clientes dizem
        </h2>
        <p className="text-gray-900 text-xl text-center w-11/12 max-w-xl mx-auto">
          Damos muito valor a relacionamentos fortes e vimos os benefícios que
          eles trazem para o nosso negócio. O feedback do cliente é vital para
          nos ajudar a acertar.
        </p>

        <div className="flex gap-2 flex-wrap justify-center mt-8">
          <div className="bg-gray-200 p-4 pt-8 pb-8 rounded-xl w-56">
            <figure className="w-11/12 aspect-square overflow-hidden rounded-full bg-white border-white border-8 mx-auto">
              <img
                src={man01}
                alt="man"
                className="block w-full h-full object-cover object-center"
              ></img>
            </figure>
            <p className="text-base font-body text-gray-900 mt-6">
              Vitae suscipit tellus mauris a diam meecenas sed enim ut. Mauris
              augue neque gravida in fermentum. Praesent sempre feugiat nibh sed
              pulvinar proin.
            </p>

            <div className="mt-6">
              <h3 className="text-accent text-xl font-title font-bold text-center">
                Mattie Smith
              </h3>
              <span className="text-base text-gray-600 text-center block font-bold font-body">
                Contador-auditor
              </span>
            </div>
          </div>

          <div className="bg-gray-200 p-4 pt-8 pb-8 rounded-xl w-56">
            <figure className="w-11/12 aspect-square overflow-hidden rounded-full bg-white border-white border-8 mx-auto">
              <img
                src={man01}
                alt="man"
                className="block w-full h-full object-cover object-center"
              ></img>
            </figure>
            <p className="text-base font-body text-gray-900 mt-6">
              Vitae suscipit tellus mauris a diam meecenas sed enim ut. Mauris
              augue neque gravida in fermentum. Praesent sempre feugiat nibh sed
              pulvinar proin.
            </p>

            <div className="mt-6">
              <h3 className="text-accent text-xl font-title font-bold text-center">
                Mattie Smith
              </h3>
              <span className="text-base text-gray-600 text-center block font-bold font-body">
                Contador-auditor
              </span>
            </div>
          </div>

          <div className="bg-gray-200 p-4 pt-8 pb-8 rounded-xl w-56">
            <figure className="w-11/12 aspect-square overflow-hidden rounded-full bg-white border-white border-8 mx-auto">
              <img
                src={man01}
                alt="man"
                className="block w-full h-full object-cover object-center"
              ></img>
            </figure>
            <p className="text-base font-body text-gray-900 mt-6">
              Vitae suscipit tellus mauris a diam meecenas sed enim ut. Mauris
              augue neque gravida in fermentum. Praesent sempre feugiat nibh sed
              pulvinar proin.
            </p>

            <div className="mt-6">
              <h3 className="text-accent text-xl font-title font-bold text-center">
                Mattie Smith
              </h3>
              <span className="text-base text-gray-600 text-center block font-bold font-body">
                Contador-auditor
              </span>
            </div>
          </div>

          <div className="bg-gray-200 p-4 pt-8 pb-8 rounded-xl w-56">
            <figure className="w-11/12 aspect-square overflow-hidden rounded-full bg-white border-white border-8 mx-auto">
              <img
                src={man01}
                alt="man"
                className="block w-full h-full object-cover object-center"
              ></img>
            </figure>
            <p className="text-base font-body text-gray-900 mt-6">
              Vitae suscipit tellus mauris a diam meecenas sed enim ut. Mauris
              augue neque gravida in fermentum. Praesent sempre feugiat nibh sed
              pulvinar proin.
            </p>

            <div className="mt-6">
              <h3 className="text-accent text-xl font-title font-bold text-center">
                Mattie Smith
              </h3>
              <span className="text-base text-gray-600 text-center block font-bold font-body">
                Contador-auditor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
