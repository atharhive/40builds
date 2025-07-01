const numberElements = document.querySelectorAll('.nums span');
const counterContainer = document.querySelector('.counter');
const finalMessageContainer = document.querySelector('.final');
const replayButton = document.querySelector('#replay');

const backgroundColors = ['#3498db', '#e67e22', '#2ecc71', '#f1c40f'];

function resetAnimation() {
  counterContainer.classList.remove('hide');
  finalMessageContainer.classList.remove('show');

  numberElements.forEach((num) => {
    num.classList.value = '';
  });

  numberElements[0].classList.add('in');
  document.body.style.backgroundColor = '#2c3e50'; // Reset to default
}

function startAnimation() {
  numberElements.forEach((num, idx) => {
    const isLastNumber = idx === numberElements.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && !isLastNumber) {
        num.classList.remove('in');
        num.classList.add('out');
        document.body.style.backgroundColor = backgroundColors[idx];
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counterContainer.classList.add('hide');
        finalMessageContainer.classList.add('show');
      }
    });
  });
}

replayButton.addEventListener('click', () => {
  resetAnimation();
  // Re-run animation logic after resetting
  startAnimation();
});

startAnimation();