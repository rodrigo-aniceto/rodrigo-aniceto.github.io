import { Link, useNavigate } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import logoImg from '../assets/generated/amigos-na-dor-logo.png';
import { abrirChat } from '../utils/abrirChat';

export function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white/80 py-12 mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">

          {/* Marca e Missão */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group" aria-label="Amigos na Dor - Página Inicial">
              <div className="p-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src={logoImg}
                  alt="Logo Amigos na Dor"
                  className="w-16 h-16 object-contain invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-sans text-white uppercase tracking-wider">
                <span className="block text-2xl font-extrabold leading-none">Amigos</span>
                <span className="block text-lg font-light leading-none">Na Dor</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              Um espaço de apoio religioso e acolhimento anônimo para quem precisa de conforto em momentos de aflição. Você não está sozinho.
            </p>
          </div>

          {/* Links Úteis */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide">Links Úteis</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/atendimento" className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-sm">
                  Como funciona o atendimento
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-sm">
                  Ler depoimentos
                </Link>
              </li>
              <li>
                <Link to="/conteudos" className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-sm">
                  Conteúdos e reflexões
                </Link>
              </li>
              <li>
                <button
                  onClick={() => abrirChat(navigate)}
                  className="hover:text-accent transition-colors text-left focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
                  aria-label="Abrir chat de apoio"
                >
                  Falar com um amigo agora
                </button>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide">Nossas Redes</h3>
            <p className="text-sm text-white/70 mb-4">
              Siga-nos para mensagens diárias de conforto e esperança.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.instagram.com/amigosnador.ipn" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/igreja.ipn" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.twitter.com/ipnacional" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent" aria-label="X (antigo Twitter)">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/user/IPNCom" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:amigosnador@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
          <p>&copy; {currentYear} Igreja Presbiteriana Nacional. Todos os direitos reservados.</p>
          <p>Feito com amor e propósito.</p>
        </div>
      </div>
    </footer>
  );
}
