const featuresBtn = document.getElementById('featuresBtn')
const companyBtn = document.getElementById('companyBtn')
const featuresMenu = document.getElementById('featuresMenu')
const companyMenu = document.getElementById('companyMenu')
const featuresArrow = document.getElementById('featuresArrow')
const companyArrow = document.getElementById('companyArrow')

function toggleDropdown(menu, arrow) {
  const isOpen = !menu.classList.contains('hidden')

  document.querySelectorAll('[id$="Menu"]').forEach((el) => {
    el.classList.add('hidden', 'opacity-0', 'scale-95')
  })
  document.querySelectorAll('[id$="Arrow"]').forEach((el) => {
    el.classList.remove('rotate-180')
  })

  if (!isOpen) {
    menu.classList.remove('hidden')
    setTimeout(() => {
      menu.classList.remove('opacity-0', 'scale-95')
    }, 10)
    arrow.classList.add('rotate-180')
  }
}

featuresBtn?.addEventListener('click', (e) => {
  e.stopPropagation()
  toggleDropdown(featuresMenu, featuresArrow)
})

companyBtn?.addEventListener('click', (e) => {
  e.stopPropagation()
  toggleDropdown(companyMenu, companyArrow)
})

document.addEventListener('click', () => {
  featuresMenu?.classList.add('hidden', 'opacity-0', 'scale-95')
  companyMenu?.classList.add('hidden', 'opacity-0', 'scale-95')
  featuresArrow?.classList.remove('rotate-180')
  companyArrow?.classList.remove('rotate-180')
})

// Dark mode com localStorage
const toggleDark = document.getElementById('toggleDark')
const html = document.documentElement

if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark')
} else if (localStorage.getItem('theme') === 'light') {
  html.classList.remove('dark')
}

toggleDark?.addEventListener('click', () => {
  html.classList.toggle('dark')
  const isDark = html.classList.contains('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
})

// Mobile Menu com animação
const menuToggle = document.getElementById('menuToggle')
const closeMobile = document.getElementById('closeMobile')
const mobileMenu = document.getElementById('mobileMenu')

menuToggle?.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden', 'translate-x-full', 'opacity-0')
  mobileMenu.classList.add('flex', 'translate-x-0', 'opacity-100')
})

closeMobile?.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full', 'opacity-0')
  mobileMenu.classList.remove('translate-x-0', 'opacity-100')
  setTimeout(() => {
    mobileMenu.classList.add('hidden')
    mobileMenu.classList.remove('flex')
  }, 300)
})

// ScrollReveal animações
ScrollReveal().reveal('h1', {
  origin: 'top',
  distance: '40px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: false
})

ScrollReveal().reveal('p', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 400,
  easing: 'ease-in-out',
  reset: false
})

ScrollReveal().reveal('button', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 600,
  easing: 'ease-in-out',
  reset: false
})

ScrollReveal().reveal('img[alt="Hero Image"]', {
  origin: 'right',
  distance: '60px',
  duration: 1000,
  delay: 800,
  easing: 'ease-in-out',
  reset: false
})
