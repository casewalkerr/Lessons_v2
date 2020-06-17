export const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'));
            }, 500);
        } else
            setTimeout(() => {
                resolve({
                    name: 'John',
                    age: 17,
                    email: `${userId}@example.com`,
                    userId
                })
            }, 1000)
    })
    return request;
}

requestUserData('Roman')
    .catch(error => console.log(error))
//     .then(data => console.log(data))
    // .finaly(data => console.log(data))