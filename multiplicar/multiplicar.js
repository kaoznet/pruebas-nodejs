const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    let datos = "";

    console.log("==================================".green);
    console.log(`=========tabla de ${base}==========`.rainbow);

    for (let i = 1; i <= limite; i++) {
        datos += `${base} * ${i} = ${base * i}\n`;
    }
    return datos;
};


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let datos = "";

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`${limite} no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
            //console.log('The file has been saved!');
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};