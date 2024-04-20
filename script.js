document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.querySelector('.chat-input textarea');
    const sendChatBtn = document.querySelector('#sendBTN');
    const chatbox = document.querySelector('.chatbox');

    // Function to load responses from JSON file


    function loadResponses() {
        return fetch('responses.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error during fetch:', error);
                throw error; // This will propagate the error so that it can be handled by the caller
            });
    }
    
    

    // Function to save chat history to JSON file - simulated with localStorage
    function saveChatHistory(messageData) {
        const currentHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        currentHistory.push(messageData);
        localStorage.setItem('chatHistory', JSON.stringify(currentHistory));
    }

    // Function to create chat message element
    const createChatLi = (message, className) => {
        const chatLi = document.createElement('li');
        chatLi.classList.add('chat', className);
        chatLi.innerHTML = `<p>${message}</p>`;
        return chatLi;
    }

    // Function to find response for a message
    const findResponse = async (userMessage) => {
        try {
            const responses = await loadResponses();
            return responses.find(response => userMessage.toLowerCase().includes(response.keyword.toLowerCase()));
        } catch (error) {
            console.error("Error while fetching responses:", error);
            // Handle the error gracefully, perhaps by returning a default response
            return { answer: "I'm having trouble fetching the responses right now. Please try again later.", bus: '', price: '' };
        }
    };
    

    // Function to handle sending and receiving messages
    const handleChat = async () => {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        const outgoingChatLi = createChatLi(userMessage, 'chat-outgoing');
        chatbox.appendChild(outgoingChatLi);
        chatbox.scrollTop = chatbox.scrollHeight;

        saveChatHistory({ role: 'user', message: userMessage });

        // Clear the input box after sending the message
        chatInput.value = '';

        // Find a response from the JSON data
        const response = await findResponse(userMessage);

        setTimeout(() => {
            // Use the response associated with the keyword, or a default reply
            const reply = response
                ? `${response.answer} You can take the ${response.bus} at $${response.price}.`
                : "Sorry, I don't have information on that topic.";

            const incomingChatLi = createChatLi(reply, 'chat-incoming');
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTop = chatbox.scrollHeight;

            saveChatHistory({ role: 'bot', message: reply });
        }, 600);
    };

    // Event listener for the send button
    sendChatBtn.addEventListener('click', handleChat);
});
