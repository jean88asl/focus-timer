import * as el from "./elements.js"
import * as actions from "./actions.js"
import * as actionsSound from "./actions-sonds.js"
import { Modal } from "./modal.js"

export function registerControls() {
    el.controls.addEventListener('click', (e) => {

        const action = e.target.dataset.action

        if (typeof actions[action] !== "function") {
            return console.log('função selecionada não existe')
        }

        actions[action]()

    })
}

export function playSonds() {
    el.soundsControls.addEventListener('click', (e) => {
        
        const action = e.target.dataset.action

        if (typeof actionsSound[action] !== "function") {
            return console.log('função selecionada não existe')
        }

        actionsSound[action](e.target, action)
    })
}

export function modalActions() {
    el.config.addEventListener('click', () => {
        Modal.open()
    })
}
