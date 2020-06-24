const baseUrl = 'https://5ef34b8f25da2f0016228df0.mockapi.io/api/v1/users';
const getUsersList = () => {
    return fetch(baseUrl).then(responce => responce.json())
}
const getUserById = userId => {
    return fetch(`${baseUrl}/${userId}`).then(responce => responce.json())
}
const createUser = Obj => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Obj),
    })
}

const updateUser = (userId, Obj) => {
    return fetch(`${userId}/${Obj}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Obj),
    })
}

const deleteUser = userId => {
    fetch(`${baseUrl}/${userId}`, {
        method: "DELETE",
    })
}
export { getUserById, getUsersList, updateUser, deleteUser }

