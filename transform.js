const Transform = require('stream').Transform;
const tr = new Transform();

tr._transform = function (chunk, enc, cb) {
    const string = String(chunk);
    this.push(`${string} (${string.length}) `);
    cb();
}

process.stdin
    .pipe(tr)
    .pipe(process.stdout)