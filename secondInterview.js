/**
 * Банкомат.
 *
 * В банкомате есть купюры - 50, 100, 500, 1000, 5000 руб.
 * Есть ограничение на количество каждой из купюр (limits), его нужно держать в актуальном состоянии
 * Нужно вернуть купюры и их количество, которыми можно выдать запрашиваемую сумму,
 * в виде строки указанного формата. Начинать с самой крупной.
 * Если выдать запрашиваемую сумму не получается, вернуть ошибку.
*/

const limits = new Map([[5000, 5], [1000, 5], [500, 5], [100, 5], [50, 5]]); // нужно выбрать любой удобный формат

function atm(sum, limits) {
    // делаем свою копию мапы, чтобы спокойно модифицировать её внутри
    // можно этого не делать, если предполагается только один вызов функции
    let limitsCopy = new Map(limits);
    
    // обработка неправильных входных данных
    if (sum % 50 !== 0) return 'Error: Incorrect value'

    // обработка случая нехватки денег в банкомате
    let moneySum = 0;
    for (let [banknote, count] of limitsCopy) {
        moneySum += Number(banknote) * count
    }
    if (sum > moneySum) return 'Error: Not enough money'
    
    // теперь, когда денег хватает и введена корректная сумма, проверям можем ли выдать доступными купюрами
    // делаем отдельную мапу, в которой будем записывать сколько купюр израсходовали
    let resultMap = new Map(limitsCopy);
    for (let banknote of resultMap.keys()) {
        resultMap.set(banknote, 0)
    }
    
    for (let banknote of limitsCopy.keys()) {
        while (sum >= banknote && limitsCopy.get(banknote) > 0) {
            sum -= banknote;
            limitsCopy.set(banknote, limitsCopy.get(banknote) - 1);
            resultMap.set(banknote, resultMap.get(banknote) + 1);
        }
    }

    // если sum === 0, значит мы можем выдать сумму
    
    if (sum === 0) {
        // генерируем выходную строку
        let result = '';
        for (let [banknote, count] of resultMap.entries()) {
            if (count !== 0) result += `${count + 'x' + banknote + ' '}`;
        }
        return result
    } else return 'Error: Unable to give money'
}

console.log(atm(1250, limits)) // '1x1000 2x100 1x50'
console.log(atm(1000000, limits)) // 'Error: Not enough money'
console.log(atm(2400, limits)) // '2x1000 4x100'
console.log(atm(6512, limits)) // 'Error: Incorrect value'