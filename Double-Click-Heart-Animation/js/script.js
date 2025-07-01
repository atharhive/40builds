const imageContainer = document.querySelector('.image-container');
const likeCountElement = document.querySelector('#times');

let totalLikes = 0;

imageContainer.addEventListener('dblclick', (e) => {
    spawnHeart(e);
});

const spawnHeart = (e) => {
    const heartIcon = document.createElement('div');
    heartIcon.classList.add('heart-icon');
    heartIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347.3 41.5 320 50.4 300.4 70l-18.2 18.5c-7.1 7.2-11.1 16.7-11.1 26.6c0 9.9 4-19.4 11.1-26.6l18.2-18.5c19.6-19.6 46.9-28.5 76.1-23.8C436.9 64.5 480 111.8 480 160.1V166c0 31.5-12.5 61.5-35.7 83.8L285.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4c-30.4-28.3-47.6-68-47.6-109.5v-5.8c0-69.9 50.5-129.5 119.4-141C164.7 41.5 192 50.4 211.6 70l18.2 18.5c7.1 7.2 11.1 16.7 11.1 26.6c0 9.9-4 19.4-11.1 26.6l-18.2-18.5c-19.6-19.6-46.9-28.5-76.1-23.8C75.1 64.5 32 111.8 32 160.1V166c0 31.5 12.5 61.5 35.7 83.8z"/></svg>';

    // Get click position relative to image container
    const rect = imageContainer.getBoundingClientRect();
    const xInside = e.clientX - rect.left;
    const yInside = e.clientY - rect.top;

    heartIcon.style.top = `${yInside}px`;
    heartIcon.style.left = `${xInside}px`;

    imageContainer.appendChild(heartIcon);

    totalLikes++;
    likeCountElement.innerHTML = totalLikes;

    setTimeout(() => {
        heartIcon.remove();
    }, 1000);
};
