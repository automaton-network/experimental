var a = 5;
function asd() {
  console.time('decode');
  for (var i = 0; i < 10; i++) a++;
  console.timeEnd('decode');
}
