import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><div><p className="eyebrow">ERRO 404</p><h1>Página não encontrada.</h1><p>O endereço acessado não existe ou foi movido.</p><Link href="/" className="cta-button">Voltar ao início</Link></div></main>;
}
