import heroBanner from "../../assets/herobanner.png";

export default function Hero() {
  return (
    <section className="py-6 grid gap-3 grid-cols-1 grid-rows-auto1Fr lg:grid-cols-2 w-11/12 max-w-7xl mx-auto my-0">
      <div className="justify-center content-center grid">
        <div>
          <h1 className="text-accent font-bold text-3xl md:text-6xl font-title">
            Solução de um clique para seu site estático.
          </h1>

          <div className="flex flex-col gap-4 md:flex-row mt-5">
            <button className="cta">
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
            <button className="px-6 py-3 bg-gray-200 text-black font-bold font-body rounded text-base hover:bg-gray-300 flex items-center justify-center gap-2">
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Assista ao vídeo</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full aspect-square -z-10">
        <img
          src={heroBanner}
          alt=""
          className="absolute object-contain object-center w-full h-full"
        ></img>
      </div>
    </section>
  );
}
