import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have a story to share? Questions about recovery? Want to collaborate? 
            We'd love to hear from you. Every message matters.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    What's this about? *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="guest">I want to be a guest</option>
                    <option value="story">I have a story to share</option>
                    <option value="support">I need support/resources</option>
                    <option value="feedback">Podcast feedback</option>
                    <option value="collaboration">Collaboration opportunity</option>
                    <option value="media">Media inquiry</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Share your thoughts, story, or questions with us..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-3 text-sm text-slate-600">
                    I understand that my message will be kept confidential and used only for the purpose 
                    of responding to my inquiry. *
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact Options */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Other Ways to Connect
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email Us Directly</h4>
                      <p className="text-slate-600 mb-2">For general inquiries and guest applications</p>
                      <a href="mailto:hello@theinnermatch.com" className="text-blue-600 hover:text-blue-800 font-medium">
                        hello@theinnermatch.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Crisis Support</h4>
                      <p className="text-slate-600 mb-2">If you're in crisis, please reach out for immediate help</p>
                      <a href="tel:988" className="text-blue-600 hover:text-blue-800 font-medium block">
                        Suicide & Crisis Lifeline: 988
                      </a>
                      <a href="tel:1-800-662-4357" className="text-blue-600 hover:text-blue-800 font-medium">
                        SAMHSA Helpline: 1-800-662-4357
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Follow Our Journey</h4>
                      <p className="text-slate-600 mb-2">Stay connected on social media</p>
                      <div className="flex space-x-3">
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Twitter</a>
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Instagram</a>
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Facebook</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest Application Info */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Want to Be a Guest?
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  We're always looking for authentic voices to share their recovery stories. 
                  If you're interested in being a guest, here's what we look for:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">At least 6 months of continuous recovery</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">Willingness to share your story authentically</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">Desire to help others on their journey</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">Comfortable with audio recording</span>
                  </li>
                </ul>
                
                <p className="text-slate-600 text-sm">
                  All interviews are conducted with care, respect, and complete confidentiality until you're ready to share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about The Inner Match
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Is my story private until I decide to share it?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Absolutely. All initial conversations are completely confidential. We never share your story 
                without your explicit consent, and you have full control over what gets included in any recording.
              </p>
            </div>
            
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Do I need to use my real name?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Not at all. Many of our guests choose to use pseudonyms or first names only. 
                Your safety and comfort are our top priorities.
              </p>
            </div>
            
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                What if I get emotional during the interview?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Emotions are welcome and expected. We can pause, take breaks, or stop at any time. 
                Our goal is to create a safe space where you can share authentically.
              </p>
            </div>
            
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                How long are the interviews?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Most interviews last between 45-60 minutes, but we're flexible. Some conversations are shorter, 
                others longer - we let the story guide us.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                What if I'm not ready to share publicly?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                That's perfectly okay. Sometimes just having the conversation can be healing in itself. 
                You can always decide later if you want your story to be shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Your Voice Matters
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Whether you're sharing your story, seeking support, or just want to connect, 
            we're here to listen. Recovery is a journey best traveled together.
          </p>
          <p className="text-lg text-blue-200">
            Response time: We typically respond within 24-48 hours
          </p>
        </div>
      </section>
    </div>
  )
}