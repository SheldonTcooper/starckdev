'use client';

export default function TermosUso() {
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
            <a href="/politica-privacidade" className="text-light hover:text-accent transition text-sm">Privacidade</a>
          </div>
        </nav>
      </header>

      {/* Conteúdo */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-display font-bold mb-4">
          <span style={{ color: "#6D28D9" }}>Termos e Condições de Uso</span>
        </h1>
        
        <p className="text-gray-400 mb-12">
          Última atualização: 26 de julho de 2026
        </p>

        <div className="space-y-12 text-gray-300">
          {/* Seção 1 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              1. Aceitação dos Termos
            </h2>
            <p className="leading-relaxed">
              Ao acessar e usar este website (starckdev.online), você concorda em aceitar e estar vinculado por estes Termos e Condições de Uso. Se você não concordar com qualquer parte destes termos, por favor, não use este site. A STARK DEV reserva-se o direito de modificar estes termos a qualquer momento, sem aviso prévio. O uso continuado do site após modificações implica sua aceitação dos novos termos.
            </p>
          </div>

          {/* Seção 2 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              2. Descrição do Serviço
            </h2>
            <p className="leading-relaxed mb-4">
              A STARK DEV oferece serviços de:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Desenvolvimento Full Stack (Web, Mobile, Backend)</li>
              <li>Automação de Processos com N8N</li>
              <li>Consultoria de Arquitetura de Software</li>
              <li>Integrações e APIs</li>
              <li>Consultoria de Dados e Estratégia Digital</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Todos os serviços estão sujeitos a negociação prévia e acordo contratual específico.
            </p>
          </div>

          {/* Seção 3 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              3. Uso Permitido
            </h2>
            <p className="leading-relaxed mb-4">
              Você concorda em usar este site apenas para fins lícitos e de forma que não:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Infrinja leis aplicáveis ou regulamentações</li>
              <li>Viole direitos de terceiros (privacidade, propriedade intelectual)</li>
              <li>Cause dano ou incapacite o site</li>
              <li>Contenha material obsceno, ofensivo ou ilegal</li>
              <li>Tente ganhar acesso não autorizado ao site</li>
              <li>Interfira com o funcionamento do site</li>
              <li>Realize coleta de dados sem autorização (scraping)</li>
            </ul>
          </div>

          {/* Seção 4 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              4. Propriedade Intelectual
            </h2>
            <p className="leading-relaxed mb-4">
              Todo conteúdo neste site, incluindo:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Textos, imagens, gráficos, logos</li>
              <li>Código-fonte e tecnologia</li>
              <li>Design e layout</li>
              <li>Informações e dados</li>
            </ul>
            <p className="leading-relaxed mt-4">
              ...é propriedade intelectual da STARK DEV ou seus fornecedores e é protegido por leis de direitos autorais brasileiras e internacionais. É proibido reproduzir, distribuir ou modificar qualquer conteúdo sem permissão expressa por escrito.
            </p>
          </div>

          {/* Seção 5 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              5. Limitação de Responsabilidade
            </h2>
            <p className="leading-relaxed mb-4">
              O site é fornecido "conforme está" sem garantias de qualquer tipo. A STARK DEV não se responsabiliza por:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Erros ou omissões no conteúdo</li>
              <li>Perda de dados ou interrupção do serviço</li>
              <li>Danos diretos, indiretos ou consequentes</li>
              <li>Conteúdo de sites externos linkados</li>
              <li>Vírus ou malware que possam infectar seu dispositivo</li>
              <li>Qualidade, adequação ou performance do site</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Em nenhum caso a responsabilidade da STARK DEV excederá o valor pago por você através do site.
            </p>
          </div>

          {/* Seção 6 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              6. Links Externos
            </h2>
            <p className="leading-relaxed">
              Este site pode conter links para websites de terceiros. A STARK DEV não é responsável pelo conteúdo, precisão ou práticas desses sites. O acesso a links externos é por conta e risco do usuário. Recomendamos ler os termos de uso e política de privacidade de sites externos antes de usar seus serviços.
            </p>
          </div>

          {/* Seção 7 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              7. Uso de Cookies e Rastreamento
            </h2>
            <p className="leading-relaxed mb-4">
              Este site utiliza cookies e tecnologias de rastreamento para:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Melhorar a experiência do usuário</li>
              <li>Análise de tráfego e comportamento (Google Analytics)</li>
              <li>Armazenar preferências de usuário</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Você pode desativar cookies nas configurações do seu navegador. Consulte nossa Política de Privacidade para mais detalhes.
            </p>
          </div>

          {/* Seção 8 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              8. Solicitações de Contato e Propostas
            </h2>
            <p className="leading-relaxed mb-4">
              Ao enviar uma mensagem ou solicitação de contato através do site:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Você autoriza a STARK DEV a responder via email, WhatsApp ou telefone</li>
              <li>Informações fornecidas podem ser usadas para enviar informações sobre serviços</li>
              <li>Não há obrigação de resposta a todas as mensagens</li>
              <li>Propostas são válidas por 30 dias, salvo indicação contrária</li>
            </ul>
          </div>

          {/* Seção 9 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              9. Contratos e Serviços Profissionais
            </h2>
            <p className="leading-relaxed mb-4">
              Este site é apenas para apresentação de serviços. Qualquer contrato para prestação de serviços:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Será formalizado por documento contratual separado</li>
              <li>Terá termos e condições específicas negociados</li>
              <li>Incluirá detalhes de escopo, prazo, pagamento e responsabilidades</li>
              <li>Prevalecerá sobre qualquer informação neste site</li>
            </ul>
          </div>

          {/* Seção 10 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              10. Exclusão de Garantias
            </h2>
            <p className="leading-relaxed">
              Este website é fornecido "conforme está" sem garantias expressas ou implícitas. A STARK DEV expressamente exclui garantias de comerciabilidade, adequação a um propósito específico, ou não-violação de direitos. O uso do site é por sua conta e risco.
            </p>
          </div>

          {/* Seção 11 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              11. Indenização
            </h2>
            <p className="leading-relaxed">
              Você concorda em indenizar e isentar a STARK DEV e seus dirigentes, funcionários e agentes de qualquer reclamação, dano ou despesa (incluindo honorários advocatícios) resultantes de sua violação destes Termos, seu uso do site ou violação de direitos de terceiros.
            </p>
          </div>

          {/* Seção 12 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              12. Segurança e Acesso
            </h2>
            <p className="leading-relaxed mb-4">
              Você é responsável por:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Manter a confidencialidade de qualquer senha ou credencial</li>
              <li>Todas as atividades que ocorrem sob sua conta</li>
              <li>Notificar imediatamente sobre uso não autorizado</li>
              <li>Garantir que qualquer informação fornecida é precisa e completa</li>
            </ul>
          </div>

          {/* Seção 13 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              13. Modificação do Site
            </h2>
            <p className="leading-relaxed">
              A STARK DEV reserva-se o direito de modificar, interromper ou descontinuar este website ou qualquer serviço sem notificação prévia. Não seremos responsáveis por qualquer modificação ou interrupção.
            </p>
          </div>

          {/* Seção 14 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              14. Lei Aplicável e Foro Competente
            </h2>
            <p className="leading-relaxed">
              Estes Termos e Condições são regidos pelas leis da República Federativa do Brasil, especialmente o Código Civil, Lei de E-commerce (Lei nº 12.965/2014 - Marco Civil da Internet) e Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p className="leading-relaxed mt-4">
              Qualquer disputa ou controvérsia será resolvida exclusivamente pelos tribunais competentes da cidade de Curitiba, Estado do Paraná, Brasil.
            </p>
          </div>

          {/* Seção 15 */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#10B981" }}>
              15. Contato
            </h2>
            <p className="leading-relaxed mb-4">
              Para questões sobre estes Termos e Condições, entre em contato:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p><strong>STARK DEV</strong></p>
              <p>Email: romulo.carracho@starckdev.online</p>
              <p>WhatsApp: +55 41 98831-0244</p>
              <p>Localização: Curitiba, PR - Brasil</p>
            </div>
          </div>

          {/* Aceitação Final */}
          <div className="bg-gray-800 p-8 rounded-lg text-center mt-12">
            <p className="text-gray-400 mb-6">
              Ao usar este site, você declara ter lido, compreendido e aceita estar vinculado por estes Termos e Condições de Uso.
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