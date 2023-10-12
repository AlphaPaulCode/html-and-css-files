let btnToggle = document.querySelector('.toggleBtn');
let btnTimes = document.querySelector('.timesBtn');
let barNav = document.getElementById('navBar');

btnToggle.addEventListener('click', function(){
    if(btnToggle.className !== "")
    {
        btnToggle.style.display = "none";
        btnTimes.style.display = "block";
        barNav.classList.add("showNav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnToggle.className !== "")
    {
        this.style.display = "none";
        btnToggle.style.display = "block";
        barNav.classList.remove("showNav");
    }
})