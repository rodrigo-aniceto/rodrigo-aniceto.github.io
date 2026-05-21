import { NavigateFunction } from 'react-router-dom';

/**
 * Verifica se há um atendente online no Tawk.to.
 * Se online, abre o chat. Se offline, redireciona para a página de apoio.
 */
export function abrirChat(navigate: NavigateFunction) {
  const tawk = window.Tawk_API;

  // Se o Tawk não carregou ou o status é offline/away, redireciona
  if (!tawk || !tawk.getStatus || tawk.getStatus() !== 'online') {
    navigate('/apoio');
    return;
  }

  // Apenas maximizar, sem chamar showWidget, para evitar que a bolha nativa reapareça
  if (tawk.isChatMaximized && tawk.isChatMaximized()) {
    tawk.minimize?.();
    tawk.hideWidget?.();
  } else {
    tawk.maximize?.();
  }
}
