const editPost = async (e) => {
    const contents = $('#content-textarea');
    const title = $('#title-input');

    e.preventDefault(); 
    const response = await fetch(`api/post/${id}`, {
        method: 'PUT', 
        body: JSON.stringify({ title, contents})
    });

    if (response.ok) {
        alert('Post Updated')
        document.location.replace('/dashboard');
    } else {
        alert("Something went wrong. Can't Update post");
    }
}

$('#update-post').click(editPost);