import plansbanner from "../../assets/plansbanner.png";

export default function PlansSection() {
  return (
    <>
      <section className="bg-gray-200 py-8">
        <div className="max-w-7xl w-11/12 mx-auto">
          <h2 className="font-title font-bold text-4xl lg:text-5xl text-accent mb-4">
            Comprar
          </h2>
          <div className="grid grid-rows-1frAutoAuto md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-900 text-xl">
                Comece a usar o static.app como hospedagem para seus sites hoje
                mesmo para obter os melhores recursos para a relação
                custo-benefício do mercado.
              </p>
            </div>

            <ul className="">
              <li className="relative before:content-[''] before:block before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:bg-correctImg before:bg-contain before:bg-center mb-2 pl-8">
                Páginas Ilimitadas
              </li>
              <li className="relative before:content-[''] before:block before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:bg-correctImg before:bg-contain before:bg-center mb-2 pl-8">
                Formularios Ilimitadas
              </li>
              <li className="relative before:content-[''] before:block before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:bg-correctImg before:bg-contain before:bg-center mb-2 pl-8">
                HTTPS Ilimitadas
              </li>
            </ul>
            <ul className="">
              <li className="relative before:content-[''] before:block before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:bg-correctImg before:bg-contain before:bg-center mb-2 pl-8">
                Subdomínio Gratuito
              </li>
              <li className="relative before:content-[''] before:block before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:bg-correctImg before:bg-contain before:bg-center mb-2 pl-8">
                Dados Ilimitados
              </li>
              <li className="relative before:content-[''] before:block before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:bg-correctImg before:bg-contain before:bg-center mb-2 pl-8">
                Suporte 24h por dia. 7 dias por semana
              </li>
            </ul>
          </div>

          <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-4">
            <div className="bg-accent p-6 py-20">
              <span className="block text-white text-2xl">Plano Livre</span>
              <h3 className="font-bold font-title text-[#baefcc] text-3xl md:text-6xl tracking-wider my-5">
                Livre
              </h3>
              <button className="flex justify-center items-center gap-2 rounded text-base font-title font-bold text-accent bg-white px-6 py-3 hover:bg-gray-200 my-8">
                Faça upload gratuito
                <svg
                  className="w-6 h-6"
                  fill="#000"
                  stroke="#000"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <p className="text-md text-white text-body">
                Domínio static.app gratuito incluído. Sem cartão de crédito
              </p>
            </div>

            <div className="bg-white p-6 py-20 relative">
              <span className="block text-accent text-2xl">Plano Livre</span>
              <h3 className="font-bold font-title text-accent text-3xl md:text-6xl tracking-wider my-5">
                $ 9<span className="text-lg">/mês</span>
              </h3>
              <button className="cta my-8">
                Faça upload gratuito
                <svg
                  className="w-6 h-6"
                  fill="#000"
                  stroke="#000"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <p className="text-md text-gray-900 text-body">
                Faturado $ 108 por site anualmente. $36 mais barato desta forma.
              </p>

              <span className="rounded-3xl px-4 py-2 bg-yellow-500 text-white font-bold font-body absolute top-4 right-4 cursor-pointer hover:bg-yellow-300 hover:text-black">
                Economize 25%
              </span>
            </div>

            <div className="bg-white p-6 py-20 relative">
              <span className="block text-accent text-2xl">Plano Livre</span>
              <h3 className="font-bold font-title text-accent text-3xl md:text-6xl tracking-wider my-5">
                $ 12<span className="text-lg">/mês</span>
              </h3>
              <button className="cta my-8">
                Faça upload gratuito
                <svg
                  className="w-6 h-6"
                  fill="#000"
                  stroke="#000"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <p className="text-md text-gray-900 text-body">
                Cobrado $ 12 por site mensalmente. O total é de US$ 144 por ano.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="max-w-7xl mx-auto w-11/12">
          <div className="grid md:grid-cols-2">
            <div className="relative py-6 before:absolute before:content-[''] before:block before:w-full before:h-3/4 before:bg-accent before:left-2/4 before:top-2/4 before:-translate-x-2/4 before:-translate-y-2/4 z-10">
              <img
                src={plansbanner}
                alt=""
                className="relative z-20 w-10/12 aspect-square object-cover object-center"
              ></img>
            </div>
            <div className="p-6 bg-gray-200 grid justify-center content-center">
              <div className="w-3/4">
                <h3 className="font-title font-bold text-accent text-4xl md:text-5xl">
                  Comece com a página estática mais simples
                </h3>
                <button className="cta mt-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  <span>Carregar gratuitamento</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
