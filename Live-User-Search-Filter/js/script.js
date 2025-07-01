const userListElement = document.getElementById('userList');
const filterInput = document.getElementById('filterInput');
const clearFilterButton = document.getElementById('clearFilterBtn');

let allUsers = [];

async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api?results=50');
        const data = await response.json();
        allUsers = data.results;
        renderUserList(allUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
        userListElement.innerHTML = '<li><h3>Failed to load users. Please try again.</h3></li>';
    }
}

function renderUserList(usersToDisplay) {
    userListElement.innerHTML = ''; // Clear existing list
    if (usersToDisplay.length === 0) {
        userListElement.innerHTML = '<li><h3>No users found matching your criteria.</h3></li>';
        return;
    }

    usersToDisplay.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
        userListElement.appendChild(listItem);
    });
}

function filterUsers(searchTerm) {
    const filtered = allUsers.filter(user => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
        const location = `${user.location.city}, ${user.location.country}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase()) || location.includes(searchTerm.toLowerCase());
    });
    renderUserList(filtered);
}

filterInput.addEventListener('input', (e) => filterUsers(e.target.value));

clearFilterButton.addEventListener('click', () => {
    filterInput.value = '';
    renderUserList(allUsers);
});

// Initial data fetch
fetchUsers();
