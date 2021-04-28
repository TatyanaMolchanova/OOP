// // simple Object
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         Y: 1
//     },
//     draw: function() {
//         console.log('draw')
//     }
// };

// // Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')
//         }
//     };
// }

// const circle = createCircle(1)
// // circle.draw();

// // Constructor Function
// function Circle(radius) {
//     console.log('this', this)
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw')
//     }
// }

// // Circle.

// // const Circle1 = new Function('radius', `
// //     this.radius = radius;
// //     this.draw = function() {
// //         console.log('draw')
// //     }
// // `)

// // const circle = new Circle1(1)

// Circle.call({}, 1) // it's the same as // const another = new Circle(1)
// Circle.apply({}, [1])

// const another = new Circle(1)
// const another = Circle(1)

// let x = {};

// // let x = new Object()
// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3

// Primitives
// let x = 10
// let y = x

// x = 20

// console.log('y', y) // y == 10

// Reference types
// let x = { value: 10 }
// let y = x

// x.value = 20

// console.log('y', y) // y { value: 20 }

//Primitives

// let number = 10

// function increase(number) {
//     number++
// }

// increase(number)
// console.log(number) //10

// let obj = { value: 10 }

// function increase(obj) {
//     obj.value++;
// }

// increase(obj)
// console.log(obj.value) 
// console.log('obj', obj)


//35.46 https://www.youtube.com/watch?v=PFmuCDHHpwk