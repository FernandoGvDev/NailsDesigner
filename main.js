const now = new Date();
const horas = now.getHours();
let message = "Olá, gostaria de agendar um hoorário.";

if (horas >= 6 && horas < 12){
    message = "Bom dia, gostaria de agendar um horário.";
} else if (horas >= 12 && horas < 18){
    message = "Boa tarde, gostaria de agendar um horário.";
} else if (horas >= 18){
    message = "Boa noite, gostaria de agendar um horário.";
}

const whatsappLink = document.getElementById('whatsapp-link');
whatsappLink.href = `https://api.whatsapp.com/send?phone=5511948379838&text=${encodeURIComponent(message)}`;

const agendarHorario = document.getElementById('agendar-horario');
agendarHorario.href = `https://api.whatsapp.com/send?phone=5511948379838&text=${encodeURIComponent(message)}`;
