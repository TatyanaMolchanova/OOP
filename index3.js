function Circle(radius) {
    this.radius = radius

    let defaultLocation = { x: 0, y: 0 }

    // get this private variable defaultLocation
    // in our code:
    this.getDefaultLocation = function() {
        return defaultLocation
    }

    this.draw = function() {
        console.log('draw')
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.')

            defaultLocation = value
        }
    })
}

const circle = new Circle(10)
circle.draw()
// circle.getDefaultLocation()
// circle.defaultLocation = 0
// circle.defaultLocation
// circle.defaultLocation = 1
circle.defaultLocation = {x: 7, y: 8}
