import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Heart, Instagram, Facebook, Youtube, Mail, Clock, MessageCircleHeart, ArrowRight, CalendarDays, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import homeBanner from '../assets/generated/img-home-and1-fix.png';

export function Apoio() {
  return (
    <main className="flex-col min-h-screen bg-background">
      <Helmet>
        <title>Ponto de Apoio | Amigos na Dor</title>
        <meta name="description" content="Nossos voluntários estão offline no momento, mas você não está sozinho. Encontre aqui canais de apoio disponíveis 24 horas." />
      </Helmet>

      {/* Banner */}
      <section className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-secondary">
          <img
            src={homeBanner}
            alt="Pessoas unidas em oração"
            className="w-full h-full object-cover object-center opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Você não está <span className="text-accent italic">sozinho</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Nossos voluntários não estão disponíveis neste momento, mas isso não significa que você precisa enfrentar essa dor sozinho. Existem pessoas prontas para te ouvir agora mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* Mensagem de Acolhimento */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Heart className="w-10 h-10 text-primary mx-auto mb-6" aria-hidden="true" />
            <p className="text-text-main text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Sabemos que quando a dor aperta, cada minuto parece uma eternidade. Mesmo que nosso chat esteja offline agora, Deus nunca está. E há pessoas capacitadas que podem te ajudar neste exato momento. Abaixo, você encontra canais de apoio que funcionam 24 horas, além das nossas redes sociais onde também podemos te acolher.
            </p>
          </motion.div>

          {/* Canais de Emergência */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-surface p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-secondary">CVV — Centro de Valorização da Vida</h2>
                  <p className="text-text-muted text-sm">Apoio emocional 24 horas</p>
                </div>
              </div>
              <p className="text-text-main leading-relaxed mb-6">
                O CVV realiza apoio emocional e prevenção do suicídio, atendendo voluntariamente todas as pessoas que querem e precisam conversar, sob total sigilo, por telefone, email, chat e presencialmente.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:188"
                  className="flex items-center gap-3 bg-primary/5 hover:bg-primary/10 p-4 rounded-xl transition-colors group"
                >
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                  <div>
                    <span className="text-secondary font-bold text-2xl">188</span>
                    <span className="text-text-muted text-sm block">Ligue gratuitamente, 24h</span>
                  </div>
                </a>
                <a
                  href="https://www.cvv.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary/5 hover:bg-primary/10 p-4 rounded-xl transition-colors group"
                >
                  <MessageCircleHeart className="w-5 h-5 text-primary" aria-hidden="true" />
                  <div>
                    <span className="text-secondary font-semibold">Chat online do CVV</span>
                    <span className="text-text-muted text-sm block">www.cvv.org.br</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-surface p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-secondary">SAMU — Serviço de Atendimento Móvel</h2>
                  <p className="text-text-muted text-sm">Emergências médicas 24 horas</p>
                </div>
              </div>
              <p className="text-text-main leading-relaxed mb-6">
                Em situação de crise ou emergência médica, o SAMU está disponível em todo o Brasil. Não hesite em ligar se você ou alguém próximo estiver em risco.
              </p>
              <a
                href="tel:192"
                className="flex items-center gap-3 bg-primary/5 hover:bg-primary/10 p-4 rounded-xl transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                <div>
                  <span className="text-secondary font-bold text-2xl">192</span>
                  <span className="text-text-muted text-sm block">Ligue gratuitamente, 24h</span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Horários de Atendimento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-surface p-1 pt-12 md:p-12 rounded-[2.5rem] shadow-xl shadow-secondary/5 border border-gray-100 relative overflow-hidden">
              {/* Elementos decorativos de fundo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16 blur-2xl"></div>

              <div className="text-center mb-12 px-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4 leading-tight">
                  Horários que Caminhamos Juntos
                </h2>
                <p className="text-text-muted text-lg max-w-xl mx-auto">
                  Nossos voluntários se revezam para oferecer escuta e amparo nos períodos abaixo. Fora desses horários, recorra aos canais 24h acima.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto relative z-10 px-4 md:px-0">
                {/* Dias de Semana */}
                <div className="group bg-background p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                      <Sun className="w-5 h-5" />
                    </div>
                    <h3 className="text-secondary font-bold text-xl">Segunda a Sexta</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4 p-4 bg-surface rounded-2xl border border-gray-50">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-text-muted uppercase tracking-wider">Manhã</span>
                      </div>
                      <span className="text-secondary font-bold text-lg">07:00 — 12:00</span>
                    </div>

                    <div className="flex items-center justify-between gap-4 p-4 bg-surface rounded-2xl border border-gray-50">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-text-muted uppercase tracking-wider">Tarde e Noite</span>
                      </div>
                      <span className="text-secondary font-bold text-lg">14:00 — 00:00</span>
                    </div>
                  </div>
                </div>

                {/* Fins de Semana */}
                <div className="group bg-background p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/20 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      <CalendarDays className="w-5 h-5" />
                    </div>
                    <h3 className="text-secondary font-bold text-xl">Sábados e Domingos</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4 p-4 bg-surface rounded-2xl border border-gray-50">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-text-muted uppercase tracking-wider">Período Noturno</span>
                      </div>
                      <span className="text-secondary font-bold text-lg">22:00 — 00:00</span>
                    </div>

                    <p className="px-2 text-text-muted text-sm leading-relaxed">
                      Nos fins de semana, concentramos o atendimento no período de maior silêncio e necessidade.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center px-4">
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 bg-accent/5 rounded-2xl border border-accent/10 max-w-2xl mx-auto">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-surface bg-gray-200 flex items-center justify-center text-[10px] text-text-muted font-bold overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?u=user${i+10}`} alt="Voluntário" />
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary text-white flex items-center justify-center text-[10px] font-bold">+</div>
                   </div>
                   <p className="text-text-main text-sm md:text-base leading-snug">
                     <strong>Não encontrou ninguém online?</strong> Tente novamente em breve ou conte com o CVV (188).
                   </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 text-center"
          >
            <h2 className="text-2xl font-serif font-bold text-secondary mb-4">
              Fale conosco pelas Redes Sociais
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
              Você também pode nos enviar uma mensagem pelas nossas redes sociais. Responderemos assim que possível, com todo carinho e sigilo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/amigosnador.ipn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary/5 hover:bg-primary hover:text-white text-secondary px-6 py-3 rounded-xl transition-all font-medium"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/igreja.ipn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary/5 hover:bg-primary hover:text-white text-secondary px-6 py-3 rounded-xl transition-all font-medium"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a
                href="https://www.twitter.com/ipnacional"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary/5 hover:bg-primary hover:text-white text-secondary px-6 py-3 rounded-xl transition-all font-medium"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X (Twitter)
              </a>
              <a
                href="https://www.youtube.com/user/IPNCom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary/5 hover:bg-primary hover:text-white text-secondary px-6 py-3 rounded-xl transition-all font-medium"
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
              <a
                href="mailto:amigosnador@gmail.com"
                className="flex items-center gap-3 bg-secondary/5 hover:bg-primary hover:text-white text-secondary px-6 py-3 rounded-xl transition-all font-medium"
              >
                <Mail className="w-5 h-5" />
                E-mail
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Versículo de Encorajamento */}
      <section className="py-12 md:py-16 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary rounded-full blur-3xl opacity-20" aria-hidden="true"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <blockquote>
            <p className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed mb-6">
              "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel."
            </p>
            <footer className="text-accent font-semibold">— Isaías 41:10</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA - Voltar e explorar conteúdos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-4">
            Enquanto isso, explore nossos conteúdos
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Temos reflexões bíblicas, palavras de conforto e conteúdos que podem te ajudar neste momento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/conteudos"
              className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/30 inline-flex items-center gap-2"
            >
              Ver Conteúdos
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/#como-voce-esta"
              className="bg-secondary/5 hover:bg-secondary/10 text-secondary font-medium px-8 py-4 rounded-full transition-all inline-flex items-center gap-2"
            >
              Como você está hoje?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
