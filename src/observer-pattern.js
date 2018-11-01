export class Subject {
  constructor() {
    this.state = 0
    this.observerList = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObervers()
  }
  notifyAllObervers() {
    this.observerList.forEach(observer => {
      observer.update()
    })
  }
  addObserver(observer) {
    this.observerList.push(observer)
  }
}

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