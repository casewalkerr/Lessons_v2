import {getMinSquaredNumber} from './getMinSquaredNumber';
it ('shold get min squared number', () => {
    const result = getMinSquaredNumber([3,5,-76]);
    expect(result).toEqual(9);
})

it ('if array is empty should return null', () => {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
})

it ('should return null if it is a stirng ', () => {
    const result = getMinSquaredNumber('3,5,-76');
    expect(result).toEqual(null);
})