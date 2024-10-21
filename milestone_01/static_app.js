// Get the button and the skills list
var toggleButton = document.getElementById('toggleSkills');
var skillsList = document.getElementById('skills-list');
// Set initial visibility state
var isSkillsVisible = true;
// Add event listener for button click
toggleButton.addEventListener('click', function () {
    if (isSkillsVisible) {
        // Hide skills
        skillsList.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
    else {
        // Show skills
        skillsList.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    isSkillsVisible = !isSkillsVisible;
});
