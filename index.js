const assignments = document.querySelectorAll('.tab');

// Click event to open the assignment
assignments.forEach((assignment) => {
  assignment.addEventListener('click', () => {
    window.location.href = `${assignment.id}.html`;
  });
});
