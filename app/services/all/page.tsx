import MainServices from '@/components/MainServices'

export default function AllServicesPage() {
  return (
    <section className="section-padding relative overflow-hidden min-h-screen">
      {/* Backgrounds and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 dark:from-slate-800 dark:via-blue-900/30 dark:to-indigo-900/40"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
      </div>
      <div className="absolute top-20 left-20 w-24 h-24 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display">
            All Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
              Services
            </span>
          </h1>
          <p className="text-xl text-[#656d76] dark:text-[#8b949e] max-w-3xl mx-auto">
            Explore our comprehensive range of digital services designed to help your business thrive in the modern world.
          </p>
        </div>

        <MainServices />
      </div>
    </section>
  )
}
