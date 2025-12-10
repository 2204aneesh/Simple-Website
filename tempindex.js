const value = document.getElementById("value");
const toFah = document.getElementById("toFah");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert(Fahrenheit, Celsius){
    if(toFah.checked){
        Celsius = value.value;
        Celsius = Number(Celsius);
        Fahrenheit = (Celsius * 9/5) + 32;
        result.textContent = `${Fahrenheit.toFixed(1)}℉`;
    } else if(toCelsius.checked){
        Fahrenheit = value.value;
        Fahrenheit = Number(Fahrenheit);
        Celsius = Math.round((Fahrenheit - 32) * 5/9);
        result.textContent = `${Celsius.toFixed(1)}℃`;
    }else{
        result.textContent = `Select a unit`;
    }
}
