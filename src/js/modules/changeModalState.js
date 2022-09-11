import checkNumInputs from './checkNumInputs'

const changeModalState = state => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox')

  checkNumInputs('#width')
  checkNumInputs('#height')

  function bindActiontoElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        if (elem.lenght > 1) {
          state[prop] = i
        } else {
          state[prop] = item.vlaue
        }

        console.log(item.nodeName)
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i
            break
          case 'INPUT':
            if (item.getAttribute('type') == 'checkbox') {
              i === 0 ? (state[prop] = 'Холодное') : (state[prop] = 'Теплое')
              elem.forEach((box, j) => {
                box.checked = false
                if (i == j) {
                  box.checked = true
                }
              })
            } else {
              state[prop] = item.value
            }
            break
          case 'SELECT':
            state[prop] = item.value
            break
        }

        console.log(state)
      })
    })
  }

  bindActiontoElems('click', windowForm, 'form')
  bindActiontoElems('input', windowHeight, 'height')
  bindActiontoElems('input', windowWidth, 'width')
  bindActiontoElems('change', windowType, 'type')
  bindActiontoElems('change', windowProfile, 'profile')
}

export default changeModalState
