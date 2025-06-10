function toggleContent(sectionId) {
    const content = document.getElementById(sectionId);
    const label = content.previousElementSibling.querySelector('.toggle-label');
    // Use a unique key for each section
    const storageKey = `section_${sectionId}_visible`;
    const isVisible = content.classList.toggle('show');
    window.localStorage.setItem(storageKey, isVisible ? 'show' : 'hide');
    label.textContent = (isVisible ? 'Hide ' : 'Show ') + label.textContent.replace(/^(Show|Hide) /, '');
}

// On page load, restore visibility from localStorage
window.addEventListener('DOMContentLoaded', () => {
    ['ingredients', 'instructions'].forEach(sectionId => {
        const content = document.getElementById(sectionId);
        const label = content.previousElementSibling.querySelector('.toggle-label');
        const storageKey = `section_${sectionId}_visible`;
        const status = window.localStorage.getItem(storageKey);
        if (status === 'show') {
            content.classList.add('show');
            label.textContent = 'Hide ' + label.textContent.replace(/^(Show|Hide) /, '');
            // Optionally check the checkbox if you want
            const input = content.previousElementSibling.querySelector('input[type="checkbox"]');
            if (input) input.checked = true;
        } else {
            content.classList.remove('show');
            label.textContent = 'Show ' + label.textContent.replace(/^(Show|Hide) /, '');
            const input = content.previousElementSibling.querySelector('input[type="checkbox"]');
            if (input) input.checked = false;
        }
    });
});