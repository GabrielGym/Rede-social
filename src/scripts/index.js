

function sugestoesASeguir() {

    for (let i = 0; i < users.length; i++) {
        let idUsers = users[i].id
        let lista = users[i]

        for (let s = 0; s < sugestUsers.length; s++) {

            if (idUsers == sugestUsers[s]) {
                let ulSugestao = document.querySelector(".ul-sugestoes")
                let tagLi = document.createElement("li")

                tagLi.innerHTML = `<img src="${lista.img}" alt="">
                                   <h2>${lista.user}</h2>
                                   <p>${lista.stack}r</p>
                                   <button type="submit" data-button-aside="button" id="buttonsAside" class="button-seguir">Seguir</button>`

                ulSugestao.append(tagLi)
            }
        }
    }
}
sugestoesASeguir()


function ListaDePosts() {

    for (let i = 0; i < users.length; i++) {
        let idUsers = users[i].id
        let lista = users[i]

        for (let p = 0; p < posts.length; p++) {
            let postUser = posts[p]

            if (idUsers === postUser.user) {
                let ulPosts = document.querySelector(".perfils")
                let tagLi = document.createElement("li")
                let tagButton = document.createElement("button")

                tagLi.innerHTML = `<img src="${lista.img}" alt="">
                <h2>${lista.user}</h2>
                <p class="p-profisao">${lista.stack}</p>
                <h1>${postUser.title}</h1>
                <p class="descrition">${postUser.text}</p>
                <span><i class="fa-solid fa-heart"></i>10</span>`

                tagButton.innerText = `Abrir Post`
                tagButton.classList.add("buttonsPosts")
                tagButton.dataset.id = lista.id

                tagLi.append(tagButton)
                ulPosts.append(tagLi)
            }
        }
    }
}
ListaDePosts()


function buttonsHouver() {
    const buttonsAside = document.querySelectorAll("#buttonsAside")
    for (let i = 0; i < buttonsAside.length; i++) {

        buttonsAside[i].addEventListener("click", () => {
            buttonsAside[i].innerText = `Seguindo`
            buttonsAside[i].classList.toggle("button-seguindo")
        })
    }
}
buttonsHouver()


function renderModal() {
    const modal = document.querySelector(".modal-conteiner");
    const buttons = document.querySelectorAll(".buttonsPosts");

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i]

        button.addEventListener("click", () => {
            const modalContent = createModal(button.dataset.id)

            modal.innerHTML = ''
            modal.appendChild(modalContent)
            modal.showModal()
            closeModal()
        })
    }
}
renderModal()

function createModal(id) {
    let modalConteiner = document.createElement("div")
    
    let element = {}
    let elementposts = {}

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === Number(id)) {
            element = users[i]
        }

    }
    
    for (let p = 0; p < posts.length; p++) {
        if (posts[p].user === Number(id)) {
            elementposts = posts[p]
        }
    }

    modalConteiner.innerHTML = `<img src="${element.img}" alt="${element.user}" class="img-modal">
    <h2 class="name-modal">${element.user}</h2>
    <p class="proficao-modal">${element.stack}</p>
    <h1 class="title-modal">${elementposts.title}</h1>
    <p class="descrition-modal">${elementposts.text}</p>
    <button type="submit" class="button-close">X</button>`

    return modalConteiner
}

function closeModal() {
    const modal = document.querySelector(".modal-conteiner")
    const closeBtn = document.querySelector(".button-close")

    closeBtn.addEventListener("click", () => {
        modal.close()
    })
}