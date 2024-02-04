const scroll = () => {
  const bodyScroll = document.body;
  const benefits = document.getElementById('benefits');
  const smoothScroll = document.querySelector('.smooth-scroll');
  const smoothScrollBtn = document.querySelector('.smooth-scroll > img');

  document.addEventListener('scroll', function () {
    const benefitsTop = benefits.getBoundingClientRect().top;

    let lineBenefitsTop = benefits.classList.toggle(
      'visible',
      benefitsTop <= 0
    );

    if (lineBenefitsTop === true) {
      smoothScroll.style.display = '';
    } else {
      smoothScroll.style.display = 'none';
    }
  });

  smoothScrollBtn.addEventListener('click', (e) => {
    console.log('click');
    bodyScroll.scrollIntoView({ top: 0, behavior: 'smooth' });
  });
};

export default scroll;
