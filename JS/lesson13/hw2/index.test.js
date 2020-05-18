import {calc} from './calculator';

it('should check + ', () => {
    const result = calc(`2 + 2`);
    expect(result).toEqual(`2 + 2 = 4`);
})
it('should check -', () => {
    const result = calc(`2 - 2`);
    expect(result).toEqual(`2 - 2 = 0`);
})
it('should check *', () => {
    const result = calc(`2 * 2`);
    expect(result).toEqual(`2 * 2 = 4`);
})
it('should check /', () => {
    const result = calc(`2 / 2`);
    expect(result).toEqual(`2 / 2 = 1`);
})
it('should check arg if it isnt a string', () =>{
    const result = calc(2);
    expect(result).toEqual(null);
})