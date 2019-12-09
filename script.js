var circleMover = move(document.querySelector('.circle'));

function move(el) {
    return {
        el: el,
        x: 0,
        move: function (direction, scale) {
            var transform;
            switch (direction) {
                case 'decrease':
                    transform = 'scale(' + (this.x = scale) + ')';
                    break;
                case 'increase':
                    transform = 'scale( '+ (this.x = scale) + 'px, ' + (this.y -= scale) + 'px)';
                    break;
            }
            this.el.style.transform = transform;
        },
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

