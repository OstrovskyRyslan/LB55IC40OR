// Масив 1: заповнення випадковими числами
document.write("Масив1<br>");
let mas1 = [];
for (let i = 0; i < 10; i++) {
    mas1[i] = Math.random();
    document.write(mas1[i] + '<br>');
}

// Масив 2: множення на 10
document.write("<br>Масив2<br>");
let mas2 = [];
for (let i = 0; i < 10; i++) {
    mas2[i] = mas1[i] * 10;
    document.write(mas2[i] + '<br>');
}

// Масив 3: округлення
document.write("<br>Масив3<br>");
let mas3 = [];
for (let i = 0; i < 10; i++) {
    mas3[i] = Math.round(mas2[i]);
    document.write(mas3[i] + '<br>');
}

// Додаткове округлення: floor та ceil
document.write("<br>Масив4: floor<br>");
for (let i = 0; i < 10; i++) {
    document.write(Math.floor(mas2[i]) + '<br>');
}

document.write("<br>Масив5: ceil<br>");
for (let i = 0; i < 10; i++) {
    document.write(Math.ceil(mas2[i]) + '<br>');
}
