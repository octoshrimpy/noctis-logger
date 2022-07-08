
// type out a message, as if the computer speaks to you
// inspired by @CalArcher_
async function type(msg, speedMod = 1){
  let sleepTime = 40 + (10*speedMod)

  console.re.send(msg[0])
  for (let letter of msg.slice(1).split("")) {
    // console.log
    await sleep(sleepTime)
    console.re.append(letter)
  }
}

// use it
async function run() {
  
  // use type func
  await type("hello human")
  await type("this is slow", 10)
  await type("and this is really fast, so fast your human eyes cannot even keep up ha ha ha ha", -5)
  
  
  // ===================
  // module 1
  console.re.send("foo: ")

  //do stuff
  await sleep(1500)

  if (Math.random() > 0.5) {
    console.re.append("✔")
  } else {
    console.re.append("🗙")
  }

  // ===================
  // module 2
  console.re.send("bar: ")

  //do stuff
  await sleep(1500)

  if (Math.random() > 0.5) {
    console.re.replace("bar failed!")
  } else {
    console.re.append("✔")
  }

  // ===================
  // module 3
  // with status, and updating message
  console.re.withStatus().send("baz loading ")

  //do stuff
  await sleep(1500)

  if (Math.random() > 0.5) {
    console.re.updateStatus("🗙").updateMessage("baz loaded!")
  } else {
    console.re.updateStatus("✔")
  }

}

// helper function to show the wait for promise
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


// Julee, do the thing!
run()
