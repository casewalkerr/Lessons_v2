// создается глобальное лксическое окружение globalE = {}
// globalLE = { outerLE: null}
const message = "lexical Environment is cofusing"
//  globalE = {outerLE: null, message: 'lexical Environment is cofusing'}
const value = 5;
//  globalE = {message: 'lexical Environment is cofusing', value: 5}
const logMessage = () => {
    //  LogLE = {outerLE:globalE}
    const value = 10;
    //  LogLE = {outerLE:globalE, value: 10,}
    const innerFn = () => {
        //  innerLe = {outerLE:LogLE}
        console.log(value);
    };
    //  LogLE = {outerLE:globalE, value: 10,innerFn: f}
    innerFn();
    console.log(message);
};
//  globalE = {outerLE: null, message: 'lexical Environment is cofusing', value: 5, logMessage: f}
logMessage();
// у каждой функции есть свойство scope, во время его обьявления сохраняет в себя ссылку на ту
// область видимости где она была создана т.е на вшеннее лексическое окружение outerLE