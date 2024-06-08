document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('emailInput');
  const subscribeBtn = document.getElementById('subscribeBtn');

  const handleCheckValidity = () => {
    if (
      emailInput &&
      emailInput.value.trim() !== '' &&
      emailInput.checkValidity()
    ) {
      emailInput.classList.add('is-valid');
      emailInput.classList.remove('is-invalid');

      subscribeBtn.disabled = true;
      subscribeBtn.innerText = 'Subscribed!';
      console.log('Email sent:', emailInput.value);
    } else {
      emailInput.classList.add('is-invalid');
      emailInput.classList.remove('is-valid');
    }
  };

  subscribeBtn.addEventListener('click', handleCheckValidity);
});
