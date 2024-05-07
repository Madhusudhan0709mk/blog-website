document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');
    const postsContainer = document.getElementById('postsContainer');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
      
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const categories = document.getElementById('categories').value.split(',').map(c => c.trim());
        const tags = document.getElementById('tags').value.split(',').map(t => t.trim());

     
        if (!title || !content || categories.length === 0 || tags.length === 0) {
            alert('Please fill in all fields.');
            return;
        }


        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('h2');
        postTitle.innerHTML = `<a href="#">${title}</a>`;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        const postCategories = document.createElement('p');
        postCategories.textContent = `Categories: ${categories.join(', ')}`;

        const postTags = document.createElement('p');
        postTags.textContent = `Tags: ${tags.join(', ')}`;

        const likeBtn = document.createElement('button');
        likeBtn.textContent = 'Like';
        likeBtn.style.color = 'red'; 
        likeBtn.classList.add('like-btn');

        

        
        let likeCount = 0;
        const likeCountDisplay = document.createElement('span');
        likeCountDisplay.textContent = `Likes: ${likeCount}`;

    
        likeBtn.addEventListener('click', function() {
            likeCount++;
            likeCountDisplay.textContent = `Likes: ${likeCount}`;
        });

       

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postDiv.appendChild(postCategories);
        postDiv.appendChild(postTags);
        postDiv.appendChild(likeBtn);
        
        postDiv.appendChild(likeCountDisplay);
        postsContainer.appendChild(postDiv);


        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        document.getElementById('categories').value = '';
        document.getElementById('tags').value = '';

    });
});
