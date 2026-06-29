const datos = {

    evento: "Cumpleaños",

    nombre: "Alessandra",

    fecha: "2026-07-25T19:00:00",

    lugar: "Salón Los Pinos",

    whatsapp: "5510101995"

};

document.getElementById("titulo").textContent = datos.evento;
document.getElementById("nombre").textContent = datos.nombre;
document.getElementById("nombreEvento").textContent = datos.nombre;

document.getElementById("infoFecha").innerHTML = datos.fecha;
document.getElementById("infoHora").innerHTML = "7:00 PM";
document.getElementById("infoLugar").innerHTML = datos.lugar;

document.getElementById("whatsapp").href =
`https://wa.me/${datos.whatsapp}?text=Confirmo mi asistencia`;

document.getElementById("btnEntrar").onclick=()=>{

    document.getElementById("welcome").style.display="none";

};

const destino = new Date(datos.fecha).getTime();

setInterval(()=>{

    const ahora = new Date().getTime();

    const diferencia = destino-ahora;

    document.getElementById("dias").innerHTML=Math.floor(diferencia/(1000*60*60*24));

    document.getElementById("horas").innerHTML=Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    document.getElementById("minutos").innerHTML=Math.floor((diferencia%(1000*60*60))/(1000*60));

    document.getElementById("segundos").innerHTML=Math.floor((diferencia%(1000*60))/1000);

},1000);
