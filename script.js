const submitButton = document.querySelector('#submit-button');
function validate() {
  const text = document.getElementById('.email').value;
  const validator = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = function email(e) {
    if (!(validator.test(text))) {
      document.getElementById('error-msg').innerHTML = 'Please use lowercase to enter valid email address!';
      document.getElementById('error-msg').style.visibility: 'visible';
      document.getElementById('error-msg').style.color = 'white';
      document.getElementById('error-msg').style.background = 'red';
      document.getElementById('error-msg').style.textAlign = 'center';
      e.preventDefault();
    }
  };