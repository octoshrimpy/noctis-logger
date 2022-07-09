class Noctis {
  static ctx = new Noctis()
  currentMSg = ""
  useStatus = false
  statusPrefix = "[ "
  statusCenter = null
  statusSuffix = " ] "

  static updateMessage = (...args) => new Noctis().updateMessage(...args)
  updateMessage(msg) {
    let ctx = Noctis.ctx
    ctx.currentMSg = msg
    ctx.replace(ctx.currentMSg)

    return ctx
  }

  static updateStatus = (...args) => new Noctis().updateStatus(...args)
  updateStatus(status) {
    let ctx = Noctis.ctx
    ctx.statusCenter = status
    ctx.replace(ctx.currentMSg)

    return ctx
  }

  static getStatus = (...args) => new Noctis().getStatus(...args)
  getStatus() {
    let ctx = Noctis.ctx
    return ctx.statusPrefix + ctx.statusCenter + ctx.statusSuffix
  }

  static withStatus = (...args) => new Noctis().withStatus(...args)
  withStatus(length = 1) {
    let ctx = Noctis.ctx
    ctx.useStatus = true
    ctx.statusCenter = " ".repeat(length)
    return ctx
  }

  static send = (...args) => new Noctis().send(...args)
  send(...args) {
    let ctx = Noctis.ctx
    ctx.currentMSg = args.join(" ")
    ctx.print()
    return ctx
  }

  static append = (...args) => new Noctis().append(...args)
  append(...args) {
    let ctx = Noctis.ctx
    ctx.currentMSg = ctx.currentMSg.concat(args.join(" "))
    ctx.clearConsole(1)
    ctx.print()
    return ctx
  }

  static replace = (...args) => new Noctis().replace(...args)
  replace(...args) { 
    let ctx = Noctis.ctx
    ctx.clearConsole()
    ctx.send(...args)
    return ctx
  }

  // https://stackoverflow.com/a/65863081
  static clearConsole = (...args) => new Noctis().clearConsole(...args)
  async clearConsole(count = 1) { 
    let ctx = Noctis.ctx
    for (let iter = 1; iter <= count; iter++) {
      process.stdout.moveCursor(0, -1) // up one line
      process.stdout.clearLine(1) // from cursor to end
    }
    return ctx
  }

  static print = (...args) => new Noctis().print(...args)
  print() {
    let ctx = Noctis.ctx
    let prefix = ctx.useStatus ? ctx.getStatus() : ""
    console.log(prefix, ctx.currentMSg)
    return ctx
  }
}

// set it up
console.n = new Noctis()
let noctis = new Noctis()


// use it
console.log(console.n.withStatus().send("foo"))

console.log(noctis.updateStatus('o'))

console.log(Noctis.updateMessage("bar"))