
/* =========================================================
   FIX NOW — JAVASCRIPT PRINCIPAL
   Profesionales | Combos | Carrito | Chat | Navegación
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. PROFESIONALES
    ===================================================== */

    const professionals = [
        { id: 1, name: "Andrea López", category: "Carpintería", description: "Fabricación de muebles, reparación de puertas y proyectos personalizados.", price: 600, location: "San Nicolás, Nuevo León", experience: "4 años de experiencia", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500" },
        { id: 7, name: "Jorge Ramírez", category: "Carpintería", description: "Diseño de muebles a medida, instalación de repisas y restauración de madera.", price: 550, location: "Monterrey, Nuevo León", experience: "6 años de experiencia", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500" },
        { id: 8, name: "Luis Fernando Cruz", category: "Carpintería", description: "Reparación de puertas, clósets, cocinas integrales y acabados de madera.", price: 480, location: "Guadalupe, Nuevo León", experience: "5 años de experiencia", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500" },

        { id: 2, name: "Carlos Martínez", category: "Electricidad", description: "Instalaciones eléctricas, mantenimiento y reparación de fallas en el hogar.", price: 450, location: "Monterrey, Nuevo León", experience: "5 años de experiencia", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500" },
        { id: 9, name: "Fernando García", category: "Electricidad", description: "Instalación de contactos, apagadores, luminarias y revisión de circuitos.", price: 400, location: "Apodaca, Nuevo León", experience: "7 años de experiencia", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500" },
        { id: 10, name: "Ricardo Méndez", category: "Electricidad", description: "Mantenimiento eléctrico residencial y solución de cortocircuitos.", price: 500, location: "San Pedro, Nuevo León", experience: "8 años de experiencia", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500" },

        { id: 3, name: "Miguel Hernández", category: "Plomería", description: "Reparación de tuberías, fugas, instalaciones y mantenimiento.", price: 350, location: "Guadalupe, Nuevo León", experience: "7 años de experiencia", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=500" },
        { id: 11, name: "Raúl Castillo", category: "Plomería", description: "Instalación de lavabos, mezcladoras, sanitarios y reparación de fugas.", price: 380, location: "Monterrey, Nuevo León", experience: "6 años de experiencia", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500" },
        { id: 12, name: "Eduardo Flores", category: "Plomería", description: "Mantenimiento de tinacos, tuberías, drenajes e instalaciones hidráulicas.", price: 420, location: "San Nicolás, Nuevo León", experience: "9 años de experiencia", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500" },

        { id: 5, name: "Daniel Torres", category: "Pintura", description: "Pintura residencial, acabados, preparación de superficies y detalles.", price: 500, location: "Apodaca, Nuevo León", experience: "6 años de experiencia", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500" },
        { id: 13, name: "Gabriel Morales", category: "Pintura", description: "Pintura de interiores y exteriores, resanes y acabados decorativos.", price: 450, location: "Monterrey, Nuevo León", experience: "5 años de experiencia", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500" },
        { id: 14, name: "Arturo Reyes", category: "Pintura", description: "Renovación de habitaciones, aplicación de esmaltes y pintura residencial.", price: 520, location: "Guadalupe, Nuevo León", experience: "8 años de experiencia", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500" },

        { id: 15, name: "Héctor Navarro", category: "Reparaciones", description: "Reparaciones generales del hogar, ajustes y mantenimiento preventivo.", price: 400, location: "Monterrey, Nuevo León", experience: "6 años de experiencia", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500" },
        { id: 16, name: "Óscar Delgado", category: "Reparaciones", description: "Instalación de accesorios, reparación de muebles y trabajos domésticos.", price: 350, location: "San Nicolás, Nuevo León", experience: "4 años de experiencia", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500" },
        { id: 17, name: "Iván Salazar", category: "Reparaciones", description: "Mantenimiento general, montaje de muebles y solución de desperfectos.", price: 450, location: "Apodaca, Nuevo León", experience: "7 años de experiencia", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500" },

        { id: 6, name: "Roberto Sánchez", category: "Mecánica", description: "Mantenimiento preventivo, revisión general y reparaciones básicas.", price: 550, location: "San Pedro, Nuevo León", experience: "8 años de experiencia", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500" },
        { id: 18, name: "Manuel Ortega", category: "Mecánica", description: "Afinación, cambio de aceite y revisión de sistemas del vehículo.", price: 600, location: "Monterrey, Nuevo León", experience: "9 años de experiencia", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500" },
        { id: 19, name: "Pedro Aguilar", category: "Mecánica", description: "Diagnóstico básico, frenos, suspensión y mantenimiento automotriz.", price: 500, location: "Guadalupe, Nuevo León", experience: "6 años de experiencia", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500" },

        { id: 4, name: "Sofía Ramírez", category: "Tecnología", description: "Soporte técnico, mantenimiento de computadoras e instalación de programas.", price: 300, location: "Monterrey, Nuevo León", experience: "3 años de experiencia", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500" },
        { id: 20, name: "Mariana Ríos", category: "Tecnología", description: "Configuración de equipos, instalación de software y soporte técnico.", price: 350, location: "San Nicolás, Nuevo León", experience: "5 años de experiencia", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500" },
        { id: 21, name: "Diego Herrera", category: "Tecnología", description: "Mantenimiento de computadoras, respaldos y solución de problemas técnicos.", price: 320, location: "Apodaca, Nuevo León", experience: "4 años de experiencia", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=500" }
    ];

    /* =====================================================
       2. COMBOS Y PROMOCIONES
       Los IDs coinciden con data-combo-id del HTML.
    ===================================================== */

    const combos = [
        {
            id: "combo-pintura",
            name: "Renueva tu espacio",
            category: "Combo de pintura",
            price: 1499,
            professional: "Daniel Torres"
        },
        {
            id: "combo-plomeria",
            name: "Hogar sin fugas",
            category: "Combo de plomería",
            price: 899,
            professional: "Miguel Hernández"
        },
        {
            id: "combo-electricidad",
            name: "Instalación segura",
            category: "Combo de electricidad",
            price: 999,
            professional: "Carlos Martínez"
        }
    ];

    /* =====================================================
       3. TUTORIALES
    ===================================================== */

    const tutorials = [
        { id: 1, title: "Introducción a la carpintería", category: "Carpintería", description: "Conoce las herramientas y técnicas básicas para comenzar.", search: "tutorial carpintería básica para principiantes" },
        { id: 2, title: "Electricidad básica en casa", category: "Electricidad", description: "Aprende los conceptos fundamentales de las instalaciones eléctricas.", search: "curso electricidad básica para principiantes" },
        { id: 3, title: "Reparaciones de plomería", category: "Plomería", description: "Identifica fugas y conoce las reparaciones más comunes.", search: "tutorial plomería básica reparaciones" },
        { id: 4, title: "Mantenimiento de computadoras", category: "Tecnología", description: "Aprende a limpiar y dar mantenimiento a tu computadora.", search: "tutorial mantenimiento computadora principiantes" },
        { id: 5, title: "Pintura de interiores", category: "Hogar", description: "Conoce cómo preparar y pintar correctamente una habitación.", search: "tutorial pintar paredes interiores" },
        { id: 6, title: "Herramientas para el hogar", category: "Hogar", description: "Descubre cómo utilizar herramientas básicas de manera segura.", search: "herramientas básicas del hogar tutorial" }
    ];

    /* =====================================================
       4. ELEMENTOS Y ESTADO
    ===================================================== */

    const pages = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileMenu = document.getElementById("mobile-menu-button");
    const mainNav = document.querySelector(".main-nav");

    const professionalGrid = document.getElementById("professional-grid");
    const searchInput = document.getElementById("professional-search");
    const categorySelect = document.getElementById("professional-category");
    const resultsCount = document.getElementById("professional-results-count");
    const tutorialGrid = document.getElementById("tutorial-grid");

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    const profileContainer = document.getElementById("professional-profile");
    const chatContactList = document.getElementById("chat-contact-list");
    const chatMessages = document.getElementById("chat-messages");
    const chatHeader = document.getElementById("chat-header");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");

    const registrationForm = document.getElementById("professional-registration-form");
    const diagnosisForm = document.getElementById("diagnosis-form");
    const diagnosisResult = document.getElementById("diagnosis-result");

    let selectedProfessional = null;
    let selectedChatId = null;

    let cart = loadStorage("fixnow_cart", []);
    let registrations = loadStorage("fixnow_registrations", []);
    let conversations = loadStorage("fixnow_conversations", {});

    /* =====================================================
       5. FUNCIONES GENERALES
    ===================================================== */

    function loadStorage(key, defaultValue) {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : defaultValue;
        } catch (error) {
            console.warn("Error al leer almacenamiento:", error);
            return defaultValue;
        }
    }

    function saveStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error("Error al guardar:", error);
            return false;
        }
    }

    function escapeHTML(value) {
        return String(value ?? "").replace(/[&<>"']/g, character => {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };
            return entities[character];
        });
    }

    function formatPrice(price) {
        return new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN",
            maximumFractionDigits: 2
        }).format(Number(price) || 0);
    }

    function showMessage(message) {
        alert(message);
    }

    function getProfessional(id) {
        return professionals.find(item => item.id === Number(id));
    }

    function getProfessionalImage(professional) {
        return `
            <img
                src="${escapeHTML(professional.image)}"
                alt="Imagen relacionada con ${escapeHTML(professional.category)}"
                loading="lazy"
                onerror="this.style.display='none';"
            >
        `;
    }

    /* =====================================================
       6. NAVEGACIÓN
    ===================================================== */

    function navigateTo(pageName) {
        const targetPage = document.getElementById(`view-${pageName}`);

        if (!targetPage) {
            console.error("No existe la pantalla:", pageName);
            return;
        }

        pages.forEach(page => page.classList.remove("active"));
        targetPage.classList.add("active");

        navLinks.forEach(link => {
            link.classList.toggle("active", link.dataset.view === pageName);
        });

        if (mainNav) mainNav.classList.remove("open");
        if (mobileMenu) mobileMenu.setAttribute("aria-expanded", "false");

        window.scrollTo({ top: 0, behavior: "smooth" });

        if (pageName === "cart") renderCart();

        if (pageName === "chat") {
            renderChatContacts();
            if (selectedChatId !== null) openChat(selectedChatId);
        }
    }

    document.addEventListener("click", event => {
        const navigationButton = event.target.closest("[data-view]");
        if (!navigationButton) return;

        event.preventDefault();

        const destination = navigationButton.dataset.view;

        if (destination === "profile" && !selectedProfessional) return;

        navigateTo(destination);
    });

    /* =====================================================
       7. MENÚ MÓVIL
    ===================================================== */

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");
            mobileMenu.setAttribute("aria-expanded", String(isOpen));
        });
    }

    /* =====================================================
       8. CATEGORÍAS DE INICIO
    ===================================================== */

    document.querySelectorAll(".category-card").forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            navigateTo("hire");

            if (categorySelect) {
                const optionExists = [...categorySelect.options].some(option => option.value === category);
                categorySelect.value = optionExists ? category : "Todos";
                renderProfessionals(categorySelect.value, "");
            }
        });
    });

    /* =====================================================
       9. APRENDE — TUTORIALES
    ===================================================== */

    function renderTutorials(category = "Todos") {
        if (!tutorialGrid) return;

        const filtered = tutorials.filter(tutorial => {
            return category === "Todos" || tutorial.category === category;
        });

        if (filtered.length === 0) {
            tutorialGrid.innerHTML = `
                <div class="empty-state">
                    <h3>No encontramos tutoriales</h3>
                    <p>Prueba con otra categoría.</p>
                </div>
            `;
            return;
        }

        tutorialGrid.innerHTML = filtered.map(tutorial => {
            const youtubeURL = "https://www.youtube.com/results?search_query=" + encodeURIComponent(tutorial.search);

            return `
                <article class="tutorial-card">
                    <a class="tutorial-thumbnail" href="${youtubeURL}" target="_blank" rel="noopener noreferrer">
                        <span class="play-icon">▶</span>
                    </a>
                    <div class="tutorial-info">
                        <span>${escapeHTML(tutorial.category)}</span>
                        <h3>${escapeHTML(tutorial.title)}</h3>
                        <p>${escapeHTML(tutorial.description)}</p>
                        <a class="text-button" href="${youtubeURL}" target="_blank" rel="noopener noreferrer">
                            Ver en YouTube →
                        </a>
                    </div>
                </article>
            `;
        }).join("");
    }

    document.querySelectorAll("[data-learning-category]").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll("[data-learning-category]").forEach(item => item.classList.remove("active"));
            button.classList.add("active");
            renderTutorials(button.dataset.learningCategory);
        });
    });

    /* =====================================================
       10. CONTRATA — PROFESIONALES
    ===================================================== */

    function renderProfessionals(category = "Todos", search = "") {
        if (!professionalGrid) return;

        const searchText = search.toLowerCase().trim();

        const filtered = professionals.filter(professional => {
            const matchesCategory = category === "Todos" || professional.category === category;

            const searchableText = [
                professional.name,
                professional.category,
                professional.description,
                professional.location
            ].join(" ").toLowerCase();

            return matchesCategory && searchableText.includes(searchText);
        });

        if (resultsCount) {
            resultsCount.textContent = `${filtered.length} profesional(es) encontrado(s)`;
        }

        if (filtered.length === 0) {
            professionalGrid.innerHTML = `
                <div class="empty-state">
                    <h3>No encontramos resultados</h3>
                    <p>Intenta buscar otra especialidad o palabra.</p>
                </div>
            `;
            return;
        }

        professionalGrid.innerHTML = filtered.map(professional => `
            <article class="professional-card">
                <div class="professional-avatar">
                    ${getProfessionalImage(professional)}
                </div>
                <h3>${escapeHTML(professional.name)}</h3>
                <span class="professional-category">${escapeHTML(professional.category)}</span>
                <p>${escapeHTML(professional.description)}</p>
                <span class="professional-price">Desde ${formatPrice(professional.price)}</span>
                <div class="professional-card-actions">
                    <button class="view-profile-button" data-profile-id="${professional.id}">
                        Ver perfil
                    </button>
                    <button class="add-cart-button" data-cart-id="${professional.id}">
                        + Carrito
                    </button>
                </div>
            </article>
        `).join("");
    }

    const searchButton = document.getElementById("search-professionals");

    if (searchButton) {
        searchButton.addEventListener("click", () => {
            renderProfessionals(categorySelect?.value || "Todos", searchInput?.value || "");
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            renderProfessionals(categorySelect?.value || "Todos", searchInput.value);
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener("change", () => {
            renderProfessionals(categorySelect.value, searchInput?.value || "");
        });
    }

    /* =====================================================
       11. PERFIL PROFESIONAL
    ===================================================== */

    function openProfile(id) {
        const professional = getProfessional(id);
        if (!professional || !profileContainer) return;

        selectedProfessional = professional;

        profileContainer.innerHTML = `
            <div class="profile-header">
                <div class="professional-avatar">${getProfessionalImage(professional)}</div>
                <div>
                    <span class="eyebrow">PERFIL PROFESIONAL</span>
                    <h2>${escapeHTML(professional.name)}</h2>
                    <p>${escapeHTML(professional.category)}</p>
                </div>
            </div>

            <div class="profile-description">
                <h3>Sobre el profesional</h3>
                <p>${escapeHTML(professional.description)}</p>
                <p><strong>Experiencia:</strong> ${escapeHTML(professional.experience)}</p>
                <p><strong>Ubicación:</strong> ${escapeHTML(professional.location)}</p>
                <p><strong>Precio estimado:</strong> ${formatPrice(professional.price)}</p>
            </div>

            <div class="profile-actions">
                <button class="primary-button" id="profile-chat-button">Contactar por chat →</button>
                <button class="secondary-button" id="profile-cart-button">Agregar al carrito</button>
            </div>
        `;

        document.getElementById("profile-chat-button").addEventListener("click", () => {
            startChat(professional.id);
        });

        document.getElementById("profile-cart-button").addEventListener("click", () => {
            addProfessionalToCart(professional.id);
        });

        navigateTo("profile");
    }

    /* =====================================================
       12. CARRITO — PROFESIONALES Y COMBOS
    ===================================================== */

    function updateCartCount() {
        if (cartCount) cartCount.textContent = cart.length;
    }

    function addItemToCart(item) {
        const alreadyAdded = cart.some(cartItem => String(cartItem.id) === String(item.id));

        if (alreadyAdded) {
            showMessage("Este servicio ya está en tu carrito.");
            return;
        }

        cart.push(item);

        if (!saveStorage("fixnow_cart", cart)) {
            cart.pop();
            showMessage("No se pudo guardar el servicio. Inténtalo de nuevo.");
            return;
        }

        renderCart();
        showMessage(`¡${item.name} se agregó correctamente al carrito!`);
    }

    function addProfessionalToCart(id) {
        const professional = getProfessional(id);

        if (!professional) {
            showMessage("No encontramos este profesional.");
            return;
        }

        addItemToCart({
            id: `profesional-${professional.id}`,
            name: professional.name,
            category: professional.category,
            price: professional.price,
            professional: professional.name,
            type: "professional"
        });
    }

    // Busca el combo por el identificador que envía el botón del HTML.
    function addComboToCart(comboId) {
        const combo = combos.find(item => item.id === comboId);

        if (!combo) {
            console.error("Combo no encontrado:", comboId);
            showMessage("No encontramos esta promoción. Revisa el identificador del combo.");
            return;
        }

        addItemToCart({
            id: combo.id,
            name: combo.name,
            category: combo.category,
            price: combo.price,
            professional: combo.professional,
            type: "combo"
        });
    }

    function removeFromCart(id) {
        cart = cart.filter(item => String(item.id) !== String(id));
        saveStorage("fixnow_cart", cart);
        renderCart();
    }

    function renderCart() {
        updateCartCount();
        if (!cartItems) return;

        const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

        if (cartSubtotal) cartSubtotal.textContent = formatPrice(total);
        if (cartTotal) cartTotal.textContent = formatPrice(total);

        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <h3>Tu carrito está vacío</h3>
                    <p>Explora los profesionales y agrega los servicios que te interesen.</p>
                </div>
            `;
            return;
        }

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <h3>${escapeHTML(item.name)}</h3>
                    <p>${escapeHTML(item.category)}</p>
                    ${item.professional ? `<p>Profesional: ${escapeHTML(item.professional)}</p>` : ""}
                    <strong>${formatPrice(item.price)}</strong>
                </div>
                <button type="button" data-remove-cart="${escapeHTML(item.id)}" aria-label="Eliminar ${escapeHTML(item.name)}">
                    Eliminar
                </button>
            </div>
        `).join("");
    }

    if (checkoutButton) {
        checkoutButton.addEventListener("click", () => {
            if (cart.length === 0) {
                showMessage("Agrega al menos un servicio antes de continuar.");
                return;
            }

            showMessage("¡Tu selección está lista! El siguiente paso será confirmar los detalles y contactar a los profesionales. Esta versión todavía no procesa pagos.");
        });
    }

    /* =====================================================
       13. CHAT DE DEMOSTRACIÓN
    ===================================================== */

    function getConversationKey(id) {
        return String(id);
    }

    function renderChatContacts() {
        if (!chatContactList) return;

        const contacts = Object.keys(conversations);

        if (contacts.length === 0) {
            chatContactList.innerHTML = `
                <p class="form-note">
                    Todavía no tienes conversaciones. Contacta a un profesional para comenzar.
                </p>
            `;
            return;
        }

        chatContactList.innerHTML = contacts.map(id => {
            const professional = getProfessional(id);
            if (!professional) return "";

            const messages = conversations[id] || [];
            const lastMessage = messages[messages.length - 1];

            return `
                <button class="chat-contact ${selectedChatId === Number(id) ? "active" : ""}" data-chat-id="${id}">
                    <span class="chat-contact-avatar">${getProfessionalImage(professional)}</span>
                    <span>
                        <strong>${escapeHTML(professional.name)}</strong>
                        <small>${lastMessage ? escapeHTML(lastMessage.text).slice(0, 30) : "Nueva conversación"}</small>
                    </span>
                </button>
            `;
        }).join("");
    }

    function startChat(id) {
        const professional = getProfessional(id);
        if (!professional) return;

        const key = getConversationKey(id);

        if (!conversations[key]) {
            conversations[key] = [];
            saveStorage("fixnow_conversations", conversations);
        }

        selectedChatId = Number(id);
        navigateTo("chat");
        renderChatContacts();
        openChat(id);
    }

    function openChat(id) {
        const professional = getProfessional(id);
        if (!professional || !chatHeader || !chatMessages) return;

        selectedChatId = Number(id);

        chatHeader.innerHTML = `
            <div class="chat-contact-avatar">${getProfessionalImage(professional)}</div>
            <div>
                <strong>${escapeHTML(professional.name)}</strong>
                <small>${escapeHTML(professional.category)}</small>
            </div>
        `;

        const messages = conversations[getConversationKey(id)] || [];

        if (messages.length === 0) {
            chatMessages.innerHTML = `
                <div class="chat-empty">
                    <span>✉</span>
                    <h3>Comienza la conversación</h3>
                    <p>Escribe un mensaje para contactar al profesional.</p>
                </div>
            `;
            return;
        }

        chatMessages.innerHTML = messages.map(message => `
            <div class="chat-message ${message.sender === "user" ? "own" : ""}">
                ${escapeHTML(message.text)}
            </div>
        `).join("");

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    if (chatForm) {
        chatForm.addEventListener("submit", event => {
            event.preventDefault();

            const messageText = chatInput.value.trim();
            if (!messageText) return;

            if (selectedChatId === null) {
                showMessage("Primero selecciona una conversación.");
                return;
            }

            const key = getConversationKey(selectedChatId);
            if (!conversations[key]) conversations[key] = [];

            conversations[key].push({
                sender: "user",
                text: messageText,
                date: new Date().toISOString()
            });

            saveStorage("fixnow_conversations", conversations);
            chatInput.value = "";
            openChat(selectedChatId);
            renderChatContacts();
        });
    }

    /* =====================================================
       14. REGISTRO DE PROFESIONALES
    ===================================================== */

    if (registrationForm) {
        registrationForm.addEventListener("submit", event => {
            event.preventDefault();

            const formData = new FormData(registrationForm);

            const newRegistration = {
                id: Date.now(),
                name: String(formData.get("name") || "").trim(),
                email: String(formData.get("email") || "").trim(),
                phone: String(formData.get("phone") || "").trim(),
                category: formData.get("category"),
                description: String(formData.get("description") || "").trim(),
                price: Number(formData.get("price")) || 0,
                date: new Date().toISOString(),
                status: "Pendiente de revisión"
            };

            if (!newRegistration.name || !newRegistration.email || !newRegistration.phone || !newRegistration.category || !newRegistration.description) {
                showMessage("Completa todos los campos obligatorios.");
                return;
            }

            registrations.push(newRegistration);

            if (!saveStorage("fixnow_registrations", registrations)) {
                registrations.pop();
                showMessage("No se pudo guardar tu registro. Inténtalo de nuevo.");
                return;
            }

            registrationForm.reset();
            showMessage("¡Registro recibido! Tus datos quedaron guardados en este navegador como una solicitud pendiente de revisión.");
        });
    }

    /* =====================================================
       15. DIAGNÓSTICO
    ===================================================== */

    if (diagnosisForm) {
        diagnosisForm.addEventListener("submit", event => {
            event.preventDefault();

            const category = document.getElementById("diagnosis-category").value;
            const description = document.getElementById("diagnosis-description").value.trim();

            if (!category || !description) {
                showMessage("Completa los datos del diagnóstico.");
                return;
            }

            const recommendations = {
                "Electricidad": "Podrías necesitar un profesional de electricidad. No manipules cables ni instalaciones energizadas. Si hay chispas, humo u olor a quemado, aléjate y solicita ayuda especializada.",
                "Plomería": "Podrías necesitar un especialista en plomería. Si existe una fuga, cierra la llave de paso si puedes hacerlo sin riesgo.",
                "Carpintería": "Podrías necesitar un carpintero para revisar el mueble, puerta o estructura.",
                "Mecánica": "Podrías necesitar una revisión mecánica especializada. Evita utilizar el vehículo si presenta fallas que comprometan la seguridad.",
                "Tecnología": "Podrías necesitar soporte técnico para revisar tu equipo o dispositivo.",
                "Hogar": "Podrías necesitar un especialista en mantenimiento del hogar.",
                "Otro": "Te recomendamos revisar el problema con un profesional de la especialidad correspondiente."
            };

            const recommendation = recommendations[category] || recommendations["Otro"];

            diagnosisResult.innerHTML = `
                <span class="eyebrow">ORIENTACIÓN INICIAL</span>
                <h3>Posible solución</h3>
                <p>${escapeHTML(recommendation)}</p>
                <p><strong>Área:</strong> ${escapeHTML(category)}</p>
                <button class="primary-button" id="diagnosis-find-professional" style="margin-top:15px;">
                    Buscar profesional →
                </button>
                <p class="form-note" style="margin-top:12px;">
                    Esta orientación es básica y no sustituye una evaluación profesional.
                </p>
            `;

            document.getElementById("diagnosis-find-professional").addEventListener("click", () => {
                navigateTo("hire");

                if (categorySelect) {
                    const optionExists = [...categorySelect.options].some(option => option.value === category);
                    categorySelect.value = optionExists ? category : "Todos";
                    renderProfessionals(categorySelect.value, "");
                }
            });
        });
    }

    /* =====================================================
       16. EVENTOS DE BOTONES DINÁMICOS
       Acepta data-combo-id Y data-add-combo.
    ===================================================== */

    document.addEventListener("click", event => {

        const profileButton = event.target.closest("[data-profile-id]");
        if (profileButton) {
            openProfile(profileButton.dataset.profileId);
            return;
        }

        const professionalCartButton = event.target.closest("[data-cart-id]");
        if (professionalCartButton) {
            addProfessionalToCart(professionalCartButton.dataset.cartId);
            return;
        }

        // Compatibilidad con ambos nombres de atributo del HTML.
        const comboButton = event.target.closest("[data-combo-id], [data-add-combo]");

        if (comboButton) {
            event.preventDefault();

            const comboId = comboButton.dataset.comboId || comboButton.dataset.addCombo;

            console.log("Botón de combo presionado:", comboId);

            addComboToCart(comboId);
            return;
        }

        const removeButton = event.target.closest("[data-remove-cart]");
        if (removeButton) {
            removeFromCart(removeButton.dataset.removeCart);
            return;
        }

        const chatButton = event.target.closest("[data-chat-id]");
        if (chatButton) {
            openChat(chatButton.dataset.chatId);
            renderChatContacts();
            return;
        }
    });

    /* =====================================================
       17. INICIALIZACIÓN
    ===================================================== */

    renderProfessionals();
    renderCart();
    renderTutorials();
    navigateTo("home");

    console.log("FIX NOW: JavaScript cargado correctamente.");
    console.log("Combos disponibles:", combos);

});
