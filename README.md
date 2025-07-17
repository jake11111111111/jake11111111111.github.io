<!--DOCTYPE html-->
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NeoCyber Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
</head>
<body>

  <!-- Loader -->
  <div id="loader">
    <div class="spinner"></div>
  </div>

  <!-- Navigation Tab Bar -->
  <header>
    <nav class="navbar">
      <div class="logo">NeoCyber</div>
      <div class="hamburger" onclick="toggleMenu()">☰</div>
      <ul class="nav-links" id="nav-links">
        <li><a href="#about" onclick="closeMenu()">About</a></li>
        <li><a href="#projects" onclick="closeMenu()">Projects</a></li>
        <li><a href="#contact" onclick="closeMenu()">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero -->
  <section class="hero parallax">
    <h1 data-aos="fade-down">Explore the Future</h1>
    <p data-aos="fade-up">Designing sleek, reactive web experiences.</p>
  </section>

  <!-- SVG Divider -->
  <svg class="divider" viewBox="0 0 1440 100">
    <path fill="#0d0d12" fill-opacity="1" d="M0,0 C720,100 720,0 1440,100 L1440,0 L0,0 Z"></path>
  </svg>

  <!-- About -->
  <section id="about" class="section" data-aos="fade-right">
    <h2>About Me</h2>
    <p>I fuse creativity with code to deliver futuristic web interfaces.</p>
  </section>

  <svg class="divider flip" viewBox="0 0 1440 100">
    <path fill="#0d0d12" d="M0,0 C720,100 720,0 1440,100 L1440,0 L0,0 Z"></path>
  </svg>

  <!-- Projects -->
  <section id="projects" class="section" data-aos="zoom-in">
    <h2>My Projects</h2>
    <div class="project-gallery">
      <div class="project-card" onclick="openModal(1)">⚡ Reactive UI</div>
      <div class="project-card" onclick="openModal(2)">🧠 AI Dashboard</div>
      <div class="project-card" onclick="openModal(3)">📲 Mobile UX</div>
    </div>
  </section>

  <svg class="divider" viewBox="0 0 1440 100">
    <path fill="#0d0d12" d="M0,0 C720,100 720,0 1440,100 L1440,0 L0,0 Z"></path>
  </svg>

  <!-- Contact -->
  <section id="contact" class="section" data-aos="fade-left">
    <h2>Contact</h2>
    <form class="contact-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 NeoCyber. Built with creativity & code.</p>
  </footer>

  <!-- Modal -->
  <div class="modal" id="projectModal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <div id="modalText"></div>
    </div>
  </div>

  <!-- Scripts -->
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init();
    window.addEventListener("load", () => {
      document.getElementById("loader").style.display = "none";
    });
    function toggleMenu() {
      document.getElementById("nav-links").classList.toggle("active");
    }
    function closeMenu() {
      document.getElementById("nav-links").classList.remove("active");
    }
    const modal = document.getElementById("projectModal");
    const modalText = document.getElementById("modalText");
    const projectData = {
      1: "⚡ Reactive UI: High-speed frontend with GSAP animations.",
      2: "🧠 AI Dashboard: AI-powered analytics in a sleek dark UI.",
      3: "📲 Mobile UX: Flutter-powered fluid mobile interface.",
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
