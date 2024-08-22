document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            const selectedLanguage = document.querySelector('.selected-language');
            const selectedImg = selectedLanguage.querySelector('img');
            const selectedText = selectedLanguage.querySelector('span');

            const clickedImg = this.querySelector('img').src;
            const clickedText = this.querySelector('span').innerText;

            // Update selected language
            selectedImg.src = clickedImg;
            selectedText.innerText = clickedText;

            // Hide the dropdown
            document.querySelector('.dropdown').style.display = 'none';
        });
    });

    document.querySelector('.selected-language').addEventListener('click', function() {
        const dropdown = document.querySelector('.dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelector('.dropdown').addEventListener('mouseleave', function() {
        this.style.display = 'none';
    });
});
