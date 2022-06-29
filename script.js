function computerPlay(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    result = Math.floor(Math.random() * (max - min +1) + min);

    switch(result){
        case 1:
            console.log("Rock")
            break;
        case 2:
            console.log("Paper")
            break;
        default:
            console.log("Scissors")       
    }
}
compAnswer = computerPlay(1, 3);

//alert(compAnswer);