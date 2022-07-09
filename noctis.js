class Noctis {
  currentMSg = ""
  useStatus = false
  statusPrefix = "[ "
  statusCenter = null
  statusSuffix = " ] "

  updateMessage(msg) {
    this.currentMSg = msg
    this.replace(this.currentMSg)

    return this
  }

  updateStatus(status) {
    this.statusCenter = status
    this.replace(this.currentMSg)

    return this
  }

  getStatus(){
    return this.statusPrefix + this.statusCenter + this.statusSuffix
  }

  withStatus(length = 1) {
    this.useStatus = true
    this.statusCenter = " ".repeat(length)
    return this
  }

  send(...args) {
    this.currentMSg = args.join(" ")
    this.print()
    return this
  }

  append(...args) {
    this.currentMSg = this.currentMSg.concat(args.join(" "))
    this.clearConsole(1)
    this.print()
    return this
  }

  replace(...args) { 
    this.clearConsole()
    this.send(...args)
    return this
  }

  // https://stackoverflow.com/a/65863081
  async clearConsole(count = 1){ 
    for (let iter = 1; iter <= count; iter++) {
      process.stdout.moveCursor(0, -1) // up one line
      process.stdout.clearLine(1) // from cursor to end
    }
    return this
  }

  print(){
    let prefix = this.useStatus ? this.getStatus() : ""
    console.log(prefix, this.currentMSg)
    return this
  }
}

// set it up
console.n = new Noctis()
let noctis = new Noctis()
