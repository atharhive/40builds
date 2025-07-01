const GITHUB_API_URL = 'https://api.github.com/users/';

const profileDisplayArea = document.getElementById('profileDisplayArea');
const userSearchForm = document.getElementById('userSearchForm');
const usernameInput = document.getElementById('usernameInput');

async function fetchUserProfile(username) {
    try {
        const userResponse = await fetch(GITHUB_API_URL + username);
        if (!userResponse.ok) {
            if (userResponse.status === 404) {
                displayErrorMessage('User not found. Please check the username.');
            } else {
                displayErrorMessage('Error fetching user data. Please try again later.');
            }
            return;
        }
        const userData = await userResponse.json();

        const reposResponse = await fetch(GITHUB_API_URL + username + '/repos?sort=created');
        if (!reposResponse.ok) {
            displayErrorMessage('Problem fetching user repositories.');
            return;
        }
        const reposData = await reposResponse.json();

        renderUserProfile(userData, reposData);
    } catch (error) {
        console.error('Network or API error:', error);
        displayErrorMessage('An unexpected error occurred. Please check your internet connection.');
    }
}

function renderUserProfile(user, repos) {
    const userName = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';
    const profileHTML = `
    <div class="profile-card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-details">
      <h2>${userName}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Public Repos</strong></li>
      </ul>

      <div id="userRepos"></div>
    </div>
  </div>
    `;
    profileDisplayArea.innerHTML = profileHTML;
    
    const userReposDiv = document.getElementById('userRepos');
    repos
        .slice(0, 5) // Display top 5 repos
        .forEach(repo => {
            const repoLink = document.createElement('a');
            repoLink.classList.add('repo-tag');
            repoLink.href = repo.html_url;
            repoLink.target = '_blank';
            repoLink.innerText = repo.name;
            userReposDiv.appendChild(repoLink);
        });
}

function displayErrorMessage(message) {
    const errorHTML = `
        <div class="profile-card">
            <h1>${message}</h1>
        </div>
    `;
    profileDisplayArea.innerHTML = errorHTML;
}

userSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();

    if (username) {
        fetchUserProfile(username);
        usernameInput.value = ''; // Clear input after search
    }
});