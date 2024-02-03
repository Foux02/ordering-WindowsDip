import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import scalePicture from './modules/scalePicture';

const okna = document.getElementById('okna');
const kuhni = document.getElementById('kuhni');
const balkony = document.getElementById('balkony');

if (okna) {
  console.log('okna');
  modal({
    modalClass: '.header-modal',
    btnOpen: '.btn-block',
    btnClose: '.header-modal__close',
  });
  modal({
    modalClass: '.services-modal',
    btnOpen: '.btn-sm',
    btnClose: '.services-modal__close',
  });

  timer({
    timerDaysId: 'timer-days',
    timerHoursId: 'timer-hours',
    timerMinutesId: 'timer-minutes',
    timerSecondsId: 'timer-seconds',
    deadline: '12 february 2024',
  });
  timer({
    timerDaysId: 'timer-days-1',
    timerHoursId: 'timer-hours-1',
    timerMinutesId: 'timer-minutes-1',
    timerSecondsId: 'timer-seconds-1',
    deadline: '12 february 2024',
  });

  sendForm({
    fornId: 'action-form',
  });
  sendForm({
    fornId: 'action-form2',
  });
}

if (kuhni) {
  console.log('kuhni');
  modal({
    modalClass: '.header-modal',
    btnOpen: '.btn-block',
    btnClose: '.header-modal__close',
  });
  modal({
    modalClass: '.services-modal',
    btnOpen: '.btn-sm',
    btnClose: '.services-modal__close',
  });

  timer({
    timerDaysId: 'timer-days-kuhni',
    timerHoursId: 'timer-hours-kuhni',
    timerMinutesId: 'timer-minutes-kuhni',
    timerSecondsId: 'timer-seconds-kuhni',
    deadline: '16 february 2024',
  });
  timer({
    timerDaysId: 'timer-days-kuhni-1',
    timerHoursId: 'timer-hours-kuhni-1',
    timerMinutesId: 'timer-minutes-kuhni-1',
    timerSecondsId: 'timer-seconds-kuhni-1',
    deadline: '16 february 2024',
  });

  sendForm({
    fornId: 'action-form',
  });
  sendForm({
    fornId: 'action-form2',
  });
}

if (balkony) {
  console.log('balkony');
  modal({
    modalClass: '.header-modal',
    btnOpen: '.btn-block',
    btnClose: '.header-modal__close',
  });
  modal({
    modalClass: '.services-modal',
    btnOpen: '.btn-sm',
    btnClose: '.services-modal__close',
  });

  timer({
    timerDaysId: 'timer-days-balkony',
    timerHoursId: 'timer-hours-balkony',
    timerMinutesId: 'timer-minutes-balkony',
    timerSecondsId: 'timer-seconds-balkony',
    deadline: '14 february 2024',
  });
  timer({
    timerDaysId: 'timer-days-balkony-1',
    timerHoursId: 'timer-hours-balkony-1',
    timerMinutesId: 'timer-minutes-balkony-1',
    timerSecondsId: 'timer-seconds-balkony-1',
    deadline: '14 february 2024',
  });

  calc();

  scalePicture();

  sendForm({
    fornId: 'action-form',
    someElem: [{ type: 'input', id: 'calc-total' }],
  });
  sendForm({
    fornId: 'action-form2',
    someElem: [{ type: 'input', id: 'calc-total' }],
  });
}
