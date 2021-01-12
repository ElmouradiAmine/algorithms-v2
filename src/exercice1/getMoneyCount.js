// Exercice 1: Rends l'argent
const getMoneyCount = (moneyList, amount) => {
    if (amount < 0) return -1;

    let index = 0;
    let counter = 0;
    let currentAmount = amount;

    while (currentAmount > 0 && index < moneyList.length){
        if (currentAmount >= moneyList[index]) {
            currentAmount = currentAmount % moneyList[index];
            counter++;
        }
        index++;
    }

    if (currentAmount === 0 ) return counter;
    return -1;

}


module.exports = getMoneyCount;