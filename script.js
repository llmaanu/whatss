const contatos = {
    whatsUsers: [
        {
            id: 2,
            account: "Bernardo Xavier Ribeiro",
            nickname: "BeeR",
            profileImage: "img/contact2.png",
            number: "11966578996",
            background: "#fccc5b",
            contacts: [
                {
                    name: "José Maria da Silva",
                    description: "Developer",
                    image: "img/contact10.png",
                    messages: [
                        { sender: "me", content: "Hello papa, how are you doing today?", time: "14:20" },
                        { sender: "José Maria da Silva", content: "Hi, I'm doing fine. Thanks for asking.", time: "14:25" },
                        { sender: "me", content: "Great to hear that. Do you have any plans for the weekend?", time: "14:30" },
                        { sender: "José Maria da Silva", content: "Not yet. I'm thinking about going to the beach. What about you?", time: "14:35" }
                    ]
                },
                {
                    name: "John Guttemberg",
                    description: "Free",
                    image: "img/contact20.png",
                    messages: [
                        { sender: "me", content: "Hi John, how's it going?", time: "09:00" },
                        { sender: "John Guttemberg", content: "I'm good, thanks. How about you?", time: "09:05" },
                        { sender: "me", content: "I'm doing well. By the way, have you seen the latest designs for the new project?", time: "09:10" },
                        { sender: "John Guttemberg", content: "Yes, I have. They look great!", time: "09:15" }
                    ]
                },
                {
                    name: "George Mikael",
                    description: "Backend Developer",
                    image: "img/contact30.png",
                    messages: [
                        { sender: "me", content: "Hi Mark, how's everything going?", time: "13:00" },
                        { sender: "George Mikael", content: "Everything's going well. How about you?", time: "13:05" },
                        { sender: "me", content: "I'm doing fine. By the way, do you have any updates on the API development?", time: "13:10" },
                        { sender: "George Mikael", content: "Yes, we're making good progress. We should be able to deliver it on schedule.", time: "13:15" }
                    ]
                },
                {
                    name: "Cristian Lee",
                    description: "Software Engineer",
                    image: "img/contact4.png",
                    messages: [
                        { sender: "me", content: "Hey Sarah, como estão as coisas?", time: "10:00" },
                        { sender: "Cristian Lee", content: "Ei! Tudo bem por aqui e contigo?", time: "10:05" },
                        { sender: "me", content: "Estou bem também! O que tem feito ultimamente?", time: "10:10" },
                        { sender: "Cristian Lee", content: "Tenho trabalhado bastante, mas está tudo bem. E você?", time: "10:15" }
                    ]
                }
            ]
        }
    ]
};

const contactList = document.getElementById("contactList");
const chatTitle = document.getElementById("chatTitle");
const chatMessages = document.getElementById("chatMessages");

// Exibir contatos
document.getElementById("listarContatos").addEventListener("click", () => {
    contactList.innerHTML = "";
    contatos.whatsUsers[0].contacts.forEach((contact, index) => {
        let contactElement = document.createElement("div");
        contactElement.classList.add("contact");
        contactElement.innerHTML = `<strong>${contact.name}</strong> <br> ${contact.description}`;
        contactElement.addEventListener("click", () => carregarChat(index));
        contactList.appendChild(contactElement);
    });
});

// Carregar chat do contato selecionado
function carregarChat(index) {
    let contato = contatos.whatsUsers[0].contacts[index];
    chatTitle.innerText = contato.name;
    chatMessages.innerHTML = "";

    contato.messages.forEach(msg => {
        let messageElement = document.createElement("div");
        messageElement.classList.add("message", msg.sender === "me" ? "me" : "them");
        messageElement.innerHTML = `<p><strong>${msg.sender}:</strong> ${msg.content}</p><small>${msg.time}</small>`;
        chatMessages.appendChild(messageElement);
    });
}
