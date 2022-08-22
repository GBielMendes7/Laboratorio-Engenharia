import Countdown from '/countdown.js'

const tempoSemeste = new Countdown("06 December 2022 23:00:00 GMT-0300")
console.log(tempoSemeste.total);
const tempos = document.querySelectorAll("[date-time]");

function mostrarTempo(){
    tempos.forEach((tempo, index) =>{
        tempo.innerHTML = tempoSemeste.total[index]
    
    });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);


