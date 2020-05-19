import {filterNames, arrAverage, transaction, user} from './index';

it('should return array', () => {
    const result = filterNames(['asbane', 'sssane', 'vaile', 'carane', 'void'], 'ne');
    const checkAr = Array.isArray(result)
    expect(checkAr).toEqual(true);
})
it('should return array with length > 5 ', () => {
    const result = filterNames(['asbane', 'sssane', 'vaile', 'carane', 'void'], 'ne');
    expect(result).toEqual(['asbane', 'sssane', 'carane'])
})
it('should check every el ', () => {
    const result = filterNames(['asbane', 'sssane', 'vaile', 'carane', 'void'], 'ne')
    const checkStr = result.every(el => typeof el == 'string')
    expect(checkStr).toEqual(true);
})


it('should return null if it is not array', () => {
    const result = arrAverage(4, 5, 6, 76, 34);
    expect(result).toEqual(null);
})
it('should return average', () => {
    const result = arrAverage([4, 5, 6, 76, 34]);
    expect(result).toEqual(25);
})
it('should return number', () => {
    const result = arrAverage([4, 5, 6, 76, 34]);
    const checkIsNumber = typeof result === 'number';
    expect(checkIsNumber).toEqual(true);
})





it('should check transaction', () => {
    const result = transaction.currency;
    expect(result).toEqual('USD');
})
it('should check value', () => {
    const result = transaction.value;
    expect(result).toEqual(170);
})
it('should check country', () => {
    const result = transaction.agent.country;
    expect(result).toEqual('Ukraine');
})
it('should check country', () => {
    const result = transaction.agent['country'];
    expect(result).toEqual('Ukraine');
})
it('should check operation time', () => {
    const result = transaction['operation time'];
    expect(result).toEqual(1584029990001);
})


it('should check user name', () => {
    const result = user.name;
    expect(result).toEqual('Tom');
})
it('should assign property hobby to user', () => {
    const result = user.hobby;
    expect(result).toEqual('football');
})
it('should assign property [favorite music] to user and check', () => {
    const result = user['favorite music'];
    expect(result).toEqual('rock');
})
it('should assign property address.country to user and check', () => {
    const result = user.address.country;
    expect(result).toEqual('Ukraine');
})

