'use client';

export default function Portfolio() {
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
            <a href="/portfolio" className="text-green-400 font-bold text-sm">Portfolio</a>
          </div>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6" style={{ color: '#6D28D9' }}>Meu Portfolio</h1>
        <p className="text-xl text-gray-400 mb-16">Confira meus projetos, case studies e trabalhos realizados</p>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#10B981' }}>Portfolio Completo</h2>
          <p className="text-lg text-gray-400 mb-12">Acesse meu portfólio em PDF com todos os projetos, tecnologias utilizadas e resultados alcançados.</p>

          <div className="flex gap-6 justify-center">
            <a href="/portfolio_romulo.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-black font-bold rounded hover:opacity-90" style={{ backgroundColor: '#10B981' }}>
              Abrir Portfolio (PDF)
            </a>
            <a href="/portfolio_romulo.pdf" download className="px-8 py-4 font-bold rounded hover:opacity-80 border-2" style={{ borderColor: '#6D28D9', color: '#6D28D9' }}>
              Baixar Portfolio
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#10B981' }}>Tauri Tech</h3>
            <p className="text-gray-400 mb-4">Consultoria Full Stack com automação, desenvolvimento custom e arquitetura escalável.</p>
            <p className="text-sm text-gray-500">Desde 2021</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#10B981' }}>Tauri Agrícola</h3>
            <p className="text-gray-400 mb-4">Marketplace de commodities agrícolas com IA para precificação dinâmica.</p>
            <p className="text-sm text-gray-500">Projeto em desenvolvimento</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#10B981' }}>Panta Rey Seguros</h3>
            <p className="text-gray-400 mb-4">Plataforma full-stack para corretora de seguros com dashboard e integrações.</p>
            <p className="text-sm text-gray-500">Projeto realizado</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#10B981' }}>Macro Contábil</h3>
            <p className="text-gray-400 mb-4">Plataforma digital de contabilidade com integrações e automações.</p>
            <p className="text-sm text-gray-500">Projeto realizado</p>
          </div>
        </div>

        <div className="mt-16">
          <a href="https://wa.me/5541985197035?text=Olá%20Romulo%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 text-black font-bold rounded hover:opacity-90" style={{ backgroundColor: '#10B981' }}>
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
            <p>© 2026 STARK DEV. Romulo Carvalho. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}