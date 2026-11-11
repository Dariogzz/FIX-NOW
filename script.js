
// ==========================================
// FIXNOW - SISTEMA PRINCIPAL
// Navegación, pantallas y diagnóstico
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    // ======================================
    // 1. MENÚ RESPONSIVE
    // ======================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const abierto = navLinks.classList.toggle("show");

            menuToggle.setAttribute("aria-expanded", abierto);
            menuToggle.innerHTML = abierto
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // ======================================
    // 2. ESTILOS DE LAS PANTALLAS
    // ======================================

    const estilos = document.createElement("style");

    estilos.textContent = `
        .fix-screen {
            position: fixed;
            inset: 0;
            z-index: 9999;
            overflow-y: auto;
            background: #081b2a;
            color: #f4f7fa;
            padding: 35px 6%;
            animation: fixAppear .3s ease;
        }

        @keyframes fixAppear {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .fix-screen-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            border-bottom: 1px solid #263c4d;
            padding-bottom: 22px;
            margin-bottom: 55px;
        }

        .fix-back {
            border: 1px solid #405467;
            color: white;
            background: #142c3e;
            padding: 12px 20px;
            border-radius: 9px;
            cursor: pointer;
            font-weight: 700;
        }

        .fix-back:hover {
            background: #ff9d18;
            color: #081b2a;
        }

        .fix-screen h1 {
            font-size: clamp(30px, 5vw, 52px);
            margin: 15px 0;
            color: white;
        }

        .fix-screen h1 span {
            color: #ff9d18;
        }

        .fix-screen-description {
            color: #aebdca;
            max-width: 650px;
            line-height: 1.8;
            margin-bottom: 35px;
        }

        .fix-kicker {
            color: #ff9d18;
            letter-spacing: 3px;
            font-size: 12px;
            font-weight: 800;
        }

        .fix-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 22px;
            margin-top: 35px;
        }

        .fix-card {
            background: #11283a;
            border: 1px solid #263e51;
            border-radius: 15px;
            padding: 25px;
            transition: .25s;
        }

        .fix-card:hover {
            transform: translateY(-5px);
            border-color: #ff9d18;
        }

        .fix-card i {
            color: #ff9d18;
            font-size: 25px;
            margin-bottom: 18px;
        }

        .fix-card h3 {
            color: white;
            margin-bottom: 12px;
        }

        .fix-card p {
            color: #aebdca;
            line-height: 1.7;
            font-size: 14px;
        }

        .fix-action {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 18px;
            border: none;
            border-radius: 8px;
            background: #ff9d18;
            color: #081b2a;
            font-weight: 800;
            text-decoration: none;
            cursor: pointer;
        }

        .fix-action:hover {
            background: #ffb347;
        }

        .fix-form {
            display: grid;
            gap: 17px;
            max-width: 650px;
            margin-top: 30px;
        }

        .fix-form label {
            color: #dce5ec;
            font-size: 13px;
            font-weight: 700;
        }

        .fix-form input,
        .fix-form textarea,
        .fix-form select {
            width: 100%;
            margin-top: 8px;
            padding: 14px;
            background: #142c3e;
            border: 1px solid #405467;
            border-radius: 8px;
            color: white;
            font: inherit;
        }

        .fix-form textarea {
            min-height: 110px;
            resize: vertical;
        }

        .fix-message {
            padding: 18px;
            margin-top: 25px;
            background: #142c3e;
            border-left: 4px solid #ff9d18;
            border-radius: 8px;
            color: #e5edf4;
            line-height: 1.7;
        }

        @media(max-width: 600px) {
            .fix-screen {
                padding: 22px 5%;
            }

            .fix-screen-header {
                margin-bottom: 35px;
            }

            .fix-back {
                padding: 10px 12px;
                font-size: 12px;
            }
        }
    `;

    document.head.appendChild(estilos);

    // ======================================
    // 3. CREAR PANTALLAS INDEPENDIENTES
    // ======================================

    const pantalla = document.createElement("div");
    pantalla.className = "fix-screen";
    pantalla.hidden = true;
    body.appendChild(pantalla);

    function regresarInicio() {
        pantalla.hidden = true;
        pantalla.innerHTML = "";
        body.style.overflow = "";

        history.replaceState(null, "", "#inicio");

        document.getElementById("inicio")
            ?.scrollIntoView({ behavior: "smooth" });
    }

    function abrirPantalla(contenido) {
        pantalla.innerHTML = `
            <div class="fix-screen-header">
                <a href="#inicio" class="logo" style="text-decoration:none;color:white">
                    <span style="font-size:25px;font-weight:900">
                        FIX<span style="color:#ff9d18">NOW</span>
                    </span>
                </a>

                <button class="fix-back" id="fixBack">
                    <i class="fa-solid fa-arrow-left"></i>
                    Volver al inicio
                </button>
            </div>

            ${contenido}
        `;

        pantalla.hidden = false;
        body.style.overflow = "hidden";

        document.getElementById("fixBack")
            .addEventListener("click", regresarInicio);

        pantalla.scrollTop = 0;
    }

    // ======================================
    // 4. PANTALLA APRENDE
    // ======================================

    function abrirAprende() {
        abrirPantalla(`
            <span class="fix-kicker">01 — APRENDE</span>

            <h1>Conocimiento que se convierte en
                <span>soluciones.</span>
            </h1>

            <p class="fix-screen-description">
                Explora tutoriales, aprende nuevos oficios y descubre
                cómo realizar reparaciones paso a paso.
            </p>

            <div class="fix-grid">

                <article class="fix-card">
                    <i class="fa-solid fa-faucet"></i>
                    <h3>Plomería básica</h3>
                    <p>Aprende a reparar fugas, cambiar llaves y dar mantenimiento.</p>
                    <a class="fix-action" target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.youtube.com/results?search_query=tutorial+plomeria+basica">
                       Ver tutoriales
                    </a>
                </article>

                <article class="fix-card">
                    <i class="fa-solid fa-bolt"></i>
                    <h3>Electricidad</h3>
                    <p>Conoce los fundamentos de las instalaciones eléctricas.</p>
                    <a class="fix-action" target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.youtube.com/results?search_query=curso+electricidad+basica">
                       Ver tutoriales
                    </a>
                </article>

                <article class="fix-card">
                    <i class="fa-solid fa-hammer"></i>
                    <h3>Carpintería</h3>
                    <p>Descubre técnicas de reparación y trabajo en madera.</p>
                    <a class="fix-action" target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.youtube.com/results?search_query=carpinteria+basica+tutorial">
                       Ver tutoriales
                    </a>
                </article>

                <article class="fix-card">
                    <i class="fa-solid fa-paint-roller"></i>
                    <h3>Pintura</h3>
                    <p>Aprende preparación de superficies y técnicas de pintura.</p>
                    <a class="fix-action" target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.youtube.com/results?search_query=curso+pintura+paredes">
                       Ver tutoriales
                    </a>
                </article>

            </div>

            <div class="fix-message">
                <strong>Consejo de seguridad:</strong>
                Nunca realices trabajos eléctricos con instalaciones energizadas.
                Para reparaciones de riesgo, contacta a un profesional.
            </div>
        `);
    }

    // ======================================
    // 5. PANTALLA CONTRATA
    // ======================================

    const profesionales = [
        {
            nombre: "Carlos Méndez",
            oficio: "Plomero",
            experiencia: "8 años de experiencia",
            precio: "Desde $250 MXN",
            icono: "fa-faucet"
        },
        {
            nombre: "Héctor Ramírez",
            oficio: "Carpintero",
            experiencia: "6 años de experiencia",
            precio: "Desde $280 MXN",
            icono: "fa-hammer"
        },
        {
            nombre: "Lucía Torres",
            oficio: "Electricista",
            experiencia: "5 años de experiencia",
            precio: "Desde $300 MXN",
            icono: "fa-bolt"
        }
    ];

    function abrirContrata() {
        const tarjetas = profesionales.map((persona, index) => `
            <article class="fix-card">
                <i class="fa-solid ${persona.icono}"></i>
                <h3>${persona.nombre}</h3>
                <p><strong>${persona.oficio}</strong></p>
                <p>${persona.experiencia}</p>
                <p>${persona.precio}</p>

                <button class="fix-action contactar"
                    data-profesional="${index}">
                    <i class="fa-solid fa-comments"></i>
                    Contactar
                </button>
            </article>
        `).join("");

        abrirPantalla(`
            <span class="fix-kicker">02 — CONTRATA</span>

            <h1>Encuentra al profesional
                <span>adecuado.</span>
            </h1>

            <p class="fix-screen-description">
                Conoce especialistas y descubre quién puede ayudarte
                con las necesidades de tu hogar.
            </p>

            <div class="fix-grid">${tarjetas}</div>

            <div class="fix-message">
                Los perfiles mostrados son demostrativos.
                Los profesionales reales deberán registrarse y verificarse
                antes de ofrecer sus servicios.
            </div>
        `);

        pantalla.querySelectorAll(".contactar").forEach(boton => {
            boton.addEventListener("click", () => {
                const persona = profesionales[boton.dataset.profesional];

                abrirPantalla(`
                    <span class="fix-kicker">CONTACTO</span>
                    <h1>Contactar a <span>${persona.nombre}</span></h1>

                    <p class="fix-screen-description">
                        ${persona.oficio} · ${persona.experiencia}
                    </p>

                    <form class="fix-form" id="chatDemo">
                        <label>
                            Tu nombre
                            <input required placeholder="Escribe tu nombre">
                        </label>

                        <label>
                            Describe tu problema
                            <textarea required placeholder="Cuéntale qué necesitas reparar..."></textarea>
                        </label>

                        <button class="fix-action" type="submit">
                            Enviar mensaje
                        </button>
                    </form>

                    <div id="chatRespuesta"></div>

                    <div class="fix-message">
                        Esta es una demostración de contacto.
                        Para recibir mensajes reales entre usuarios
                        conectaremos posteriormente una base de datos.
                    </div>
                `);

                document.getElementById("chatDemo")
                    .addEventListener("submit", event => {
                        event.preventDefault();

                        document.getElementById("chatRespuesta").innerHTML = `
                            <div class="fix-message">
                                ¡Mensaje preparado correctamente!
                                El chat real estará disponible cuando
                                conectemos el sistema de usuarios.
                            </div>
                        `;
                    });
            });
        });
    }

    // ======================================
    // 6. PANTALLA TRABAJA
    // ======================================

    function abrirTrabaja() {
        abrirPantalla(`
            <span class="fix-kicker">03 — TRABAJA</span>

            <h1>Convierte tus habilidades en
                <span>oportunidades.</span>
            </h1>

            <p class="fix-screen-description">
                Registra tus datos y presenta los servicios que puedes ofrecer.
            </p>

            <form class="fix-form" id="registroProfesional">

                <label>
                    Nombre completo
                    <input name="nombre" required placeholder="Tu nombre">
                </label>

                <label>
                    Oficio o especialidad
                    <select name="oficio" required>
                        <option value="">Selecciona tu especialidad</option>
                        <option>Plomería</option>
                        <option>Electricidad</option>
                        <option>Carpintería</option>
                        <option>Pintura</option>
                        <option>Mecánica</option>
                        <option>Reparaciones generales</option>
                    </select>
                </label>

                <label>
                    Años de experiencia
                    <input name="experiencia" type="number" min="0" required>
                </label>

                <label>
                    Descripción de tus servicios
                    <textarea name="descripcion" required
                        placeholder="Describe qué trabajos realizas..."></textarea>
                </label>

                <label>
                    Teléfono de contacto
                    <input name="telefono" type="tel" required
                        placeholder="Tu número de contacto">
                </label>

                <button class="fix-action" type="submit">
                    Enviar registro
                    <i class="fa-solid fa-arrow-right"></i>
                </button>

            </form>

            <div id="registroRespuesta"></div>
        `);

        document.getElementById("registroProfesional")
            .addEventListener("submit", event => {
                event.preventDefault();

                const datos = new FormData(event.target);

                document.getElementById("registroRespuesta").innerHTML = `
                    <div class="fix-message">
                        <strong>¡Registro de demostración completado!</strong><br>
                        Gracias, ${datos.get("nombre")}.
                        Tu solicitud está preparada.
                        Para publicar tu perfil realmente necesitaremos
                        conectar una base de datos.
                    </div>
                `;

                event.target.reset();
            });
    }

    // ======================================
    // 7. CONECTAR LOS BOTONES
    // ======================================

    document.querySelectorAll('a[href="#tutoriales"]').forEach(boton => {
        boton.addEventListener("click", event => {
            event.preventDefault();
            abrirAprende();
        });
    });

    document.querySelectorAll('a[href="#profesionales"]').forEach(boton => {
        boton.addEventListener("click", event => {
            event.preventDefault();
            abrirContrata();
        });
    });

    document.querySelectorAll('.work-content a[href="#registro"]').forEach(boton => {
        boton.addEventListener("click", event => {
            event.preventDefault();
            abrirTrabaja();
        });
    });

    // ======================================
    // 8. DIAGNÓSTICO DE PROBLEMAS
    // ======================================

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (searchForm && searchInput) {

        function diagnosticar(problema) {

            const texto = problema.toLowerCase();

            let resultado = {
                titulo: "Necesitamos más información",
                descripcion: "Describe con más detalle qué sucede en tu hogar.",
                oficio: "Mantenimiento general",
                icono: "fa-house"
            };

            if (/fuga|agua|llave|tuber|lavabo|grifo|drenaje/.test(texto)) {
                resultado = {
                    titulo: "Posible problema de plomería",
                    descripcion: "Podría tratarse de una fuga, una conexión floja o una obstrucción. Cierra la llave de paso si existe una fuga importante.",
                    oficio: "Plomería",
                    icono: "fa-faucet"
                };
            } else if (/luz|eléct|electr|cable|apagador|contacto|enchufe/.test(texto)) {
                resultado = {
                    titulo: "Posible problema eléctrico",
                    descripcion: "Podría existir una falla en el circuito o en una conexión. Desconecta los equipos afectados y no manipules cables energizados.",
                    oficio: "Electricidad",
                    icono: "fa-bolt"
                };
            } else if (/madera|puerta|mueble|repisa|cajón/.test(texto)) {
                resultado = {
                    titulo: "Posible trabajo de carpintería",
                    descripcion: "Puede requerir ajustes, fijaciones o reparación de alguna pieza.",
                    oficio: "Carpintería",
                    icono: "fa-hammer"
                };
            } else if (/pintura|pared|pintar|mancha/.test(texto)) {
                resultado = {
                    titulo: "Posible trabajo de pintura",
                    descripcion: "Será necesario revisar la superficie, preparar la pared y elegir el acabado adecuado.",
                    oficio: "Pintura",
                    icono: "fa-paint-roller"
                };
            }

            abrirPantalla(`
                <span class="fix-kicker">DIAGNÓSTICO FIXNOW</span>

                <h1>${resultado.titulo}</h1>

                <p class="fix-screen-description">${resultado.descripcion}</p>

                <div class="fix-card">
                    <i class="fa-solid ${resultado.icono}"></i>
                    <h3>Especialidad recomendada</h3>
                    <p>${resultado.oficio}</p>
                </div>

                <div class="fix-message">
                    <strong>Importante:</strong> esta herramienta ofrece
                    orientación inicial, no un diagnóstico técnico definitivo.
                    Si existe riesgo eléctrico, fuga importante o peligro
                    estructural, solicita ayuda profesional.
                </div>

                <button class="fix-action" id="buscarEspecialista">
                    Buscar especialista
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            `);

            document.getElementById("buscarEspecialista")
                .addEventListener("click", abrirContrata);
        }

        searchForm.addEventListener("submit", event => {
            event.preventDefault();

            const problema = searchInput.value.trim();

            if (!problema) {
                alert("Por favor, describe el problema de tu hogar.");
                searchInput.focus();
                return;
            }

            diagnosticar(problema);
        });

        document.querySelectorAll(".suggestion").forEach(boton => {
            boton.addEventListener("click", () => {
                searchInput.value = boton.textContent.trim();
                searchForm.requestSubmit();
            });
        });
    }

    console.log("FIXNOW: sistema inicial cargado correctamente.");

});
