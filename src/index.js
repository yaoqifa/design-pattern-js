import Adaptee from './adaptee-pattern'
import { Circle, Decorator } from './decorator-pattern'
import ProxyImg from './proxy-pattern'

let targe = new Adaptee()
console.log(targe.request())


const cir = new Circle()
cir.draw()
const dec = new Decorator(cir)
dec.draw()


const pi = new ProxyImg('/a.png')
pi.display()