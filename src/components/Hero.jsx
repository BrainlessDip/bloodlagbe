export default function Hero() {
  return (
    <>
      <section className="relative w-full pt-24 pb-32 bg-liner-to-b from-red-50 to-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-2xl font-extrabold sm:text-4xl text-red-700">
            Blood When Needed, Help Right Away
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Quickly connect with blood donors. Technology lending its hand to
            save lives.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-red-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-red-700 transition">
              Find Blood
            </button>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b')] bg-cover bg-center"></div>
      </section>
    </>
  );
}
