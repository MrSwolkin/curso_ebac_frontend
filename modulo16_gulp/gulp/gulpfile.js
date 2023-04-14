const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));// interação gulp -> sass + sass responsavel pela compilação
const sourcemaps = require('gulp-sourcemaps');// 
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');




function compilaSass() {
    return gulp.src('./source/styles/main.scss') //arquivo fonte
        .pipe(sourcemaps.init()) //arquivo fonte
        .pipe(sass({
            outputStyle: 'compressed'
        })) //compilando o arquivo 
        .pipe(sourcemaps.write('./maps')) //mapeando os arquivos
        .pipe(gulp.dest('./build/styles')); //pasta destinos nos arquivos compilados

}

function minificaJavascript() {
    return gulp.src('./source/scripts/*.js')//arquivo fonte
    .pipe(uglify())//minificando os arquivos
    .pipe(gulp.dest('./build/scripts')) //pasta destino dos arquivos minificados
}

function compilaimagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}


exports.default = function() {
    gulp.watch('.source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(minificaJavascript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compilaimagens));
}
