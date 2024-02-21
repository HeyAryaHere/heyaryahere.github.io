document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('comments');

    // Load comments from localStorage when the page loads
    loadComments();

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = commentInput.value;
        if (commentText.trim() !== '') {
            const currentDate = new Date();
            const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
            const comment = {
                text: commentText,
                date: formattedDate
            };
            // Save comment to localStorage
            saveComment(comment);
            // Display the comment immediately without reloading the page
            displayComment(comment);
            commentInput.value = '';
        }
    });

    function saveComment(comment) {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function loadComments() {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(comment => {
            displayComment(comment);
        });
    }

    function displayComment(comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <strong>${comment.date}</strong>
            <p>${comment.text}</p>
        `;
        commentsContainer.prepend(commentElement);
    }
});
