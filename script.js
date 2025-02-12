var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

 var relogio = setInterval(
    function tempo(){
        var hora_agora = new Date();
        var hr = hora_agora.getHours();
        var min = hora_agora.getMinutes();
        var seg = hora_agora.getSeconds();

        if(hr < 10){
            hr = "0" + hr;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(hr < 10){
            seg = "0" + seg;
        }

        horas.textContent = hr
        minutos.textContent = min
        segundos.textContent = seg
    }
 )