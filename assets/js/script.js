// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
 // Toggle card visibility when clicked
 function toggleCard(projectId) {
    const cardBody = document.getElementById(`project-${projectId}`);
    cardBody.classList.toggle('active');
}