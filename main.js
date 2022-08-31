
let nombre = `Jhorman Felipe Fuentes Martinez`;
let edad = 20;
let altura = 1.70;
let soyInstructor=false;
let direccion = `Málaga Santander`;
let ropa = null;
let listaPasatiempos=["Jugar videojuegos","Ver peliculas","Programar","Viajar"];
let caracteristicasPc={
    sistemaOperativo: "Windows 10 64X ",
    ram: 12,
    disco: "solido",
    tipo:"portatil",
    tamañoPantalla:"15Pulgadas",
    iluminacion(){
        return "No";
    }
}
let myStyle = `color: #16262b;background: #7cffae;font-family: cursive, sans-serif;border-radius: 10px;padding: 9px;`;
console.group(`%cNombre del desarrollador`, myStyle);
    console.log(nombre);
console.groupEnd();
console.group(`%cEdad del desarrollador`,myStyle);
    console.log(edad);
console.groupEnd();
console.group(`%cAltura del desarrollador`,myStyle);
    console.log(altura);
console.groupEnd();
console.group(`%cEs instructor`,myStyle);
    console.log(soyInstructor);
console.groupEnd();
console.group(`%cDireccion del desarrollador`,myStyle);
    console.log(direccion);
console.groupEnd();
console.group(`%cropa del desarrollador`,myStyle);
    console.log(ropa);
console.groupEnd();
console.group(`%cPasatiempos del desarrollador`,myStyle);
    console.log(listaPasatiempos);
console.groupEnd();
console.group(`%cComputador del desarrollador`,myStyle);
    console.log(caracteristicasPc);
console.groupEnd();