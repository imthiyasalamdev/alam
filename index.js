(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


function showProjects(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        const isWeb = item.classList.contains('web');
        const isAndroid = item.classList.contains('android');

        if (category === 'all') {
            item.style.display = 'block';
        } else if (category === 'web') {
            if (isWeb) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        } else if (category === 'android') {
            if (isAndroid) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    // Delay the appearance of the welcome text for 1 second (1000 milliseconds)
    setTimeout(function() {
        document.querySelector('.header').classList.add('show-welcome');
    }, 2000); 
});

  
  


