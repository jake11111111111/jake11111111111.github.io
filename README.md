<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Polished Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
</head>
<body>

  <!-- Page Loader -->
  <div id="loader">
    <div class="spinner"></div>
  </div>

  <!-- Navbar -->
  <header>
    <nav class="navbar">
      <div class="logo">MyBrand</div>
      <div class="hamburger" onclick="toggleMenu()">☰</div>
      <ul class="nav-links" id="nav-links">
        <li><a href="#about" onclick="closeMenu()">About</a></li>
        <li><a href="#projects" onclick="closeMenu()">Projects</a></li>
        <li><a href="#contact" onclick="closeMenu()">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero Section with Parallax -->
  <section class="hero parallax">
    <h1 data-aos="fade-down">Welcome to My Portfolio</h1>
    <p data-aos="fade-up">Creative Developer | UI Enthusiast | Innovator</p>
  </section>

  <!-- About Section -->
  <section id="about" class="section" data-aos="fade-right">
    <h2>About Me</h2>
    <p>I’m a passionate developer who loves creating sleek websites with engaging animations.</p>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section" data-aos="zoom-in">
    <h2>My Projects</h2>
    <div class="project-gallery">
      <div class="project-card" onclick="openModal(1)">🚀 Project One</div>
      <div class="project-card" onclick="openModal(2)">🎨 Project Two</div>
      <div class="project-card" onclick="openModal(3)">📱 Project Three</div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section" data-aos="fade-left">
    <h2>Contact</h2>
    <form class="contact-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 MyBrand. All rights reserved.</p>
  </footer>

  <!-- Project Modal -->
  <div class="modal" id="projectModal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <div id="modalText"></div>
    </div>
  </div>

  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init();

    // Loader
    window.addEventListener("load", () => {
      document.getElementById("loader").style.display = "none";
    });

    // Hamburger Menu
    function toggleMenu() {
      document.getElementById("nav-links").classList.toggle("active");
    }
    function closeMenu() {
      document.getElementById("nav-links").classList.remove("active");
    }

    // Modal Logic
    const modal = document.getElementById("projectModal");
    const modalText = document.getElementById("modalText");
    const projectData = {
      1: "🚀 Project One: A full-stack web application built with Node.js and React.",
      2: "🎨 Project Two: A dynamic portfolio site with SVG animations.",
      3: "📱 Project Three: A cross-platform mobile app built with Flutter.",
    };
    function openModal(id) {
      modalText.innerText = projectData[id];
      modal.style.display = "flex";
    }
    function closeModal() {
      modal.style.display = "none";
    }
  </script>
</body>
</html>

