document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
    <nav>
      <div class="navbar">
        <div class="Ccontainer nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
            <a href="/index.html"><img src="/images/Logo.PNG" alt="Logo"></a>
          </div>
          <div class="menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="/bio">About</a></li>
            <li><a href="/Portfolio">Portfolio</a></li>
            <li><a href="/Contact">Contact</a></li>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Inject into a placeholder element
  const navbarContainer = document.getElementById("navbar-placeholder");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }
});
