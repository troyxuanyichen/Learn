function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('----------------');
      let bar = Math.random();
      resolve(bar);
    }, 500)
  })
}

foo().then((bar) => {
  console.log('generated random value: ' + bar);
  let bar2 = Math.random();
   new Promise(bar2);
})
.then()