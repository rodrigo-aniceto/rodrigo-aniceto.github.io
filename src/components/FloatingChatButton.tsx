import { MessageCircleHeart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { abrirChat } from '../utils/abrirChat';

export function FloatingChatButton() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'online' | 'offline' | 'away' | null>('offline');

  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};

    // Guardar callback original se existir
    const originalOnStatusChange = window.Tawk_API.onStatusChange;

    window.Tawk_API.onStatusChange = function (newStatus: string) {
      if (typeof originalOnStatusChange === 'function') {
        originalOnStatusChange(newStatus);
      }
      setStatus(newStatus as any);
    };

    // A limpeza não é estritamente necessária para a API global do Tawk, mas é uma boa prática caso seja desmontado
  }, []);

  const isOnline = status === 'online';
  const ariaLabel = isOnline
    ? 'Atendimento online. Abrir chat de apoio.'
    : 'Atendimento offline. Deixe uma mensagem.';

  // Escolher a cor do ponto com base no status
  const dotColor = isOnline ? 'bg-green-500' : 'bg-gray-500';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => abrirChat(navigate)}
        className="relative flex items-center justify-center w-16 h-16 bg-accent text-primary rounded-full shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/50 group botao-chat-flutuante"
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        <MessageCircleHeart className="w-8 h-8 animate-heartbeat group-hover:animate-heartbeat-fast" />

        {/* Ponto de status */}
        <span
          className={`absolute top-0 right-0 w-4 h-4 rounded-full ${dotColor}`}
          aria-hidden="true"
        ></span>

        {/* Efeito de pulso atrás do botão — sincronizado com o batimento */}
        <span className="absolute inset-0 rounded-full bg-accent animate-heartbeat-ping group-hover:animate-heartbeat-ping-fast -z-10"></span>
      </button>
    </div>
  );
}
