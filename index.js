fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    console.log(data);
});

//Display countries in select-
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = data[i].name.common;
        var slct = document.getElementById('countries');
        slct.appendChild(opt);
    }
    console.log('Countries appended');
});

//Display flag in img-
function displayflag () {
    var name;
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            if(data[i].name.common == document.getElementById('countries').value){
                name = i;
            }
        }
        document.getElementById('img').src = data[name].flags.png;
    });
    console.log('Flag Displayed');
}

function info () {
    var name;
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            if(data[i].name.common == document.getElementById('countries').value){
                name = i;
            }
        }

        //Area
        document.getElementById('area').innerHTML = data[name].area;

        //Continents
        document.getElementById('continents').innerHTML = data[name].continents;

        //Currencies
        document.getElementById('currencies').innerHTML = Object.keys(data[name].currencies);

        //Languages
        document.getElementById('language').innerHTML = Object.keys(data[name].languages);

        //Population
        document.getElementById('population').innerHTML = data[name].population;

        //Timezones
        for (let i = 0; i < data[name].timezones.length; i++) {
            var prg = document.createElement('p');
            prg.innerHTML = data[name].timezones[i]
            document.getElementById('timezone').appendChild(prg);
        }

    });
}