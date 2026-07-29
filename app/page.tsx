'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <a href="/" className="flex-shrink-0">
            <img
              src="/starck_dev.png"
              alt="Logo"
              width="80"
              height="80"
              className="w-16 md:w-32 h-auto drop-shadow-lg"
            />
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8">
            <a href="/sobre" className="text-gray-300 text-sm hover:text-green-400 transition">Sobre</a>
            <a href="/servicos" className="text-gray-300 text-sm hover:text-green-400 transition">Serviços</a>
            <a href="/portfolio" className="text-gray-300 text-sm hover:text-green-400 transition">Portfolio</a>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Menu Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 py-4 space-y-3 animate-in fade-in duration-200">
            <a
              href="/sobre"
              className="block text-gray-300 hover:text-green-400 transition py-2"
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="/servicos"
              className="block text-gray-300 hover:text-green-400 transition py-2"
              onClick={() => setMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="/portfolio"
              className="block text-gray-300 hover:text-green-400 transition py-2"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </a>
          </div>
        )}
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/starck_dev.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <video
          playsInline
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          poster="/starck_dev.png"
          onLoadedMetadata={(e) => {
            if (window.innerWidth >= 768) {
              (e.target as HTMLVideoElement).play();
            }
          }}
        >
          <source src="/starck_dev.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span style={{ color: '#6D28D9' }}>Arquitetura</span>
            <br />
            <span style={{ color: '#10B981' }}>que escala</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-12 max-w-2xl mx-auto">
            Full Stack Developer especializado em soluções que crescem com seu negócio. Automação, arquitetura de código e sistemas que funcionam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="https://wa.me/5541985197035?text=Olá%20Romulo%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-black font-bold rounded hover:opacity-90 transition"
              style={{ backgroundColor: '#10B981' }}
            >
              Vamos Conversar
            </a>
            <a
              href="/portfolio_romulo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-bold rounded hover:opacity-80 border-2 transition text-center"
              style={{ borderColor: '#6D28D9', color: '#6D28D9' }}
            >
              Ver Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center" style={{ color: '#6D28D9' }}>
          Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 hover:border-green-500 transition">
            <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#10B981' }}>Desenvolvimento Full Stack</h3>
            <p className="text-gray-400 text-sm sm:text-base">Next.js, React, Node.js, TypeScript. Soluções modernas e escaláveis para web.</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 hover:border-green-500 transition">
            <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#10B981' }}>Automação e Integrações</h3>
            <p className="text-gray-400 text-sm sm:text-base">N8N, APIs, webhooks. Automatize processos e conecte seus sistemas.</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 hover:border-green-500 transition">
            <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#10B981' }}>Arquitetura de Código</h3>
            <p className="text-gray-400 text-sm sm:text-base">Design patterns, escalabilidade, performance. Código que dura.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 mt-12 md:mt-20 py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-3 text-sm sm:text-base" style={{ color: '#10B981' }}>Navegação</h3>
              <div className="space-y-1">
                <a href="/" className="text-gray-400 text-xs sm:text-sm block hover:text-green-400 transition">Home</a>
                <a href="/sobre" className="text-gray-400 text-xs sm:text-sm block hover:text-green-400 transition">Sobre</a>
                <a href="/servicos" className="text-gray-400 text-xs sm:text-sm block hover:text-green-400 transition">Serviços</a>
                <a href="/portfolio" className="text-gray-400 text-xs sm:text-sm block hover:text-green-400 transition">Portfolio</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-sm sm:text-base" style={{ color: '#10B981' }}>Contato</h3>
              <div className="space-y-1">
                <a href="https://wa.me/5541985197035" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xs sm:text-sm block hover:text-green-400 transition">WhatsApp</a>
                <p className="text-gray-400 text-xs sm:text-sm">Curitiba, PR</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-sm sm:text-base" style={{ color: '#10B981' }}>Legal</h3>
              <div className="space-y-1">
                <a href="/politica-privacidade" className="text-gray-400 text-xs sm:text-sm block hover:text-green-400 transition">Privacidade</a>
                <a href="/termos-uso" className="text-gray-400 text-xs sm:text-sm block hover:text-green-400 transition">Termos</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
            <p>© 2026 STARK DEV. Romulo Carracho. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
