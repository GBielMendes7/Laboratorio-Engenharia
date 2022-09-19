var data = new Date();
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
document.write(data.toLocaleDateString('pt-BR', options));