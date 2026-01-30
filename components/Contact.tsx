export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bringing your ideas to life.
          </h2>
          <h3 className="text-3xl md:text-4xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
            your vision into reality
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none"
              />
            </div>
            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <p className="text-sm text-gray-300">
                <span className="font-medium">📧 Email:</span>{' '}
                kantosarobidyratolojanahary@gmail.com
                <br />
                <span className="font-medium">📱 Phone:</span> +261 38 44 357 58
                <br />
                <span className="font-medium">📍 Location:</span>{' '}
                KantoMiarintsoa
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
