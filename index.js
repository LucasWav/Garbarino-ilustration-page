const leftButton = document.getElementById('left-button')
const rightButton = document.getElementById('right-button')
const buyButton = document.getElementById('buy-button')
let interactiveSliderContainer = document.getElementById("interactive-slider-container")
let interactiveSliderContainerII = document.getElementById("interactive-slider-container-2")


class Tvs{
    constructor(model, picture, description, price){
        this.model = model
        this.picture = picture
        this.description = description
        this.price = price
    }
}

let philips6800 = new Tvs ('Smart Tv Philips 6800 Series 43pfd6825/77 Led Full HD 43 110v/240v', './assets/tv-assets/smart-tv-philips-6800-series-43pfd6825-77-led-full-hd-43-110v-240v.png', 'Smart Tv Kanji 60 pulgadas 4k','$109.999')

let samsungT5300 = new Tvs ('Televisor Samsung Smart Tv Full HD T5300 2020', './assets/tv-assets/televisor-samsung-smart-tv-43-full-hd-t5300-2020.png', 'Smart Tv Samsung Full HD 43 pulgadas', '$119.999')

let bghB3219k5 = new Tvs ('Televisor Smart Tv BGH B3219k5 Led HD 32 220v', './assets/tv-assets/televisor-smart-tv-bgh-b3219k5-led-hd-32-220v.png', 'Smart Tv BGH HD 32 pulgadas' ,'$49.999')

let samsungSeries7 = new Tvs('Smart Tv Samsung Series 7 UN50AU7000GCZB Led 4K 50" 220v', './assets/tv-assets/smart-tv-samsung-series-7-un50au7000gczb-led-4k-50--220v---240v.png', 'Smart Tv Samsung 4K 50 pulgadas','$127.999')

let kanjiTcl = new Tvs('Smart TV Led TCL L55P735-F Google TV 55" 4K ULTRA HD', './assets/tv-assets/smart-tv-kanji-60--led-qhd-4k-9809b-13002.png', 'Smart Tv TCL 4K 55 pulgadas','$149.999')

let televisores = []
let opcionTelevisores

televisores.push(philips6800, samsungT5300, bghB3219k5, samsungSeries7, kanjiTcl)

function iniciarWebPage() {
    televisores.forEach((Tvs) => {
        opcionTelevisores = `
        <div class="interactive_slider--promotion-text">
            <h2>Ofertas en Smart TV: hasta 60% OFF</h2>
            <a href="#">ver más</a>  
        </div>  
        <div class="interactive_slider--slide-container">
            <picture class="interactive_slider--picture-ahora-12">
                <img src="./assets/tv-assets/ahora-12-y-18.jfif" alt="ahora 12">
            </picture>
            <picture class="interactive_slider--picture-container">
                <a href=""><img src=${Tvs.picture} 
                alt=${Tvs.description} ></a>
            </picture>
            <span class="interactive_slider--tv-name">
                ${Tvs.model}
            </span> 
            <span class="interactive_slider--price">
                ${Tvs.price}
            </span>
            <button id="buy-button" class="interactive_slider--buy-button" >
                ¡COMPRALO AHORA!
            </button>
        </div>
        <div class="interactive_slider--move-buttons">
            <button id="left-button" class="interactive_slider--left-button">
                &lsaquo;
            </button>
            <button id="right-button" class="interactive_slider--right-button">
                   &rsaquo;
            </button>
        </div>
        `
        interactiveSliderContainer.innerHTML = opcionTelevisores
        interactiveSliderContainerII.innerHTML = opcionTelevisores

    })
}

window.addEventListener('load', iniciarWebPage)