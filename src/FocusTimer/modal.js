import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'

export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    buttonClose: document.querySelector('.modal button.close'),
    inputMinStart: document.querySelector('#minutes-modal'),
    inputMinAddandRemove: document.querySelector('#add-minutes-modal'),
    mensage: document.querySelector('#modal-msg'),
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if(event.key === 'Escape'){
        Modal.close()
    }
}

el.btnGravar.addEventListener('click', () => {
    let minutesStart = parseInt(Modal.inputMinStart.value)
    let minutesAdd = parseInt(Modal.inputMinAddandRemove.value)

    if((!minutesStart) || (!minutesAdd)) {
        Modal.mensage.classList.add('error')
        Modal.mensage.textContent = 'Informe dados válidos. Apenas números.'
        return 
    } if((minutesStart > 60) || (minutesAdd > 60)){
        Modal.mensage.classList.add('error')
        Modal.mensage.textContent = 'Os min. não podem ser maior que 60.'
        return 
    } else {
        timer.updateDisplay(state.minutes = minutesStart)
        state.minutesAddorRemove = minutesAdd
        Modal.mensage.classList.remove('error')
    }

    Modal.mensage.classList.toggle('success')
    Modal.mensage.textContent = 'Dados gravados com sucesso!'

    setTimeout(() => {
        Modal.close()
        Modal.mensage.classList.toggle('success')
        Modal.mensage.textContent = ''
        
    },1300)

})