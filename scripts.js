// Handle user info dynamically
const userInfoDiv = document.getElementById('userInfo');
const loggedInUser = localStorage.getItem('loggedInUser');

if (loggedInUser) {
  userInfoDiv.innerHTML = `
    <span>Welcome, ${loggedInUser}</span>
    <button class="logout-btn" onclick="logout()">Logout</button>
  `;
} else {
  userInfoDiv.innerHTML = `
    <a href="login.html" class="logout-btn">Login</a>
  `;
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.reload();
}