const deletePost = async (e) => {
    e.preventDefault(); 
    const response = await fetch(`api/post/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        alert('Post Deleted')
        document.location.replace('/dashboard');
    } else {
        alert("Something went wrong. Can't delete post")
    }
}



$('#delete-post').click(deletePost);