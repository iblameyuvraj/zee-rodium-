// DOM Elements
const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector(".nav-menu")
const scrollElements = document.querySelectorAll(".scroll-fade")
const hero = document.querySelector(".hero")

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove("active")
    }
  })

  // Scroll Animation Functions
  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (1 - offset)
  }

  const displayScrollElement = (element) => {
    element.classList.add("active")
  }

  const hideScrollElement = (element) => {
    element.classList.remove("active")
  }

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 0.25)) {
        displayScrollElement(el)
      } else {
        hideScrollElement(el)
      }
    })
  }

  // Throttle function to limit scroll event firing
  const throttle = (fn, wait) => {
    let time = Date.now()
    return () => {
      if (time + wait - Date.now() < 0) {
        fn()
        time = Date.now()
      }
    }
  }

  // Add scroll event listener with throttling
  window.addEventListener(
    "scroll",
    throttle(() => {
      handleScrollAnimation()

      // Parallax effect for hero section (desktop only)
      if (window.innerWidth > 768) {
        const scrolled = window.pageYOffset
        if (scrolled < hero.offsetHeight) {
          hero.style.backgroundPositionY = `${scrolled * 0.5}px`
        }
      }
    }, 50),
  )

  // Initial check for elements in view
  handleScrollAnimation()

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        // Close mobile menu after clicking a link
        navMenu.classList.remove("active")
      }
    })
  })

  // Add touch support for mobile devices
  document.addEventListener("touchstart", () => {}, true)

  // Page transitions
  document.querySelectorAll('a:not([href^="#"])').forEach((link) => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function (e) {
        if (!link.classList.contains("nav-link")) return

        e.preventDefault()
        const href = this.getAttribute("href")

        // Animate page transition
        document.body.classList.add("page-transition")

        setTimeout(() => {
          window.location.href = href
        }, 500)
      })
    }
  })

  // Preload hero image for better performance
  const heroImage = new Image()
  heroImage.src =
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"

  // Add hover effects for feature cards
  const featureCards = document.querySelectorAll(".feature-card")
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)"
    })
  })

  // Make contact links interactive
  const phoneLink = document.querySelector(".phone-link")
  if (phoneLink) {
    phoneLink.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = `tel:${phoneLink.textContent.replace(/\s/g, "")}`
    })
  }
})

