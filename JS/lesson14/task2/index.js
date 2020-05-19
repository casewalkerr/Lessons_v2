// messenger


  const createMessenger = () => {
    let massage = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name){
        
        console.log(`${name}, ${massage}! Your ${sender}`);
    }
    function setMessage(text) {
        massage = text;
    }
    function setSender(text) {
        sender = text;
    }
        return {
        sendMessage,
        setMessage,
        setSender,
    };
};

export default createMessenger;

const messenger1 = createMessenger();
messenger1.sendMessage('Bob');
const messenger2 = createMessenger();
messenger2.setMessage('Good job');   //метод использующий сообщение 
messenger2.sendMessage('Glen');
messenger2.setSender('Tom');