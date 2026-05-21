import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/generated/amigos-na-dor-logo.png';
import { abrirChat } from '../utils/abrirChat';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Atendimento', path: '/atendimento' },
    { name: 'Depoimentos', path: '/depoimentos' },
    { name: 'Conteúdos', path: '/conteudos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-0 focus:left-0 focus:p-4 focus:bg-white focus:text-primary focus:font-bold focus:rounded-br-lg focus:shadow-md"
      >
        Pular para o conteúdo principal
      </a>
      <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
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

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Menu Principal">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-white ${isActive(link.path) ? 'text-white border-b-2 border-accent pb-1' : 'text-white/90'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => abrirChat(navigate)}
              className="bg-accent text-secondary font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-300 shadow-sm focus:ring-2 focus:ring-accent focus:outline-none"
              aria-label="Iniciar chat de apoio"
            >
              Falar com um Amigo
            </button>
          </nav>

          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden p-2 text-white hover:text-accent focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navegação Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-hover border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-white/10 text-accent' : 'text-white hover:bg-white/5'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                abrirChat(navigate);
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 bg-accent text-primary font-semibold px-4 py-3 rounded-md hover:bg-white transition-colors duration-300 text-center"
            >
              Falar com um Amigo
            </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
