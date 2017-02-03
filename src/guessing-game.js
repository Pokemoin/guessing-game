class GuessingGame {
    constructor() {
        this.minNumber = null;
        this.maxNumber = null;
    }

    setRange(min, max) {
      this.minNumber = min;
      this.maxNumber = max;
    }

    guess() {
      return Math.round((this.minNumber + this.maxNumber) / 2);
    }

    lower() {
      this.maxNumber = Math.round((this.minNumber + this.maxNumber) / 2);
    }

    greater() {
      this.minNumber = Math.round((this.minNumber + this.maxNumber) / 2);
    }
}

module.exports = GuessingGame;
