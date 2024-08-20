const themeToggleButton = document.querySelector('.light-bulb')

const savedTheme = localStorage.getItem('theme')
if (savedTheme){
    document.body.setAttribute('data-theme', savedTheme)

}

themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'default' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
})




















