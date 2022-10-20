'use-strict'

const temporaryData = [{a: 10, b: true}, {a:15, b: false}, {a:10, b: false}]

const api = {
  filterArray: (array) => {
      return [...new Set(array)]
  },
  filterObj: (arrayOfObjects, callback) => {
    for (let counter = 0; counter < arrayOfObjects.length; counter++) {
      if (callback(arrayOfObjects[counter])) {
        return arrayOfObjects[counter]
      }
    }
  }
}


console.log( api.filterArray(['Яблоко','Яблоко', 'banana', 1, 1, 2]) )

console.log( api.filterObj(temporaryData, (el) => el.a > 10 && el.b === false ) )
