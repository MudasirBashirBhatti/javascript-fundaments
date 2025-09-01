// .................. shallow copy ...................
// ✅ Shallow Copy:
// Top - level properties ko change karein → original object untouched rehta hai ✅

// Nested object ko change karein → original object bhi affected hota hai ❗ (kyunke reference same hota hai)

const userObj = {
    name: 'Mudasir',
    dob: {
        day: '10',
        month: 'may',
        year: '2001'
    }
}
console.log('original_obj', userObj)

const shallowCopy = { ...userObj }
shallowCopy.dob.day = '20'
shallowCopy.name = 'mudasir'
console.log('shallowObj', userObj)
console.log('original_obj_after_change', userObj)



// ✅ Deep Copy:
// Chahe top - level ya nested - level kuch bhi change karein → original object bilkul untouched rehta hai.

// Har cheez ka completely naya copy banaya jata hai.

console.log('................... deep copy.................')

const carObj = {
    name: 'toyota',
    model: {
        year: '2001',
        symbol: '@'
    }
}

console.log('original car_object before change', carObj)

const deepCopy = JSON.parse(JSON.stringify(carObj))
console.log('deep copy:', deepCopy)

deepCopy.name = 'tata'
deepCopy.model.symbol = '*'
console.log('deep copy after change:', deepCopy)
console.log('original object after change:', carObj)