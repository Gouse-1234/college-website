document.getElementById('dob').addEventListener('change', function() {
    const dob = new Date(this.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    document.getElementById('age').value = age;
});
let languageCount = 1;
document.getElementById('addLanguage').addEventListener('click', function() {
    const containers = document.querySelectorAll('.language-container');
    const container = containers[containers.length - 1]; // Select the last language container

    languageCount++;

    const languageDiv = document.createElement('div');
    languageDiv.classList.add('language-container');

    const label = document.createElement('label');
    label.textContent = 'Language:';
    languageDiv.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'language' + languageCount;
    input.name = 'languages[]';
    input.required = true;
    languageDiv.appendChild(input);

    const checkboxes = ['read', 'write', 'speak'];
    checkboxes.forEach(function(checkbox) {
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.id = 'language' + languageCount + '-' + checkbox;
        checkboxInput.name = 'languages' + checkbox.charAt(0).toUpperCase() + checkbox.slice(1) + '[]';
        checkboxInput.value = checkbox;
        languageDiv.appendChild(checkboxInput);

        const checkboxLabel = document.createElement('label');
        checkboxLabel.textContent = checkbox.charAt(0).toUpperCase() + checkbox.slice(1);
        checkboxLabel.htmlFor = 'language' + languageCount + '-' + checkbox;
        languageDiv.appendChild(checkboxLabel);
    });

    container.parentNode.insertBefore(languageDiv, container.nextElementSibling);
});
