import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              The Inner Match
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-6 font-light tracking-wide">
              Real Stories, Raw Truths
            </p>
            <p className="text-lg md:text-xl text-blue-200/90 mb-16 leading-relaxed max-w-4xl mx-auto font-medium">
              A podcast dedicated to recovery, healing, and authentic conversations about the human experience. 
              Every story matters. Every voice deserves to be heard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white/95 backdrop-blur-sm text-blue-800 px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border border-white/20">
                Listen to Latest Episode
              </button>
              <button className="border-2 border-white/60 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                Browse All Episodes
              </button>
            </div>
          </div>
        </div>
        
        {/* Modern wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-slate-100" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Stories That Heal
              </h2>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                Recovery isn't a destination—it's a journey. At The Inner Match, we believe in the power of 
                authentic storytelling to inspire, heal, and connect us all.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Each episode features real people sharing their raw, unfiltered experiences with addiction, 
                mental health, trauma, and the beautiful, messy process of healing. No sugar-coating, 
                no perfect endings—just truth.
              </p>
              <div className="space-y-5">
                <div className="flex items-center group">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-5 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-semibold text-lg">Authentic conversations</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-5 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-semibold text-lg">Real recovery stories</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-5 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-semibold text-lg">Hope and healing</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-white/50">
                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-5">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.896-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115.5 12a5.983 5.983 0 01-1.257 3.829 1 1 0 11-1.415-1.658A3.987 3.987 0 0013.5 12a3.987 3.987 0 00-.672-2.171 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Episode 24</h3>
                      <p className="text-blue-100 font-medium">Now Playing</p>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Finding Light in the Darkness</h4>
                  <p className="text-blue-100">Sarah's journey from addiction to advocacy</p>
                </div>
                
                {/* Enhanced audio controls */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-500 font-medium">
                    <span>12:34</span>
                    <span>45:21</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300" style={{width: '28%'}}></div>
                  </div>
                  <div className="flex items-center justify-center space-x-8">
                    <button className="p-3 hover:bg-slate-100 rounded-full transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                      </svg>
                    </button>
                    <button className="p-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 shadow-lg">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="p-3 hover:bg-slate-100 rounded-full transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Featured Episodes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dive into powerful conversations that explore the depths of recovery, resilience, and hope.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 backdrop-blur-sm group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">24</span>
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">Latest Episode</p>
                  <p className="font-bold text-slate-900 text-lg">45 minutes</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                Finding Light in the Darkness
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Sarah shares her powerful journey from rock bottom to recovery, and how she found purpose in helping others.
              </p>
              <button className="text-blue-600 font-bold hover:text-blue-800 transition-colors text-lg group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                Listen Now 
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 backdrop-blur-sm group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">23</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Episode 23</p>
                  <p className="font-bold text-slate-900 text-lg">38 minutes</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                The Weight of Shame
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Marcus opens up about overcoming shame and self-forgiveness in his recovery journey.
              </p>
              <button className="text-blue-600 font-bold hover:text-blue-800 transition-colors text-lg group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                Listen Now 
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 backdrop-blur-sm group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">22</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Episode 22</p>
                  <p className="font-bold text-slate-900 text-lg">52 minutes</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                Rebuilding Trust
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A mother and daughter discuss rebuilding their relationship after addiction tore their family apart.
              </p>
              <button className="text-blue-600 font-bold hover:text-blue-800 transition-colors text-lg group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                Listen Now 
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
         */}

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-8 leading-tight">
            Your Story Matters
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Have a story to share? Want to be part of our community of hope and healing? 
            We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white/95 backdrop-blur-sm text-blue-800 px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border border-white/20">
              Share Your Story
            </button>
            <button className="border-2 border-white/60 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              Subscribe to Podcast
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}