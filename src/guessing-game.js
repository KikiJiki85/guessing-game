class GuessingGame {
    constructor() {}

    arr = [];
    left = 0; 
    right = 0;
    mid = 0;

    setRange(min, max) {
        for(let i = min; i <= max; i++) {
            this.arr.push(i);
        }
        this.right = this.arr.length - 1; 
    }

    guess() {     
        this.mid = Math.round((this.right + this.left) / 2);
        return this.mid;
    }

    lower() {
        this.right = this.mid;
        return this.guess();
    }

    greater() {
        this.left = this.mid;
        return this.guess();
    }
}

module.exports = GuessingGame;
