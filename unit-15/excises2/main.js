const pokemons = [
  { id: 1, name: 'Charmander', hp: 39, atk: 100 },
  { id: 2, name: 'Pikachu', hp: 35, atk: 155 },
  { id: 3, name: 'Squirtle', hp: 44, atk: 148 },
  { id: 4, name: 'Bulbasaur', hp: 45, atk: 149 },

  { id: 5, name: 'Mew', hp: 100, atk: 100 },
  { id: 6, name: 'Pidgey', hp: 40, atk: 145 },
  { id: 7, name: 'Abra', hp: 25, atk: 120 },
  { id: 8, name: 'Snorlax', hp: 160, atk: 110 },

  { id: 9, name: 'Caterpie', hp: 45, atk: 130 },
  { id: 10, name: 'Dratini', hp: 41, atk: 164 },
  { id: 11, name: 'Eevee', hp: 55, atk: 155 },
  { id: 12, name: 'Jigglypuff', hp: 115, atk: 145 }
]
const listPokemonSelect = []

const renderPokemon = pokemons => {
  const boxPokemon = document.querySelector('.box_pokemon')
  const listPokemon = boxPokemon.querySelector('.pokemon_list')
  let html = ''
  pokemons.forEach(pokemon => {
    html += `
      <li class="pokemon_item">
        <img src="./img/${pokemon.name.toLowerCase()}.png"
          id-data="${pokemon.id}"
          onclick="showInfoPokemon(event, ${pokemon.id})"
          class="pokemon_img">
      </li>`
  })
  listPokemon.innerHTML = html
}

const showInfoPokemon = (e, id) => {
  const parentTarget = e.target.parentElement
  const infoPokemon = document.querySelector('.box_show-pokemon')
  const boxListPokemon = document.querySelector('.pokemon_list')

  const listPokemont = boxListPokemon.querySelectorAll('.pokemon_item')
  listPokemont.forEach(item => item.classList.remove('pokemon-active'))

  let html = ''
  parentTarget.classList.toggle('pokemon-active')
  pokemons.forEach(pokemon => {
    if (pokemon.id === id) {
      html = `
      <img src="./img/${pokemon.name.toLowerCase()}.png"
        id-data="${pokemon.id}" alt=""
        class="pokemon_img">
      <h2 class="name-pokemon">${pokemon.name}</h2>
      <div class="box_hp">
        <span class="box_hp-text">HP</span>
        <span class="box_hp-number">${pokemon.hp}</span>
        <span class="box_hp-background">
          <span class="box-background" style="width: ${pokemon.hp}px"></span>
        </span>
      </div>
      <div class="box_atk">
        <span class="box_atk-text">AFK</span>
        <span class="box_atk-number">${pokemon.atk}</span>
        <span class="box_atk-background">
          <span class="box-background"
            style="width: ${pokemon.atk}px">
          </span>
        </span>
      </div>
      <button type="button"
        class="btn btn-secondary add-pokemon"
        onclick="addPokemon(event, ${pokemon.id})">ADD</button>
      <span class="messeage-full-select">You have select 5 Pokemon</span>`
    }
  })
  infoPokemon.innerHTML = html

  const messageNote = document.querySelector('.messeage-full-select')
  if (listPokemonSelect.length === 5) {
    messageNote.style.display = 'block'
  }
}

const handleOverlay = id => {
  const boxListPokemon = document.querySelector('.pokemon_list')
  const listPokemon = boxListPokemon.querySelectorAll('.pokemon_item')
  listPokemon.forEach(item => {
    const idData = item.children[0].getAttribute('id-data')
    if (id === Number(idData)) {
      item.classList.add('overlay')
    }
  })
}

const addPokemon = (e, id) => {
  if (listPokemonSelect.length < 5) {
    handleOverlay(id)
    pokemons.forEach(pokemon => {
      if (pokemon.id === id) {
        listPokemonSelect.push(pokemon)
      }
    })
    e.target.setAttribute('disabled', 'disabled')
    renderShowPokemon(listPokemonSelect)
  } else {
    confirm('Chỉ có thể chọn tối ta 5 Pokemon')
  }
}

const renderShowPokemon = listPokemonSelect => {
  const listShowPokemon = document.querySelectorAll('.pokemon-select_item')
  listPokemonSelect.forEach((pokemonSelect, index) => {
    for (let i = 0; i < listShowPokemon.length; i++) {
      if (i === index) {
        listShowPokemon[i].innerHTML = `
          <div class="box-select">
            <span class="icon-close"
              onclick="closePokemon(${pokemonSelect.id})">
                <i class="fas fa-times"></i>
            </span>
            <img src="./img/${pokemonSelect.name.toLowerCase()}.png"
            alt="" id-data="${pokemonSelect.id}"
            class="pokemon-select_img">
          </div>`
      }
    }
  })
}

const closePokemon = i => {
  const listShowPokemon = document.querySelectorAll('.pokemon-select_item')
  listShowPokemon.forEach(ele => {
    ele.innerHTML = ''
    listPokemonSelect.forEach((pokemonSelect, index) => {
      if (pokemonSelect.id === i) {
        listPokemonSelect.splice(index, 1)
      }
    })
  })
  const messageNote = document.querySelector('.messeage-full-select')
  if (listPokemonSelect.length < 5) {
    messageNote.style.display = 'none'
  }
  payEventAtClose(i)
  renderShowPokemon(listPokemonSelect)
}

// khi xóa pokemon được select thì trả các event add click cho pokemon
const payEventAtClose = i => {
  const boxListPokemon = document.querySelector('.pokemon_list')
  const listPokemon = boxListPokemon.querySelectorAll('.pokemon_item')
  const boxShow = document.querySelector('.box_show-pokemon')
  const btn = boxShow.querySelector('.add-pokemon')

  listPokemon.forEach(item => {
    const id = item.children[0].getAttribute('id-data')
    if (i === Number(id)) {
      item.classList.remove('overlay')
      btn.removeAttribute('disabled')
    }
  })
}

window.onload = () => {
  const fixTitleSelect = e => e.target.setAttribute('contentEditable', 'true')
  document.querySelector('.heading_box-select').addEventListener('dblclick', fixTitleSelect)
  renderPokemon(pokemons)
}
