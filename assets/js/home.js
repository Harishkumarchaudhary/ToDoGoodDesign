console.log('Home script loaded');

// Get the category buttons

const allCategoryButtons = document.querySelectorAll(".custom-category-button");

allCategoryButtons.forEach((button)=>{
    button.style.color = "white";
    const buttonText = button.textContent.toUpperCase();

    if (buttonText == 'SCHOOL') {
        button.style.backgroundColor = "green";
    } else if (buttonText == 'WORK') {
        button.style.backgroundColor = "brown";
    } else if (buttonText == 'PERSONAL') {
        button.style.backgroundColor = "violet";
    } else {
        button.style.backgroundColor = "black";
    }
});
