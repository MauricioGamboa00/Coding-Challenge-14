// Task 2 Adding Support Tickets Dynamically

function createSupportTicket(customerName, issueDisc, priorityLevel){

    const ticketContainer = document.getElementById('ticketContainer'); // Use get elementbyId to select the ticket container

    const csTicket = document.createElement('div'); // Creating ticket container
    csTicket.setAttribute('class', 'supportTicket'); // Setting attributes for customer support tickets
    

    const heading = document.createElement('h3'); // Creating a heading as the customer name
    heading.textContent = customerName;

    const paragraph = document.createElement('p'); // Creating a paragraph as the issue description
    paragraph.textContent =issueDisc;

    const label = document.createElement('label'); // Creating a as the priority level of the ticket
    label.textContent = `Priority Level: ${priorityLevel}`;

    const resolveButton = document.createElement('button') // Creating a resolve button
    resolveButton.textContent = 'Resolve'

    ticketContainer.appendChild(csTicket) // Appending ticket div to ticket container



    csTicket.appendChild(heading); // Appending the heading to ticket div
    csTicket.appendChild(paragraph); // Appending the paragraph to ticket div
    csTicket.appendChild(label); // Appending the label to ticket div
    csTicket.appendChild(resolveButton); // Appending the resolve button to ticket div
};

createSupportTicket("Rick Owens", "Shoes never arrived.", "High"); // Created a new support ticket
createSupportTicket("Steve Jobs", "Phone is occasionally lagging.", "Low"); // Created a new support ticket
createSupportTicket("Keven Hart", "Pants sent were to large.", "high"); // Created a new support ticket
