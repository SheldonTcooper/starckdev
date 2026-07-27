'use client';

export default function Servicos() {
  const skills = {
    backend: ['Node.js', 'Python', 'Django', 'TypeScript', 'REST APIs', 'GraphQL'],
    frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    databases: ['PostgreSQL', 'Supabase', 'MongoDB'],
    automation: ['N8N', 'Webhooks', 'Zapier', 'Custom Scripts'],
    integrations: ['Salesforce', 'Stripe', 'Meta Graph API', 'ANS API'],
    tools: ['Git/GitHub', 'Docker', 'Vercel', 'AWS'],
    design: ['UI/UX', 'Figma', 'Design Systems'],
    marketing: ['Data-driven Strategy', 'SEO', 'Content Curation'],
    arquitetura: ['Microserviços', 'Escalabilidade', 'Performance', 'Clean Code']
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-black border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <a href="/">
            <img src="/starck_dev.png" alt="Logo" width="120" height="120" className="drop-shadow-lg" />
          </a>
          <div className="flex gap-8">
            <a href="/sobre" className="text-gray-300 text-sm">Sobre</a>
            <a href="/servicos" className="text-green-400 font-bold text-sm">Serviços</a>
            <a href="/portfolio" className="text-gray-300 text-sm">Portfolio</a>
          </div>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#6D28D9' }}>Minhas Habilidades</h1>
        <p className="text-xl text-gray-400 mb-16">Stack completo para resolver problemas de arquitetura e escala</p>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>Backend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>Databases</h3>
            <div className="flex flex-wrap gap-3">
              {skills.databases.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>Automação</h3>
            <div className="flex flex-wrap gap-3">
              {skills.automation.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>Integrações</h3>
            <div className="flex flex-wrap gap-3">
              {skills.integrations.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>Design</h3>
            <div className="flex flex-wrap gap-3">
              {skills.design.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>Marketing</h3>
            <div className="flex flex-wrap gap-3">
              {skills.marketing.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 col-span-2">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>Arquitetura de Software</h3>
            <div className="flex flex-wrap gap-3">
              {skills.arquitetura.map((skill, idx) => (
                <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="https://wa.me/5541985197035?text=Olá%20Romulo%2C%20vi%20suas%20habilidades%20e%20gostaria%20de%20conversar" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 text-black font-bold rounded hover:opacity-90" style={{ backgroundColor: '#10B981' }}>
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