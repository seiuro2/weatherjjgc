<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clima de Bogota y Paris!</title>
    <link rel="stylesheet" href="./assets/css/estilos.css" />
    <script src="./assets/js/jquery-3.5.1.min.js"></script>
    <script src="./assets/js/logica.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/weather-icons.min.css">
</head>

<body>

    <div class="generalCont">
        <div class="container1">
            <div class="row row-cols-2 gap-1 ">
                <div class=" weatherCard bogota" id="bogota">

                </div>
                <div class="col bgImg">
                    <h1>Nuestro clima y el de Nuestros Partners!</h1>
                </div>
                <div class="col bogota3Dias">
                    <h2> 3 Days Forecast</h2>
                    <div class="weatherCard" id="temp1"></div>
                    <div class="weatherCard" id="temp2"></div>
                    <div class="weatherCard" id="temp3"></div>
                </div>
                <div class="col paris">
                    <h2>Clima de Paris a esta Hora.</h2>
                    <div class="">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="" id="paris"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
    <script src="https://kit.fontawesome.com/095056a418.js" crossorigin="anonymous"></script>
</body>

</html>
