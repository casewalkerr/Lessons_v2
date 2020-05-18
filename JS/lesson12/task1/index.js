// input: str;
// output: str;
// 1 '1 + 2' => '1 + 2 = 3'
const calc = expresion => {
    const [a, operator, b] = expresion.split(' ');
    let result;
    switch (operator){
        case '+':
            result =  Number(a) + Number(b);
            break;
         case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    return `${expresion}  =  ${result}`;
}
console.log(calc('34 / 2'))