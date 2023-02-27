const daysText = document.querySelector('#days')
const hoursText = document.querySelector('#hours')
const minutesText = document.querySelector('#minutes')
const secondsText = document.querySelector('#seconds')

//Declaro a data que eu quero
const newYearsDate = new Date('1 Jan 2024');

setInterval(countDown, 1000)

function countDown(){
    const {days, hours, minutes, seconds} = countDownValues();

    //E agora setamos ao nosso campo 
    renderCountDown({days, hours, minutes, seconds})
}

//Adiciona oo zero na frente se for < 10
function addZero(value){
    return value < 10 ? `0${value}` : value;
}

//Faz o calculo dos valores
function countDownValues(){
  //pego a data atual
  const dateAtual = new Date();
  //Pego total de segundos divido por 1000 q separa em segundos 
  const totalSeconds = (newYearsDate - dateAtual) / 1000;
  //Depois de pegar os segundos
  //Realize o calculo dos dias

  //Pego todos os segundos e divido por 3600 que é 1h 
  // e divido por 24 que me retorna 1 dia inteiro
  const days = Math.floor((totalSeconds / 3600 ) / 24);
  // pego o resto da divisão por 24 é que dará as horas
  const hours = Math.floor((totalSeconds /3600) % 24);
  //Para os minutos é a mesma coisa só que dividos por 60seg(que é 1min)
  // e pegamos o resto 
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  //Math.flor arredonda pra baixo, ex: se der 1.5 ele arredonda pra 1

  return {days, hours, minutes, seconds}
}

//Renderiza na tela
function renderCountDown({days, hours, minutes, seconds}){
    daysText.innerText = addZero(days);
    hoursText.innerText = addZero(hours);
    minutesText.innerText = addZero(minutes);
    secondsText.innerText = addZero(seconds);
}