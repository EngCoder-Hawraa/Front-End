class Final {
    constructor(correctAnswers, totalAmount) {
        this.scoreElement = document.querySelector(".score");
        this.againBtn = document.querySelector("#again");

        this.render(correctAnswers, totalAmount);
        this.againBtn.addEventListener("click", this.startAgain);
    }

    startAgain = () => {
        location.reload();
    };


    render(correcetAnswer, totalAmount) {
        this.scoreElement.innerHTML = `You answered ${correcetAnswer} out of ${totalAmount} correct`;
    }
}

export default Final;