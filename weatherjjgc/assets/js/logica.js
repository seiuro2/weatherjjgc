$(document).ready(function() {
    // get method jquery
    function climaBogota() {
        $.get(
            'https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&units=metric&exclude=minutely,hourly,alerts&appid=57dc21ef00f421717b63521dab8e3109',
            function(response1) {
                console.log(response1);
                renderBogotaCurrent(response1);
                renderBogota3D(response1);
            }
        );
    }

    function climaParis() {
        $.get(
            'http://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=57dc21ef00f421717b63521dab8e3109',
            function(response2) {
                console.log(response2);
                renderParisCurrent(response2);
            }
        );
    }
    climaParis();
    climaBogota();

    //obtener y rederizar datos de Bogota current and 3days roll

    function renderBogotaCurrent(response1) {
        let bogota = response1;
        // console.log(bogota);
        const tarjetaDia = document.getElementById('bogota');
        const template = ` <div class="iconLine"> <i id ="nube" style="display: none;" class="wi wi-cloudy"> <span>Bogotá está nublada!</span> </i><i  id="sol" style="display: none;" class="wi wi-day-sunny"> <span> Bogotá esta soleada!</span> </i> <i id="lluvia" style="display: none" class="fas fa-cloud-showers-heavy"> <span> Bogotá está lluviosa!</span> </i></i></div>
                      <div class="">
                        <h5>temperatura: ${bogota.current.temp} C°</h5>
                        <p>Sensación térmica: ${bogota.current.feels_like} C° </p>
                        <p>Humedad: ${bogota.current.humidity}% </p>
                        <p>Presión : ${bogota.current.pressure} mmHg </p>
                    </div>`;
        tarjetaDia.innerHTML += template;
        mostrarIconClima(bogota);
    }

    function mostrarIconClima(bogota) {
        // console.log(bogota);
        if (bogota.current.weather[0].main === 'Clouds') {
            console.log('hola si se cumple nube');
            let iconoNube = document.getElementById('nube');
            iconoNube.style.display = 'block';
        } else if (bogota.current.weather[0].main === 'Clear') {
            console.log('hola si se cumple sol');
            let iconoSol = document.getElementById('sol');
            iconoSol.style.display = 'block';
        } else if (bogota.current.weather[0].main === 'Rain') {
            console.log('hola si se cumple lluvia');
            let iconoLluvia = document.getElementById('lluvia');
            iconoLluvia.style.display = 'block';
        }
    }

    function renderBogota3D(response1) {
        let bogota = response1;
        // console.log(bogota);
        const tarjetaDia1 = document.getElementById('temp1');
        const template1 = ` <div class="">Día 1 </div>
                    <div class="">
                      <div class="iconLine"> <i id ="nube1" style="display: none;" class="wi wi-cloudy"> <span>Nublado</span> </i><i  id="sol1" style="display: none;" class="wi wi-day-sunny"> <span>Soleado</span> </i><i  id ="lluvia1" style="display: none;" class="wi wi-showers"> <span>Lluvioso</span> </i></div>
                      <h5 class="">temperatura: ${bogota.daily[0].temp.day} C°</h5>
                    </div>`;
        const tarjetaDia2 = document.getElementById('temp2');
        const template2 = ` <div class="">Día 2 </div>
                    <div class="">
                      <div class="iconLine"> <i id ="nube2" style="display: none;" class="wi wi-cloudy"> <span>Nublado</span> </i><i  id="sol2" style="display: none;" class="wi wi-day-sunny"> <span>Soleado</span> </i><i  id ="lluvia2" style="display: none;" class="wi wi-showers"> <span>Lluvioso</span> </i></div>
                      <h5 class="">temperatura: ${bogota.daily[1].temp.day} C°</h5>
                    </div>`;
        const tarjetaDia3 = document.getElementById('temp3');
        const template3 = ` <div class="">Día 3 </div>
                      <div class="">
                      <div class="iconLine"> <i id ="nube3" style="display: none;" class="wi wi-cloudy"> <span>Nublado</span> </i> <i  id="sol3" style="display: none;" class="wi wi-day-sunny"> <span>Soleado</span> </i><i  id ="lluvia3" style="display: none;" class="wi wi-showers"> <span>Lluvioso</span> </i></div>
                        <h5 class="">temperatura: ${bogota.daily[2].temp.day} C°</h5>
                    </div>`;

        tarjetaDia1.innerHTML += template1;
        tarjetaDia2.innerHTML += template2;
        tarjetaDia3.innerHTML += template3;

        mostrarIconD1(bogota);
        mostrarIconD2(bogota);
        mostrarIconD3(bogota);
    }

    function mostrarIconD1(bogota) {
        // console.log(bogota);
        if (bogota.daily[0].weather[0].main === 'Clouds') {
            console.log('hola si se cumple nube');
            let iconoNube1 = document.getElementById('nube1');
            iconoNube1.style.display = 'block';
        } else if (bogota.daily[0].weather[0].main === 'Clear') {
            console.log('hola si se cumple sol');
            let iconoSol1 = document.getElementById('sol1');
            iconoSol1.style.display = 'block';
        } else if (bogota.daily[0].weather[0].main === 'Rain') {
            console.log('hola si se cumple lluvia');
            let iconoLluvia1 = document.getElementById('lluvia1');
            iconoLluvia1.style.display = 'block';
        } else console.log('coño');
    }

    function mostrarIconD2(bogota) {
        // console.log(bogota);
        if (bogota.daily[1].weather[0].main === 'Clouds') {
            console.log('hola si se cumple nube');
            let iconoNube2 = document.getElementById('nube2');
            iconoNube2.style.display = 'block';
        } else if (bogota.daily[1].weather[0].main === 'Clear') {
            console.log('hola si se cumple sol');
            let iconoSol2 = document.getElementById('sol2');
            iconoSol2.style.display = 'block';
        } else if (bogota.daily[1].weather[0].main === 'Rain') {
            console.log('hola si se cumple lluvia');
            let iconoLluvia2 = document.getElementById('lluvia2');
            iconoLluvia2.style.display = 'block';
        }
    }

    function mostrarIconD3(bogota) {
        // console.log(bogota);
        if (bogota.daily[2].weather[0].main === 'Clouds') {
            console.log('hola si se cumple nube');
            let iconoNube3 = document.getElementById('nube3');
            iconoNube3.style.display = 'block';
        } else if (bogota.daily[2].weather[0].main === 'Clear') {
            console.log('hola si se cumple sol');
            let iconoSol3 = document.getElementById('sol3');
            iconoSol3.style.display = 'block';
        } else if (bogota.daily[2].weather[0].main === 'Rain') {
            console.log('hola si se cumple lluvia');
            let iconoLluvia3 = document.getElementById('lluvia3');
            iconoLluvia3.style.display = 'block';
        }
    }

    function renderParisCurrent(response2) {
        let paris = response2;
        // console.log(bogota);
        const tarjetaDia = document.getElementById('paris');
        const template = ` <div class="iconLine"><i id ="nubeParis" style="display: none;" class="wi wi-cloudy"> <span>Paris esta Nublada!</span> </i><i  id="solParis" style="display: none;" class="wi wi-day-sunny"> <span>Paris esta soliada!</span> </i> <i id="lluviaParis" style="display: none" class="wi wi-showers"> <span>Pais esta lluviosa!</span> </i></i></div>
                        <h5 class="">temperatura: ${paris.main.temp} C°</h5>
                        <p>Humedad: ${paris.main.humidity}% </p>
                        <p>Presión : ${paris.main.pressure} mmHg </p>
                    `;
        tarjetaDia.innerHTML += template;
        mostrarIconParis(paris);
    }

    function mostrarIconParis(paris) {
        // console.log(bogota);
        if (paris.weather[0].main === 'Clouds') {
            console.log('hola si se cumple nube');
            let iconoNube = document.getElementById('nubeParis');
            iconoNube.style.display = 'block';
        } else if (paris.weather[0].main === 'Clear') {
            console.log('hola si se cumple sol');
            let iconoSol = document.getElementById('solParis');
            iconoSol.style.display = 'block';
        } else if (paris.weather[0].main === 'Rain') {
            console.log('hola si se cumple lluvia');
            let iconoLluvia = document.getElementById('lluviaParis');
            iconoLluvia.style.display = 'block';
        }
    }
});