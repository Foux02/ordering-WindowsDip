const scalePicture = () => {
  const sertificateDocAll = document.querySelectorAll('.sertificate-document');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');

  sertificateDocAll.forEach((doc) => {
    doc.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'block';
      modalImage.src = e.currentTarget.getAttribute('href');
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modalImage) {
      modal.style.display = 'none';
    }
  });
};

export default scalePicture;
