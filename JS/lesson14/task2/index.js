


  const createMessenger = () => {
    let message = 'Just learn it!';
    let sender = 'Gromcode';

    function sendMessage(name){
        
        console.log(`${name}, ${message} Your ${sender}`);
    }
    function setMessage(text) {
        message = text;
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
const messenger2 = createMessenger();
const messenger3 = createMessenger();
messenger1.sendMessage('Bob');
messenger2.setMessage('Good job!');   //метод использующий сообщение 
messenger2.sendMessage('Bob');
messenger3.setSender('Tom');
messenger3.sendMessage('Bob');

