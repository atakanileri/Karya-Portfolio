let darkmode = localStorage.getItem('darkmode')
let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  document.body.classList.remove('lightmode')
  localStorage.setItem('darkmode', 'active')
  localStorage.setItem('lightmode', null)
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  document.body.classList.add('lightmode')
  localStorage.setItem('lightmode', 'active')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()
if(lightmode === "active") disableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  lightmode = localStorage.getItem('lightmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
  lightmode !== "active" ? disableDarkmode() : enableDarkmode()
})