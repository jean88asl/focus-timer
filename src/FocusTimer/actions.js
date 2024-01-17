import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

function showMsg(text) {
    el.msgBtns.classList.add('open')
    el.msgBtns.textContent = text

    setTimeout(() =>{el.msgBtns.classList.remove('open')}, 3000)
}

export function toggleRunning() {
    if(state.minutes <= 0) {
        let text = 'Não é possível iniciar o contador com os minutos zerados.'

        showMsg(text)
        return
    }

    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function reset() {
    state.isRunning = false

    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function addMinutes() {
    let allMinutes = (state.minutes += state.minutesAddorRemove)

    if(allMinutes > 60) {
        let text = 'Os minutos não podem ser maior que 60'
        return showMsg(text)
    }

    timer.updateDisplayMinutes(state.minutes)
}

export function removeMinutes() {
    if(state.minutes < state.minutesAddorRemove) {
        let text = `Para reduzir o tempo, o valor dos minutos deve ser maior que ${state.minutesAddorRemove}.`
        return showMsg(text)
    }

    state.minutes -= state.minutesAddorRemove
    timer.updateDisplayMinutes(state.minutes)
}