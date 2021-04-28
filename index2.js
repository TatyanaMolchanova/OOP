function Circle(radius) {
    let color = 'red'
    
    this.radius = radius

    // property defaultLocation is public
    // this.defaultLocation = { x: 0, y: 0 }
    // variable defaultLocation is private - accessible only in this function scope
    let defaultLocation = { x: 0, y: 0 }

    // public method computeOptimumLocation
    // this.computeOptimumLocation = function(factor) {
    //     //....
    // }
    // private computeOptimumLocation
    let computeOptimumLocation = function(factor) {

    }

    this.draw = function() {
        let x, y;
        // absctraction - hide details inside, show just essentioal in public
        // this.computeOptimumLocation(0.1)
        computeOptimumLocation(0.1)

        //defaultLocation

        // this.radius

        console.log('draw')
    }
}

const circle = new Circle(10)

// circle.defaultLocation = false

// circle.computeOptimumLocation(0.1)
circle.draw()
// circle.



// circle.location = { x: 1 }

// const propertyName = 'center-location'
// // circle['location'] = { x: 1}
// circle[propertyName] = { x: 1 }

// delete circle.location
// delete circle[propertyName]

// for (let key in circle) {
//     // console.log(key, circle[key])

//     // only get properties, not methods
//     if (typeof circle[key] !== 'function') {
//         console.log(key, circle[key])
//     }
// }

// const keys = Object.keys(circle)
// console.log('keys', keys)

// if ('radius' in circle) console.log('Circle has a radius')