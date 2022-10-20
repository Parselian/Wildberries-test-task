'use-strict'

const temporaryData = [{a: 10, b: true}, {a: 15, b: false}, {a: 10, b: false}],
  Date = ["2017-08-10", "2017-08-11", "2017-08-12", "2017-08-13", "2017-08-14"]

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
  },
  sortDate: (data, sortType) => {
    function sortObjByFieldIncrease() {
      return (a, b) => {
        return a > b ? 1 : -1
      }
    }

    function sortObjByFieldDecrease() {
      return (a, b) => {
        return a < b ? 1 : -1
      }
    }

    if (sortType === 'asc') {
      return data.sort(sortObjByFieldIncrease())
    } else if (sortType === 'desc') {
      return data.sort(sortObjByFieldDecrease())
    }
  }
}

console.log(api.filterArray(['Яблоко', 'Яблоко', 'banana', 1, 1, 2]))

console.log(api.filterObj(temporaryData, (el) => el.a > 10 && el.b === false))

console.log('Sort from old date to new date:', api.sortDate(Date, 'asc'))
console.log('Sort from new date to old date:', api.sortDate(Date, 'desc'))
