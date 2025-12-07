document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    function handleScroll() {
        changeActiveLink();
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    changeActiveLink();
    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockElement = document.getElementById('clock');
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const themeToggle = document.getElementById('themeToggle');
    const greetingElement = document.getElementById('greeting');
    const quoteElement = document.getElementById('quote');
    const quoteBtn = document.getElementById('quoteBtn');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let counter = 0;

    // Function to update the clock
    function updateClock() {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString();
    }

    // Function to increment the counter
    incrementBtn.addEventListener('click', function() {
        counter++;
        counterElement.textContent = counter;
    });

    // Function to update greeting based on time
    function updateGreeting() {
        const now = new Date();
        const hours = now.getHours();
        let greeting = '';

        if (hours < 12) {
            greeting = 'Good Morning!';
        } else if (hours < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }

        greetingElement.textContent = greeting;
    }

    // Function to get a random quote
    const quotes = [
        "The best way to predict the future is to invent it.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "Your time is limited, so don’t waste it living someone else’s life.",
        "The only way to do great work is to love what you do.",
        "Success is not the key to happiness. Happiness is the key to success."
    ];

    quoteBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });

    // Function to manage the to-do list
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.className = 'btn btn-danger btn-sm';
            removeBtn.textContent = 'Remove';
            removeBtn.onclick = function() {
                taskList.removeChild(li);
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Initial function calls
    updateClock();
    updateGreeting();
    setInterval(updateClock, 1000);
    changeActiveLink();
    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Smooth scrolling for internal links
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offset = 70; // Adjust this value based on your navbar height

            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });

    // Highlight active link on scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        navbarLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPosition + offset && section.offsetTop + section.offsetHeight > scrollPosition + offset) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});

// Function to animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    const windowHeight = window.innerHeight;

    progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;

        if (barPosition < windowHeight - 50) { // Trigger animation when the bar is in view
            bar.style.width = bar.getAttribute('aria-valuenow') + '%';
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', animateProgressBars);

// Initial call to animate progress bars on page load
document.addEventListener('DOMContentLoaded', animateProgressBars);

// Function to filter projects
const filterProjects = (filter) => {
    const projects = document.querySelectorAll('.project-item');

    projects.forEach(project => {
        if (filter === 'all' || project.classList.contains(filter)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
};

// Event listeners for filter buttons
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        filterProjects(filter);
    });
});