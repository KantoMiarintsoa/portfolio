export default function Services() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Building Digital Experiences
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          I specialize in creating stunning user interfaces and developing
          high-quality applications that stand out.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* What I Can Do */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <div className="text-purple-400 text-3xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-4">What I can do</h3>
            <p className="text-gray-400 mb-6">
              I can help develop solutions that will help you grow your
              business:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Frontend Design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Fullstack Web Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Mobile App Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Database Design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>API Integration</span>
              </li>
            </ul>
          </div>

          {/* Tools I Use */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <div className="text-purple-400 text-3xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold mb-4">Tools I Use</h3>
            <p className="text-gray-400 mb-6">
              I use the latest tools and technologies to build functional and
              scalable products:
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">• Frontend</p>
                <p className="text-gray-300">
                  React, Next.js, React Native, TypeScript
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">• Backend</p>
                <p className="text-gray-300">
                  NestJS, Spring Boot, MongoDB, PostgreSQL
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">• DevOps & Tools</p>
                <p className="text-gray-300">
                  Docker, Git/GitHub, Tailwind CSS, Socket.io
                </p>
              </div>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <div className="text-purple-400 text-3xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
            <p className="text-gray-400 mb-6">
              I am a designer first, developer second. I can help design clean
              and modern interfaces:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>User-Centered Design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Modern & Clean UI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Responsive Layouts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Wireframes & Prototypes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
