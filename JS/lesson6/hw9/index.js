function withdraw(clients, balances, client, amount){
    for (let i = 0; i < clients.length; i++) {
        if(clients[i] == client){
            if(balances[i] <= amount){
                return -1;
            }
            return balances[i] - amount;
        }
    }
}
console.log(withdraw(['Roma', 'Case'], [555, 444], 'Case', 66));