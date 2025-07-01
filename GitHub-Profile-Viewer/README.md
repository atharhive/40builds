# GitHub User Profile Viewer

This project allows users to search for GitHub profiles and view key information about them, including their avatar, name, bio, followers, following, public repositories, and a list of their top 5 repositories. It provides a quick and easy way to get an overview of a GitHub user.

## Features

*   **User Search:** Search for any GitHub user by their username.
*   **Profile Display:** Shows the user's avatar, name, bio, and statistics.
*   **Top Repositories:** Lists the user's top 5 public repositories with links to them.
*   **Error Handling (New Feature):** Displays a clear error message if the user is not found or if there's a problem fetching data.
*   **Clean UI:** A modern and responsive design for an optimal viewing experience.

## Code Explained

### HTML (`index.html`)

The HTML sets up the search form and the area where the profile will be displayed:

*   `<form class="user-search-form" id="userSearchForm">`: The search form.
*   `<input type="text" id="usernameInput" placeholder="Enter GitHub Username">`: The input field for the username.
*   `<main id="profileDisplayArea"></main>`: The main area where the GitHub user's profile card will be rendered.

### CSS (`css/style.css`)

The CSS styles the application with a dark theme:

*   **Body Styling:** Sets a dark blue-grey background, light grey text, and uses the 'Poppins' font.
*   **Search Form (`.user-search-form`):** Styles the input field with a slightly lighter blue-grey background, rounded corners, and a subtle shadow. It also adds a green border on focus.
*   **Profile Card (`.profile-card`):** The main container for the user's profile information. It has a background matching the search input, rounded corners, and a shadow. It uses `display: flex` to arrange the avatar and user details side-by-side.
*   **Avatar (`.avatar`):** Styles the user's profile picture with a circular shape and a dark blue-grey border.
*   **User Details (`.user-details`):** Styles the text content, including the user's name, bio, and statistics (followers, following, public repos).
*   **Repository Tags (`.repo-tag`):** Styles the links to the user's repositories as green tags with white text.
*   **Media Queries:** Adjusts the layout for smaller screens, stacking the avatar and user details vertically.

### JavaScript (`js/script.js`)

The JavaScript handles fetching data from the GitHub API and rendering the user interface:

*   **`GITHUB_API_URL`:** Constant for the GitHub API base URL.
*   **Element Selection:** Selects the profile display area, search form, and username input.
*   **`fetchUserProfile(username)` Function:**
    *   This `async` function makes two `fetch` requests to the GitHub API: one for the user's main profile data and another for their repositories.
    *   **Error Handling (New Feature):** It checks `response.ok` for both requests. If a response is not `ok` (e.g., 404 Not Found), it calls `displayErrorMessage()` with a relevant message and returns early.
    *   If both requests are successful, it parses the JSON data and calls `renderUserProfile()`.
    *   Includes a `try...catch` block to catch network or unexpected errors and display a generic error message.
*   **`renderUserProfile(user, repos)` Function:**
    *   Constructs the HTML string for the user's profile card using template literals.
    *   Sets the `innerHTML` of `profileDisplayArea` to display the card.
    *   Selects the `userReposDiv` within the newly created card.
    *   Iterates through the first 5 repositories (`repos.slice(0, 5)`), creates `<a>` elements for each, adds appropriate classes, sets `href` and `innerText`, and appends them to `userReposDiv`.
*   **`displayErrorMessage(message)` Function (New Feature):**
    *   Creates a simple HTML string for an error card with the given `message`.
    *   Sets the `innerHTML` of `profileDisplayArea` to display this error card.
*   **Event Listener:** An event listener is added to `userSearchForm` for the `submit` event.
    *   It prevents the default form submission behavior.
    *   Gets the `username` from the input field.
    *   If a username is provided, it calls `fetchUserProfile()` and clears the input field.
