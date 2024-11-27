export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-start px-6 md:px-12 lg:px-36 bg-cover bg-center"
      style={{ backgroundImage: "url('/header-bg.jpg')" }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>

      {/* Konten Hero Section */}
      <div className="relative text-left max-w-4xl z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
          Selamat datang di{" "}
          <span className="text-yellow-500">Kedai Seruput!</span>
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl text-white font-bold">
          Tempat di mana rasa bertemu dengan kebahagiaan
        </h2>
        <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-400 font-light italic">
          "we don't just serve food & beverage we serve happiness."
        </p>
        {/* Tombol CTA */}
        <a
          href="#produk"
          className="mt-6 inline-block py-3 px-10 bg-yellow-500 text-black text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Lihat Produk
        </a>
      </div>
    </section>
  );
}
