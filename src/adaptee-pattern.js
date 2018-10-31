class Adaptee {
  specificRequest() {
    return '德国插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} - 转换 - 中国插头`
  }
}

export default Target

