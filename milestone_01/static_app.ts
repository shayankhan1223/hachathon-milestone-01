// Get the button and the skills list
const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

// Set initial visibility state
let isSkillsVisible = true;

// Add event listener for button click
toggleButton.addEventListener('click', () => {
    if (isSkillsVisible) {
        // Hide skills
        skillsList.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    } else {
        // Show skills
        skillsList.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    isSkillsVisible = !isSkillsVisible;
});
