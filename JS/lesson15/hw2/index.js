const createLogger = () => {
    let memory = [];
    return {
        warn: text => {
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'warn',

            });  
        },
        error: text => {
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'error',
            });
        },
        log: text => {
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'log',
            });
        },
        getRecords: type => {
            if(type === undefined) {
                return memory;
            }
            else {
                return   memory.filter(el => el.type === type).sort((a,b) => b.dateTime - a.dateTime);     
            }

        }
            
        
     }
} 
// export {createLogger}
const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('user logged out');
logger.error('Unexpected error on the site');
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords('error'));
