let map = new Map()

// Another way to declare map
// let map = new Map([
// ['name', 'Timi'],
// ['age',32],
// [1, 'integer']
// ]);

console.log(map)

map.set('name', 'Timi').set('age', '32').set(1, 'interger')

console.log(map.keys())

for (let data of map.keys()) {
    console.log(data);
}

for (let data of map.values()) {
    console.log(data);
}

for (let data of map.entries()){
    console.log(data)
}

console.log(map.get('name'))
console.log(map.has('age'))
console.log(map.get(1))


map.delete('name')
console.log(map)
map.clear()
console.log(map)

map.set('State','Bayelsa')
console.log(map)
console.log(map.size)


// map using objects as keys
let Timi ={name: 'Timi'};

let newMap = new Map()
newMap.set(Timi, 23)
console.log(newMap.get(Timi))
