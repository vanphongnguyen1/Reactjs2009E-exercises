/* Bài 1: Viết 1 hàm trả về 1 array, nhận vào 2 tham số,
  tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp */
// Cách 1:
const getArr = (string, lengthArr) => {
  const arr = []
  for (let i = 0; i < lengthArr; i++) {
    arr.push(string)
  }
  return arr
}

// Cách 2:
const getArr = (string, lengthArr) => {
  let i = 0
  const arr = []
  do {
    arr.push(string)
    i++
  } while (i < lengthArr)
  return arr
}

/* Bài 2: Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse() */
const revArr = arr => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i])
  }
  return newArr
}

/* Bài 3: Xóa đi các giá trị được xem là sai */
const eraseFalsy = arr => arr.filter(element => element)

/* Bài 4: Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
  const data = [['a', 1], ['b', 2]]
  { a: 1, b: 2 } */
const createObj = dataArr => {
  const obj = {}
  dataArr.forEach(arr => {
    obj[arr[0]] = arr[1]
  })
  return obj
}

/* Bài 5: Sắp xếp mảng tăng dần */
const sortArr = arr => arr.sort()

/* Bài 6: Kiểm tra input đầu vào có phải là object hay không? */
const checkTypes = obj => {
  if (Array.isArray(obj) || typeof obj !== 'object') {
    return false
  } else {
    return true
  }
}

/* Bài 7: Viết 1 hàm trả về các key (của 1 object) khác các key truyền vào
  const obj = { a: 1, b: 2, c: 3, d: 4 }
  truyền vào a, c
  return { b: 2, d: 4 } */
const getKeys = (obj, arr) => {
  arr.forEach(elem => {
    for (let key in obj) {
      if (key === elem) {
        delete(obj[key])
      }
    }
  })
  return obj
}

/* Bài 8: Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử
  Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa */
const getArr = arr => {
  const eleDelete =  arr.splice(1,2)
  return arr
}

/* Bài 9:  */
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
// ['Pass', 'Fail', 'Fail', 'Pass', 'Pass', 'Fail', 'Pass']
const findStudent = students => {
  const newArr = []
  students.map(student => {
    const { name, score } = student
    const lengName = name.length
    if (score > 5 && name.lastIndexOf('Duy', lengName - 4) === -1) {
      newArr.push('Pass')
    } else {
      newArr.push('Fail')
    }
  })
  return newArr
}

/* Bài 10:  */
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.9 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const findStudent = students => {
  const scorePass = []
  students.forEach(student => {
    const score = student.score
    const scoreInt = Number.parseInt(score)
    const numFloat = (score - scoreInt) * 10
    const scoreFloat = Math.round(numFloat)
    const sum = scoreInt + scoreFloat
    if (sum >= 10) {
      const lastNum = sum - 10
      if (lastNum > 5) {
        scorePass.push(lastNum)
      }
    } else if (sum > 5) {
      scorePass.push(sum)
    }
  })
  return scorePass
}
