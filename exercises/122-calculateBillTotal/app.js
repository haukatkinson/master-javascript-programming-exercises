function calculateBillTotal(preTaxAndTipAmount) {
    let saleTax = (9.5 / 100 ) * preTaxAndTipAmount
    let tip = (15 / 100) * preTaxAndTipAmount
    return  preTaxAndTipAmount + saleTax + tip

}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9