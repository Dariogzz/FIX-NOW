
/* =========================================================
   FIX NOW — FUNCIONALIDAD PRINCIPAL
   Versión visual mejorada
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. PROFESIONALES DE DEMOSTRACIÓN
    ===================================================== */

    const professionals = [
        {
            id: 1,
            name: "Carlos Martínez",
            category: "Electricidad",
            description: "Instalaciones eléctricas, mantenimiento y reparación de fallas en el hogar.",
            price: 450,
            location: "Monterrey, Nuevo León",
            experience: "5 años de experiencia",
            photo: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700"
        },
        {
            id: 2,
            name: "Andrea López",
            category: "Carpintería",
            description: "Fabricación de muebles, reparación de puertas y proyectos personalizados.",
            price: 600,
            location: "San Nicolás, Nuevo León",
            experience: "4 años de experiencia",
            photo: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=700"
        },
        {
            id: 3,
            name: "Miguel Hernández",
            category: "Plomería",
            description: "Reparación de tuberías, fugas, instalaciones y mantenimiento.",
            price: 350,
            location: "Guadalupe, Nuevo León",
            experience: "7 años de experiencia",
            photo: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=700"
        },
        {
            id: 4,
            name: "Sofía Ramírez",
            category: "Tecnología",
            description: "Soporte técnico, mantenimiento de computadoras e instalación de programas.",
            price: 300,
            location: "Monterrey, Nuevo León",
            experience: "3 años de experiencia",
            photo: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=700"
        },
        {
            id: 5,
            name: "Daniel Torres",
            category: "Pintura",
            description: "Pintura residencial, acabados, preparación de superficies y detalles.",
            price: 500,
            location: "Apodaca, Nuevo León",
            experience: "6 años de experiencia",
            photo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700"
        },
        {
            id: 6,
            name: "Roberto Sánchez",
            category: "Mecánica",
            description: "Mantenimiento preventivo, revisión general y reparaciones básicas.",
            price: 550,
            location: "San Pedro, Nuevo León",
            experience: "8 años de experiencia",
            photo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=700"
        }
    ];


    /* =====================================================
       2. TUTORIALES CON MINIATURAS
    ===================================================== */

    const tutorials = [
        {
            id: 1,
            title: "Introducción a la carpintería",
            category: "Carpintería",
            description: "Conoce las herramientas y técnicas básicas para comenzar.",
            search: "tutorial carpintería básica para principiantes",
            image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=900"
        },
        {
            id: 2,
            title: "Electricidad básica en casa",
            category: "Electricidad",
            description: "Aprende los conceptos fundamentales de las instalaciones eléctricas.",
            search: "curso electricidad básica para principiantes",
            image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900"
        },
        {
            id: 3,
            title: "Reparaciones de plomería",
            category: "Plomería",
            description: "Identifica fugas y conoce las reparaciones más comunes.",
            search: "tutorial plomería básica reparaciones",
            image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900"
        },
        {
            id: 4,
            title: "Mantenimiento de computadoras",
            category: "Tecnología",
            description: "Aprende a limpiar y dar mantenimiento a tu computadora.",
            search: "tutorial mantenimiento computadora principiantes",
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=900"
        },
        {
            id: 5,
            title: "Pintura de interiores",
            category: "Hogar",
            description: "Conoce cómo preparar y pintar correctamente una habitación.",
            search: "tutorial pintar paredes interiores",
            image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900"
        },
        {
            id: 6,
            title: "Herramientas para el hogar",
            category: "Hogar",
            description: "Descubre cómo utilizar herramientas básicas de manera segura.",
            search: "herramientas básicas del hogar tutorial",
            image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900"
        }
    ];


    /* =====================================================
       3. ELEMENTOS Y ESTADO
    ===================================================== */

    const pages = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-link");

    const mobileMenu = document.getElementById("mobile-menu-button");
    const mainNav = document.querySelector(".main-nav");

    let currentPage = "home";
    let selectedProfessional = null;
    let selectedChatId = null;

    let cart = loadStorage("fixnow_cart", []);
    let registrations = loadStorage("fixnow_registrations", []);
    let conversations = loadStorage("fixnow_conversations", {});


    /* =====================================================
       4. FUNCIONES GENERALES
    ===================================================== */

    function loadStorage(key, defaultValue) {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : defaultValue;
        } catch (error) {
            console.warn("No se pudo leer el almacenamiento:", error);
            return defaultValue;
        }
    }

    function saveStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error("No se pudo guardar la información:", error);
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
        }).format(price);
    }

    function showMessage(message) {
        alert(message);
    }

    function getAllProfessionals() {
        return [...professionals];
    }

    function getProfessionalPhoto(professional) {
        return escapeHTML(professional.photo);
    }


    /* =====================================================
       5. NAVEGACIÓN ENTRE PANTALLAS
    ===================================================== */

    function navigateTo(pageName) {
        const targetPage = document.getElementById(`view-${pageName}`);

        if (!targetPage) {
            console.error("No existe la pantalla:", pageName);
            return;
        }

        pages.forEach(page => {
            page.classList.remove("active");
        });

        targetPage.classList.add("active");
        currentPage = pageName;

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.dataset.view === pageName
            );
        });

        if (mainNav) mainNav.classList.remove("open");

        if (mobileMenu) {
            mobileMenu.setAttribute("aria-expanded", "false");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (pageName === "cart") {
            renderCart();
        }

        if (pageName === "chat") {
            renderChatContacts();

            if (selectedChatId) {
                openChat(selectedChatId);
            }
        }
    }

    document.addEventListener("click", event => {
        const navigationButton = event.target.closest("[data-view]");

        if (!navigationButton) return;

        event.preventDefault();

        const destination = navigationButton.dataset.view;

        if (destination === "profile" && !selectedProfessional) {
            return;
        }

        navigateTo(destination);
    });


    /* =====================================================
       6. MENÚ PARA CELULAR
    ===================================================== */

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");

            mobileMenu.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });
    }


    /* =====================================================
       7. CATEGORÍAS DE INICIO
    ===================================================== */

    document.querySelectorAll(".category-card").forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;

            navigateTo("hire");

            const categoryExists = Array.from(categorySelect.options)
                .some(option => option.value === category);

            categorySelect.value = categoryExists ? category : "Todos";

            renderProfessionals(categorySelect.value, "");
        });
    });


    /* =====================================================
       8. APRENDE — TUTORIALES
    ===================================================== */

    const tutorialGrid = document.getElementById("tutorial-grid");

    function renderTutorials(category = "Todos") {
        const filteredTutorials = tutorials.filter(tutorial => {
            return category === "Todos" ||
                tutorial.category === category;
        });

        if (filteredTutorials.length === 0) {
            tutorialGrid.innerHTML = `
                <div class="empty-state">
                    <h3>No encontramos tutoriales</h3>
                    <p>Prueba con otra categoría.</p>
                </div>
            `;
            return;
        }

        tutorialGrid.innerHTML = filteredTutorials.map(tutorial => {
            const youtubeURL =
                "https://www.youtube.com/results?search_query=" +
                encodeURIComponent(tutorial.search);

            return `
                <article class="tutorial-card">

                    <a
                        class="tutorial-thumbnail"
                        href="${youtubeURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Buscar tutorial en YouTube"
                        style="
                            background-image: url('${escapeHTML(tutorial.image)}');
                            background-size: cover;
                            background-position: center;
                        "
                    >
                        <span class="play-icon">▶</span>
                    </a>

                    <div class="tutorial-info">
                        <span>${escapeHTML(tutorial.category)}</span>

                        <h3>${escapeHTML(tutorial.title)}</h3>

                        <p>${escapeHTML(tutorial.description)}</p>

                        <a
                            class="text-button"
                            href="${youtubeURL}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver en YouTube →
                        </a>
                    </div>

                </article>
            `;
        }).join("");
    }

    document.querySelectorAll("[data-learning-category]").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll("[data-learning-category]")
                .forEach(item => item.classList.remove("active"));

            button.classList.add("active");

            renderTutorials(button.dataset.learningCategory);
        });
    });


    /* =====================================================
       9. CONTRATA — PROFESIONALES
    ===================================================== */

    const professionalGrid =
        document.getElementById("professional-grid");

    const searchInput =
        document.getElementById("professional-search");

    const categorySelect =
        document.getElementById("professional-category");

    const resultsCount =
        document.getElementById("professional-results-count");

    function renderProfessionals(category = "Todos", search = "") {
        const allProfessionals = getAllProfessionals();

        const filtered = allProfessionals.filter(professional => {
            const matchesCategory =
                category === "Todos" ||
                professional.category === category;

            const searchText = search.toLowerCase().trim();

            const matchesSearch =
                professional.name.toLowerCase().includes(searchText) ||
                professional.category.toLowerCase().includes(searchText) ||
                professional.description.toLowerCase().includes(searchText) ||
                professional.location.toLowerCase().includes(searchText);

            return matchesCategory && matchesSearch;
        });

        resultsCount.textContent =
            `${filtered.length} profesional(es) encontrado(s)`;

        if (filtered.length === 0) {
            professionalGrid.innerHTML = `
                <div class="empty-state">
                    <h3>No encontramos resultados</h3>
                    <p>Intenta buscar otra especialidad o palabra.</p>
                </div>
            `;
            return;
        }

        professionalGrid.innerHTML = filtered.map(professional => {
            return `
                <article class="professional-card">

                    <div class="professional-avatar">
                        <img
                            src="${getProfessionalPhoto(professional)}"
                            alt="Fotografía de ${escapeHTML(professional.name)}"
                            loading="lazy"
                            style="
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: inherit;
                                display: block;
                            "
                        >
                    </div>

                    <h3>${escapeHTML(professional.name)}</h3>

                    <span class="professional-category">
                        ${escapeHTML(professional.category)}
                    </span>

                    <p>${escapeHTML(professional.description)}</p>

                    <span class="professional-price">
                        Desde ${formatPrice(professional.price)}
                    </span>

                    <div class="professional-card-actions">

                        <button
                            class="view-profile-button"
                            data-profile-id="${professional.id}"
                        >
                            Ver perfil
                        </button>

                        <button
                            class="add-cart-button"
                            data-cart-id="${professional.id}"
                        >
                            + Carrito
                        </button>

                    </div>

                </article>
            `;
        }).join("");
    }

    document.getElementById("search-professionals")
        .addEventListener("click", () => {
            renderProfessionals(
                categorySelect.value,
                searchInput.value
            );
        });

    searchInput.addEventListener("input", () => {
        renderProfessionals(
            categorySelect.value,
            searchInput.value
        );
    });

    categorySelect.addEventListener("change", () => {
        renderProfessionals(
            categorySelect.value,
            searchInput.value
        );
    });


    /* =====================================================
       10. PERFIL INDIVIDUAL
    ===================================================== */

    const profileContainer =
        document.getElementById("professional-profile");

    function openProfile(id) {
        const professional = getAllProfessionals().find(item => {
            return item.id === Number(id);
        });

        if (!professional) return;

        selectedProfessional = professional;

        profileContainer.innerHTML = `
            <div class="profile-header">

                <div class="professional-avatar">
                    <img
                        src="${getProfessionalPhoto(professional)}"
                        alt="Fotografía de ${escapeHTML(professional.name)}"
                        style="
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: inherit;
                            display: block;
                        "
                    >
                </div>

                <div>
                    <span class="eyebrow">PERFIL PROFESIONAL</span>
                    <h2>${escapeHTML(professional.name)}</h2>
                    <p>${escapeHTML(professional.category)}</p>
                </div>

            </div>

            <div class="profile-description">
                <h3>Sobre el profesional</h3>

                <p>${escapeHTML(professional.description)}</p>

                <p><strong>Experiencia:</strong>
                    ${escapeHTML(professional.experience)}
                </p>

                <p><strong>Ubicación:</strong>
                    ${escapeHTML(professional.location)}
                </p>

                <p><strong>Precio estimado:</strong>
                    ${formatPrice(professional.price)}
                </p>
            </div>

            <div class="profile-actions">

                <button
                    class="primary-button"
                    id="profile-chat-button"
                >
                    Contactar por chat →
                </button>

                <button
                    class="secondary-button"
                    id="profile-cart-button"
                >
                    Agregar al carrito
                </button>

            </div>
        `;

        document.getElementById("profile-chat-button")
            .addEventListener("click", () => {
                startChat(professional.id);
            });

        document.getElementById("profile-cart-button")
            .addEventListener("click", () => {
                addToCart(professional.id);
            });

        navigateTo("profile");
    }


    /* =====================================================
       11. CARRITO
    ===================================================== */

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartTotal = document.getElementById("cart-total");

    function addToCart(id) {
        const professional = getAllProfessionals().find(item => {
            return item.id === Number(id);
        });

        if (!professional) return;

        const alreadyAdded = cart.some(item => {
            return item.id === professional.id;
        });

        if (alreadyAdded) {
            showMessage("Este servicio ya está en tu carrito.");
            return;
        }

        cart.push({
            id: professional.id,
            name: professional.name,
            category: professional.category,
            price: professional.price
        });

        saveStorage("fixnow_cart", cart);
        renderCart();

        showMessage("¡Servicio agregado al carrito!");
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== Number(id));

        saveStorage("fixnow_cart", cart);
        renderCart();
    }

    function renderCart() {
        const total = cart.reduce((sum, item) => {
            return sum + Number(item.price);
        }, 0);

        cartCount.textContent = cart.length;
        cartSubtotal.textContent = formatPrice(total);
        cartTotal.textContent = formatPrice(total);

        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <h3>Tu carrito está vacío</h3>
                    <p>Explora los profesionales y agrega los servicios que te interesen.</p>
                </div>
            `;
            return;
        }

        cartItems.innerHTML = cart.map(item => {
            return `
                <div class="cart-item">

                    <div>
                        <h3>${escapeHTML(item.name)}</h3>
                        <p>${escapeHTML(item.category)}</p>
                        <strong>${formatPrice(item.price)}</strong>
                    </div>

                    <button
                        data-remove-cart="${item.id}"
                        aria-label="Eliminar servicio"
                    >
                        Eliminar
                    </button>

                </div>
            `;
        }).join("");
    }

    document.getElementById("checkout-button")
        .addEventListener("click", () => {
            if (cart.length === 0) {
                showMessage("Agrega al menos un servicio antes de continuar.");
                return;
            }

            showMessage(
                "Tu selección está lista. El siguiente paso será confirmar los detalles y contactar a los profesionales. Esta versión todavía no procesa pagos."
            );
        });


    /* =====================================================
       12. CHAT DE DEMOSTRACIÓN
    ===================================================== */

    const chatContactList =
        document.getElementById("chat-contact-list");

    const chatMessages =
        document.getElementById("chat-messages");

    const chatHeader =
        document.getElementById("chat-header");

    const chatForm =
        document.getElementById("chat-form");

    const chatInput =
        document.getElementById("chat-input");

    function getConversationKey(id) {
        return String(id);
    }

    function renderChatContacts() {
        const contacts = Object.keys(conversations);

        if (contacts.length === 0) {
            chatContactList.innerHTML = `
                <p class="form-note">
                    Todavía no tienes conversaciones.
                    Contacta a un profesional para comenzar.
                </p>
            `;
            return;
        }

        chatContactList.innerHTML = contacts.map(id => {
            const professional = getAllProfessionals().find(item => {
                return item.id === Number(id);
            });

            if (!professional) return "";

            const messages = conversations[id] || [];
            const lastMessage = messages[messages.length - 1];

            return `
                <button
                    class="chat-contact ${selectedChatId === Number(id) ? "active" : ""}"
                    data-chat-id="${id}"
                >

                    <span class="chat-contact-avatar">
                        <img
                            src="${getProfessionalPhoto(professional)}"
                            alt=""
                            style="
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: 50%;
                            "
                        >
                    </span>

                    <span>
                        <strong>${escapeHTML(professional.name)}</strong>
                        <small>
                            ${lastMessage
                                ? escapeHTML(lastMessage.text).slice(0, 30)
                                : "Nueva conversación"}
                        </small>
                    </span>

                </button>
            `;
        }).join("");
    }

    function startChat(id) {
        const professional = getAllProfessionals().find(item => {
            return item.id === Number(id);
        });

        if (!professional) return;

        const key = getConversationKey(id);

        if (!conversations[key]) {
            conversations[key] = [];
            saveStorage("fixnow_conversations", conversations);
        }

        selectedChatId = Number(id);

        renderChatContacts();
        navigateTo("chat");
    }

    function openChat(id) {
        const professional = getAllProfessionals().find(item => {
            return item.id === Number(id);
        });

        if (!professional) return;

        selectedChatId = Number(id);

        chatHeader.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;">
                <img
                    src="${getProfessionalPhoto(professional)}"
                    alt=""
                    style="
                        width:48px;
                        height:48px;
                        object-fit:cover;
                        border-radius:50%;
                    "
                >
                <div>
                    <strong>${escapeHTML(professional.name)}</strong>
                    <small>${escapeHTML(professional.category)}</small>
                </div>
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

        chatMessages.innerHTML = messages.map(message => {
            return `
                <div class="chat-message ${message.sender === "user" ? "own" : ""}">
                    ${escapeHTML(message.text)}
                </div>
            `;
        }).join("");

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    chatForm.addEventListener("submit", event => {
        event.preventDefault();

        const text = chatInput.value.trim();

        if (!text) return;

        if (!selectedChatId) {
            showMessage("Primero selecciona una conversación.");
            return;
        }

        const key = getConversationKey(selectedChatId);

        if (!conversations[key]) {
            conversations[key] = [];
        }

        conversations[key].push({
            sender: "user",
            text: text,
            date: new Date().toISOString()
        });

        saveStorage("fixnow_conversations", conversations);

        chatInput.value = "";

        openChat(selectedChatId);
        renderChatContacts();
    });


    /* =====================================================
       13. REGISTRO DE PROFESIONALES
    ===================================================== */

    const registrationForm =
        document.getElementById("professional-registration-form");

    registrationForm.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(registrationForm);

        const newRegistration = {
            id: Date.now(),
            name: formData.get("name").trim(),
            email: formData.get("email").trim(),
            phone: formData.get("phone").trim(),
            category: formData.get("category"),
            description: formData.get("description").trim(),
            price: Number(formData.get("price")) || 0,
            date: new Date().toISOString(),
            status: "Pendiente de revisión"
        };

        if (
            !newRegistration.name ||
            !newRegistration.email ||
            !newRegistration.phone ||
            !newRegistration.category ||
            !newRegistration.description
        ) {
            showMessage("Completa todos los campos obligatorios.");
            return;
        }

        registrations.push(newRegistration);

        const saved = saveStorage(
            "fixnow_registrations",
            registrations
        );

        if (!saved) {
            showMessage("No se pudo guardar tu registro. Inténtalo de nuevo.");
            return;
        }

        registrationForm.reset();

        showMessage(
            "¡Registro recibido! Tus datos quedaron guardados en este navegador como una solicitud pendiente de revisión."
        );
    });


    /* =====================================================
       14. DIAGNÓSTICO BÁSICO
    ===================================================== */

    const diagnosisForm =
        document.getElementById("diagnosis-form");

    const diagnosisResult =
        document.getElementById("diagnosis-result");

    diagnosisForm.addEventListener("submit", event => {
        event.preventDefault();

        const category =
            document.getElementById("diagnosis-category").value;

        const description =
            document.getElementById("diagnosis-description").value.trim();

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

        const recommendation =
            recommendations[category] || recommendations["Otro"];

        diagnosisResult.innerHTML = `
            <span class="eyebrow">ORIENTACIÓN INICIAL</span>
            <h3>Posible solución</h3>
            <p>${escapeHTML(recommendation)}</p>
            <p><strong>Área:</strong> ${escapeHTML(category)}</p>

            <button
                class="primary-button"
                id="diagnosis-find-professional"
                style="margin-top:15px;"
            >
                Buscar profesional →
            </button>

            <p class="form-note" style="margin-top:12px;">
                Esta orientación es básica y no sustituye una evaluación profesional.
            </p>
        `;

        document.getElementById("diagnosis-find-professional")
            .addEventListener("click", () => {
                navigateTo("hire");

                const categoryExists = Array.from(categorySelect.options)
                    .some(option => option.value === category);

                categorySelect.value = categoryExists ? category : "Todos";

                renderProfessionals(categorySelect.value, "");
            });
    });


    /* =====================================================
       15. EVENTOS DE TARJETAS Y CARRITO
    ===================================================== */

    document.addEventListener("click", event => {
        const profileButton = event.target.closest("[data-profile-id]");

        if (profileButton) {
            openProfile(profileButton.dataset.profileId);
            return;
        }

        const cartButton = event.target.closest("[data-cart-id]");

        if (cartButton) {
            addToCart(cartButton.dataset.cartId);
            return;
        }

        const removeButton = event.target.closest("[data-remove-cart]");

        if (removeButton) {
            removeFromCart(removeButton.dataset.removeCart);
            return;
        }

        const chatButton = event.target.closest("[data-chat-id]");

        if (chatButton) {
            selectedChatId = Number(chatButton.dataset.chatId);
            openChat(selectedChatId);
            renderChatContacts();
            return;
        }
    });


    /* =====================================================
       16. INICIALIZACIÓN
    ===================================================== */

    renderProfessionals();
    renderCart();
    renderTutorials();

    navigateTo("home");

    console.log("FIX NOW se ha inicializado correctamente.");

});
