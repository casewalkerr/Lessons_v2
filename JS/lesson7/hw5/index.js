const withdraw = (clients, balances, client, amount) => {
    if(balances[clients.indexOf(client)] > amount)
    return (balances[clients.indexOf(client)] - amount)
    return -1;
};

console.log(withdraw(['Ivan', 'Andrey'], [300, 500], 'Andrey', 600));