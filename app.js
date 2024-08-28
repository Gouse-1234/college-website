
document.querySelector('.theme-toggler').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
document.getElementById('profile-btn').addEventListener('click', function() {
    const profile = document.querySelector('aside');
    profile.classList.toggle('show');
});
function displayLoginTime() {
    const loginTime = new Date().toLocaleString();
    console.log("Login time:", loginTime);

    document.getElementById('login-time').innerText = "Last login: " + loginTime;
}
window.addEventListener('load', displayLoginTime);
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
// Get the logout button element
const logoutBtn = document.getElementById('logout-btn');

// Add click event listener to the logout button
logoutBtn.addEventListener('click', function() {
    // Perform logout actions here, such as clearing session data or redirecting to the login page
    // For example, you can redirect to the login page:
    window.location.href = 'index.html'; // Replace 'logstudent.html' with your actual login page URL
});

showTime();
setInterval(function () {
	showTime();
}, 1000);
//document.querySelector('.navbar a:last-of-type').addEventListener('click', function() {
   // console.log("Logout clicked");
   // alert("You are logged out.");
//});//