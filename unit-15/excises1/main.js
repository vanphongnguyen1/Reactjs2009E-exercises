const users = []

const infoUser = () => {
  const boxPopup = document.querySelector('.box-popup')
  const fullName = boxPopup.querySelector('.full-name').value
  const gender = boxPopup.querySelector('.gender').value
  const age = boxPopup.querySelector('.age').value

  const user = {
    fullName: fullName,
    gender: gender,
    age: age
  }
  users.push(user)
  render()
}

const render = () => {
  const thead = document.querySelector('.heading-table')
  const th = thead.querySelector('th:first-child')
  th.innerHTML = `<input type="checkbox" name="" id="">`

  const listUser = document.querySelector('.list-user')
  let html = ''
  users.forEach((user, i) => {
    html += `
      <tr>
        <td>
          <input type="checkbox" value="${i}" name="" id="">
        </td>
        <td>${i}</td>
        <td>${user.fullName}</td>
        <td>${user.gender}</td>
        <td>${user.age}</td>
        <td>
          <div class="box_active-table">
            <button type="button"
              onclick="editUser(event, ${i})"
              class="btn btn-primary box_active-table--edit">
                Edit
            </button>
            <button type="button"
              onclick="editSave(event, ${i})"
              class="btn btn-success box_active-table--save">
                Save
            </button>
            <button type="button"
              onclick="editCancel(event, ${i})"
              class="btn btn-warning box_active-table--cancel">
                Cancel
            </button>
            <button type="button"
              onclick="deleteUser(${i})"
              class="btn btn-danger box_active-table--delete">
                Delete
            </button>
          </div>
        </td>
      </tr>
    `
  })
  listUser.innerHTML = html
  listEvent()
}

const deleteUser = index => {
  if(confirm('Bạn có muốn xóa user ?')) {
    users.splice(index,1)
  }
  render()
}

const editUser = (e, index) => {
  const activeEdit = e.target
  const patentEdit = activeEdit.parentElement
  const activeTableinSave = patentEdit.querySelector('.box_active-table--save')
  const activeTableinCancel = patentEdit.querySelector('.box_active-table--cancel')
  activeEdit.classList.add('d-none')
  activeTableinSave.classList.add('d-inline-block')
  activeTableinCancel.classList.add('d-inline-block')

  const boxParent = patentEdit.parentElement.parentElement
  const fixName = boxParent.querySelector('td:nth-child(3)')
  const fixGender = boxParent.querySelector('td:nth-child(4)')
  const fixAge = boxParent.querySelector('td:nth-child(5)')

  users.forEach((user, i) => {
    if (index === i) {
      fixName.innerHTML = `
        <input type="text"
          name="" id="input"
          class="form-control full-name"
          value="${user.fullName}">`
      if (user.gender === 'male') {
        fixGender.innerHTML = `
          <select class="form-control gender" name="" id="">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>`
      } else {
        fixGender.innerHTML = `
          <select class="form-control gender" name="" id="">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>`
      }
      fixAge.innerHTML = `
        <input type="number"
          name=""
          id="input"
          class="form-control age"
          value="${user.age}">`
    }
  })
}

const editSave = (e, index) => {
  const activeTableinSave = e.target
  const patentSave = activeTableinSave.parentElement
  const boxParent = patentSave.parentElement.parentElement
  const boxFixName = boxParent.querySelector('td:nth-child(3)')
  const boxFixGender = boxParent.querySelector('td:nth-child(4)')
  const boxFixAge = boxParent.querySelector('td:nth-child(5)')

  const genderNew = boxFixGender.querySelector('.gender').value
  const nameNew = boxFixName.querySelector('.full-name').value
  const ageNew = boxFixAge.querySelector('.age').value

  users.map((user, i) => {
    if (index === i) {
      user.fullName = nameNew
      user.gender = genderNew
      user.age = ageNew
    }
  })
  render()
}

const editCancel = (e, index) => {
  const activeCancel = e.target
  const patentEdit = activeCancel.parentElement
  const activeTableinSave = patentEdit.querySelector('.box_active-table--save')
  const activeTableinEdit = patentEdit.querySelector('.box_active-table--edit')
  activeTableinEdit.classList.remove('d-none')
  activeTableinSave.classList.remove('d-inline-block')
  activeCancel.classList.remove('d-inline-block')

  const boxParent = patentEdit.parentElement.parentElement
  const fixName = boxParent.querySelector('td:nth-child(3)')
  const fixGender = boxParent.querySelector('td:nth-child(4)')
  const fixAge = boxParent.querySelector('td:nth-child(5)')

  users.forEach((user, i) => {
    if (index === i) {
      fixName.innerText = user.fullName
      fixGender.innerText = user.gender
      fixAge.innerText = user.age
    }
  })
}

const selectAll = () => {
  const tableHeading = document.querySelector('.heading-table')
  const checkAll = tableHeading.querySelector('input[type="checkbox"]')
  const listUser = document.querySelector('.list-user')
  const boxRow = listUser.querySelectorAll('tr')

  if (checkAll.checked) {
    boxRow.forEach(row => {
      const boxSelect = row.querySelector('td:nth-child(1)')
      const select = boxSelect.querySelector('input[type="checkbox"]')
      select.setAttribute('checked','checked')
    })
  } else {
    boxRow.forEach(row => {
      const boxSelect = row.querySelector('td:nth-child(1)')
      const select = boxSelect.querySelector('input[type="checkbox"]')
      select.removeAttribute('checked','checked')
    })
  }
}

const selectDelete = () => {
  const listUser = document.querySelector('.list-user')
  const boxRow = listUser.querySelectorAll('tr')
  if (confirm('Bạn có muốn xóa các user ?')) {
    for (let j = (boxRow.length -1); j >=0; j--) {
      const boxSelect = boxRow[j].querySelector('td:nth-child(1)')
      const id = boxRow[j].querySelector('td:nth-child(2)').innerText
      const select = boxSelect.querySelector('input[type="checkbox"]')
      for (let i = (users.length - 1) ; i >= 0; i--) {
        if (select.checked && i === Number(id)) {
          users.splice(i, 1)
        }
      }
    }
  }
  render()
}

const overlayClose = () => {
  const popup = document.querySelector('.popup-overlay')
  popup.classList.remove('visi')
}

const addUser = () => {
  const popup = document.querySelector('.popup-overlay')
  popup.classList.add('visi')

  const close = popup.querySelector('.icon-close')
  const closeOverl = popup.querySelector('.overlay-close')
  close.onclick = overlayClose
  closeOverl.onclick = overlayClose
}

// event btn bên ngoài table
const listEvent = () => {
  // btn save của add user
  const btnSave = document.querySelector('.btn-save')
  btnSave.addEventListener('click',infoUser)

  const btnAdd = document.querySelector('.btn-add')
  btnAdd.addEventListener('click', addUser)

  // event delete element select
  const btnDelete = document.querySelector('.btn-delete')
  btnDelete.addEventListener('click',selectDelete)

  // event select all
  const tableHeading = document.querySelector('.heading-table')
  const checkAll = tableHeading.querySelector('input[type="checkbox"]')
  checkAll.addEventListener('click', selectAll)
}
render()
