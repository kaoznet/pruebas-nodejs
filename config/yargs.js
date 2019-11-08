const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'imprime en consola las tablas', options)

.command('crear', 'crea un archivo', options)
    .help().argv;

module.exports = {
    argv
};