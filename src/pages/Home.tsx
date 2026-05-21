import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HeartHandshake, ShieldCheck, Clock, MessageCircleHeart, ArrowRight, Wind, CloudRain, UserRoundX, ShieldAlert, HeartCrack, CircleHelp, BatteryLow, Weight } from 'lucide-react';
import { motion } from 'motion/react';
import homeBanner from '../assets/generated/img-home-and1-fix.png';
import { sentimentos } from '../data/sentimentos';
import { abrirChat } from '../utils/abrirChat';
import { DivineLights } from '../components/DivineLights';
import { DustParticles } from '../components/DustParticles';

/** Mapa de nomes de ícones (string) para componentes Lucide */
const iconeMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind, CloudRain, UserRoundX, ShieldAlert, HeartCrack, CircleHelp, BatteryLow, Weight,
};

export function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col min-h-screen">
      <Helmet>
        <title>Amigos na Dor | Apoio Religioso e Conforto Anônimo</title>
        <meta name="description" content="Encontre apoio religioso, conforto e amparo rápido e anônimo para momentos de aflição. Você não está sozinho." />
      </Helmet>

      {/* Seção Principal */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-secondary">
          <img
            src={homeBanner}
            alt="Pessoas unidas em oração"
            className="w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
        </div>

        {/* Efeito de raios de luz e partículas sobre o banner */}
        <DivineLights />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
              Você não precisa passar por isso <span className="text-accent italic">sozinho</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Em momentos de dor e aflição, um ombro amigo faz toda a diferença. Oferecemos amparo rápido, anônimo e reconfortante para o seu coração.
            </p>
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 pt-4">
              <button
                onClick={() => abrirChat(navigate)}
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/30 flex items-center justify-center gap-2 text-lg"
                aria-label="Iniciar chat de apoio agora"
              >
                <MessageCircleHeart className="w-5 h-5" />
                Falar com um Amigo Agora
              </button>
              <Link
                to="/atendimento"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full transition-all border border-white/10 focus:ring-4 focus:ring-white/10 flex items-center justify-center gap-2"
              >
                Como funciona
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Funcionalidades */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
              Um porto seguro para sua alma
            </h2>
            <p className="text-text-muted text-lg">
              Nosso propósito é ser um canal de luz e esperança nos momentos mais difíceis da sua jornada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "100% Anônimo",
                description: "Sua identidade é preservada. Você pode se abrir com total segurança e sem julgamentos."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Acesso Rápido",
                description: "Sabemos que a dor não espera. Nosso chat está a um clique de distância para te ouvir."
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-primary" />,
                title: "Apoio Reconfortante",
                description: "Voluntários preparados para oferecer uma palavra amiga, oração e conforto espiritual."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-secondary mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Como você está hoje? */}
      <section id="como-voce-esta" className="py-20 bg-surface" aria-labelledby="como-voce-esta-titulo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 id="como-voce-esta-titulo" className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
              Como você está hoje?
            </h2>
            <p className="text-text-muted text-lg">
              Toque no sentimento que mais se aproxima do que você está vivendo. Temos um conteúdo especial preparado para você.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sentimentos.map((sentimento, index) => {
              const IconComponent = iconeMap[sentimento.icone];
              return (
                <motion.div
                  key={sentimento.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Link
                    to={`/sentimento/${sentimento.slug}`}
                    className="group block bg-surface p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/30"
                    aria-label={`Estou sentindo ${sentimento.nome}. Clique para ver conteúdo de apoio.`}
                  >
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                      {IconComponent && <IconComponent className="w-7 h-7 text-primary" />}
                    </div>
                    <span className="text-secondary font-serif font-semibold text-base md:text-lg block mb-1">
                      {sentimento.nome}
                    </span>
                    <span className="text-text-muted text-xs md:text-sm line-clamp-2 hidden sm:block">
                      {sentimento.descricaoCurta}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prévia de Depoimentos */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent rounded-full blur-3xl opacity-10"></div>

        {/* Partículas de poeira flutuante */}
        <DustParticles count={22} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Vozes de Esperança
              </h2>
              <p className="text-white/70 text-lg">
                Histórias reais de pessoas que encontraram conforto e força através do nosso apoio.
              </p>
            </div>
            <Link
              to="/depoimentos"
              className="text-accent hover:text-white font-medium flex items-center gap-2 transition-colors group"
            >
              Ler mais depoimentos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "Eu estava no fundo do poço, achando que não havia mais saída. A pessoa que me atendeu no chat não apenas me ouviu, mas me trouxe uma paz que eu não sentia há meses. Foi um divisor de águas na minha vida.",
                author: "Anônimo"
              },
              {
                text: "A dor do luto estava me sufocando. Encontrar esse espaço anônimo me permitiu chorar e desabafar sem medo. A oração que fizeram por mim me deu forças para levantar no dia seguinte.",
                author: "Anônimo"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
                <div className="text-accent text-6xl font-serif absolute top-4 left-4 opacity-20 leading-none">"</div>
                <p className="text-white/90 text-lg italic leading-relaxed mb-6 relative z-10 pt-4">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold">
                    A
                  </div>
                  <span className="font-medium text-white/70">{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Chamada para Ação */}
      <section className="py-24 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
            Estamos aqui por você. Agora mesmo.
          </h2>
          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            Não guarde essa dor só para você. Nossos voluntários estão prontos para te ouvir com amor, respeito e total sigilo.
          </p>
          <button
            onClick={() => abrirChat(navigate)}
            className="bg-primary hover:bg-primary-hover text-white font-semibold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/30 text-lg inline-flex items-center gap-2"
          >
            <MessageCircleHeart className="w-5 h-5" />
            Iniciar Atendimento Anônimo
          </button>
        </div>
      </section>
    </main>
  );
}
