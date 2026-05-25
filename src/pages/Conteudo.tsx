import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Clock, Share2 } from 'lucide-react';
import artigos from '../data/artigos.json';
import { getArticleImage } from '../utils/articleImages';

const getReadingTime = (html: string) => {
  const text = html.replace(/<[^>]*>?/gm, ''); // Remove tags HTML
  const wordCount = text.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / 200);
  return `${time} min de leitura`;
};

export function Conteudo() {
  const { slug } = useParams<{ slug: string }>();
  const artigo = artigos.find(a => a.slug === slug);

  if (!artigo) {
    return (
      <main className="flex-col min-h-screen bg-background py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif font-bold text-secondary mb-4">Artigo não encontrado</h1>
          <Link to="/conteudos" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Voltar para Conteúdos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-col min-h-screen bg-background">
      <Helmet>
        <title>{artigo.title} | Amigos na Dor</title>
        <meta name="description" content={`Leia o artigo: ${artigo.title}`} />
        <meta property="og:title" content={artigo.title} />
        <meta property="og:description" content={`Leia o artigo: ${artigo.title}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={getArticleImage(artigo.image)} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <article className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/conteudos" className="text-primary hover:underline inline-flex items-center gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" /> Voltar para Conteúdos
          </Link>

          <img 
            src={getArticleImage(artigo.image)}
            alt={artigo.title} 
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-sm"
            referrerPolicy="no-referrer"
          />

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6 leading-tight">
            {artigo.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-10 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-text-muted">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="italic">Por {artigo.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{getReadingTime(artigo.content)}</span>
              </div>
            </div>

            <button
              onClick={async () => {
                const url = window.location.href;
                if (navigator.share) {
                  try {
                    await navigator.share({ title: artigo.title, url });
                  } catch (err) { }
                } else {
                  navigator.clipboard.writeText(url);
                  alert('Link copiado para a área de transferência!');
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/5 text-secondary hover:bg-secondary/10 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium w-fit"
              aria-label="Compartilhar artigo"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
          </div>

          <div 
            className="prose prose-lg prose-secondary max-w-none text-text-main leading-relaxed"
            dangerouslySetInnerHTML={{ __html: artigo.content }}
          />
        </div>
      </article>
    </main>
  );
}
