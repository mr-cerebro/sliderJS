// variables
var i = 0 // start point
var images = []
var time = 3000

// images list
images[0] = '_img/01.jpg'
images[1] = '_img/02.jpg'
images[2] = '_img/03.jpg'

// change images
function changeImages() {
    document.slider.src = images[i]

    if (i < images.length - 1) {
        i++
    }

    else {
        i = 0
    }

    setTimeout("changeImages()", time)
}

// start slide
window.onload = changeImages