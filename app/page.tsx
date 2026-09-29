"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, BarChart3, CalendarDays, Dumbbell, Menu, MessageCircle, X } from "lucide-react";

const whatsapp = "#contato";
const nav = [["Início","inicio"],["Sobre","sobre"],["Método","metodo"],["Serviços","servicos"],["Planos","planos"]];
const faqs = [
  ["Como funciona o acompanhamento?", "Após a avaliação inicial, o treino é estruturado de acordo com sua rotina, objetivo e experiência. Os ajustes acontecem conforme a sua evolução."],
  ["Atende iniciantes?", "Sim. O treino é adaptado para que você comece com segurança, técnica e uma progressão adequada."],
  ["Como funciona a consultoria online?", "Você recebe um planejamento individual e acompanhamento remoto para manter o treino alinhado à sua rotina."],
  ["Onde acontecem os treinos presenciais?", "Local de atendimento: [INSERIR ACADEMIA / CIDADE]."],
  ["Como funciona o agendamento?", "Fale pelo WhatsApp para consultar horários e marcar sua avaliação."],
  ["Qual a duração das sessões?", "A duração é definida de acordo com o formato de acompanhamento e a necessidade do aluno."],
];

function Logo() {
  return <a href="#inicio" className="logo" aria-label="Erick Personal Trainer">ERICK<span>PERSONAL TRAINER</span></a>;
}
function CTA({ children, outline = false, href = "#contato" }: { children: React.ReactNode; outline?: boolean; href?: string }) {
  return <a className={outline ? "cta-button outline" : "cta-button"} href={href}>{children}{!outline && <ArrowRight size={15} />}</a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState("inicio");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 16);
    const sections = nav
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", updateHeader);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <header className={hasScrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="container header-inner">
          <Logo />
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegação principal">
            {nav.map(([label, id]) => <a key={id} className={activeSection === id ? "active" : undefined} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="header-cta" href="#contato" onClick={() => setMenuOpen(false)}>Agendar avaliação</a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Alternar menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="inicio"><div className="hero-watermark" aria-hidden="true"><img className="hero-wordmark" src="/images/hero-erick-texture.png" alt="" /></div><div className="hero-lines" aria-hidden="true" /><div className="container hero-grid"><div className="hero-image"><span className="hero-editorial top">DISCIPLINA<br />CONSTÂNCIA<br />RESULTADOS</span><span className="hero-editorial bottom">MAIS<br />FORÇA<br />PARA UMA<br />VERSÃO MELHOR<br />DE VOCÊ</span><img src="/images/hero-fisiculturista.png" alt="Erick, Personal Trainer, em pose de duplo bíceps" /></div><div className="hero-copy"><p className="eyebrow">PERSONAL TRAINER <i /> <span>TREINO PERSONALIZADO</span></p><h1>Treinamento<br />feito para a<br /><em>sua evolução.</em></h1><p className="intro">Acompanhamento individual para quem busca mais força, condicionamento, saúde e consistência nos treinos.</p><div className="hero-actions"><CTA>Agendar avaliação</CTA><CTA outline href={whatsapp}>Falar no WhatsApp</CTA></div><div className="availability"><span><b>+150</b><small>alunos</small></span><span><Dumbbell size={20} /><small>Presencial<br />e online</small></span><span><BarChart3 size={20} /><small>Treino<br />personalizado</small></span></div></div></div></section>

      <section className="intro-section"><div className="container intro-grid"><div><p className="intro-label"><span />COMO FUNCIONA</p><h2>Treinar melhor<br />começa com um<br />plano<span>.</span></h2></div><div className="intro-description"><p>Cada pessoa possui uma rotina, histórico e objetivo diferentes. O acompanhamento é estruturado para que cada treino faça sentido dentro da sua realidade.</p></div></div><div className="container pillars"><div><b>01</b><h3>Planejamento</h3><p>Estratégia de treino individual.</p></div><div><b>02</b><h3>Execução</h3><p>Orientação, técnica e segurança.</p></div><div><b>03</b><h3>Evolução</h3><p>Acompanhamento e ajustes.</p></div></div></section>

      <section className="about about-art" id="sobre"><img src="/images/about-erick-full.png" alt="Erick Personal Trainer: apresentação, especialidade e atendimento" /></section>

      <section className="method" id="metodo">
        <div className="container">
          <p className="eyebrow method-label"><span />MÉTODO</p>
          <h2>Um processo simples.<br />Um acompanhamento<br />completo<span>.</span></h2>
          <p className="method-description">Cada etapa foi pensada para tornar sua evolução mais clara, prática e sustentável.</p>
          <div className="method-line">
            {[["01","Avaliação","Objetivos, rotina e histórico."],["02","Planejamento","Estratégia construída para você."],["03","Treinamento","Execução com orientação técnica."],["04","Evolução","Ajustes para seguir avançando."]].map(([n,t,d]) =>
              <article key={n}><b>{n}</b><i aria-hidden="true" /><h3>{t}</h3><p>{d}</p></article>
            )}
          </div>
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="container section-heading"><div><p className="eyebrow services-label"><span />SERVIÇOS</p><h2>Escolha a forma de<br />acompanhar sua<br />evolução<span>.</span></h2></div><p>Atendimentos pensados para diferentes rotinas, objetivos e níveis de experiência.</p></div>
        <div className="container service-grid">
          <article className="service feature"><span>01</span><i aria-hidden="true" /><h3>Personal Presencial</h3><p>Treinamento individual, correções e acompanhamento próximo na academia.</p><a href="#contato">Saiba mais <ArrowRight size={15}/></a></article>
          <article className="service feature"><span>02</span><i aria-hidden="true" /><h3>Consultoria Online</h3><p>Planejamento individual e suporte para treinar com autonomia.</p><a href="#contato">Saiba mais <ArrowRight size={15}/></a></article>
          {[["Treino em Dupla","Evolução compartilhada, com atenção técnica."],["Para Iniciantes","Comece com segurança e boa orientação."],["Emagrecimento","Estratégia para constância e condicionamento."],["Hipertrofia","Força, massa muscular e progressão."]].map(([t,d],i)=><article className="service compact" key={t}><span>{String(i+3).padStart(2,"0")}</span><i aria-hidden="true" /><h3>{t}</h3><p>{d}</p><a href="#contato">Saiba mais <ArrowRight size={14}/></a></article>)}
        </div>
      </section>

      <section className="results" id="resultados">
        <div className="container results-head"><div><p className="eyebrow">RESULTADOS</p><h2>Evolução construída<br />com consistência.</h2></div><p>Resultados reais serão incluídos quando as fotos e informações dos alunos forem disponibilizadas.</p></div>
        <div className="container case-scroll">
          {["Aluno 01","Aluno 02","Aluno 03"].map((name,i)=><article className="case" key={name}><div className="case-visual"><span>ANTES</span><i /><span>DEPOIS</span></div><h3>{name}</h3><dl><div><dt>Objetivo</dt><dd>{i === 1 ? "Hipertrofia" : "Emagrecimento"}</dd></div><div><dt>Período</dt><dd>[INSERIR]</dd></div><div><dt>Resultado</dt><dd>[INSERIR]</dd></div></dl></article>)}
        </div>
      </section>

      <section className="testimonials">
        <div className="container testimonial-grid"><p className="eyebrow">DEPOIMENTOS</p><div><blockquote>“Comecei buscando melhorar minha condição física, mas o acompanhamento me ajudou principalmente a criar constância.”</blockquote><cite>Mariana S. <span>— 3 meses de acompanhamento</span></cite></div><div className="quote-secondary"><blockquote>“O planejamento faz sentido para a rotina e torna a evolução mais sustentável.”</blockquote><cite>Lucas R. <span>— 6 meses de acompanhamento</span></cite></div></div>
      </section>

      <section className="plans" id="planos">
        <div className="container"><p className="eyebrow">PLANOS</p><h2>Escolha como você<br /><em>quer treinar.</em></h2><p className="plans-lead">Três formas de acompanhamento, pensadas para diferentes rotinas e objetivos.</p><div className="plans-grid">
          {[["Online","Treine de onde estiver.","Acompanhamento próximo e ajustes conforme sua evolução.",["Treino individualizado","Acompanhamento remoto","Ajustes periódicos","Suporte pelo WhatsApp"],"100% ONLINE","Quero conhecer o plano"],["Presencial","Treine comigo de perto.","Correção técnica e acompanhamento em cada etapa.",["Treino individualizado","Acompanhamento 1:1","Correção de execução","Ajustes periódicos"],"MAIS PROCURADO","Quero treinar com Erick"],["Híbrido","Mais flexibilidade para seus resultados.","Encontros presenciais com suporte online.",["Treino presencial + online","Acompanhamento contínuo","Ajustes periódicos","Suporte direto"],"ONLINE + PRESENCIAL","Quero conhecer o híbrido"]].map(([name,title,description,items,tag,button],i)=><article className={i===1 ? "plan preferred" : "plan"} key={name}><div className="plan-top"><p>{name.toUpperCase()}</p><span>{tag}</span></div><h3>{title}</h3><p className="plan-description">{description}</p><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul><div className="plan-availability"><CalendarDays size={20} />Vagas mediante disponibilidade</div><a href="#contato">{button} <ArrowUpRight size={17} /></a></article>)}
        </div></div>
      </section>

      <section className="final-cta"><div className="container"><p className="eyebrow">COMECE HOJE</p><h2>Pronto para começar?</h2><p>Vamos entender seu objetivo e construir um plano de treino para você.</p><div><CTA>Agendar avaliação</CTA><CTA outline href={whatsapp}>Falar com Erick</CTA></div></div></section>

      <section className="faq"><div className="container faq-grid"><div className="faq-intro"><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2>Informação clara,<br />antes de <em>começar.</em></h2><p>Aqui você encontra as principais respostas sobre o meu acompanhamento. Se ainda tiver alguma dúvida, estou à disposição para conversar.</p><div className="faq-links"><a href={whatsapp}>Falar no WhatsApp <ArrowRight size={15}/></a><a href="#">Me seguir no Instagram <ArrowRight size={15}/></a></div></div><div className="faq-list">{faqs.map(([q,a],i)=>{const isOpen=faqOpen===i;return <div key={q} className={isOpen ? "faq-item active" : "faq-item"}><button className="faq-row" aria-expanded={isOpen} aria-controls={`faq-answer-${i}`} onClick={() => setFaqOpen(isOpen ? null : i)}><span>{q}</span><span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span></button><div id={`faq-answer-${i}`} role="region" aria-hidden={!isOpen} className="faq-answer"><div><p>{a}</p>{i===0&&<ul><li>Treino personalizado</li><li>Acompanhamento próximo</li><li>Ajustes conforme sua evolução</li></ul>}</div></div></div>})}</div></div></section>

      <section className="contact" id="contato"><div className="container contact-grid"><div><p className="eyebrow">CONTATO</p><h2>Vamos conversar sobre seus objetivos?</h2><p>Conte o que você busca. O primeiro passo é entender a sua rotina e encontrar o melhor caminho para começar.</p><div className="contact-links"><a href={whatsapp}>WhatsApp <ArrowRight size={15}/></a><a href="#">Instagram <ArrowRight size={15}/></a></div></div><form onSubmit={(e)=>e.preventDefault()}><label>Nome<input required placeholder="Seu nome" /></label><label>WhatsApp<input required placeholder="(00) 00000-0000" /></label><label>Objetivo<select defaultValue=""><option value="" disabled>Selecione seu objetivo</option><option>Emagrecimento</option><option>Hipertrofia</option><option>Condicionamento</option><option>Iniciante</option><option>Outro</option></select></label><label className="wide">Mensagem<textarea placeholder="Conte um pouco sobre o seu objetivo" /></label><button className="form-button">Enviar mensagem <ArrowRight size={15}/></button></form></div></section>

      <footer><div className="container footer-inner"><Logo/><div>{nav.slice(0,4).map(([label,id])=><a key={id} href={`#${id}`}>{label}</a>)}</div><p>CREF [INSERIR] · © {new Date().getFullYear()} Erick Personal Trainer</p></div></footer>
      <div className="mobile-bar"><a href="#contato">Agendar</a><a href={whatsapp}>WhatsApp</a></div>
    </main>
  );
}
