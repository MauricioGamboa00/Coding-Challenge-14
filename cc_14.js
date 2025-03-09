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

    const resolveButton = document.createElement('button'); // Creating a resolve button
    resolveButton.textContent = 'Resolve'

    // Task 3 Modifications

    if(priorityLevel === 'High' ){
        csTicket.classList.add('HighPriority')
    } // added a class to sort High Priority Tickets

    // Task 5 Modifications

    const editButton = document.createElement('button'); // Creating an Edit Button
    editButton.textContent = 'Edit Ticket'

    editButton.addEventListener('click', (event) => {
        const nameInput = document.createElement('input'); // Create an input field for customer name
        nameInput.value = heading.textContent;

        const discInput = document.createElement('input'); // Create an input field for issue discription
        discInput.value = paragraph.textContent

        const priorityLevelInput = document.createElement('input'); // Create and input field for priority level
        priorityLevelInput.value = label.textContent

        const saveButton = document.createElement('button') // Create a save butten when edit ticket it clicked
        saveButton.textContent = 'Save Changes';

        saveButton.addEventListener('click', (event) => { // Added an Event Listener to the Save Button
            heading.textContent = nameInput.value;
            paragraph.textContent = discInput.value;
            label.textContent = priorityLevelInput.value;
            csTicket.removeChild(saveButton); // Removing the save button when save changes is clicked
            csTicket.removeChild(nameInput); // Removing the name input when save changes is clicked
            csTicket.removeChild(discInput); // Removing the description input when save changes is clicked
            csTicket.removeChild(priorityLevelInput); // Removing the Priority Level Input when saves changes is clicked
        })

        csTicket.append(nameInput); // Appending name input 
        csTicket.append(saveButton); // Appending the save button
        csTicket.append(discInput); // Appending the discription input
        csTicket.append(priorityLevelInput); // Appending Priority Level Input
    })

    // Task 4 Modifications

    resolveButton.addEventListener('click', (event) => {
        console.log(heading.textContent,"Support Ticket Resolved")
        csTicket.remove(); // Added an Event listener when  to log a message to the console when resolve is clicked and remove the support ticket
        
        event.stopPropagation(); // Used stop propagation to prevent logging of parent container message
})

csTicket.addEventListener('click', (event) => {
    console.log(heading.textContent, "Support Ticket Clicked")
}); // Message appears in console when a support ticket is clicked

    ticketContainer.appendChild(csTicket); // Appending ticket div to ticket container



    csTicket.appendChild(heading); // Appending the heading to csticket div
    csTicket.appendChild(paragraph); // Appending the paragraph to csticket div
    csTicket.appendChild(label); // Appending the label to csticket div
    csTicket.appendChild(resolveButton); // Appending the resolve button to csticket div
    csTicket.append(editButton); // Appending the edit button to csticket div
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
