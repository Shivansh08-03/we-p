const textContainer = document.querySelector('.i-love-u');   // Target <h1> with class
const yesBtn = document.querySelector('.yes');               // Target "Yes" button
const noBtn = document.querySelector('.no');                 // Target "No" button
const buttons = document.querySelector('.buttons');          // Target the buttons container
const image = document.querySelector('#image');              // Target the image by ID

// Add event listener for the Yes button
yesBtn.addEventListener('click', function() {
    textContainer.textContent = 'i love u too';            // Update text content
    image.src = "./emoticon-sunglasses-22756566__1_-removebg-preview.png"; 
    image.src = "./photo_2024-10-02_21-12-24.jpg"                      // Change image source
    buttons.style.display = 'none';                          // Hide the buttons container
});

// Add event listener for hovering over the No button
noBtn.addEventListener('mouseover', function() {
    const container = document.querySelector('.container-ily');
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
    
    const buttonHeight = noBtn.clientHeight;
    const buttonWidth = noBtn.clientWidth;

    let randomTop = Math.random() * (containerHeight - buttonHeight);
    let randomLeft = Math.random() * (containerWidth - buttonWidth);

    // Ensure the button stays within the visible container
    randomTop = Math.max(0, Math.min(randomTop, containerHeight - buttonHeight));
    randomLeft = Math.max(0, Math.min(randomLeft, containerWidth - buttonWidth));

    noBtn.style.position = 'absolute';
    noBtn.style.top = `${randomTop}px`;
    noBtn.style.left = `${randomLeft}px`;
});
