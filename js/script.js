console.log("js.ok");
//initial
const passwordPlaceholder = document.getElementById("password");
console.log(passwordPlaceholder);
const number = 21;
console.log(number);
const nome = prompt("qualè il tuo nome?", "Matteo");
console.log(nome);
const cognome = prompt("qualè il tuo cognome?", "Pizzichemi");
console.log(cognome);
const color = prompt("qualè il tuo colore preferito?", "Verde");
console.log(color);
const password = "" + nome + cognome + color + number;
console.log(password);
passwordPlaceholder.innerText = password;
