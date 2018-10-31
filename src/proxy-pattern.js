class ReadImg {
  constructor(filename) {
    this.filename = filename
    this.loadFromDist()
  }
  display() {
    console.log('display...', this.filename)
  }
  loadFromDist() {
    console.log('loading...', this.filename)
  }
}

export default class ProxyImg {
  constructor(filename) {
    this.readImg = new ReadImg(filename)
  }
  display() {
    this.readImg.display()
  }
}

/**
 *  es6 Proxy
 */
let obj = {age: 111}
let agent = new Proxy(obj, {
  get(target, key) {
    return target[key] + 1
  },
  set(target, key, value) {
    target[key] = value
    return true
  }
})
console.log(agent.age)