const box = document.getElementById('box');
const proposalText = document.getElementById('proposalText');
const violinAudio = document.getElementById('violinAudio');
let opened = false;

function openBox() {
  if (opened) return;
  opened = true;
  box.classList.add('open');
  violinAudio.play().catch(() => {
    console.log('Ses çalınamadı, kullanıcı etkileşimi gerekebilir.');
  });
  setTimeout(() => {
    proposalText.classList.add('visible');
  }, 900);
}

box.addEventListener('click', openBox);
box.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openBox();
  }
});
