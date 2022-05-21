export default function AboutProduct() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="mx-auto my-0 max-w-7xl w-11/12 grid grid-cols-1 grid-rows-auto1Fr lg:grid-cols-2 lg:grid-rows-1 gap-8">
        <div className="grid justify-center content-center">
          <div>
            <h2 className="text-accent font-title font-bold lg:text-5xl text-4xl mb-6">
              Solução de hospedagem com benefícios.
            </h2>
            <p className="text-2xl text-gray-900">
              Transforme suas ideias em realidade com Static.
            </p>
            <p className="text-2xl text-gray-900">
              Com muitos recursos poderosos, garantimos simplicidade e clareza.
            </p>
            <button className="cta mt-4 self-start">
              consulte mais informações
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-rows-2 gap-5">
          <div className="p-4 bg-white flex flex-col items-center gap-3 py-16">
            <div className="bg-[#a0e4b7] rounded-full p-4">
              <svg
                className="w-7 h-7"
                fill="#79f0a1"
                stroke="#359756"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <button className="uppercase text-base bg-accent text-white px-8 py-2 rounded-full hover:bg-[#25693c]">
              livre
            </button>
            <h3 className="text-accent text-2xl font-title font-semibold text-center">
              Certificado SSL
            </h3>
            <p className="text-gray-700 text-base text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
            <button className="uppercase text-lg tracking-wider border-b-2 border-accent pb-1 hover:border-blue-600">
              mais
            </button>
          </div>

          <div className="p-4 bg-white flex flex-col items-center gap-3 py-16">
            <div className="bg-[#a0e4b7] rounded-full p-4">
              <svg
                className="w-7 h-7"
                fill="#79f0a1"
                stroke="#359756"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-accent text-2xl font-title font-semibold text-center">
              Domínio pessoal
            </h3>
            <p className="text-gray-700 text-base text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
            <button className="uppercase text-lg tracking-wider border-b-2 border-accent pb-1 hover:border-blue-600">
              mais
            </button>
          </div>

          <div className="p-4 bg-white flex flex-col items-center gap-3 py-16">
            <div className="bg-[#a0e4b7] rounded-full p-4">
              <svg
                className="w-7 h-7"
                fill="#79f0a1"
                stroke="#359756"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-accent text-2xl font-title font-semibold text-center">
              Editor de código
            </h3>
            <p className="text-gray-700 text-base text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
            <button className="uppercase text-lg tracking-wider border-b-2 border-accent pb-1 hover:border-blue-600">
              mais
            </button>
          </div>

          <div className="p-4 bg-white flex flex-col items-center gap-3 py-16">
            <div className="bg-[#a0e4b7] rounded-full p-4">
              <svg
                className="w-7 h-7"
                fill="#79f0a1"
                stroke="#359756"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <button className="uppercase text-base bg-accent text-white px-8 py-2 rounded-full hover:bg-[#25693c]">
              livre
            </button>
            <h3 className="text-accent text-2xl font-title font-semibold text-center">
              Armazenamento de mídia
            </h3>
            <p className="text-gray-700 text-base text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
            <button className="uppercase text-lg tracking-wider border-b-2 border-accent pb-1 hover:border-blue-600">
              mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
