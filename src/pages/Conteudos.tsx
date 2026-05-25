import { Helmet } from 'react-helmet-async';
import { BookOpen, User, ArrowRight, Video, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import conteudosBanner from '../assets/generated/img-artigos.and-fix.png';
import artigos from '../data/artigos.json';
import { getArticleImage } from '../utils/articleImages';

const getReadingTime = (html: string) => {
  const text = html.replace(/<[^>]*>?/gm, '');
  const wordCount = text.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / 200);
  return `${time} min de leitura`;
};

export function Conteudos() {
  return (
    <main className="flex-col min-h-screen bg-background">
      <Helmet>
        <title>Conteúdos | Amigos na Dor</title>
        <meta name="description" content="Leia artigos, reflexões e mensagens de conforto e esperança para nutrir sua alma nos momentos de dificuldade." />
      </Helmet>

      {/* Banner Principal */}
      <section className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-secondary">
          <img 
            src={conteudosBanner} 
            alt="Pessoa lendo em um tablet" 
            className="w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Conteúdos que <span className="text-accent italic">Curam</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Aqui é o nosso espaço de conteúdos diversos. Reflexões bíblicas e textos informativos sobre os assuntos tratados nos atendimentos.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-secondary flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              Últimas Publicações
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {artigos.map((post, index) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Link
                    to={`/conteudos/${post.slug}`}
                    aria-label={`Abrir artigo ${post.title}`}
                    className="block h-full focus:outline-none focus:ring-4 focus:ring-primary/30"
                  >
                    <img 
                      src={getArticleImage(post.image)}
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {getReadingTime(post.content)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-secondary mb-3 line-clamp-2">
                    <Link
                      to={`/conteudos/${post.slug}`}
                      className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p 
                    className="text-text-muted leading-relaxed mb-6 line-clamp-3 flex-grow"
                  >
                    {post.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                  </p>
                  
                  <Link 
                    to={`/conteudos/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors mt-auto group/link"
                  >
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Seção de Vídeos */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-secondary flex items-center gap-3">
              <Video className="w-8 h-8 text-primary" />
              Vídeos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-surface rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube-nocookie.com/embed/OG3-IFkPZUs" 
                  title="Aconselhamento Cristão - Parte 1" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-secondary">Aconselhamento Cristão - Parte 1 (1 de 3)</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-surface rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube-nocookie.com/embed/1bMWbSV9Qsc" 
                  title="Aconselhamento Cristão - Parte 2" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-secondary">Aconselhamento Cristão - Parte 2 (2 de 3)</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube-nocookie.com/embed/jwt0NNMbK9Y" 
                  title="Aconselhamento Cristão - Parte 3" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-secondary">Aconselhamento Cristão - Parte 3 (3 de 3)</h3>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}
