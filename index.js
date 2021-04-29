function printAnswer() {
    var volts = document.getElementsByName("voltDrop_volts")[0].value;
    var amps = document.getElementsByName("voltDrop_amps")[0].value;
    var length = parseFloat(document.getElementsByName("voltDrop_m")[0].value);
    var cableSize = parseFloat(document.getElementsByName("voltDrop_cableSize")[0].value);
    var ohm = 0;
    var reactance = 0;
    var FLC = 0;
    if (cableSize === 630) {
        ohm = 0.0418;
        reactance = 0.08;
        FLC = 904;
    } else if (cableSize === 500) {
        ohm = 0.0506;
        reactance = 0.082;
        FLC = 805;
    } else if (cableSize === 400) {
        ohm = 0.062;
        reactance = 0.0829;
        FLC = 713;
    } else if (cableSize === 300) {
        ohm = 0.077;
        reactance = 0.0839;
        FLC = 628;
    } else if (cableSize === 240) {
        ohm = 0.0948;
        reactance = 0.0847;
        FLC = 556;
    } else if (cableSize === 185) {
        ohm = 0.123;
        reactance = 0.0862;
        FLC = 480;
    } else if (cableSize === 150) {
        ohm = 0.153;
        reactance = 0.0868;
        FLC = 424;
    } else if (cableSize === 120) {
        ohm = 0.188;
        reactance = 0.087;
        FLC = 378;
    } else if (cableSize === 95) {
        ohm = 0.236;
        reactance = 0.0904;
        FLC = 332;
    } else if (cableSize === 70) {
        ohm = 0.327;
        reactance = 0.0917;
        FLC = 277;
    } else if (cableSize === 50) {
        ohm = 0.471;
        reactance = 0.0962;
        FLC = 225;
    } else if (cableSize === 35) {
        ohm = 0.638;
        reactance = 0.101;
        FLC = 190;
    } else if (cableSize === 25) {
        ohm = 0.884;
        reactance = 0.106;
        FLC = 158;
    } else if (cableSize === 16) {
        ohm = 1.4;
        reactance = 0.111;
        FLC = 122;
    } else if (cableSize === 10) {
        ohm = 2.23;
        reactance = 0.118;
        FLC = 69;
    } else if (cableSize === 6) {
        ohm = 3.75;
        reactance = 0.128;
        FLC = 52;
    } else if (cableSize === 4) {
        ohm = 5.61;
        reactance = 0.137;
        FLC = 41;
    } else if (cableSize === 2.5) {
        ohm = 9.01;
        reactance = 0.143;
        FLC = 32;
    } else if (cableSize === 1.5) {
        ohm = 16.5;
        reactance = 0.157;
        FLC = 23;
    } else {
        msg = "Error";
    }
    var reactanceT = (reactance * length) / 1000;
    var ohmT = (ohm * length) / 1000;

    if (volts < 400) {
        var vDrop = ((ohm * 2) * (length / 1000) * amps);
    } else {
        var vDrop = (Math.sqrt(3)) * amps * (Math.sqrt((Math.pow(ohmT, 2)) + (Math.pow(reactanceT, 2))));
    }

    var vFinal = (volts - vDrop);
    var vDropPercent = ((vDrop / volts) * 100);
    console.log(volts, amps, length, cableSize, ohm);
    document.getElementById("vFinal").innerHTML = vFinal.toFixed(2);
    document.getElementById("vDrop").innerHTML = vDrop.toFixed(2);
    document.getElementById("vDropPercent").innerHTML = vDropPercent.toFixed(2);
    document.getElementById("FLC").innerHTML = FLC.toFixed(2);


    if (vDropPercent > 3) {

        document.getElementsByClassName("results-box1")[0].style.color = 'red';
        document.getElementById("vDropPercentText").innerHTML = "Voltage drop too high! Increase cable size";
    } else if (isNaN(vDropPercent)) {
        document.getElementsByClassName("results-box1")[0].style.color = 'red';
        document.getElementById("vFinal").innerHTML = "";
        document.getElementById("vDrop").innerHTML = "";
        document.getElementById("vDropPercent").innerHTML = "";
        document.getElementById("vDropPercentText").innerHTML = "Enter cable parameters.";
    } else {
        document.getElementsByClassName("results-box1")[0].style.color = '#0fbd3d';
        document.getElementById("vDropPercentText").innerHTML = "Cable sized correctly.";
    }

    if (isNaN(vDropPercent)) {
        document.getElementsByClassName("checkFLC")[0].style.color = 'red';
        document.getElementById("FLCtext").innerHTML = "Enter cable parameters.";
    } else if (FLC > amps) {
        document.getElementsByClassName("checkFLC")[0].style.color = '#0fbd3d';
        document.getElementById("FLCtext").innerHTML = "FLC > Current carrying capacity. Cable size OK.";
    } else {
        document.getElementsByClassName("checkFLC")[0].style.color = 'red';
        document.getElementById("FLCtext").innerHTML = "FLC < Current carrying capacity. Increase cable size";
    }


}