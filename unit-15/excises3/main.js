const shallowMenu = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    children: [
      {
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    children: [
      {
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    children: [
      {
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    children: [
      {
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    children: [
      {
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]

const listIconShallow = {
  Dashboard: '<i class="fal fa-tachometer-alt"></i>',
  Sales: '<i class="fas fa-truck-moving"></i>',
  Messages: '<i class="fas fa-envelope"></i>',
  Users: '<i class="fas fa-user-friends"></i>',
  Settings: '<i class="fas fa-cog"></i>'
}

const createMenuShallow = (tagUl, shallowMenu, listIconShallow = {}) => {
  for (let i = 0; i < shallowMenu.length; i++) {
    const tagLi = document.createElement('li')
    tagLi.appendChild(
      createTagAMenuShallow(listIconShallow, shallowMenu[i])
    )
    tagLi.classList.add('shallow-item')
    if (shallowMenu[i].children) {
      const ul = document.createElement('ul')
      createMenuShallow(ul, shallowMenu[i].children)
      tagLi.appendChild(ul)
      ul.classList.add('shallow_dropdown-list')
    }
    tagUl.appendChild(tagLi)
    tagUl.classList.add('shallow-list')
  }
}

const renderMenuShallow = () => {
  const tagUl = document.createElement('ul')
  createMenuShallow(tagUl, shallowMenu, listIconShallow)
  const boxShallow = document.querySelector('.shallow')
 boxShallow.appendChild(tagUl)
}

const createTagAMenuShallow = (listIconShallow = {}, shallowMenu) => {
  const iconArrow = '<i class="fas fa-angle-right"></i>'
  const tagA = document.createElement('a')
  const spanText = document.createElement('span')
  const spanIcon = document.createElement('span')
  const spanIconArrow = document.createElement('span')

  tagA.setAttribute('href', shallowMenu.link)
  tagA.classList.add('shallow-link')
  spanText.innerText = shallowMenu.title
  spanText.classList.add('shallow-text')

  for (let key in listIconShallow) {
    if (key === shallowMenu.title) {
      spanIcon.insertAdjacentHTML('afterbegin', listIconShallow[key])
      spanIcon.classList.add('shallow-icon')
      tagA.appendChild(spanIcon)
      tagA.appendChild(spanText)
      spanIconArrow.classList.add('shallow-icon--arrow')
      spanIconArrow.insertAdjacentHTML('afterbegin', iconArrow)
      tagA.appendChild(spanIconArrow)
    }
  }
  if (Object.keys(listIconShallow).length === 0) {
    tagA.appendChild(spanText)
  }
  return tagA
}

// Tạo Event click item
const eventClickShallow = e => {
  // console.log(e.currentTarget)
  const borderItem = e.currentTarget
  const clickNodeText = borderItem.querySelectorAll('.shallow_dropdown-list')
  e.preventDefault()
  borderItem.style.border = 'none'
  const iconArrow = borderItem.querySelector('.shallow-icon--arrow')
  iconArrow.classList.toggle('shallow-icon--reotate')
  clickNodeText.forEach(item => {
    item.classList.toggle('display-block')
  })
}

// Menu Deep---------------------------------------------------
const deepMenu = [
  {
    title: 'Home',
    subTitle: 'sweet home',
    link: '/home',
    icon: 'fa fa-home',
  },
  {
    title: 'Home',
    subTitle: 'About us',
    link: '/about-us',
    icon: 'fa fa-edit',
    isActive: true
  },
  {
    title: 'Features',
    subTitle: 'sweet home',
    link: '/features',
    icon: 'fa fa-gift',
  },
  {
    title: 'Blog',
    subTitle: 'what they say',
    link: '/blog',
    icon: 'fad fa-comments',
    children: [
      {
        title: 'Mission',
        link: '/blog/mission',
        icon: 'fa fa-globe',
      },
      {
        title: 'Our Team',
        link: '/blog/our-team',
        icon: 'fas fa-users',
        children: [
          {
            title: 'Leyla Sparks',
            link: '/blog/our-team/leyla-sparks',
            icon: 'fa fa-female',
          },
          {
            title: 'Gleb Ismailov',
            link: '/blog/our-team/gleb-ismailov',
            icon: 'fa fa-male',
            children: [
              {
                title: 'About',
                link: '/blog/our-team/gleb-ismailov/about',
                icon: 'fa fa-leaf',
              },
              {
                title: 'Skills',
                link: '/blog/our-team/gleb-ismailov/skills',
                icon: 'fa fa-tasks',
              }
            ]
          },
          {
            title: 'Viktoria Gibbers',
            link: '/blog/our-team/viktoria-gibbers',
            icon: 'fa fa-female',
          },
        ]
      },
    ]
  },
  {
    title: 'News',
    subTitle: 'sweet home',
    link: '/news',
    icon: 'fa fa-globe',
  },
  {
    title: 'Portfolio',
    subTitle: 'sweet home',
    link: '/portfolio',
    icon: 'far fa-image',
  },
  {
    title: 'Contacts',
    subTitle: 'drop a line',
    link: '/contacts',
    icon: 'fas fa-envelope',
  },
]

const createMenuDeep = (tagUlDeep, deepMenu) => {
  for (let i = 0; i < deepMenu.length; i++) {
    const tagLi = document.createElement('li')
    const tagA = document.createElement('a')
    const spanIcon = document.createElement('span')
    const iIcon = document.createElement('i')
    const boxText = document.createElement('span')
    const title = document.createElement('span')
    const subTitle = document.createElement('span')

    tagLi.appendChild(tagA)
    tagLi.classList.add('menu-deep_item')

    tagA.href = deepMenu[i].link
    tagA.classList.add('menu-deep_link')
    tagA.appendChild(spanIcon)
    tagA.appendChild(boxText)

    iIcon.className = deepMenu[i].icon
    spanIcon.appendChild(iIcon)
    spanIcon.classList.add('menu-deep_icon')

    boxText.appendChild(title)
    boxText.appendChild(subTitle)
    boxText.classList.add('menu-deep_boxtext')

    title.innerText = deepMenu[i].title
    title.classList.add('menu-deep_text')
    subTitle.innerText = deepMenu[i].subTitle
    subTitle.classList.add('menu-deep_textsub')

    if (deepMenu[i].children) {
      const ul = document.createElement('ul')
      ul.classList.add('menu-dropdown_list')
      createMenuDeep(ul, deepMenu[i].children)
      tagLi.appendChild(ul)
      tagLi.classList.add('relative')
    }
    if (deepMenu[i].isActive) {
      tagLi.classList.add('menu-deep_active-pseudo')
      tagLi.classList.add('relative')
      tagA.classList.add('menu-deep_active')
    }
    tagUlDeep.classList.toggle('menu-deep_list')
    tagUlDeep.appendChild(tagLi)
  }

  /*   // Xử lý để in ra input search
    Chưa nghĩ ra cách nào xử lý ok hơn, xử lý bị cứng
 */
  if (deepMenu.length >= 7) {
    tagUlDeep.appendChild(
      boxSearch()
    )
  }
}

const boxSearch = () => {
  const inputSearch = document.createElement('input')
    const boxSearch = document.createElement('div')
    const liFast = document.createElement('li')
    const spanIconSearch = document.createElement('span')

    spanIconSearch.classList.add('menu-deep_search-icon')
    spanIconSearch.insertAdjacentHTML('afterbegin', '<i class="fas fa-search"></i>')

    inputSearch.setAttribute('type', 'text')
    inputSearch.setAttribute('placeholder', 'Search....')
    inputSearch.classList.add('menu-deep_search')

    liFast.classList.add('menu-deep_item')
    liFast.appendChild(boxSearch)

    boxSearch.classList.add('menu-deep_box')
    boxSearch.appendChild(inputSearch)
    boxSearch.appendChild(spanIconSearch)

    return liFast
}

const renderMenuDeep = () => {
  const tagUl = document.createElement('ul')
  createMenuDeep(tagUl, deepMenu)
  const boxMenu = document.querySelector('.bg_menu-deep')
  boxMenu.appendChild(tagUl)
  }

// -------------timeline----------------------------
const timeline = [
  {
    2000: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!',
    2001: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!',
    2002: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!',
    2003: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!',
    2004: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!'
  }
]

const showTimeline = (timeline, tagUl) => {
  timeline.forEach(item => {
    for (let key in item) {
      const tagLi = document.createElement('li')
      const boxText = document.createElement('div')
      const title = document.createElement('h4')
      const subTitle = document.createElement('p')

      tagLi.classList.add('timeline_item')
      tagLi.appendChild(boxText)

      boxText.classList.add('box_text')
      boxText.appendChild(title)
      boxText.appendChild(subTitle)

      title.innerText = key
      title.classList.add('box_text-title')

      subTitle.innerText = item[key]
      subTitle.classList.add('box_text-subtitle')

      if (Number(key) % 2 === 0) {
        boxText.classList.add('box_right')
      } else {
        boxText.classList.add('box_left')
      }
      tagUl.appendChild(tagLi)
    }
  })
  tagUl.classList.add('timeline_list')
}

const renderTimeline = () => {
  const box = document.querySelector('.timeline')
  const tagUl = document.createElement('ul')
  showTimeline(timeline, tagUl)
  box.appendChild(tagUl)
}

const eventTimeline = e => {
  const eleClick = e.currentTarget
  const box = eleClick.querySelector('.box_text')
  box.classList.toggle('display-block')
}

window.onload = () => {
  // Menu Shallow----------------------------
  renderMenuShallow()
  const listLi = document.querySelectorAll('.shallow-list .shallow-item')
  listLi.forEach(li => {
    li.addEventListener('click', eventClickShallow)
  })

  // Menu Deep----------------------------
  renderMenuDeep()
  const listEleMenuDeep = document.querySelectorAll('.menu-deep_list .menu-deep_item')
  listEleMenuDeep.forEach(ele => {
    ele.addEventListener('click', e => e.preventDefault())
  })

  // -------------timeline----------------------------
  renderTimeline()
  const eleEventTimeline = document.querySelectorAll('.timeline_list .timeline_item')
  eleEventTimeline.forEach(ele => {
    ele.addEventListener('click', eventTimeline)
  })
}
