function Footer(props){

    const btnSwitch = document.querySelector('#sun_moon');

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
        btnSwitch.classList.toggle('active');
    }

    // function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark'){
            setTheme('theme-light');
        } 
        else {
            setTheme('theme-dark');  
        }
    }
    // Immediately invoked function to set the theme on initial load
   /*  (function () {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-dark');
        } 
        else {
            setTheme('theme-light');
        }
    })(); */


    return (
        <div id="footer">
            <h1 id="titulo_footer">THEME</h1>
            <p id="resumen"> También podrás escoger tu temática favorita para jugar, empieza probando aquí!</p>
            <button className="change-switch" id="sun_moon" onClick={() => toggleTheme()}>
                <span><i className="fas fa-sun"></i></span>
                <span><i className="fas fa-moon"></i></span>
            </button>        
        </div>
    )
}

export default Footer;