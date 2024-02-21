document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = commentInput.value;
        if (commentText.trim() !== '') {
            const currentDate = new Date();
            const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
            const comment = document.createElement('div');
            comment.classList.add('comment');
            comment.innerHTML = `
                <strong>${formattedDate}</strong>
                <p>${commentText}</p>
            `;
            commentsContainer.prepend(comment);
            commentInput.value = '';
        }
    });
});
