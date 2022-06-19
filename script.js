class Writing {
    constructor(item) {
        if (typeof item.el == 'string') {
            this.el = document.querySelector(item.el);
        }
        this.text = this.el.innerHTML
        this.fullText = ''
        this.typing()
        this.speed = item.speed
    }
    typing(i = 0) {
        this.fullText += this.text[i]
        this.el.innerHTML = this.fullText
        if (i < this.text.length - 1) {
            setTimeout(() => {
                i++
                this.typing(i)
            }, this.speed);
        }
    }
}
const write = new Writing({
    el: '.header__content h1',
    speed: 100



})
const text = new Writing({
    el: '.info__scroll-desc',
    speed: 50

})

class Hover {
    constructor(option) {
        if (typeof option.el == 'string') {
            this.el = document.querySelector(option.el);
        }
        this.el.addEventListener('mouseover', () => this.move())

    }
    random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    }
    move() {
        this.el.style.marginTop = this.random(0, innerHeight - this.el.clientHeight - 55) + 'px'
        this.el.style.marginLeft = this.random(0, innerWidth - this.el.clientWidth) + 'px'
    }
}
const hover = new Hover({
    el: '.header__content'
})


class Scroll {
    constructor(set) {
        if (typeof set.el == 'string') {
            this.el = document.querySelector(set.el);
        }
        this.el.style.position = 'fixed'
        this.top = set.top
        this.el.style.top = this.check()
        window.addEventListener('scroll', () => this.check())
        window.addEventListener('resize', () => this.check())
    }
    check() {
        this.window = this.scrollNum()
        if (this.window - pageYOffset > 0) {
            this.el.style.top = this.window - pageYOffset + "px"
        } else {
            this.el.style.top = 0
        }
        if (this.el.style.top == '0px') {
            this.el.style.background = '#00838F'
        }
    }
    scrollNum() {
        return (window.innerHeight / 100 * this.top) - this.el.clientHeight
    }
}

const scrool = new Scroll({
    el: '.header__nav',
    top: 100
})



class Open {
    constructor(oyna) {
        this.button = document.querySelector(oyna.el);
        this.closer = document.querySelector(oyna.close);
        this.menyu = document.querySelector(oyna.menyu);

        this.button.addEventListener('click', () => {
            this.menyu.classList.toggle('active')
            if (this.button.innerHTML == "open") {
                this.button.innerHTML = "close"
            } else if (this.button.innerHTML == "close") {
                this.button.innerHTML = "open"
            }
        })
        this.closer.addEventListener('click', () => {
            this.menyu.classList.remove('active')
        })
        // this.button.addEventListener('click', () => {
        //     this.menyu.style.top = '0'
        // })
        // this.closer.addEventListener('click', () => {
        //     this.menyu.style.top = '-1200px'
        // })
    }


}

const open = new Open({
    el: '.header__nav button ',
    close: '.header__menu-close',
    menyu: '.header__menu'

})
