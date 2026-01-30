export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hey, I&apos;m{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kanto Sarobidy
          </span>
          ✨
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Fullstack Developer
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          Professional fullstack developer specialized in building modern web
          and mobile applications. Organized, autonomous, entrepreneurial, and
          engaged developer passionate about crafting seamless user experiences
          with cutting-edge technologies.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition flex items-center gap-2 font-semibold">
            <span>💼</span> Hire Me
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition flex items-center gap-2">
            <span>📧</span> Contact Me
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition flex items-center gap-2">
            <span>👁️</span> View Projects
          </button>
          <div className="flex gap-3 ml-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <span className="text-xl">G</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <span className="text-xl">in</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <span className="text-xl">X</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
