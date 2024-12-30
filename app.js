document.getElementById('loadButton').addEventListener('click', loadUsers);
 
function loadUsers() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
 
    // Configure it: GET-request for the URL
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
 
    // Set up a function to handle the response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse the JSON response
            const users = JSON.parse(xhr.responseText);
 
            // Display the users in the HTML
            const userList = document.getElementById('userList');
            userList.innerHTML = '';
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.style.backgroundColor='yellow';
               
                userDiv.style.border='solid';
                userDiv.style.borderColor='red';
                userDiv.textContent = `${user.name} -- ${user.email} -- ${user.username}`;
                userList.appendChild(userDiv);
            });
        } else {
            console.error('Failed to load users');
        }
    };
 
    // Handle network errors
    xhr.onerror = function() {
        console.error('Request failed');
    };
 
    // Send the request
    xhr.send();
}
 