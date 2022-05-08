

const loginHandler = async (e) => {
    e.preventDefault();
    const user_name = $('#user-name');
    const password = $('#password'); 
    // If username and password have been entered
    if (user_name && password) {
        const response = await fetch('/api/login', {
            method: 'POST', 
            body: JSON.stringify({ user_name, password }), 
            headers: { 'Content-Type' : 'application/json'}
        });
        const data = await response.json(); 
        if(response.status === 400 || response.status === 401) {
           return alert(data.message);
        } 
        document.location.replace('/');
    }
}

$('#login-btn').click(loginHandler);
