function convert(){
    const temp = parseFloat(document.getElementById("temp").value);
    const kelvin = (temp + 273.15);

    document.getElementById("kelvin").innerHTML = kelvin;
    return false;
}