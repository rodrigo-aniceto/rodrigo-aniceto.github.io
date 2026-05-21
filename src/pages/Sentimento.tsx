import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Heart, HandHeart, MessageCircleHeart, ArrowRight, Wind, CloudRain, UserRoundX, ShieldAlert, HeartCrack, CircleHelp, BatteryLow, Weight, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { sentimentos } from '../data/sentimentos';
import artigos from '../data/artigos.json';
import homeBanner from '../assets/generated/img-home-and1-fix.png';
import { abrirChat } from '../utils/abrirChat';

/** Mapa de nomes de ícones (string) para componentes Lucide */
const iconeMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind, CloudRain, UserRoundX, ShieldAlert, HeartCrack, CircleHelp, BatteryLow, Weight,
};

export function Sentimento() {
  const { slug } = useParams<{ slug: string }>();
  const sentimento = sentimentos.find(s => s.slug === slug);
  const navigate = useNavigate();

  if (!sentimento) {
    return (
      <main className="flex-col min-h-screen bg-background py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif font-bold text-secondary mb-4">Página não encontrada</h1>
          <Link to="/" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Voltar para a página inicial
          </Link>
        </div>
      </main>
    );
  }

  const IconComponent = iconeMap[sentimento.icone];

  // Busca artigos relacionados pelo slug
  const artigosRelacionados = sentimento.artigosRelacionados
    ? artigos.filter(a => sentimento.artigosRelacionados!.includes(a.slug))
    : [];

  return (
    <main className="flex-col min-h-screen bg-background">
      <Helmet>
        <title>{sentimento.nome} — Apoio e Conforto | Amigos na Dor</title>
        <meta name="description" content={`${sentimento.descricaoCurta} Encontre versículos bíblicos, oração e palavras de encorajamento para momentos de ${sentimento.nome.toLowerCase()}.`} />
      </Helmet>

      {/* Banner — Mesmo padrão do site: bg-secondary + imagem + overlay */}
      <section className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-secondary">
          <img
            src={homeBanner}
            alt="Pessoas unidas em oração"
            className="w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              {sentimento.nome}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {sentimento.descricaoCurta}
            </p>
          </div>
        </div>
      </section>

      {/* Versículo Principal */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center relative"
          >
            <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" aria-hidden="true" />
            <BookOpen className="w-8 h-8 mx-auto mb-6 text-primary" aria-hidden="true" />
            <blockquote>
              <p className="text-xl md:text-2xl font-serif text-secondary leading-relaxed italic mb-6">
                "{sentimento.versiculoPrincipal.texto}"
              </p>
              <footer className="text-primary font-semibold text-base">
                — {sentimento.versiculoPrincipal.referencia}
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Texto de Encorajamento */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary">
                Palavras de Conforto
              </h2>
            </div>
            <p className="text-text-main text-lg leading-relaxed">
              {sentimento.textoEncorajamento}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Versículos Adicionais */}
      <section className="py-12 md:py-16 bg-background" aria-labelledby="versiculos-titulo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h2 id="versiculos-titulo" className="text-2xl md:text-3xl font-serif font-bold text-secondary">
              Mais Versículos para Meditar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sentimento.versiculosAdicionais.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" aria-hidden="true" />
                <blockquote>
                  <p className="text-text-main italic leading-relaxed mb-4">
                    "{v.texto}"
                  </p>
                  <footer className="text-primary font-semibold text-sm">
                    — {v.referencia}
                  </footer>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflexão Bíblica */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary">
                Reflexão Bíblica
              </h2>
            </div>
            <p className="text-text-main text-lg leading-relaxed">
              {sentimento.reflexao}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Oração */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-60 h-60 bg-primary rounded-full blur-3xl opacity-20" aria-hidden="true"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <HandHeart className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Uma Oração para Você
                </h2>
              </div>
              <p className="text-white/85 text-lg leading-relaxed italic">
                {sentimento.oracaoCurta}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artigos Relacionados */}
      {artigosRelacionados.length > 0 && (
        <section className="py-12 md:py-16 bg-surface" aria-labelledby="artigos-relacionados-titulo">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="artigos-relacionados-titulo" className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artigosRelacionados.map((artigo) => (
                <Link
                  key={artigo.slug}
                  to={`/conteudos/${artigo.slug}`}
                  className="bg-background p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-serif font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {artigo.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {artigo.content.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Ler artigo <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — Chamada para Atendimento */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartCrack className="w-14 h-14 text-primary mx-auto mb-6 opacity-80" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-4">
            Precisa conversar com alguém?
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Se as palavras não forem suficientes, nossos voluntários estão prontos para te ouvir com amor, respeito e total sigilo.
          </p>
          <button
            onClick={() => abrirChat(navigate)}
            className="bg-primary hover:bg-primary-hover text-white font-semibold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/30 text-lg inline-flex items-center gap-2"
          >
            <MessageCircleHeart className="w-5 h-5" />
            Falar com um Amigo Agora
          </button>
        </div>
      </section>
    </main>
  );
}
