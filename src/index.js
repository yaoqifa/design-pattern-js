import Adaptee from './adaptee-pattern'
import { Circle, Decorator } from './decorator-pattern'
import ProxyImg from './proxy-pattern'
import { Subject, Observer } from './observer-pattern'

let targe = new Adaptee()
console.log(targe.request())


const cir = new Circle()
cir.draw()
const dec = new Decorator(cir)
dec.draw()


const pi = new ProxyImg('/a.png')
pi.display()

const subject = new Subject()
const observer = new Observer('ob1', subject)
const observer2 = new Observer('ob2', subject)
const observer3 = new Observer('ob3', subject)

subject.setState(3)