export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-gray-800/10" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl"></div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hey, I&apos;m <span className="text-white">Kanto Sarobidy</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A <span className="text-gray-200">Fullstack Developer</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          Professional fullstack developer specialized in building modern web
          and mobile applications. Organized, autonomous, entrepreneurial, and
          engaged developer passionate about crafting seamless user experiences
          with cutting-edge technologies.
        </p>
        <div className="flex justify-center mt-4">
          <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-lg transition flex items-center gap-3 font-semibold text-xl">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
