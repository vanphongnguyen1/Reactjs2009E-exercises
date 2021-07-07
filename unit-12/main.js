/* Exercises 1: */
const checkEleSame = (array1, array2) => {
  return array1.every((value, index) => value === array2[index])
}
const isEqual = (arr1, arr2) => {
  const condition = true
  if (arr1.length === arr2.length && checkEleSame(arr1, arr2))
    return condition
}

/* Exercises 2: */
const flatten = data => data.flat(Infinity)

/* Exercises 3: */
//method 1:
const data = [1, 2, 3, 4, 5, 6, 7];
const shelfChunk = (data, numIndex) => {
  const result = []
  const newArr = []
  for (let i = 0; i < data.length; i++) {
    if (newArr.length < numIndex) {
      newArr.push(data[i])
    }
    if (newArr.length === numIndex) {
      const subArr = newArr.splice(0, numIndex)
      result.push(subArr)
    }
  }
  result.push(newArr)
  return result.filter(ele => ele.length > 0)
}

// method 2: đi tham khảo )))
const data = [1, 2, 3, 4, 5, 6, 7];
const shelfChunk = (data, n) => {
  const result = []
  for (let i = 0; i < data.length; i += n) {
    const cutElem = data.slice(i, i + n)
    result.push(cutElem)
  }
  return result
}

/* Exercises 4: */
const compareEleArrs = function()  {
  const result = []
  arguments[0].forEach(ele => {
    arguments[1].forEach(elem => {
      if (ele === elem) {
        result.push(ele)
      }
    })
  })
  result.forEach((elem, index) => {
    for (let i = 2; i < arguments.length; i++) {
      const strArgument = arguments[i].toString()
      arguments[i].forEach(ele => {
        if (elem === ele && !result.includes(ele)) {
          result.push(ele)
        }
        if (strArgument.indexOf(elem) === -1) {
          result.splice(index, 1)
        }
      })
    }
  })
  return result.filter((item, index) => {
    return result.indexOf(item) === index
  })
}

//Chữa b4
const findSameItem = (arr1, arr2) => {
  return _.intersection(arr1, arr2)
}
const findSameItems = (...arrs) => {
  const [same] = arrs
  for (let i = 1; i < arrs.length; i++) {
    same = findSameItem(same, arrs[i])
    if (!same.length) {
      return []
    }
  }
  return same
}

/* Exercises 5: */
const expiryTime = new Date(2020, 9, 30, 12, 30, 32)
// const timeCheck = 'Sat Oct 31 2020 15:44:22 GMT+0700'
const timeCheck = 'Fri Oct 30 2020 12:30:30'
const checkSale = (expiryTime, timeCheck) => {
  return Date.parse(timeCheck) < Date.parse(expiryTime)
}

/* Exercises 6: */
const checkEmail = email => {
  const checkEmail = /^([A-Za-z0-9]{1})([\._-]?[a-z0-9]+)*@([a-z]{5,7})(\.[a-z]{2,3})+$/
  return checkEmail.test(email)
}

const checkUerName = strUserName => {
  const checkUser = /^[a-z_][^__0-9]([\._-]?[A-Za-z0-9]+){1,8}$/
  return checkUser.test(strUserName)
}
