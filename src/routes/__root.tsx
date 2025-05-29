import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'The Inner Match - Real Stories, Raw Truths',
        description: 'A podcast dedicated to recovery stories, authentic conversations, and the journey of healing. Real stories, raw truths.',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#2563eb' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-200 to-blue-50 font-['Ubuntu',sans-serif]">
        {/* Header Navigation */}
        <header className="fixed top-2 w-[70%] md:w-auto left-1/2 transform -translate-x-1/2 z-50">
          <nav className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg shadow-black/5 px-6 py-2">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <img src="/ring-logo.png" width={80} height={80} className="mr-2"/>
              <Link
                to="/"
                className="text-xl md:text-2xl font-bold text-slate-900 hover:text-blue-700 transition-all duration-300 md:mr-8 "
              >
                The Inner Match
              </Link>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  activeProps={{
                    className: 'text-blue-700 bg-blue-50',
                  }}
                  activeOptions={{ exact: true }}
                  className="text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 px-4 py-2 rounded-lg text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/episodes"
                  activeProps={{
                    className: 'text-blue-700 bg-blue-50',
                  }}
                  className="text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 px-4 py-2 rounded-lg text-base font-medium"
                >
                  Episodes
                </Link>
                <Link
                  to="/about"
                  activeProps={{
                    className: 'text-blue-700 bg-blue-50',
                  }}
                  className="text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 px-4 py-2 rounded-lg text-base font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  activeProps={{
                    className: 'text-blue-700 bg-blue-50',
                  }}
                  className="text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 px-4 py-2 rounded-lg text-base font-medium"
                >
                  Contact
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <button className="md:hidden p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-32">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 mt-20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  The Inner Match
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Real stories, raw truths. A podcast dedicated to recovery, healing, and authentic conversations about the human experience.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.745.097.118.11.221.082.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.752-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-6 text-blue-200">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/episodes" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                      Episodes
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-6 text-blue-200">Listen On</h4>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2.01.77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    Apple Podcasts
                  </a>
                  <a href="#" className="flex items-center text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </div>
                    Spotify
                  </a>
                  <a href="#" className="flex items-center text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.141 19.031c-3.876 0-7.03-3.154-7.03-7.031s3.154-7.031 7.03-7.031c3.876 0 7.031 3.154 7.031 7.031 0 3.876-3.155 7.031-7.031 7.031z"/>
                      </svg>
                    </div>
                    Google Podcasts
                  </a>
                  <a href="#" className="flex items-center text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
                      </svg>
                    </div>
                    RSS Feed
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700/50 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-400 mb-4 md:mb-0">
                  © 2025 The Inner Match. All rights reserved.
                </p>
                <p className="text-blue-300 font-medium">
                  Spreading hope, one story at a time.
                </p>
              </div>
            </div>
          </div>
        </footer>

        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}