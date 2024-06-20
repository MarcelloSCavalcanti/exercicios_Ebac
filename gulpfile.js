//importando pacotes

const gulp = require('gulp');//trazendo o pacote do gulp
const sass = require('gulp-sass')(require('sass'));//pacote composto contendo duas importações. O primeiro integra o sass com o gulp e o segundo compila o sass
//entendendo o gulp observe os arquivos sum.js e aritmetica.js
//o gulp trabalha com callbacks sendo esse um parametro para iniciar a função e precisa ser chamado como função para finalizar a função
//tarefas públicas contém o callback
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');//precisamos instalar uma verção anterior com npm install --save-dev gulp-imagemin@7.1.0

function comprimeImagens() {
    return gulp.src('./source/images/*')//sem declarar a extenção facilita pois englobamos todas as possibilidades de imagens
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}


function comprimeJavaScript(){//minifica o projeto
    return gulp.src('./source/script/*.js')
    .pipe(uglify())//minifica os arquivos
    .pipe(obfuscate())//torna os arquivos ilegível
    .pipe(gulp.dest('./build/script'));
}

function compilaSass() {//acessando a dependencia do gulp
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())//mapea os erros atraves do arquivo de origem e não o de destino do código do sass
    .pipe(sass({//compilando o arquivo css gerado pelo sass
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))//necessário para mapear os erros. Ele já considera onde os códigos scss estarão ou seja no arquivo fonte
    .pipe(gulp.dest('./build/styles'));
}//com o src estamos selecionando todos os arquivos com determinada extensão (se ao invés de main, tivesse o * seriam todos dessa extensão) e com o pipe estamos encadeando as funções sem ele precisariamos adicionar diversos passos e a função sass compila os arquivos sass.
/*
function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

function dizOi(callback) {
    setTimeout(function() {
        console.log("Olá Gulp");
        dizTchau();
        callback();
    }, 1000);
}
//tarefa privada(não é acessível através da linha de comando) não precisa do callback do gulp
function dizTchau() {
    console.log("Tchau gulp");
}
*/
//tarefas públicas (são acessadas pela linha de comando):
/* retirados do arquivo a fim de demostração de como ficaria um arquivo real
exports.default = funcaoPadrao;
exports.dizOi = dizOi;
*/
/*
exports.default = gulp.parallel(funcaoPadrao, dizOi);
*/
/* retirado e unificado numa sõ tarefa pública
exports.sass = compilaSass;//exportando tarefa do gulp para compilar o sass
exports.watch = function(){//irá ficar verificando toda alteração nos arquivos descritos assim recarregando a requisição run gulp
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    //o argumento ignoreInitial faz com que ele não deixer de reverificar na primeira alteração
}
    */
/* foram unificados no último export
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;
*/

exports.default = function(){//rodando o default precisamos apenas ativar pelo terminal o código npm run gulp e ele adotará por padrão as tarefas abaixo
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/script/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens))
}

//caso tenha a pasta build no .gitignore o desenvolvedor pode apenas baixar o projeto ele precisará fazer o clone do repositório, e usar o npm install assim ele baixará automaticamente todas as dependências do projeto e por fim rudar npm run gulp 