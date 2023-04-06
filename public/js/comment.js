console.log("submit");

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value;
    const postID = document.getElementById("postId").innerHTML;
console.log(postID);
    if (comment) {
      console.log("here1")
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ 
          "body" : comment,
          "postId": postID
        
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Post Created Successfully');
      } else {
        alert('Failed to create post');
      }
    }
    console.log("submit");
  };

  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);