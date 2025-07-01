const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImage = document.getElementById('profile_img');
const authorName = document.getElementById('name');
const postDate = document.getElementById('date');
const cardElement = document.querySelector('.card');

const reloadButton = document.createElement('button');
reloadButton.textContent = 'Reload Content';
reloadButton.style.marginTop = '20px';
reloadButton.style.padding = '10px 20px';
reloadButton.style.backgroundColor = '#3498db';
reloadButton.style.color = 'white';
reloadButton.style.border = 'none';
reloadButton.style.borderRadius = '5px';
reloadButton.style.cursor = 'pointer';
reloadButton.style.fontSize = '16px';
document.body.appendChild(reloadButton);

function updateContent() {
  cardElement.classList.add('loading');

  setTimeout(() => {
    header.innerHTML =
      '<img src="https://picsum.photos/id/237/400/250" alt="" />';
    title.innerHTML = 'A New Blog Post Title';
    excerpt.innerHTML =
      'This is a sample excerpt for a new blog post. It provides a brief summary of the content to entice readers.';
    profileImage.innerHTML =
      '<img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />';
    authorName.innerHTML = 'Jane Doe';
    postDate.innerHTML = 'July 01, 2025';

    cardElement.classList.remove('loading');
  }, 2500);
}

reloadButton.addEventListener('click', updateContent);

// Initial load
updateContent();