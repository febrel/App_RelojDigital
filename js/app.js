const mostarReloj = () => {

    // Para Reloj
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

    // Para Fecha
    let meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    let dias = ["Dom", "Lun", "Mar", "Mie","Jue", "Vie", "Sab"];
    let diaSemana = dias[fecha.getDay()];
    let diaNumero = [fecha.getDate()];
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${diaNumero} ${mes}`;
    document.getElementById("fecha").innerHTML = fechaTexto;

}

const formatoHora = (hora) => {
    if (hora < 10) {
        hora = "0" + hora;
    }

    return hora;
}

// Para ejecutar la funcion flecha cada segundo
setInterval(mostarReloj, 1000);