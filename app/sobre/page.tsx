'use client';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-black border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <a href="/">
            <img src="/starck_dev.png" alt="Logo" width="120" height="120" className="drop-shadow-lg" />
          </a>
          <div className="flex gap-8">
            <a href="/sobre" className="text-green-400 font-bold text-sm">Sobre</a>
            <a href="/servicos" className="text-gray-300 text-sm">Serviços</a>
            <a href="/portfolio" className="text-gray-300 text-sm">Portfolio</a>
          </div>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12">
          <span style={{ color: '#6D28D9' }}>Quem sou</span>
        </h1>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 mb-12">
          <p className="text-xl text-gray-300 mb-6">
            Sou <span style={{ color: '#10B981' }}>Romulo Carvalho</span>, desenvolvedor full-stack e arquiteto de software na <span style={{ color: '#10B981' }}>RC Content Ltda</span>.
          </p>

          <p className="text-lg text-gray-400 mb-6">
            Especializado em soluções que crescem com o negócio através de:
          </p>

          <ul className="text-lg text-gray-400 space-y-3 mb-8 ml-6">
            <li>✓ Desenvolvimento Full Stack (Next.js, React, Node.js, Python)</li>
            <li>✓ Automação inteligente com N8N</li>
            <li>✓ Arquitetura de código resiliente</li>
            <li>✓ Integrações e APIs complexas</li>
            <li>✓ Estratégia de dados orientada a resultados</li>
          </ul>

          <p className="text-lg text-gray-400 italic border-l-4 border-green-400 pl-6 mb-6">
            "Código não é executável, é conhecimento. E conhecimento bem estruturado é o que permite negócios escalarem sem quebrar."
          </p>

          <p className="text-gray-400">
            Formação contínua via DevClub desde 2020. GitHub: <span style={{ color: '#10B981' }}>@SheldonTcooper</span>
          </p>
        </div>

        <div className="text-center">
          <a href="https://wa.me/5541985197035" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 text-black font-bold rounded hover:opacity-90" style={{ backgroundColor: '#10B981' }}>
            Vamos Conversar
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#10B981' }}>Navegação</h3>
              <div className="space-y-1">
                <a href="/" className="text-gray-400 text-sm block">Home</a>
                <a href="/sobre" className="text-gray-400 text-sm block">Sobre</a>
                <a href="/servicos" className="text-gray-400 text-sm block">Serviços</a>
                <a href="/portfolio" className="text-gray-400 text-sm block">Portfolio</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#10B981' }}>Contato</h3>
              <div className="space-y-1">
                <a href="https://wa.me/5541985197035" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm block">WhatsApp</a>
                <a href="mailto:romulo@tauritecnologia.com.br" className="text-gray-400 text-sm block">Email</a>
                <p className="text-gray-400 text-sm">Curitiba, PR</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#10B981' }}>Legal</h3>
              <div className="space-y-1">
                <a href="/politica-privacidade" className="text-gray-400 text-sm block">Privacidade</a>
                <a href="/termos-uso" className="text-gray-400 text-sm block">Termos</a>
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