function actualizarReloj() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();


  const anguloHoras = (hora % 12) * 30 + minutos / 2;
  const anguloMinutos = minutos * + segundos / 10;
  const anguloSegundos = segundos * 6;

  document.getElementById('hora').textContent = hora;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos
  
  
}

actualizarReloj();
setInterval(actualizarReloj, 1000);
