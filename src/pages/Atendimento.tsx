import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Shield, Heart, Ear, MessageCircleHeart, CheckCircle2, CalendarDays, Sun, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import atendimentoBanner from '../assets/generated/img-atendimento-and-fix.png';
import { abrirChat } from '../utils/abrirChat';

export function Atendimento() {
  const navigate = useNavigate();
  const steps = [
    {
      icon: <MessageCircleHeart className="w-6 h-6 text-white" />,
      title: "Inicie o Chat",
      description: "Clique no botão flutuante ou nos botões de atendimento espalhados pelo site. Não é necessário fazer cadastro ou informar seu nome."
    },
    {
      icon: <Ear className="w-6 h-6 text-white" />,
      title: "Fale Abertamente",
      description: "Um de nossos voluntários capacitados irá te atender. Sinta-se livre para desabafar sobre suas dores, medos ou aflições."
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Receba Acolhimento",
      description: "Oferecemos escuta ativa, palavras de conforto baseadas na fé e, se desejar, faremos uma oração por você."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Sigilo Absoluto",
      description: "Tudo o que for conversado permanecerá estritamente confidencial entre você e o voluntário."
    }
  ];

  const supportTypes = [
    "Luto e perda de entes queridos",
    "Ansiedade e depressão",
    "Problemas familiares ou conjugais",
    "Sentimento de solidão ou vazio",
    "Dúvidas espirituais e crise de fé",
    "Desespero e pensamentos difíceis"
  ];

  return (
    <main className="flex-col min-h-screen bg-background">
      <Helmet>
        <title>Como Funciona o Atendimento | Amigos na Dor</title>
        <meta name="description" content="Entenda como funciona nosso atendimento via chat. Um espaço seguro, anônimo e acolhedor para você desabafar e encontrar paz." />
      </Helmet>

      {/* Banner Principal */}
      <section className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-secondary">
          <img 
            src={atendimentoBanner} 
            alt="Pessoas intercedendo com celular" 
            className="w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Como funciona o nosso <span className="text-accent italic">Acolhimento</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Um espaço seguro, totalmente anônimo e preparado para ouvir você no momento em que mais precisa.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Passos */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-secondary mb-4">O Passo a Passo do Atendimento</h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Nosso processo foi desenhado para ser o mais simples e reconfortante possível, respeitando o seu tempo e a sua privacidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Linha de conexão para desktop */}
              <div className="hidden lg:block absolute top-8 left-1/8 right-1/8 h-0.5 bg-primary/10 -z-10"></div>
              
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-background z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-secondary mb-3">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Horários de Atendimento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
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
                  Nossos voluntários se revezam para oferecer escuta e amparo nos períodos abaixo.
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
                     <strong>Não encontrou ninguém online?</strong> Eventualmente estamos disponíveis em outros horários além destes. Tente novamente em breve ou conte com o CVV (188).
                   </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* O que apoiamos & Aviso Legal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Em quais momentos podemos ajudar?</h2>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Nossos voluntários estão preparados para oferecer suporte emocional e espiritual em diversas situações de crise ou dor profunda.
              </p>
              <ul className="space-y-4">
                {supportTypes.map((type, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-secondary font-medium text-lg">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Importante: Limites do Atendimento</h3>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  O <strong>Amigos na Dor</strong> oferece apoio emocional e espiritual voluntário. Nosso objetivo é ser um ombro amigo e um canal de oração.
                </p>
                <p>
                  <strong>Não substituímos atendimento médico, psiquiátrico ou psicológico profissional.</strong> Se você estiver em emergência médica ou risco iminente à vida, por favor, ligue imediatamente para o CVV (188) ou para o SAMU (192).
                </p>
                <p className="pt-4 border-t border-gray-100 font-medium text-secondary">
                  Nossa missão é caminhar ao seu lado, oferecendo a paz que excede todo entendimento.
                </p>
              </div>
              <button 
                onClick={() => abrirChat(navigate)}
                className="mt-8 w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircleHeart className="w-5 h-5" />
                Quero conversar agora
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
