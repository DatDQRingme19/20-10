// Sửa ba mục này để cá nhân hóa tấm thiệp. Giữ nguyên dấu nháy và dấu phẩy.
const greeting = {
  recipient: 'Gửi bạn, người thật đặc biệt.',
  sender: 'Một người luôn mong bạn hạnh phúc',
  paragraphs: [
    'Chúc mừng ngày Phụ nữ Việt Nam 20/10! Gửi bạn những bông hồng đẹp nhất và một lời chúc thật lòng: mong bạn luôn được yêu thương theo cách khiến trái tim mình thấy bình yên.',
    'Mong mỗi sáng thức dậy, bạn có một điều để háo hức, một người để sẻ chia và thật nhiều lý do để mỉm cười. Mong những nỗ lực thầm lặng của bạn được trân trọng, những ước mơ của bạn có ngày nở hoa.',
    'Hôm nay, hãy dành cho mình một chút nghỉ ngơi, một món ngon yêu thích và một niềm vui nho nhỏ. Bạn xứng đáng với những điều dịu dàng — hôm nay và cả những ngày sau nữa. 🌷'
  ]
};

const letter = document.querySelector('#letter');
const openButton = document.querySelector('#open-card');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelector('#letter-title').textContent = greeting.recipient;
document.querySelector('#sender').textContent = greeting.sender;
greeting.paragraphs.forEach(text => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  document.querySelector('#wish-text').append(paragraph);
});

function scatterPetals() {
  if (reducedMotion.matches) return;
  const container = document.querySelector('.petals');
  // Giới hạn số cánh hoa, kể cả khi bấm nút nhiều lần.
  for (let i = 0; i < 28 && container.childElementCount < 70; i++) {
    const petal = document.createElement('span');
    petal.className = 'falling-petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty('--duration', `${5 + Math.random() * 4}s`);
    petal.style.setProperty('--drift', `${Math.random() * 160 - 80}px`);
    petal.style.animationDelay = `${Math.random() * 2}s`;
    petal.addEventListener('animationend', () => petal.remove(), { once: true });
    container.append(petal);
    setTimeout(() => petal.remove(), 12000);
  }
}

openButton.addEventListener('click', () => {
  letter.hidden = false;
  openButton.setAttribute('aria-expanded', 'true');
  openButton.innerHTML = 'Đọc lại lời chúc <span aria-hidden="true">↗</span>';
  document.querySelector('#letter-title').focus({ preventScroll: true });
  letter.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
  scatterPetals();
});
document.querySelector('#more-flowers').addEventListener('click', scatterPetals);
scatterPetals();
