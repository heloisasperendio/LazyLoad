const images = document.querySelectorAll(".image-container img")

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if(!entry.isIntersecting) return //se não estiver mostrando a imagem, retorna

        const image = entry.target 
        
        image.src = image.src.replace("?w=10&", "?w=1000&")

        //
    })
}, {})

images.forEach((image) => {
    
    observer.observe(image)
    
    // console.log(image.src) // vendo que dá pra imprimir a fnte no console

    // image.src = image.src.replace("?w=10", "?w=1000")  alterando resolução
    
})