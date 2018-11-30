// 发布者1对n， 是被观察的对象
export class Subject {
  constructor() {
    this.state = 0
    // 发布者对象需要一个数组 存储所有的订阅者
    this.observerList = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObervers()
  }
  // 发布消息就是循环遍历订阅者列表并通知它们
  notifyAllObervers() {
    this.observerList.forEach(observer => {
      observer.update()
    })
  }
    // 订阅行为就是将新的订阅者加入到这个数组中
    addObserver(observer) {
    this.observerList.push(observer)
  }
}

// 订阅者，也是观察者
export class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.addObserver(this)
  }
  update() {
    console.log(`${this.name}, update:${this.subject.getState()}`)
  }
}