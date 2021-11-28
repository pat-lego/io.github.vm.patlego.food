const {src, dest, series} = require('gulp');

function copyCNAME() {
    return src('CNAME').pipe(dest('docs/'))
}

exports.default = series(copyCNAME);