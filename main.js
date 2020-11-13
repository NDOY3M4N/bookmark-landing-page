// ======== Navbar Logic ========
const menuOpen = document.querySelector('.navbar__menuOpen')
const menuClose = document.querySelector('.navbar__menuClose')
const navbarMobile = document.querySelector('.navbar--mobile')

menuOpen.addEventListener('click', () => {
  navbarMobile.classList.add('open')
  document.body.style.overflow = 'hidden'
})

menuClose.addEventListener('click', () => {
  navbarMobile.classList.remove('open')
  document.body.style.overflow = 'auto'
})

// ======== Tab display logic (Code inspired from w3schools) ========
const featuresTab = document.querySelectorAll('.features__tab li')
const features = document.querySelectorAll('.feature')

featuresTab.forEach(tab => {
  tab.addEventListener('click', () => {
    features.forEach(el => el.classList.remove('active'))
    featuresTab.forEach(el => el.classList.remove('active'))

    const featureId = tab.dataset.feature
    document.getElementById(featureId).classList.add('active')
    tab.classList.add('active')
  })
})

// ======== Accordion logic ========
const faqLinks = document.querySelectorAll('.faq__link');

faqLinks.forEach(link => {
  link.addEventListener('click', () => {
    faqLinks.forEach(el => el.classList.remove('active'))
    link.classList.add('active')
  })
})

// ======== Mail Validation Logic ========
const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formContact = document.querySelector('.contact__form')

formContact.addEventListener('submit', (e) => {
  e.preventDefault()

  const formBlock = formContact.querySelector('.form-block')
  const formInput = formContact.querySelector('.form-block input')
  const formError = formContact.querySelector('.form-error')

  if(!formInput.value.match(mailRegex)) {
    formBlock.classList.add('error')
    formInput.classList.add('error')
    formError.style.display = 'block'

    setTimeout(() => {
      formContact.querySelector('.form-block').classList.remove('error')
      formContact.querySelector('.form-error').style.display = 'none'
    }, 3000)
  }
})
