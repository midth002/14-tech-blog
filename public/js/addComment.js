
const addComment = async (e) => {
    e.preventDefault();
    const urlString = window.location.toString().split('/')
    const postId  = urlString[4];
    console.log(postId)
    const contents = $('#comment-textarea').val();

    if (contents) {
        const response = await fetch('/api/comment', { 
            method: 'POST', 
            body: JSON.stringify({ contents, postId }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            alert('Comment added')
            document.location.replace(`/post/${postId}`)
        } else {
            alert("Something went wrong. Can't add comment")
        }
    }
    
}

$('#add-comment').click(addComment);