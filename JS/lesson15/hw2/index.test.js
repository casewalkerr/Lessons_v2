import {createLogger} from './index.js';

it('should check logger message', () => {
    const logger = createLogger();
    logger.log('User logged in');
    const result = logger.getRecords('log');
    expect(result[0].message).toEqual('User logged in');
});
it(' check type', ()=> {
    const logger = createLogger();
    logger.log('User logged in');
    const result = logger.getRecords();
    expect(result[0].type).toEqual('log');
});
