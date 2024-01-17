import state from "./state.js"
import * as sounds from "./sounds.js"
import * as el from './elements.js'

function check() {
    const nodeList = el.soundsControls.querySelectorAll('div')

    nodeList.forEach((e) => {
        if (e.classList.contains('active')) {
            e.classList.remove('active')
        }
    })
}

function play(e, a) {
    state.isMute = !state.isMute
    state.soundRunning = sounds[a]

    sounds[a].play()
    e.classList.toggle('active')
}

function pauseSound(e) {
    state.soundRunning.pause()
    state.isMute = !state.isMute
    e.classList.remove('active')
}

export function forestSound(e, action) {
    check()

    if (state.isMute) {
        return play(e, action)
    } else {
        pauseSound(e)

        if (state.soundRunning !== sounds[action]) {
            return play(e, action)
        }
    }
}

export function rainSound(e, action) {
    check()

    if (state.isMute) {
        return play(e, action)
    } else {
        pauseSound(e)

        if (state.soundRunning !== sounds[action]) {
            return play(e, action)
        }
    }
}

export function coffeeSound(e, action) {
    check()

    if (state.isMute) {
        return play(e, action)
    } else {
        pauseSound(e)

        if (state.soundRunning !== sounds[action]) {
            return play(e, action)
        }
    }
}

export function fireplaceSound(e, action) {
    check()

    if (state.isMute) {
        return play(e, action)
    } else {
        pauseSound(e)

        if (state.soundRunning !== sounds[action]) {
            return play(e, action)
        }
    }
}