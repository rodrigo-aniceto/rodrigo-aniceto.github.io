import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { FloatingChatButton } from './components/FloatingChatButton';
import { Home } from './pages/Home';
import { Atendimento } from './pages/Atendimento';
import { Depoimentos } from './pages/Depoimentos';
import { Conteudos } from './pages/Conteudos';
import { Conteudo } from './pages/Conteudo';
import { Sentimento } from './pages/Sentimento';
import { Apoio } from './pages/Apoio';

/** Rola para o topo a cada mudança de rota */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: 'pt-BR' }} />
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background text-text-main font-sans">
          <Header />
          <div id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/atendimento" element={<Atendimento />} />
              <Route path="/depoimentos" element={<Depoimentos />} />
              <Route path="/conteudos" element={<Conteudos />} />
              <Route path="/conteudos/:slug" element={<Conteudo />} />
              <Route path="/sentimento/:slug" element={<Sentimento />} />
              <Route path="/apoio" element={<Apoio />} />
            </Routes>
          </div>
          <Footer />
          <ChatWidget />
          <FloatingChatButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}
