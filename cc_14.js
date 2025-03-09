// Task 2 Adding Support Tickets Dynamically

function createSupportTicket(customerName, issueDisc, priorityLevel){

    const ticketContainer = document.getElementById('ticketContainer'); // Use get elementbyId to select the ticket container

    const csTicket = document.createElement('div'); // Creating ticket container
    csTicket.setAttribute('class', 'supportTicket'); // Setting attributes for customer support tickets
    
    // Task 3 Modifications

    if(priorityLevel === 'High' ){
        csTicket.classList.add('HighPriority')
    }

    const heading = document.createElement('h3'); // Creating a heading as the customer name
    heading.textContent = customerName;

    const paragraph = document.createElement('p'); // Creating a paragraph as the issue description
    paragraph.textContent =issueDisc;

    const label = document.createElement('label'); // Creating a as the priority level of the ticket
    label.textContent = `Priority Level: ${priorityLevel}`;

    const resolveButton = document.createElement('button') // Creating a resolve button
    resolveButton.textContent = 'Resolve'

    // Task 4 Modifications

    resolveButton.addEventListener('click', (event) => {
        console.log(heading.textContent,"Support Ticket Resolved")
        csTicket.remove(); // Added an Event listener when to log a message to the console when resolve is clicked and remove the ticket
        
        event.stopPropagation(); // Used stop propagation to prevent logging of parent container message
})

csTicket.addEventListener('click', (event) => {
    console.log(heading.textContent, "Support Ticket Clicked")
}); // Message appears in console when a support ticket is clicked

    ticketContainer.appendChild(csTicket); // Appending ticket div to ticket container



    csTicket.appendChild(heading); // Appending the heading to ticket div
    csTicket.appendChild(paragraph); // Appending the paragraph to ticket div
    csTicket.appendChild(label); // Appending the label to ticket div
    csTicket.appendChild(resolveButton); // Appending the resolve button to ticket div
};

createSupportTicket("Rick Owens", "Shoes never arrived.", "High"); // Created a new support ticket
createSupportTicket("Steve Jobs", "Phone is occasionally lagging.", "Low"); // Created a new support ticket
createSupportTicket("Keven Hart", "Pants sent were to large.", "High"); // Created a new support ticket

// Task 3 Converting NodeLists to Arrays for Bulk Updates

function selectHighPriorityTickets() {
const csTicket = document.querySelectorAll('.supportTicket.HighPriority');  // Used query selectorAll to select all high priority support tickets
const csHighPriorityTicketsArray = [...csTicket]; // Converting the nodelist to an array


csHighPriorityTicketsArray.forEach(csTicket =>
    csTicket.style.backgroundColor = 'red'
); // Changing the color of high priority tickets to a brighter red

}

selectHighPriorityTickets(); // Selecting all high priority tickets
