//Haciendo click a los legos

const btnSpiderman = document.querySelector("#btn-spiderman");
const modal = document.querySelector(".modal");
const btnCerrarModal = document.querySelector(".modal-close");

btnSpiderman.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
});

btnCerrarModal.addEventListener("click", () => {
    modal.classList.remove("visible");
    modal.classList.add("hidden")
});

//En caso de haber más imagenes para el modal hacer evento para cada lego

