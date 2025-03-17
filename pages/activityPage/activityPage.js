document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');
    const locationSelect = document.getElementById('location');
    const activityCards = document.querySelectorAll('.activity-card');

    // Filter function
    function filterActivities() {
        const searchValue = searchInput.value.toLowerCase();
        const categoryValue = categorySelect.value.toLowerCase();
        const locationValue = locationSelect.value;

        activityCards.forEach(card => {
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDescription = card.querySelector('p').textContent.toLowerCase();
            const cardCategory = card.dataset.category.toLowerCase();
            const cardLocation = card.dataset.location;

            const matchesSearch = cardTitle.includes(searchValue) || cardDescription.includes(searchValue);
            const matchesCategory = categoryValue === '' || cardCategory === categoryValue;
            const matchesLocation = locationValue === '' || cardLocation === locationValue;

            if (matchesSearch && matchesCategory && matchesLocation) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listeners
    searchInput.addEventListener('input', filterActivities);
    categorySelect.addEventListener('change', filterActivities);
    locationSelect.addEventListener('change', filterActivities);

    // Animation for button hover effect
    const registerButtons = document.querySelectorAll('.btn-register');
    registerButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            const shine = document.createElement('div');
            shine.classList.add('shine-effect');
            shine.style.position = 'absolute';
            shine.style.top = '0';
            shine.style.left = '0';
            shine.style.width = '100%';
            shine.style.height = '100%';
            shine.style.background = 'linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)';
            shine.style.transform = 'translateX(-100%)';
            button.appendChild(shine);

            setTimeout(() => {
                shine.style.transition = 'transform 0.5s ease-in-out';
                shine.style.transform = 'translateX(100%)';
            }, 50);

            setTimeout(() => {
                button.removeChild(shine);
            }, 550);
        });
    });
});



// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to save activity to Firebase
function saveToFirebase(button) {
    const activityCard = button.closest('.activity-card');
    const title = activityCard.querySelector('h3').textContent;
    const description = activityCard.querySelector('p').textContent;
    const location = activityCard.querySelector('.fas.fa-map-marker-alt').nextElementSibling.textContent;
    const imgSrc = activityCard.querySelector('img').src;

    // Create activity object
    const activity = {
        title: title,
        description: description,
        location: location,
        img: imgSrc
    };

    // Get reference to the Firebase database location
    const activitiesRef = database.ref('activities');  // Refers to the "activities" node in the database

    // Push the new activity to Firebase
    activitiesRef.push(activity)
        .then(() => {
            alert('تم التسجيل في النشاط بنجاح!');
        })
        .catch((error) => {
            console.error('Error writing to Firebase:', error);
            alert('حدث خطأ أثناء التسجيل.');
        });
}