class Noctis {
  currentMSg = ""
  useStatus = false
  statusPrefix = "[ "
  statusCenter = null
  statusSuffix = " ] "

  static updateMessage = () => new Noctis().updateMessage()
  updateMessage(msg) {
    let ctx = this // || Noctis()
    ctx.currentMSg = msg
    ctx.replace(ctx.currentMSg)

    return ctx
  }

  static updateStatus = (...args) => new Noctis().updateStatus(...args)
  updateStatus(status) {
    let ctx = this // || Noctis()
    ctx.statusCenter = status
    ctx.replace(ctx.currentMSg)

    return ctx
  }

  static getStatus = (...args) => new Noctis().getStatus(...args)
  getStatus() {
    let ctx = this // || Noctis()
    return ctx.statusPrefix + ctx.statusCenter + ctx.statusSuffix
  }

  static withStatus = (...args) => new Noctis().withStatus(...args)
  withStatus(length = 1) {
    let ctx = this // || Noctis()
    ctx.useStatus = true
    ctx.statusCenter = " ".repeat(length)
    return ctx
  }

  static send = (...args) => new Noctis().send(...args)
  send(...args) {
    let ctx = this // || Noctis()
    ctx.currentMSg = args.join(" ")
    ctx.print()
    return ctx
  }

  static append = (...args) => new Noctis().append(...args)
  append(...args) {
    let ctx = this // || Noctis()
    ctx.currentMSg = ctx.currentMSg.concat(args.join(" "))
    ctx.clearConsole(1)
    ctx.print()
    return ctx
  }

  static replace = (...args) => new Noctis().replace(...args)
  replace(...args) { 
    let ctx = this // || Noctis()
    ctx.clearConsole()
    ctx.send(...args)
    return ctx
  }

  // https://stackoverflow.com/a/65863081
  static clearConsole = (...args) => new Noctis().clearConsole(...args)
  async clearConsole(count = 1) { 
    let ctx = this // || Noctis()
    for (let iter = 1; iter <= count; iter++) {
      process.stdout.moveCursor(0, -1) // up one line
      process.stdout.clearLine(1) // from cursor to end
    }
    return ctx
  }

  static print = (...args) => new Noctis().print(...args)
  print() {
    let ctx = this // || Noctis()
    let prefix = ctx.useStatus ? ctx.getStatus() : ""
    console.log(prefix, ctx.currentMSg)
    return ctx
  }
}

// set it up
console.n = new Noctis()
let noctis = new Noctis()


// console.n.withStatus().send("foo")
// noctis.withStatus().send("bar")

// console.log()
console.log(Noctis.withStatus().send("foo"))
console.log(Noctis.updateStatus("o"))

// Noctis.withStatus().send("baz")
// Noctis.updateStatus("o")