import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Erick Personal Trainer",
  description: "Como os dados enviados no site de Erick Personal Trainer são utilizados.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <main className="legal-page"><div className="legal-content"><a href="/" className="legal-back">← Voltar ao site</a><p className="eyebrow">PRIVACIDADE</p><h1>Política de Privacidade</h1><p>Os dados enviados neste site, como nome, telefone e objetivo de treino, são usados apenas para responder ao seu contato e apresentar o acompanhamento mais adequado.</p><h2>Dados coletados</h2><p>Coletamos somente as informações preenchidas voluntariamente no formulário ou enviadas pelo WhatsApp. Não vendemos nem compartilhamos esses dados para fins comerciais.</p><h2>Contato e retenção</h2><p>Você pode solicitar a atualização ou exclusão dos seus dados pelo mesmo canal de atendimento utilizado para entrar em contato.</p><h2>Cookies e métricas</h2><p>Este site não utiliza cookies não essenciais por padrão. Ferramentas de métricas só são carregadas quando configuradas pelo responsável do site.</p><p className="legal-updated">Última atualização: 29 de setembro de 2026.</p></div></main>;
}
