// Smooth scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Modal
function toggleModal(id, show) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.toggle('show', !!show);
}

// Comprar (mock)
function comprar(plano, preco) {
  // Aqui você pode integrar com seu checkout (Mercado Pago, PayPal, etc.)
  alert(`Plano selecionado: ${plano}\nValor: R$ ${preco.toFixed(2)}\nAcesse o WhatsApp para finalizar.`);
  openWhatsApp();
}

// WhatsApp
function openWhatsApp() {
  // Substitua pelo seu número com DDI/DDD
  const phone = '5544988446515';
  const msg = encodeURIComponent('Olá! Quero saber mais sobre os planos do Xbox Game Pass.');
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}

// Instagram
function openInstagram() {
  // Abre o perfil @xphubvendas no Instagram
  window.open("https://instagram.com/xphubvendas", "_blank");
}

// Discord
function openDiscord() {
  // Abre o servidor Discord
  window.open("https://discord.gg/TCHPjGeSkY", "_blank");
}

// Baixar App (mock)
function baixarApp() {
  // Substitua pelo link real do seu app (Play Store / APK / PWA)
  alert('Redirecionando para download do aplicativo...');
  window.open('https://www.mediafire.com/file/jtytw2dyh0fptsk/xbettercloud.apk/file', '_blank');
}

// FAQ toggle
function toggleFaq(btn) {
  const item = btn.parentElement;
  item.classList.toggle('open');
}

// Mostrar aviso apenas na primeira visita
window.addEventListener('load', () => {
  // Verifica se já existe a flag no cache/localStorage
  const jaVisitou = localStorage.getItem('visitou');

  if (!jaVisitou) {
    // Se não visitou ainda, mostra o modal
    setTimeout(() => toggleModal('modal-aviso', true), 1200);

    // Salva no cache que já visitou
    localStorage.setItem('visitou', 'true');
  }
});