
/**
 * 某停车场
 */
class Park {
  constructor(floors) {
    this.floors = floors || []
    this.camera = new Camera()
    this.screen = new Screen()
    this.carList = {}
  }
  in(car, index) {
    let info = this.camera.shot(car)
    let place = this.floors[0].places[index]
    place.in()
    info.place = place
    this.carList[car.number] = info
  }
  out(car) {
    const info = this.carList[car.number]
    const place = info.place
    place.out()
    this.screen.show(car, info.inTime)
    delete this.carList[car.number]
  }
  emptyNum() {
    let str = ''
    this.floors.forEach(floor => {
      str += `第${floor.index}层还有${floor.emptyPlacesNum()}个空余车位\n`
    })
    return str
  }
}

class Car {
  constructor(num) {
    this.number = num
  }
}
class Floor {
  constructor(index, places) {
    this.index = index
    this.places = places || []
  }
  emptyPlacesNum() {
    let num = 0
    this.places.forEach(place => {
      if (place.empty) {
        num++
        console.log(`空位置：${place.index}`)
      }
    })
    return num
  }
}
class Place {
  constructor (index) {
    this.index = index
    this.empty = true
  }
  in() {
    this.empty = false
  }
  out() {
    this.empty = true
  }
}

class Camera {
  shot(car) {
    return {
      num: car.number,
      inTime: Date.now()
    }
  }
}
class Screen {
  show(car, inTime) {
    console.log('车牌号：', car.number)
    console.log('停车时间：', Date.now() - inTime)
  }
}

const floors = []
for(let i = 0; i < 1; i++) {
  const places = []
  for(let j = 0; j < 100; j++) {
    places[j] = new Place(j)
  }
  floors[i] = new Floor(i + 1, places)
}
const park = new Park(floors)

for(let i = 0; i < 90; i++) {
  const car = new Car(8000 + i)
  park.in(car, i)
}
console.log(park.emptyNum())