import { animate, regularExpressions } from './helpers';
const calc = () => {
  const calc = document.getElementById('calc');

  const calcTypeBalcony = document.getElementById('calc-type');
  const calcTypeMterial = document.getElementById('calc-type-material');
  const calcInputSquare = document.getElementById('calc-input');
  const calcTotal = document.getElementById('calc-total');

  let calcTotalValue;
  let calcTotalSpeedAnime;

  const countCalc = () => {
    const calcTypeBalconyValue =
      +calcTypeBalcony.options[calcTypeBalcony.selectedIndex].value;
    const calcInputSquareValue = +calcInputSquare.value;

    let calcTypeMterialValue =
      +calcTypeMterial.options[calcTypeMterial.selectedIndex].value;

    if (!calcTypeMterialValue) {
      calcTypeMterialValue = 1;
    }

    if (calcTypeBalconyValue & (calcInputSquareValue > 0)) {
      calcTotalValue =
        calcTypeBalconyValue * calcInputSquareValue * calcTypeMterialValue;
    } else {
      calcTotalValue = 0;
    }

    if (calcTotalValue <= 15) {
      calcTotalSpeedAnime = 900;
    } else if (calcTotalValue <= 50) {
      calcTotalSpeedAnime = 1100;
    } else if (calcTotalValue <= 200) {
      calcTotalSpeedAnime = 2500;
    } else {
      calcTotalSpeedAnime = 2700;
    }

    if (calcTotalValue > 0) {
      animate({
        duration: calcTotalSpeedAnime,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          calcTotal.value = Math.abs(Math.round(progress * calcTotalValue));
        },
      });
    } else {
      calcTotal.value = calcTotalValue;
    }
  };

  regularExpressions();

  calc.addEventListener('change', (e) => {
    if (
      e.target === calcTypeBalcony ||
      e.target === calcTypeMterial ||
      e.target === calcInputSquare
    ) {
      countCalc();
    }
  });
};

export default calc;
