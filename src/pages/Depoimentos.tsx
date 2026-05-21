import { Helmet } from 'react-helmet-async';
import { Quote, Send, HeartHandshake, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import depoimentosBanner from '../assets/generated/img-depoimentos-and-fix.png';

export function Depoimentos() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular chamada de API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Limpar o formulário após 3 segundos
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const testimonials = [
    {
      id: 1,
      text: "Eu estava no fundo do poço, achando que não havia mais saída. A pessoa que me atendeu no chat não apenas me ouviu, mas me trouxe uma paz que eu não sentia há meses. Foi um divisor de águas na minha vida.",
      author: "Anônimo",
      date: "Há 2 dias"
    },
    {
      id: 2,
      text: "A dor do luto estava me sufocando. Encontrar esse espaço anônimo me permitiu chorar e desabafar sem medo. A oração que fizeram por mim me deu forças para levantar no dia seguinte.",
      author: "Anônimo",
      date: "Há 1 semana"
    },
    {
      id: 3,
      text: "Eu não tinha com quem conversar sobre a minha ansiedade. O voluntário foi tão paciente e amoroso. Senti que Deus estava me abraçando através das palavras dele.",
      author: "Anônimo",
      date: "Há 2 semanas"
    },
    {
      id: 4,
      text: "Estava prestes a tomar uma decisão terrível. O chat foi a minha última tentativa de pedir socorro. Agradeço a Deus por ter encontrado vocês. Hoje estou buscando ajuda profissional e me sinto mais forte.",
      author: "Anônimo",
      date: "Há 1 mês"
    },
    {
      id: 5,
      text: "Meu casamento estava acabando e eu me sentia um fracasso. Conversar anonimamente me ajudou a organizar os pensamentos e a encontrar esperança para lutar pela minha família.",
      author: "Anônimo",
      date: "Há 2 meses"
    },
    {
      id: 6,
      text: "Sempre fui muito fechado. O anonimato foi fundamental para eu conseguir falar sobre a minha depressão. Obrigado por existirem e por dedicarem tempo para ouvir quem sofre.",
      author: "Anônimo",
      date: "Há 3 meses"
    }
  ];

  return (
    <main className="flex-col min-h-screen bg-background">
      <Helmet>
        <title>Depoimentos | Amigos na Dor</title>
        <meta name="description" content="Leia histórias reais de pessoas que encontraram conforto, esperança e apoio através do nosso atendimento anônimo." />
      </Helmet>

      {/* Banner Principal */}
      <section className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-secondary">
          <img 
            src={depoimentosBanner} 
            alt="Pessoas felizes agradecendo" 
            className="w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Histórias de <span className="text-accent italic">Esperança</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Leia os relatos de quem já passou pelo nosso atendimento e encontrou conforto. Se você foi ajudado, compartilhe sua história anonimamente.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Lista de Depoimentos */}
            <div className="lg:col-span-2 space-y-8">
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-secondary mb-4 flex items-center gap-3">
                  <Quote className="w-8 h-8 text-primary" />
                  Vozes de quem encontrou paz
                </h2>
                <p className="text-text-muted text-lg">
                  Estes são alguns dos relatos que recebemos. Todos são mantidos em sigilo e publicados de forma anônima.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-surface p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-shadow"
                  >
                    <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
                    <p className="text-text-main text-lg italic leading-relaxed mb-6 relative z-10">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-secondary/5 rounded-full flex items-center justify-center text-secondary font-serif font-bold text-sm">
                          A
                        </div>
                        <span className="font-medium text-secondary">{testimonial.author}</span>
                      </div>
                      <span className="text-sm text-text-muted">{testimonial.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Formulário de Envio */}
            <div className="lg:col-span-1">
              <div className="bg-surface p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Compartilhe sua história</h3>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Seu depoimento pode ser a luz que outra pessoa precisa para buscar ajuda. Envie de forma totalmente anônima.
                </p>

                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center"
                  >
                    <p className="font-medium mb-2">Depoimento enviado com sucesso!</p>
                    <p className="text-sm text-green-700">Agradecemos por compartilhar sua história de esperança.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                        Seu depoimento
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-text-main"
                        placeholder="Como o atendimento te ajudou? Sinta-se livre para escrever..."
                      ></textarea>
                    </div>
                    
                    <div className="bg-secondary/5 p-4 rounded-xl flex items-start gap-3">
                      <Shield className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <p className="text-xs text-text-muted leading-relaxed">
                        Seu depoimento será revisado antes da publicação para garantir que não contenha informações que possam identificá-lo.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Depoimento Anônimo
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
