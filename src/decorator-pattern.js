class Circle {
  constructor() {}
  draw() {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setBorder()
  }
  setBorder() {
    console.log('画圆形的边框')
  }
}

export {
  Circle,
  Decorator
}
/**
 * es7 decorator
 */
@testDecorator
class Demo {
}
function testDecorator (target) {
  target.isDec = true
}
console.log(Demo.isDec)


class Math1 {
  @log
  addd(a, b) {
    return a + b
  }
}
function log(target, name, decorator) {
  let oldVal = decorator.value
  decorator.value = function () {
    console.log(target, name, arguments)
    return oldVal.apply(this, arguments)
  }
  return decorator
}
const m = new Math1()
m.addd(3, 5)