const name: string = 'Strider';
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

// console.log(hpPoints);   //En este caso, puede tomar tanto un valor numerico
                            // el string 'FULL', pero, inicialmente, se le da el 95
                            // por lo que, al imprimirlo antes de cambiarlo, nos lo da en consola

hpPoints = 'FULL';

console.log({
    name, hpPoints, isAlive
});

export{};