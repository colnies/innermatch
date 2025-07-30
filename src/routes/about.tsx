import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            The Inner Match was born from a simple belief: every story of recovery deserves to be heard, 
            and every person deserves to know they're not alone in their journey.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We create a safe space where people can share their authentic experiences with addiction, 
                mental health challenges, trauma, and recovery. Our conversations are raw, real, and 
                filled with hope.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Through storytelling, we aim to break down stigma, build understanding, and remind 
                everyone that recovery is possible. Each episode is a testament to the resilience 
                of the human spirit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Authentic Stories</h3>
                  <p className="text-slate-600 text-sm">Real people sharing unfiltered experiences</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Safe Community</h3>
                  <p className="text-slate-600 text-sm">Building connections without judgment</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <blockquote className="text-xl text-slate-700 italic mb-6 leading-relaxed">
                  "Recovery isn't about perfection. It's about progress, courage, and the willingness 
                  to keep showing up for yourself, even on the hardest days."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">TIM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">The Inner Match</p>
                    <p className="text-slate-600 text-sm">Core Philosophy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Meet Your Host
            </h2>
            <p className="text-xl text-slate-600">
              The voice behind the conversations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">Host</span>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    Eddie Terry
                  </h3>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    As someone who has walked the path of recovery, I understand the power of sharing 
                    our stories. My own journey through addiction and healing taught me that connection 
                    and authenticity are essential ingredients for lasting recovery.
                  </p>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    For the past 4 years, I've been dedicated to creating spaces where people feel 
                    safe to share their truth. Through The Inner Match, I hope to reach those who 
                    might be struggling in silence, letting them know that recovery is possible.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-700">Certified Recovery Coach</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-700">Mental Health Advocate</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-700">3 Years in Recovery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide every conversation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Safety First</h3>
              <p className="text-slate-600">
                Creating a secure environment where vulnerability is protected and honored.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Authenticity</h3>
              <p className="text-slate-600">
                Embracing raw, unfiltered truth over polished perfection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Non-Judgment</h3>
              <p className="text-slate-600">
                Meeting every story with compassion, understanding, and acceptance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hope</h3>
              <p className="text-slate-600">
                Believing in the possibility of healing and transformation for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Want to Share Your Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            If you're in recovery and have a story that could inspire others, we'd love to hear from you. 
            Your experience could be the light someone else needs to find their way.
          </p>
          <button className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  )
}