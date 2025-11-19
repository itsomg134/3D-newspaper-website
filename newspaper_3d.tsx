import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Menu, X, Globe, TrendingUp, Newspaper, Search } from 'lucide-react';

export default function NewspaperWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const articles = [
    {
      id: 1,
      category: 'World',
      title: 'Global Climate Summit Reaches Historic Agreement',
      excerpt: 'World leaders unite on unprecedented climate action plan with binding commitments.',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop',
      date: 'Nov 19, 2025'
    },
    {
      id: 2,
      category: 'Technology',
      title: 'AI Breakthrough Transforms Medical Diagnostics',
      excerpt: 'New artificial intelligence system achieves 99% accuracy in early disease detection.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      date: 'Nov 18, 2025'
    },
    {
      id: 3,
      category: 'Business',
      title: 'Global Markets Surge on Economic Recovery',
      excerpt: 'Stock markets worldwide celebrate strongest quarterly growth in five years.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      date: 'Nov 18, 2025'
    },
    {
      id: 4,
      category: 'Science',
      title: 'Mars Mission Returns with Groundbreaking Samples',
      excerpt: 'NASA announces successful retrieval of Martian soil containing organic compounds.',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop',
      date: 'Nov 17, 2025'
    },
    {
      id: 5,
      category: 'Culture',
      title: 'Renaissance of Classical Arts in Digital Age',
      excerpt: 'Virtual reality technology brings museum masterpieces to millions worldwide.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
      date: 'Nov 17, 2025'
    },
    {
      id: 6,
      category: 'Sports',
      title: 'Olympic Records Shattered in Winter Games',
      excerpt: 'Athletes push human limits with extraordinary performances across multiple events.',
      image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop',
      date: 'Nov 16, 2025'
    }
  ];

  const parallaxEffect = scrollY * 0.5;

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(5deg); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .card-3d:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(5deg) scale(1.02);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 slide-in">
            <Newspaper className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-glow">The Global Times</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'World', 'Tech', 'Business', 'Culture'].map((item, i) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-blue-400 transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['Home', 'World', 'Tech', 'Business', 'Culture'].map((item, i) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setMenuOpen(false);
                }}
                className="text-2xl font-medium hover:text-blue-400 transition-all fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6" style={{ transform: `translateY(${parallaxEffect}px)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 float-animation">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
              News in 3D
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Experience journalism like never before
            </p>
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50">
              Explore Stories
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Stories Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-4xl font-bold">Latest Stories</h3>
            <div className="flex space-x-4">
              <Globe className="w-6 h-6 text-blue-400" />
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="card-3d glass-effect rounded-2xl overflow-hidden cursor-pointer fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 rounded-full text-xs font-semibold">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-slate-400 mb-2">{article.date}</p>
                  <h4 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <button className="text-blue-400 text-sm font-semibold hover:text-blue-300 flex items-center group">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center card-3d">
          <h3 className="text-4xl font-bold mb-4 text-glow">Stay Informed</h3>
          <p className="text-slate-300 mb-8 text-lg">
            Get the latest news delivered to your inbox every morning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-slate-800/50 border border-slate-600 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="mb-4">© 2025 The Global Times. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}