/* class Scroll {
    constructor(obj){
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el);            
        } else if (obj.el instanceof HTMLElement) {   // instanceof - проверяет наличие класса в предках
            this.el = obj.el
        }

    }
}

const myScroll = new Scroll({
    el: document.querySelector(obj.el)
})
console.log(myScroll); */

class Scroll {
    constructor(obj){
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }
        this.el.style.position = "fixed"
        this.top = obj.top
        this.el.style.top = obj.top + "px"
        this.unit = obj.unit
        window.addEventListener('scroll',() => {this.scroll()})
    }
    scroll(){
        // console.log(window.pageYOffset);
        if (this.top - window.pageYOffset > 0) {
            this.el.style.top = this.top - window.pageYOffset + 'px'
        } else {
            this.el.style.top = 0 + 'px'
        }
    }
    scrollNumber(){
        if (this.unit == "px") {
            return this.top >= 0 ? this.top : 0;
        }
    }
}

const myScroll = new Scroll({
    el: document.querySelector('.header__nav'),
    top: 1000,
    unit: "px"
})




// ============================ дз ============================

class Move {
    constructor(obj){
        if (typeof obj.el == "string") {
            this.el = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }
        if (typeof obj.parent == "string") {
            this.parent = document.querySelector(obj.parent);
        } else if (obj.parent instanceof HTMLElement) {
            this.parent = obj.parent
        }
        this.el.addEventListener('mouseover',() => {this.suddenMove()})
    }
    suddenMove(){
        const width = this.parent.clientWidth - this.el.clientWidth
        const height = this.parent.clientHeight - this.el.clientHeight
        const mathLeft = Math.floor(Math.random() * width - 1)
        const mathTop = Math.floor(Math.random() * height - 1)
        this.el.style.marginLeft = mathLeft + 'px'
        this.el.style.marginTop = mathTop + 'px'
    }
}

const myMove = new Move({
    el: '.header__content',
    parent: '.header'
})
