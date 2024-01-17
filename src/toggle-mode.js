let darkMode = false
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (e) => {
    document.documentElement.classList.toggle('dark')
    
    const mode = darkMode ? 'light' : 'dark'

    e.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})