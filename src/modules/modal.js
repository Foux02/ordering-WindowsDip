import { animate } from './helpers';

const modal = ({ modalClass, btnOpen, btnClose }) => {
  const modal = document.querySelector(modalClass);
  const buttons = document.querySelectorAll(btnOpen);

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';

      animate({
        duration: 800,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
        },
      });
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest(btnClose)) {
      modal.style.display = 'none';
    }
  });
};

export default modal;
