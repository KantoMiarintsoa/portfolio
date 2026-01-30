export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400">
              Some of my recent work that I&apos;m proud of
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition border border-white/10">
            <span>📂</span> View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* StudentMap */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
            <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
              <span className="text-6xl">📍</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">StudentMap</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Mobile app for students to locate and consult university points
                of interest (buildings, messaging, etc.).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                  React Native
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">
                  NestJS
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex-1 text-center py-2 bg-white/5 hover:bg-white/10 rounded-lg transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* VibeTalk */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
            <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
              <span className="text-6xl">💬</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">VibeTalk</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Modern and reactive web messaging application with real-time
                communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                  NestJS
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">
                  Socket.io
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex-1 text-center py-2 bg-white/5 hover:bg-white/10 rounded-lg transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Fanorona */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
            <div className="aspect-video bg-gradient-to-br from-pink-900/50 to-purple-900/50 flex items-center justify-center">
              <span className="text-6xl">🎮</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Fanorona Game</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Mobile version of the traditional Malagasy strategy game with
                intuitive interface and game logic.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                  React Native
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                  TypeScript
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex-1 text-center py-2 bg-white/5 hover:bg-white/10 rounded-lg transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
