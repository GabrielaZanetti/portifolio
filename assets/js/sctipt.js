document.addEventListener("DOMContentLoaded", () => {
    const fullName = "Gabriela da Rosa Zanetti";
    const shortName = "Gabii";

    const typingSpeed = 80;
    const deletingSpeed = 50;
    const delayAfterFull = 1200;

    const nameEl = document.getElementById("meu-nome");

    let charIndex = 0;
    let mode = "typingToFull";
    let isHover = false;

    function loop() {
        if (mode === "typingToFull") {
            nameEl.textContent = fullName.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === fullName.length) {
                setTimeout(() => mode = "deletingToShort", delayAfterFull);
            }
        } 
        else if (mode === "deletingToShort") {
            nameEl.textContent = fullName.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === shortName.length) {
                nameEl.textContent = shortName;
                mode = "idle";
            }
        } 
        else if (mode === "expandingOnHover") {
            nameEl.textContent = fullName.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === fullName.length) {
                mode = "hovered";
            }
        } 
        else if (mode === "shrinkingAfterHover") {
            nameEl.textContent = fullName.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === shortName.length) {
                nameEl.textContent = shortName;
                mode = "idle";
            }
        }

        setTimeout(loop, mode.includes("deleting") || mode === "shrinkingAfterHover" ? deletingSpeed : typingSpeed);
    }

    nameEl.addEventListener("mouseenter", () => {
        if (mode === "idle") {
            mode = "expandingOnHover";
            charIndex = shortName.length;
        }
        isHover = true;
    });

    nameEl.addEventListener("mouseleave", () => {
        if (mode === "hovered") {
            mode = "shrinkingAfterHover";
            charIndex = fullName.length;
        }
        isHover = false;
    });

    nameEl.textContent = "";
    loop();
    
    const scrollTrigger = 300;
    const backToTop = document.getElementById('back-to-top');

    function handleBackToTop() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > scrollTrigger) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }

    handleBackToTop();

    window.addEventListener('scroll', handleBackToTop);

    backToTop.addEventListener('click', function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const grid = document.getElementById("lista-projetos");

    fetch("assets/json/listaProjetos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o JSON");
            }
            return response.json();
        })
        .then(projects => {
            projects.forEach(project => {
                const card = document.createElement("div");
                card.classList.add("project-card");

                card.innerHTML = `
                    <div class="card-img"><img src="assets/image/${project.linkImg}"></img></div>

                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.resumo}</p>
                        <div class="item-between">
                            <div class="project-tech">
                                ${project.tecnologias
                                    .map(tech => `<img alt="${tech}" src="assets/image/${tech}.svg"></img>`)
                                    .join(" ")}
                            </div>
                            <a href="https://github.com/GabrielaZanetti/${project.link}" class="link" target="_blank">
                                Ver projeto
                            </a>
                        </div>
                    </div>
                `;

                grid.appendChild(card);
            });
        })
        .catch(error => {
            console.error(error);
        });

    const anoAtual = new Date().getFullYear();
    document.getElementById('ano').textContent = anoAtual;
});
