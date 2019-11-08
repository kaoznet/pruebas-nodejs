const argv = require('./config/yargs.js').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        console.log(listarTabla(argv.base, argv.limite));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}



//console.log(process.argv);

let argv2 = process.argv;

//let parametro = argv[2];
//let base = parametro.split('=')[1];

console.log(argv.limite);

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/