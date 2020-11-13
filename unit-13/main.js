// Excises 1:
const submit = document.querySelector('.submit')
const resultEx1 = document.querySelector('.ex1-result')
const sum = () => {
  const num1 = document.querySelector('.num-1')
  const num2 = document.querySelector('.num-2')
  const result = Number(num1.value) + Number(num2.value)
  const html = `
    <hr><br>
    <b>Tổng: ${result}</b>
  `
  return resultEx1.innerHTML = html
}
submit.addEventListener('click', sum)

// Excises 2:
const red = document.querySelector('.red')
const redToGreen = () => red.classList.toggle('green')
red.addEventListener('click', redToGreen)

// Excises 3:
const arrData = [
  {
    name: 'laptop',
    listData: [
      'Macbook',
      'Dell',
      'Lenovo',
      'Asus'
    ]
  },
  {
    name: 'phone',
    listData: [
      'Apple',
      'Samsung',
      'Nokia'
    ]
  },
  {
    name: 'tivi',
    listData: [
      'LG',
      'Sony'
    ]
  }
]

const select = document.querySelector('.select')
const selectProduct = e => {
  const value = e.target.value
  const listProduct = arrData.filter(data => data.name === value)
  render(listProduct)
}

const render = data => {
  const list = document.querySelector('.list-product')
  let html = ''
  data.map(ele => {
    ele.listData.forEach(product => {
      html += `
        <li>${product}</li>
      `
    })
    return list.innerHTML = html
  })
}
select.addEventListener('change', selectProduct)

// Excises 4:
const dataMenu = [
  {
    name: 'Home',
    children: [
      {
        name: 'Home 1',
        children: [
          {
            name: 'Home 1.1',
            children: [
              { name: 'Home 1.1.1' }
            ]
          },
          {
            name: 'Home 1.2',
            children: [
              { name: 'Home 1.2.1' }
            ]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [
          {
            name: 'Home 2.1'
          }
        ]
      },
      {
        name: 'Home 3',
        children: [
          {
            name: 'Home 3.1'
          }
        ]
      }
    ]
  },
  {
    name: 'About',
    children: [
      {
        name: 'About 1',
        children: [
          {
            name: 'About 1.1',
            children: [
              { name: 'About 1.1.1' }
            ]
          },
          {
            name: 'About 1.2',
            children: [
              {
                name: 'About 1.2.1',
                children: [
                  { name: 'About 1.2.1.1' },
                  { name: 'About 1.2.1.2' },
                  { name: 'About 1.2.1.3' },
                ]
              }
            ]
          },
        ]
      },
      {
        name: 'About 2',
        children: [
          { name: 'About 2.1' }
        ]
      }
    ]
  }
]

const boxMenu = document.querySelector('.menu')
const hoverElementMenu = e => {
  // console.log(e.target)
  // const listMenu = boxMenu.querySelectorAll('li')
  const element = e.target
  parentList(element, [...dataMenus] = dataMenu)
  // addeventElement(listMenu)
  // for (let i = 0; i < listMenu.length; i++) {
  //   listMenu[i].addEventListener('mouseenter', hoverMenu)
  // }
}

const addeventElement = () => {
  const listMenu = boxMenu.querySelectorAll('li')
  for (let i = 0; i < listMenu.length; i++) {
    listMenu[i].addEventListener('mouseenter', hoverElementMenu)
  }
  console.log(listMenu)
}

addeventElement()

const parentList = (element, dataMenus) => {
  dataMenus.forEach(ele => {
    let html = ''
    if(element.innerText === ele.name) {
     //console.log(element) //btn hover thì hiện name chilrent
     childrentMenu(ele, element)
    }
    if (!element.insertAdjacentHTML('afterend', html)) {
      element.removeEventListener('mouseenter', hoverElementMenu)
      // hủy hover parent nhiều lần
    }
  })
}

const childrentMenu = (ele, element) => {
  // console.log(chilrent.name)
  renderMenu(element, ele.children)
  // parentList(element, [...childrent] = ele.children)
}

const renderMenu = (element, chilrents) => {
  let html = ''
  let listEle = ''
  chilrents.forEach(chilrent => {
    listEle += `<li>
      <a href = "">${chilrent.name}</a>
    </li>`
  })
  html = `
    <ul class = "drop-menu">
      ${listEle}
    </ul>
  `
  return element.insertAdjacentHTML('afterend', html)
  // thêm html vào ngay sau element
}
