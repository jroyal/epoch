#!/usr/bin/env node
const moment = require("moment");

const form = "dddd, MMMM D YYYY, h:mm:ss a z";

function print(ts) {
  if (ts.length == 13) {
    console.log("probably milliseconds");
    ts = ts.substring(0, 10);
  }
  let t = moment.unix(ts);
  console.log(t.utc().format(form));
  console.log(t.local().format(form));
  console.log(t.fromNow());
}

if (process.stdin.isTTY) {
  if (process.argv.length != 3) {
    console.log("usage: epoch <unix timestamp>");
    process.exit(1);
  }

  const ts = process.argv[2];
  print(ts);
} else {
  data = "";
  process.stdin.setEncoding("utf-8");

  process.stdin.on("readable", function () {
    var chunk;
    while ((chunk = process.stdin.read())) {
      data += chunk;
    }
  });

  process.stdin.on("end", function () {
    print(data);
  });
}
