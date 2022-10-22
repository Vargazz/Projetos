const btnLogin = document.querySelector('.btn-login');
const textArea = document.querySelector('#textarea');
function loginForms() {
  const emailLogin = document.querySelector('.email');
  const passLogin = document.querySelector('.password');
  if (emailLogin.value === 'tryber@teste.com' && passLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', loginForms);

const check = document.querySelector('#agreement');
const enviar = document.querySelector('#submit-btn');

function validaBotao() {
  if (check.checked === true) {
    enviar.removeAttribute('disabled');
  } else {
    enviar.setAttribute('disabled', 'disabled');
  }
}

check.addEventListener('click', validaBotao);

console.log(textArea);

function contaCaracter() {
  const input = textArea.value.length;
  const maxCarac = 500;
  const conta = document.querySelector('#counter');
  conta.innerHTML = maxCarac - input;
}

textArea.addEventListener('keyup', contaCaracter);

function substituiForm(event) {
  event.preventDefault();
  const sub = document.querySelector('#form-data');
  const form = document.querySelector('#evaluation-form');
  const nameI = document.querySelector('#input-name').value;
  const lastNameI = document.querySelector('#input-lastname').value;
  const name = document.getElementById('name');
  const emailI = document.querySelector('#input-email').value;
  const email = document.getElementById('email');
  const houseI = document.querySelector('#house').value;
  const house = document.getElementById('casa');
  const valueTextArea = textArea.value;
  const area = document.getElementById('observa');
  form.style.display = 'none';
  sub.style.display = 'flex';
  name.innerText = `Nome: ${nameI} ${lastNameI}`;
  email.innerText = `Email: ${emailI}`;
  house.innerHTML = `Casa: ${houseI}`;
  area.innerHTML = `Observações: ${valueTextArea}`;
}

// função fico muito grande portanto mudei;

function substituiForm2() {
  // pega familia
  let familyNull = '';
  const familiaI = document.querySelectorAll('input[name = "family"]:checked');
  const familia = document.getElementById('familia');
  for (let i = 0; i < familiaI.length; i += 1) {
    if (familiaI[i].checked) {
      familyNull = familiaI[i].value;
    }
  }
  familia.innerText = `Família: ${familyNull}`;
}

// Outras funçoẽs por que não me permitiram continuar la em cima "LINT"

function substituiForm3() {
  // pega materias
  let materiNull = '';
  const materia = document.getElementById('materia');
  const materiaI = document.querySelectorAll('input[name = "content"]:checked');
  for (let i = 0; i < materiaI.length; i += 1) {
    if (materiaI[i].checked) {
      materiNull = `${materiNull + materiaI[i].value}, `;
    }
    materia.innerText = `Matérias: ${materiNull}`;
  }
}

function substituiForm4() {
  // pega nota
  let notaNull = '';
  const notaI = document.querySelectorAll('input[name = "rate"]:checked');
  const nota = document.getElementById('ava');
  for (let i = 0; i < notaI.length; i += 1) {
    if (notaI[i].checked) {
      notaNull = notaI[i].value;
    }
  }
  nota.innerText = `Avaliação: ${notaNull}`;
}

enviar.addEventListener('click', substituiForm4);
enviar.addEventListener('click', substituiForm3);
enviar.addEventListener('click', substituiForm2);
enviar.addEventListener('click', substituiForm);
