'use client';

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/">
              <img 
                src="/starck_dev.png"
                alt="STARK DEV Logo" 
                width="120" 
                height="120"
                className="drop-shadow-lg hover:opacity-80 transition"
              />
            </a>
          </div>
          <div className="flex gap-8">
            <a href="/" className="text-light hover:text-accent transition text-sm">Home</a>
            <a href="/termos-uso" className="text-light hover:text-accent transition text-sm">Termos</a>
          </div>
        </nav>
      </header>

      {/* Conteúdo */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-display font-bold mb-4">
          <span style={{ color: "#6D28D9" }}>Política de Privacidade</span>
        </h1>
        
        <p className="text-gray-400 mb-12">
          Última atualização: 26 de julho de 2026
        </p>

        <div className="space-y-12 text-gray-300">
          {/* Seção 1 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              1. Introdução
            </h2>
            <p className="leading-relaxed mb-4">
              A STARK DEV, doravante referida como "Nós" ou "Nossa", mantém este website e oferece serviços de desenvolvimento full stack, automação e consultoria. Sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, protegemos e divulgamos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </div>

          {/* Seção 2 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              2. Informações que Coletamos
            </h2>
            <p className="leading-relaxed mb-4">
              Coletamos informações que você voluntariamente nos fornece através de:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Formulários de contato no site</li>
              <li>Mensagens via WhatsApp</li>
              <li>Email direto</li>
              <li>Cookies e análise de navegação (Google Analytics)</li>
              <li>Informações de dispositivo e localização aproximada</li>
            </ul>
            <p className="leading-relaxed">
              As informações coletadas podem incluir: nome, email, telefone, mensagem, IP, dados de navegação e preferências de uso.
            </p>
          </div>

          {/* Seção 3 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              3. Como Usamos Suas Informações
            </h2>
            <p className="leading-relaxed mb-4">
              Usamos as informações coletadas para:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Responder suas mensagens e consultas</li>
              <li>Enviar informações sobre nossos serviços</li>
              <li>Melhorar o site e a experiência do usuário</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Análise estatística de uso do site</li>
              <li>Prevenir fraudes e atividades ilegais</li>
            </ul>
          </div>

          {/* Seção 4 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              4. Base Legal (LGPD)
            </h2>
            <p className="leading-relaxed mb-4">
              O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Consentimento:</strong> Seu consentimento prévio para contato e comunicações</li>
              <li><strong>Execução de Contrato:</strong> Quando necessário para prestar nossos serviços</li>
              <li><strong>Legítimo Interesse:</strong> Melhorar nossos serviços e comunicações comerciais</li>
              <li><strong>Cumprimento Legal:</strong> Obrigações fiscais e legais</li>
            </ul>
          </div>

          {/* Seção 5 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              5. Segurança de Dados
            </h2>
            <p className="leading-relaxed">
              Implementamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL/TLS em todas as transmissões de dados. No entanto, nenhuma transmissão pela internet é 100% segura. Você é responsável pela confidencialidade de suas senhas.
            </p>
          </div>

          {/* Seção 6 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              6. Retenção de Dados
            </h2>
            <p className="leading-relaxed">
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos para os quais foram coletadas, ou conforme exigido por lei. Geralmente:
            </p>
            <ul className="list-disc ml-6 space-y-2 mt-4">
              <li>Dados de contato: até 2 anos após último contato</li>
              <li>Logs de acesso: até 6 meses</li>
              <li>Dados de cookie: conforme configuração do navegador</li>
              <li>Dados fiscais: 5 anos (conforme Lei)</li>
            </ul>
          </div>

          {/* Seção 7 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              7. Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              Nosso site utiliza cookies para:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Manter preferências de usuário</li>
              <li>Análise de comportamento (Google Analytics)</li>
              <li>Melhorar a experiência de navegação</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Você pode desativar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
            </p>
          </div>

          {/* Seção 8 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              8. Seus Direitos (LGPD)
            </h2>
            <p className="leading-relaxed mb-4">
              Conforme a LGPD, você tem direito a:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Confirmação:</strong> Se tratamos seus dados</li>
              <li><strong>Acesso:</strong> Acessar seus dados pessoais</li>
              <li><strong>Correção:</strong> Solicitar correção de dados incorretos</li>
              <li><strong>Exclusão:</strong> "Direito ao esquecimento" (sob certas condições)</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
              <li><strong>Revogação:</strong> Revogar seu consentimento</li>
              <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Para exercer esses direitos, entre em contato conosco via WhatsApp ou email.
            </p>
          </div>

          {/* Seção 9 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              9. Compartilhamento de Dados
            </h2>
            <p className="leading-relaxed">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
            </p>
            <ul className="list-disc ml-6 space-y-2 mt-4">
              <li>Quando exigido por lei ou autoridade competente</li>
              <li>Para proteger nossos direitos legais</li>
              <li>Com prestadores de serviço (hospedagem, email) sob contrato de proteção de dados</li>
              <li>Google Analytics para análise de tráfego</li>
            </ul>
          </div>

          {/* Seção 10 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              10. Transferência de Dados Internacionais
            </h2>
            <p className="leading-relaxed">
              Nosso site e serviços podem estar hospedados em servidores internacionais. Ao usar nosso site, você consente na transferência de suas informações para países fora do Brasil. Garantimos que essas transferências respeitam a LGPD.
            </p>
          </div>

          {/* Seção 11 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              11. Links Externos
            </h2>
            <p className="leading-relaxed">
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos ler as políticas de privacidade deles antes de fornecer informações pessoais.
            </p>
          </div>

          {/* Seção 12 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              12. Alterações nesta Política
            </h2>
            <p className="leading-relaxed">
              Podemos atualizar esta Política de Privacidade a qualquer momento. As alterações significativas serão comunicadas via email ou aviso no site. Seu uso contínuo do site após alterações implica seu consentimento com a política revisada.
            </p>
          </div>

          {/* Seção 13 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              13. Encarregado de Proteção de Dados (DPO)
            </h2>
            <p className="leading-relaxed">
              Para questões relacionadas à proteção de dados e LGPD, entre em contato:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mt-4">
              <p><strong>STARK DEV</strong></p>
              <p>Email: romulo.carracho@starckdev.online</p>
              <p>WhatsApp: +55 41 98831-0244</p>
              <p>Localização: Curitiba, PR - Brasil</p>
            </div>
          </div>

          {/* Seção 14 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              14. Contato
            </h2>
            <p className="leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade ou nossos práticas de proteção de dados, entre em contato conosco:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mt-4">
              <p>📧 Email: romulo.carracho@starckdev.online</p>
              <p>💬 WhatsApp: +55 41 98831-0244</p>
              <p>📍 Curitiba, PR - Brasil</p>
            </div>
          </div>

          {/* Seção 15 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              15. Lei Aplicável
            </h2>
            <p className="leading-relaxed">
              Esta Política de Privacidade é regida pelas leis da República Federativa do Brasil, especialmente a LGPD (Lei nº 13.709/2018). Qualquer disputa será resolvida nos tribunais competentes da cidade de Curitiba, PR.
            </p>
          </div>

          {/* Aceitar */}
          <div className="bg-gray-800 p-8 rounded-lg text-center mt-12">
            <p className="text-gray-400 mb-6">
              Ao usar este site, você declara ter lido, compreendido e concorda com esta Política de Privacidade.
            </p>
            <a 
              href="/"
              style={{ backgroundColor: "#10B981" }} 
              className="px-8 py-4 text-black font-bold rounded-lg hover:opacity-90 transition font-display inline-block"
            >
              Voltar ao Início
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-500">
        <p>© 2026 STARK DEV. Romulo Carracho. Curitiba, PR</p>
      </footer>
    </div>
  );
}