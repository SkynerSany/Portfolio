export default class SwitchAmount {

  setAmount(amount, inputAmount) {
    inputAmount.value = amount;
  }

  changeSwitcher(amount, form) {
    const radioBtn = Array.from(form.elements).find((item) => item.dataset.amount === amount);
    
    if (radioBtn) {
      radioBtn.checked = true;
      return;
    } 

    const input = Array.from(form.elements).find((item) => item.checked);
    
    if (input) {
      input.checked = false;
    }
  }
  
  setEvents() {
    const form = document.querySelector('.feed__switcherContainer');
    const inputAmount = document.querySelector('.feed__amount');

    form.addEventListener("change", (e) => this.setAmount(e.target.dataset.amount, inputAmount));
    inputAmount.addEventListener("input", (e) => this.changeSwitcher(e.target.value, form))

    this.setAmount(100, inputAmount)
  }
};
