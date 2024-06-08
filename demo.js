// Select the element
const element = document.getElementById('demo-id');

// Define the event handler function
function handleClick(event) {
    console.log('Element clicked');
}

// Add the event listener
element.addEventListener('click', handleClick);

// Function to remove the event listener
function removeClickListener() {
    element.removeEventListener('click', handleClick);
    console.log('Click listener removed');
}

// Remove the event listener after 5 seconds
setTimeout(removeClickListener, 5000);
