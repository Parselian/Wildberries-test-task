'use-strict'

const api = {
  filterArray: (array) => {
      return [...new Set(array)]
  }
}


console.log(api.filterArray(['Яблоко','Яблоко', 'banana', 1, 1, 2]))