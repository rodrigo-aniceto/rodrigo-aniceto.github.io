import { useEffect } from 'react';

// Estender a interface Window para incluir a Tawk_API
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export function ChatWidget() {
  useEffect(() => {
    // Script do Tawk.to
    const propertyId = '69f101dac0a9931c3857d4f9';
    const widgetId = '1jnamug20';

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.Tawk_API.customStyle = {
      visibility: {
        desktop: { position: 'br', xOffset: 0, yOffset: 0 },
        mobile: { position: 'br', xOffset: 0, yOffset: 0 }
      }
    };

    window.Tawk_API.onLoad = function() {
      window.Tawk_API.hideWidget();
    };

    window.Tawk_API.onChatMinimized = function() {
      window.Tawk_API.hideWidget();
    };

    document.head.appendChild(script);

    return () => {
      // Limpeza se necessário, embora o Tawk.to geralmente permaneça entre as rotas
      // document.head.removeChild(script);
    };
  }, []);

  return null; // Este componente não renderiza nada visível diretamente
}
