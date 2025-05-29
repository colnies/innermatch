import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/episodes')({
  component: Episodes,
})

function Episodes() {
  const episodes = [
    {
      number: 24,
      title: "Finding Light in the Darkness",
      guest: "Sarah Martinez",
      duration: "45 minutes",
      date: "January 15, 2025",
      description: "Sarah shares her powerful journey from rock bottom to recovery, and how she found purpose in helping others navigate their own path to healing.",
      topics: ["Addiction Recovery", "Purpose", "Helping Others"],
      isLatest: true
    },
    {
      number: 23,
      title: "The Weight of Shame",
      guest: "Marcus Johnson",
      duration: "38 minutes",
      date: "January 8, 2025",
      description: "Marcus opens up about overcoming shame and self-forgiveness in his recovery journey, sharing practical tools for breaking free from guilt.",
      topics: ["Shame", "Self-Forgiveness", "Mental Health"]
    },
    {
      number: 22,
      title: "Rebuilding Trust",
      guest: "Lisa & Emma Chen",
      duration: "52 minutes",
      date: "January 1, 2025",
      description: "A mother and daughter discuss rebuilding their relationship after addiction tore their family apart, offering hope for healing broken bonds.",
      topics: ["Family", "Trust", "Relationships"]
    },
    {
      number: 21,
      title: "From Trauma to Triumph",
      guest: "David Rodriguez",
      duration: "41 minutes",
      date: "December 25, 2024",
      description: "David shares how childhood trauma led to addiction, and his journey through therapy, recovery, and finding peace with his past.",
      topics: ["Trauma", "Therapy", "Childhood Healing"]
    },
    {
      number: 20,
      title: "The Power of Community",
      guest: "Recovery House Team",
      duration: "35 minutes",
      date: "December 18, 2024",
      description: "Members of a recovery house discuss how community support became the foundation of their healing and ongoing sobriety.",
      topics: ["Community", "Support Groups", "Sober Living"]
    },
    {
      number: 19,
      title: "Breaking Generational Cycles",
      guest: "Michelle Thompson",
      duration: "47 minutes",
      date: "December 11, 2024",
      description: "Michelle talks about breaking the cycle of addiction in her family and creating a healthier future for her children.",
      topics: ["Generational Trauma", "Parenting", "Breaking Cycles"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            All Episodes
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Dive deep into authentic conversations about recovery, healing, and the human experience. 
            Every story shared here is a beacon of hope for someone walking a similar path.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
              Subscribe on Apple Podcasts
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-800 transition-all duration-300">
              Subscribe on Spotify
            </button>
          </div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {episodes.map((episode) => (
              <div 
                key={episode.number}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Episode Number & Play Button */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{episode.number}</span>
                        </div>
                        {episode.isLatest && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            NEW
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Episode Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900 mb-2">
                            {episode.title}
                          </h2>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                            <span className="font-medium">Guest: {episode.guest}</span>
                            <span>•</span>
                            <span>{episode.duration}</span>
                            <span>•</span>
                            <span>{episode.date}</span>
                          </div>
                        </div>
                        <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          Play Episode
                        </button>
                      </div>

                      <p className="text-slate-700 mb-6 leading-relaxed">
                        {episode.description}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2">
                        {episode.topics.map((topic) => (
                          <span 
                            key={topic}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white text-blue-800 border-2 border-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 hover:text-white transition-all duration-300">
              Load More Episodes
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Get notified when new episodes are released, plus exclusive content and recovery resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}