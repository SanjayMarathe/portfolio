export default function Blog() {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-xl p-8 border border-slate-700 flex items-center justify-center min-h-[280px]"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-slate-500">✍️</span>
                </div>
                <p className="text-slate-400 text-lg font-medium">Coming soon...</p>
                <p className="text-slate-500 text-sm">Stay tuned for updates</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
