var circleMover = move(document.querySelector('.circle'));

function move(el) {
    return {
        el: el,
        x: 0,
        scale(value) {
            transform = 'scale(' + value + ')';
            this.el.style.transform = transform;
        }
    }
}

setTimeout(function () {
    circleMover.scale(2) 
    setTimeout(function() {
        circleMover.scale(1) 
    }, 500)
}, 500)

