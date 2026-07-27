'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-black border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <a href="/">
            <img src="/starck_dev.png" alt="Logo" width="120" height="120" className="drop-shadow-lg" />
          </a>
          <div className="flex gap-8">
            <a href="/sobre" className="text-gray-300 text-sm">Sobre</a>
            <a href="/servicos" className="text-gray-300 text-sm">Serviços</a>
            <a href="/portfolio" className="text-gray-300 text-sm">Portfolio</a>
          </div>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/starck_dev.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span style={{ color: '#6D28D9' }}>Arquitetura</span>
            <br />
            <span style={{ color: '#10B981' }}>que escala</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Full Stack Developer especializado em soluções que crescem com seu negócio. Automação, arquitetura de código e sistemas que funcionam.
          </p>

          <div className="flex gap-6 justify-center">
            <a href="https://wa.me/5541985197035?text=Olá%20Romulo%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-black font-bold rounded hover:opacity-90" style={{ backgroundColor: '#10B981' }}>
              Vamos Conversar
            </a>
            <a href="/portfolio_romulo.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 font-bold rounded hover:opacity-80 border-2" style={{ borderColor: '#6D28D9', color: '#6D28D9' }}>
              Ver Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#6D28D9' }}>
          Serviços
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#10B981' }}>Desenvolvimento Full Stack</h3>
            <p className="text-gray-400">Next.js, React, Node.js, TypeScript. Soluções modernas e escaláveis para web.</p>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#10B981' }}>Automação e Integrações</h3>
            <p className="text-gray-400">N8N, APIs, webhooks. Automatize processos e conecte seus sistemas.</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#10B981' }}>Arquitetura de Código</h3>
            <p className="text-gray-400">Design patterns, escalabilidade, performance. Código que dura.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#10B981' }}>Navegação</h3>
              <div className="space-y-1">
                <a href="/" className="text-gray-400 text-sm block hover:text-green-400">Home</a>
                <a href="/sobre" className="text-gray-400 text-sm block hover:text-green-400">Sobre</a>
                <a href="/servicos" className="text-gray-400 text-sm block hover:text-green-400">Serviços</a>
                <a href="/portfolio" className="text-gray-400 text-sm block hover:text-green-400">Portfolio</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#10B981' }}>Contato</h3>
              <div className="space-y-1">
                <a href="https://wa.me/5541985197035" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm block hover:text-green-400">WhatsApp</a>
                <p className="text-gray-400 text-sm">Curitiba, PR</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#10B981' }}>Legal</h3>
              <div className="space-y-1">
                <a href="/politica-privacidade" className="text-gray-400 text-sm block hover:text-green-400">Privacidade</a>
                <a href="/termos-uso" className="text-gray-400 text-sm block hover:text-green-400">Termos</a>
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