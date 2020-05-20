import {createCalculator} from './index.js';

it('should check function to return sum', () => {
    const calculator = createCalculator();
    calculator.add(77);
    const  result = calculator.getMemo()
    expect(result).toEqual(77);
})