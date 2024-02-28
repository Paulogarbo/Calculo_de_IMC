// object modal
export const Modal = {

  wrapper : document.querySelector(".modal-wrapper"),
  message : document.querySelector(".modal .title span"),
  btnClose : document.querySelector(".modal button.close"),

  // responsável de abrir e fechar o modal
  open() {
    this.wrapper.classList.add("open")
  },
  close() {
    this.wrapper.classList.remove("open")
  }
}

// função de fechar o modal
Modal.btnClose.onclick = () => {
  Modal.close()
}

// função que fecha o modal com o Esc
window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape' || event.key === 'Enter'){
    Modal.close()
  }
}
 