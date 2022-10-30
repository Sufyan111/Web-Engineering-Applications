const Num = 966500;
console.log("toString Methods -->", typeof Num.toString());

const Num2 = 966.5888;
console.log("toExponential Methods -->", Num2.toExponential(2));

console.log("toFixed Methods -->", Num2.toFixed(2));

console.log("toPrecision Methods -->", Num2.toPrecision(3));

console.log("ValueOf Methods -->", Num.valueOf());

const Num3 = "9667";
console.log("Number Methods -->", typeof Number(Num3));
console.log("ParseInt Methods -->", typeof parseInt(Num3));
console.log("ParseFloat Methods -->", typeof parseFloat(Num3));

console.log(Number.MAX_VALUE);
