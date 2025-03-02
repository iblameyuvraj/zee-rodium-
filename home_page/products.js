// Product Data
const products = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    category: "jewelry",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    description:
      "This stunning diamond eternity ring features a continuous circle of brilliant-cut diamonds set in 18k white gold. The perfect symbol of never-ending love and commitment.",
    material: "18k White Gold, Diamonds",
    dimensions: "Band width: 2.5mm",
    date: "2023-05-15",
  },
  {
    id: 2,
    name: "Sapphire Pendant Necklace",
    category: "jewelry",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:
      "A breathtaking blue sapphire pendant surrounded by a halo of diamonds, suspended on a delicate 18k white gold chain. This piece adds a touch of elegance to any outfit.",
    material: "18k White Gold, Sapphire, Diamonds",
    dimensions: "Pendant: 12mm x 8mm, Chain: 18 inches",
    date: "2023-06-20",
  },
  {
    id: 3,
    name: "Gold Hoop Earrings",
    category: "jewelry",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:
      "These classic 14k gold hoop earrings feature a polished finish and secure clasp. Their timeless design makes them a versatile addition to your jewelry collection.",
    material: "14k Gold",
    dimensions: "Diameter: 25mm",
    date: "2023-02-10",
  },
  {
    id: 4,
    name: "Pearl Bracelet",
    category: "jewelry",
    price: 499.99,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "A luxurious bracelet featuring freshwater pearls alternating with 14k gold beads. The adjustable chain ensures a perfect fit for any wrist size.",
    material: "14k Gold, Freshwater Pearls",
    dimensions: "Length: 7-8 inches adjustable",
    date: "2023-04-05",
  },
  {
    id: 5,
    name: "Platinum Wedding Band",
    category: "jewelry",
    price: 799.99,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    description:
      "This classic platinum wedding band features a comfort-fit design and a polished finish. Its durable construction ensures it will last a lifetime.",
    material: "Platinum (950)",
    dimensions: "Band width: 4mm",
    date: "2023-01-15",
  },
  {
    id: 6,
    name: "Emerald Stud Earrings",
    category: "jewelry",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:
      "These elegant emerald stud earrings feature vibrant green emeralds set in 18k yellow gold. The secure screw backs ensure they stay in place all day.",
    material: "18k Yellow Gold, Emeralds",
    dimensions: "Emerald: 5mm x 5mm",
    date: "2023-03-20",
  },
  {
    id: 7,
    name: "Silver Chain Necklace",
    category: "accessories",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:
      "This sterling silver chain necklace features a classic design that pairs well with pendants or can be worn on its own for a minimalist look.",
    material: "Sterling Silver",
    dimensions: "Length: 20 inches, Width: 2mm",
    date: "2023-07-10",
  },
  {
    id: 8,
    name: "Rose Gold Bangle",
    category: "accessories",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "This elegant rose gold bangle features a smooth, polished finish and a secure clasp. Its simple design makes it perfect for everyday wear.",
    material: "14k Rose Gold",
    dimensions: "Diameter: 65mm",
    date: "2023-05-25",
  },
  {
    id: 9,
    name: "Gold Vermeil Chain",
    category: "materials",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:
      "This gold vermeil chain is perfect for creating your own custom jewelry pieces. The high-quality gold plating over sterling silver provides a luxurious look at an affordable price.",
    material: "Gold Vermeil (Gold over Sterling Silver)",
    dimensions: "Length: 18 inches, Width: 1.5mm",
    date: "2023-06-05",
  },
  {
    id: 10,
    name: "Diamond Solitaire Pendant",
    category: "jewelry",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:
      "This stunning diamond solitaire pendant features a brilliant-cut diamond set in 18k white gold. The simple, elegant design allows the diamond to take center stage.",
    material: "18k White Gold, Diamond",
    dimensions: "Pendant: 7mm diameter, Chain: 18 inches",
    date: "2023-04-15",
  },
  {
    id: 11,
    name: "Gemstone Beads",
    category: "materials",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "These high-quality gemstone beads are perfect for creating custom jewelry pieces. The set includes a variety of colors and sizes to inspire your creativity.",
    material: "Various Gemstones",
    dimensions: "Bead sizes: 4-8mm",
    date: "2023-07-01",
  },
  {
    id: 12,
    name: "Jewelry Cleaning Kit",
    category: "accessories",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    description:
      "Keep your jewelry looking its best with this comprehensive cleaning kit. Includes cleaning solution, polishing cloth, and a soft brush for gentle cleaning.",
    material: "Various",
    dimensions: 'Kit size: 6" x 4" x 2"',
    date: "2023-02-28",
  },
]

// DOM Elements
const productGrid = document.getElementById("product-grid")
const productTotal = document.getElementById("product-total")
const searchInput = document.getElementById("search")
const categoryFilter = document.getElementById("category")
const sortSelect = document.getElementById("sort")
const modal = document.getElementById("product-modal")
const closeModal = document.querySelector(".close-modal")
const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector(".nav-menu")

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Display products
  displayProducts(products)

  // Add event listeners
  searchInput.addEventListener("input", filterProducts)
  categoryFilter.addEventListener("change", filterProducts)
  sortSelect.addEventListener("change", filterProducts)
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active")
    document.body.style.overflow = "auto"
  })

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  })

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Make filters sticky on scroll for mobile
  if (window.innerWidth <= 576) {
    const filtersSection = document.querySelector(".filters")
    const filtersSectionTop = filtersSection.offsetTop

    window.addEventListener("scroll", () => {
      if (window.scrollY > filtersSectionTop) {
        filtersSection.classList.add("sticky")
      } else {
        filtersSection.classList.remove("sticky")
      }
    })
  }

  // Improve touch responsiveness for mobile
  document.querySelectorAll(".product-btn, .filter-group select, .search-container input").forEach((element) => {
    element.addEventListener("touchstart", function (e) {
      // Add a subtle visual feedback
      this.style.opacity = "0.8"
    })

    element.addEventListener("touchend", function (e) {
      // Restore original appearance
      this.style.opacity = "1"
    })
  })

  // Optimize modal scrolling on mobile
  if (window.innerWidth <= 576) {
    modal.addEventListener("touchmove", (e) => {
      // Prevent body scrolling when modal is open
      e.stopPropagation()
    })
  }

  // Hero section parallax effect
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero")
    const scrollPosition = window.scrollY

    if (scrollPosition < hero.offsetHeight) {
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`
    }
  })

  // Animate products on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.animation = `fadeInUp 0.6s forwards`
          }, index * 100)
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll(".product-card").forEach((card) => {
    observer.observe(card)
  })
})

// Display products function
function displayProducts(productsArray) {
  productGrid.innerHTML = ""

  if (productsArray.length === 0) {
    productGrid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>'
    productTotal.textContent = "0"
    return
  }

  productTotal.textContent = productsArray.length

  productsArray.forEach((product, index) => {
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")
    productCard.style.animationDelay = `${index * 0.1}s`

    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="product-btn" data-id="${product.id}">View Details</button>
            </div>
        `

    productGrid.appendChild(productCard)

    // Add event listener to the button
    const viewButton = productCard.querySelector(".product-btn")
    viewButton.addEventListener("click", () => openProductModal(product))
  })
}

// Filter products function
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase()
  const category = categoryFilter.value
  const sortBy = sortSelect.value

  let filteredProducts = products.filter((product) => {
    // Filter by search term
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm)

    // Filter by category
    const matchesCategory = category === "all" || product.category === category

    return matchesSearch && matchesCategory
  })

  // Sort products
  filteredProducts = sortProducts(filteredProducts, sortBy)

  // Display filtered products
  displayProducts(filteredProducts)
}

// Sort products function
function sortProducts(productsArray, sortBy) {
  switch (sortBy) {
    case "price-high":
      return [...productsArray].sort((a, b) => b.price - a.price)
    case "price-low":
      return [...productsArray].sort((a, b) => a.price - b.price)
    case "newest":
      return [...productsArray].sort((a, b) => new Date(b.date) - new Date(a.date))
    default:
      return productsArray
  }
}

// Open product modal function
function openProductModal(product) {
  // Set modal content
  document.getElementById("modal-img").src = product.image
  document.getElementById("modal-title").textContent = product.name
  document.getElementById("modal-price").textContent = `$${product.price.toFixed(2)}`
  document.getElementById("modal-description").textContent = product.description
  document.getElementById("modal-material").textContent = product.material
  document.getElementById("modal-dimensions").textContent = product.dimensions

  // Show modal
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Page transitions
document.querySelectorAll("a").forEach((link) => {
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

