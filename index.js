const moment = require("moment");

let form = "dddd, MMMM D YYYY, h:mm:ss a z";

if (process.argv.length != 3) {
  console.log("usage: epoch <unix timestamp>");
  process.exit(1);
}

const ts = process.argv[2];
let t = moment.unix(ts);
console.log(t.utc().format(form));
console.log(t.local().format(form));
console.log(t.fromNow());
