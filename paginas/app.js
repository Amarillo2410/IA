// ===== DATASET SINTÉTICO DE CLIENTES =====
const initialData = [
  {
    id: 1,
    customer_name: "María García López",
    email: "maria.garcia@email.com",
    age: 32,
    gender: "Femenino",
    product_name: "iPhone 15 Pro Max",
    product_category: "Smartphone",
    price: 1199.99,
    quantity: 1,
    payment_method: "Tarjeta de Crédito",
    purchase_date: "2024-01-15",
  },
  {
    id: 2,
    customer_name: "Carlos Rodríguez Martínez",
    email: "carlos.rodriguez@email.com",
    age: 28,
    gender: "Masculino",
    product_name: 'MacBook Pro 14"',
    product_category: "Laptop",
    price: 1999.0,
    quantity: 1,
    payment_method: "PayPal",
    purchase_date: "2024-01-18",
  },
  {
    id: 3,
    customer_name: "Ana Fernández Torres",
    email: "ana.fernandez@email.com",
    age: 45,
    gender: "Femenino",
    product_name: 'iPad Pro 12.9"',
    product_category: "Tablet",
    price: 1099.0,
    quantity: 2,
    payment_method: "Tarjeta de Débito",
    purchase_date: "2024-01-20",
  },
  {
    id: 4,
    customer_name: "Roberto Sánchez Díaz",
    email: "roberto.sanchez@email.com",
    age: 35,
    gender: "Masculino",
    product_name: "Apple Watch Series 9",
    product_category: "Smartwatch",
    price: 399.0,
    quantity: 1,
    payment_method: "Tarjeta de Crédito",
    purchase_date: "2024-01-22",
  },
  {
    id: 5,
    customer_name: "Laura Jiménez Ruiz",
    email: "laura.jimenez@email.com",
    age: 29,
    gender: "Femenino",
    product_name: "AirPods Pro 2",
    product_category: "Auriculares",
    price: 249.0,
    quantity: 3,
    payment_method: "PayPal",
    purchase_date: "2024-01-25",
  },
  {
    id: 6,
    customer_name: "Miguel Ángel Herrera",
    email: "miguel.herrera@email.com",
    age: 41,
    gender: "Masculino",
    product_name: "Samsung Galaxy S24 Ultra",
    product_category: "Smartphone",
    price: 1299.99,
    quantity: 1,
    payment_method: "Transferencia Bancaria",
    purchase_date: "2024-02-01",
  },
  {
    id: 7,
    customer_name: "Patricia Morales Vega",
    email: "patricia.morales@email.com",
    age: 33,
    gender: "Femenino",
    product_name: "Dell XPS 15",
    product_category: "Laptop",
    price: 1549.0,
    quantity: 1,
    payment_method: "Tarjeta de Crédito",
    purchase_date: "2024-02-05",
  },
  {
    id: 8,
    customer_name: "Fernando Castro Luna",
    email: "fernando.castro@email.com",
    age: 27,
    gender: "Masculino",
    product_name: "Cargador MagSafe",
    product_category: "Accesorios",
    price: 39.0,
    quantity: 5,
    payment_method: "Efectivo",
    purchase_date: "2024-02-08",
  },
  {
    id: 9,
    customer_name: "Sofía Ramírez Ortiz",
    email: "sofia.ramirez@email.com",
    age: 24,
    gender: "Femenino",
    product_name: "Samsung Galaxy Tab S9",
    product_category: "Tablet",
    price: 849.99,
    quantity: 1,
    payment_method: "Tarjeta de Débito",
    purchase_date: "2024-02-10",
  },
  {
    id: 10,
    customer_name: "Diego Vargas Mendoza",
    email: "diego.vargas@email.com",
    age: 38,
    gender: "Masculino",
    product_name: "Garmin Venu 3",
    product_category: "Smartwatch",
    price: 449.99,
    quantity: 1,
    payment_method: "PayPal",
    purchase_date: "2024-02-12",
  },
  {
    id: 11,
    customer_name: "Isabella Muñoz Peña",
    email: "isabella.munoz@email.com",
    age: 31,
    gender: "Femenino",
    product_name: "Sony WH-1000XM5",
    product_category: "Auriculares",
    price: 349.99,
    quantity: 1,
    payment_method: "Tarjeta de Crédito",
    purchase_date: "2024-02-15",
  },
  {
    id: 12,
    customer_name: "Andrés Silva Guzmán",
    email: "andres.silva@email.com",
    age: 44,
    gender: "Masculino",
    product_name: "Google Pixel 8 Pro",
    product_category: "Smartphone",
    price: 999.0,
    quantity: 2,
    payment_method: "Transferencia Bancaria",
    purchase_date: "2024-02-18",
  },
  {
    id: 13,
    customer_name: "Valentina Reyes Castro",
    email: "valentina.reyes@email.com",
    age: 26,
    gender: "Femenino",
    product_name: "ASUS ROG Zephyrus G14",
    product_category: "Laptop",
    price: 1649.0,
    quantity: 1,
    payment_method: "Tarjeta de Crédito",
    purchase_date: "2024-02-20",
  },
  {
    id: 14,
    customer_name: "Javier Torres Medina",
    email: "javier.torres@email.com",
    age: 52,
    gender: "Masculino",
    product_name: "Funda de Cuero iPhone",
    product_category: "Accesorios",
    price: 59.0,
    quantity: 2,
    payment_method: "Efectivo",
    purchase_date: "2024-02-22",
  },
  {
    id: 15,
    customer_name: "Camila Flores Navarro",
    email: "camila.flores@email.com",
    age: 30,
    gender: "Femenino",
    product_name: "Xiaomi Pad 6 Pro",
    product_category: "Tablet",
    price: 499.99,
    quantity: 1,
    payment_method: "PayPal",
    purchase_date: "2024-02-25",
  },
]

// ===== VARIABLES GLOBALES =====
let clientsData = []
let currentPage = 1
const itemsPerPage = 8
let filteredData = []
let deleteClientId = null

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOM cargado correctamente")
  console.log("[v0] Inicializando aplicación TrendGear...")

  try {
    loadData()
    console.log("[v0] Datos cargados:", clientsData.length, "clientes")

    setupNavigation()
    console.log("[v0] Navegación configurada")

    updateStats()
    console.log("[v0] Estadísticas actualizadas")

    renderTable()
    console.log("[v0] Tabla renderizada")

    console.log("[v0] Aplicación iniciada correctamente")
  } catch (error) {
    console.error("[v0] Error durante la inicialización:", error)
  }
})

// ===== CARGAR/GUARDAR DATOS =====
function loadData() {
  const stored = localStorage.getItem("trendgear_clients")
  if (stored) {
    clientsData = JSON.parse(stored)
  } else {
    clientsData = [...initialData]
    saveData()
  }
  filteredData = [...clientsData]
}

function saveData() {
  localStorage.setItem("trendgear_clients", JSON.stringify(clientsData))
}

// ===== NAVEGACIÓN =====
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link")
  console.log("[v0] Enlaces de navegación encontrados:", navLinks.length)

  navLinks.forEach((link) => {
    const section = link.dataset.section
    console.log("[v0] Configurando enlace para sección:", section)

    link.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("[v0] Click en navegación, sección:", section)
      navigateTo(section)
    })
  })
}

function navigateTo(sectionId) {
  console.log("[v0] Navegando a sección:", sectionId)

  // Verificar que la sección existe
  const targetSection = document.getElementById(sectionId)
  if (!targetSection) {
    console.error("[v0] ERROR: No se encontró la sección:", sectionId)
    return
  }

  // Actualizar navegación
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.section === sectionId)
  })

  // Mostrar sección
  document.querySelectorAll(".section").forEach((section) => {
    const isTarget = section.id === sectionId
    section.classList.toggle("active", isTarget)
    console.log("[v0] Sección", section.id, "activa:", isTarget)
  })

  // Actualizar estadísticas si vamos a bienvenida
  if (sectionId === "welcome") {
    updateStats()
  }
}

window.navigateTo = navigateTo

// ===== ESTADÍSTICAS =====
function updateStats() {
  const totalClients = clientsData.length
  const totalRevenue = clientsData.reduce((sum, client) => sum + client.price * client.quantity, 0)
  const totalOrders = clientsData.reduce((sum, client) => sum + client.quantity, 0)

  animateNumber("total-clients", totalClients)
  animateNumber("total-revenue", totalRevenue, true)
  animateNumber("total-orders", totalOrders)
}

function animateNumber(elementId, target, isCurrency = false) {
  const element = document.getElementById(elementId)
  let current = 0
  const increment = target / 50
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = isCurrency
      ? "$" +
        current.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : Math.round(current).toLocaleString()
  }, 20)
}

// ===== RENDERIZAR TABLA =====
function renderTable() {
  const tbody = document.getElementById("clients-table-body")
  const start = (currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage
  const pageData = filteredData.slice(start, end)

  if (pageData.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td colspan="10">
                    <div class="empty-state">
                        <div class="empty-state-icon">☉</div>
                        <h3>No se encontraron registros</h3>
                        <p>Agregue un nuevo cliente o modifique los filtros de búsqueda.</p>
                    </div>
                </td>
            </tr>
        `
  } else {
    tbody.innerHTML = pageData
      .map(
        (client) => `
                <tr>
                    <td><strong>#${client.id}</strong></td>
                    <td>${client.customer_name}</td>
                    <td>${client.email}</td>
                    <td>${client.product_name}</td>
                    <td><span class="category-badge">${client.product_category}</span></td>
                    <td>$${client.price.toFixed(2)}</td>
                    <td>${client.quantity}</td>
                    <td>${client.payment_method}</td>
                    <td>${formatDate(client.purchase_date)}</td>
                    <td>
                        <button class="action-btn edit-btn" onclick="editClient(${client.id})">Editar</button>
                        <button class="action-btn delete-btn" onclick="deleteClient(${client.id})">Eliminar</button>
                    </td>
                </tr>
            `,
      )
      .join("")
  }

  renderPagination()
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" }
  return new Date(dateString).toLocaleDateString("es-ES", options)
}

// ===== PAGINACIÓN =====
function renderPagination() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const pagination = document.getElementById("pagination")

  if (totalPages <= 1) {
    pagination.innerHTML = ""
    return
  }

  let html = ""

  // Botón anterior
  html += `<button class="page-btn" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>« Anterior</button>`

  // Páginas
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      html += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="goToPage(${i})">${i}</button>`
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      html += `<button class="page-btn" disabled>...</button>`
    }
  }

  // Botón siguiente
  html += `<button class="page-btn" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>Siguiente »</button>`

  pagination.innerHTML = html
}

function goToPage(page) {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  if (page < 1 || page > totalPages) return
  currentPage = page
  renderTable()
}

// ===== BÚSQUEDA Y FILTROS =====
function searchClients() {
  const query = document.getElementById("search-input").value.toLowerCase()
  const category = document.getElementById("filter-category").value

  filteredData = clientsData.filter((client) => {
    const matchesQuery =
      query === "" ||
      client.customer_name.toLowerCase().includes(query) ||
      client.email.toLowerCase().includes(query) ||
      client.id.toString().includes(query)

    const matchesCategory = category === "all" || client.product_category === category

    return matchesQuery && matchesCategory
  })

  currentPage = 1
  renderTable()
}

function filterClients() {
  searchClients()
}

// ===== MODAL =====
function openModal(clientId = null) {
  console.log("[v0] Abriendo modal, clientId:", clientId)
  const modal = document.getElementById("modal")
  const form = document.getElementById("client-form")
  const titleText = document.getElementById("modal-title-text")

  form.reset()
  document.getElementById("client-id").value = ""

  if (clientId) {
    const client = clientsData.find((c) => c.id === clientId)
    if (client) {
      titleText.textContent = "Editar Cliente"
      document.getElementById("client-id").value = client.id
      document.getElementById("client-name").value = client.customer_name
      document.getElementById("client-email").value = client.email
      document.getElementById("client-age").value = client.age
      document.getElementById("client-gender").value = client.gender
      document.getElementById("product-name").value = client.product_name
      document.getElementById("product-category").value = client.product_category
      document.getElementById("product-price").value = client.price
      document.getElementById("product-quantity").value = client.quantity
      document.getElementById("payment-method").value = client.payment_method
      document.getElementById("purchase-date").value = client.purchase_date
    }
  } else {
    titleText.textContent = "Nuevo Cliente"
    document.getElementById("purchase-date").value = new Date().toISOString().split("T")[0]
  }

  modal.classList.add("active")
}

function closeModal() {
  document.getElementById("modal").classList.remove("active")
}

function editClient(id) {
  openModal(id)
}

// ===== GUARDAR CLIENTE =====
function saveClient(event) {
  event.preventDefault()

  const id = document.getElementById("client-id").value
  const clientData = {
    customer_name: document.getElementById("client-name").value,
    email: document.getElementById("client-email").value,
    age: Number.parseInt(document.getElementById("client-age").value),
    gender: document.getElementById("client-gender").value,
    product_name: document.getElementById("product-name").value,
    product_category: document.getElementById("product-category").value,
    price: Number.parseFloat(document.getElementById("product-price").value),
    quantity: Number.parseInt(document.getElementById("product-quantity").value),
    payment_method: document.getElementById("payment-method").value,
    purchase_date: document.getElementById("purchase-date").value,
  }

  if (id) {
    // Editar existente
    const index = clientsData.findIndex((c) => c.id === Number.parseInt(id))
    if (index !== -1) {
      clientsData[index] = { ...clientData, id: Number.parseInt(id) }
      showToast("Cliente actualizado exitosamente")
    }
  } else {
    // Nuevo cliente
    const newId = Math.max(...clientsData.map((c) => c.id), 0) + 1
    clientsData.push({ ...clientData, id: newId })
    showToast("Cliente agregado exitosamente")
  }

  saveData()
  filteredData = [...clientsData]
  searchClients()
  closeModal()
  updateStats()
}

// ===== ELIMINAR CLIENTE =====
function deleteClient(id) {
  deleteClientId = id
  document.getElementById("delete-modal").classList.add("active")
}

function closeDeleteModal() {
  document.getElementById("delete-modal").classList.remove("active")
  deleteClientId = null
}

function confirmDelete() {
  if (deleteClientId) {
    clientsData = clientsData.filter((c) => c.id !== deleteClientId)
    saveData()
    filteredData = filteredData.filter((c) => c.id !== deleteClientId)
    renderTable()
    updateStats()
    showToast("Cliente eliminado exitosamente")
    closeDeleteModal()
  }
}

// ===== TOAST =====
function showToast(message) {
  const toast = document.getElementById("toast")
  document.getElementById("toast-message").textContent = message
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

// Cerrar modal con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
    closeDeleteModal()
  }
})

// Cerrar modal al hacer clic fuera
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    closeModal()
  }
})

document.getElementById("delete-modal").addEventListener("click", (e) => {
  if (e.target.id === "delete-modal") {
    closeDeleteModal()
  }
})

window.openModal = openModal
window.closeModal = closeModal
window.editClient = editClient
window.saveClient = saveClient
window.deleteClient = deleteClient
window.closeDeleteModal = closeDeleteModal
window.confirmDelete = confirmDelete
window.searchClients = searchClients
window.filterClients = filterClients
window.goToPage = goToPage
