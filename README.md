
<!--DOCTYPE html-->
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jake</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
</head>
<body>
  <div id="loader">
    <div class="spinner"></div>
  </div>

  <canvas id="bgCanvas"></canvas>

  <header>
    <nav class="navbar">
      <div class="logo">Jacob Wood</div>
      <div class="hamburger" onclick="toggleMenu()">☰</div>
      <ul class="nav-links" id="nav-links">
        <li><a href="#about" onclick="closeMenu()">About</a></li>
        <li><a href="#projects" onclick="closeMenu()">Projects</a></li>
        <li><a href="#contact" onclick="closeMenu()">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero parallax">
    <h1 data-aos="fade-down">Experience Sublimity</h1>
    <p data-aos="fade-up">Designing sleek, innovative web experiences.</p>
  </section>

  <svg class="divider" viewBox="0 0 1440 100">
    <path fill="#0d0d12" d="M0,0 C720,100 720,0 1440,100 L1440,0 L0,0 Z"></path>
  </svg>


<!-- about me stuff. Change this. The font isn't great. The paragraphs don't have extra line spacing after paragraphs. Fix this stuff. -->
  <section id="about" class="section" data-aos="fade-down">
    <h2>About Me</h2>
    <p class="cascadia-code-semi-bold">Hi, I'm Jake!</p>
    <p class="cascadia-code-semi-bold">I'm a passionate web developer who loves building beautiful, user-friendly websites and apps. I specialize in HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS.</p>
	<p class="cascadia-code-semi-bold">Whether it's creating clean front-end designs or wiring up powerful backend functionality, I'm always excited to take on new challenges and learn something new along the way.</p>
	<p class="cascadia-code-semi-bold">When I'm not coding, you can find me exploring UI/UX trends, refining my personal projects, or helping others solve problems online.</p>
  </section>

  <svg class="divider flip" viewBox="0 0 1440 100">
    <path fill="#0d0d12" d="M0,0 C720,100 720,0 1440,100 L1440,0 L0,0 Z"></path>
  </svg>

  <section id="projects" class="section" data-aos="fade-down">
    <h2>My Projects</h2>
    <div class="project-gallery">

      <div class="project-card" onclick="window.open('calculator/index.html', '_blank')">Calculator</div>
      <div class="project-card" onclick="window.open('tic-tac-toe-online/index.html', '_blank')">Tic Tac Toe</div>
      <div class="project-card" onclick="window.open('movieSpinner/index.html', '_blank')">Movie Spinner</div>



<!-- old stuff. I no longer use this. Maybe should just delete?-->
      <!--
      <div class="project-card" onclick="openModal(1)">⚡ Reactive UI</div>
      <div class="project-card" onclick="openModal(2)">🧠 AI Dashboard</div>
      <div class="project-card" onclick="openModal(3)">📲 Mobile UX</div>
      -->

      
    </div>
  </section>

  <svg class="divider" viewBox="0 0 1440 100">
    <path fill="#0d0d12" d="M0,0 C720,100 720,0 1440,100 L1440,0 L0,0 Z"></path>
  </svg>



<!-- code for contact form. It doesn't actually work yet...
	Also, maybe should add my github and instagram, linkedin, etc. -->

  <section id="contact" class="section" data-aos="fade-down">
    <h2>Contact</h2>
    <form class="contact-form" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 Jacob Wood. All rights reserved.</p>
  </footer>



<!-- pretty sure this block is unused lol. -->

  <div class="modal" id="projectModal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <div id="modalText"></div>
    </div>
  </div>

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

    // Starry background animation
    const canvas = document.getElementById("bgCanvas");
    const ctx = canvas.getContext("2d");
    let stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5,
        d: Math.random() * 0.5 + 0.5,
      });
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ffe7";
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.d;
        if (s.y > canvas.height) {
          s.y = 0;
          s.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(animateStars);
    }
    animateStars();
  </script>
</body>
</html>








<style>

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #0d0d12;
  color: #e4e4f0;
  overflow-x: hidden;
}

/* Loader */
#loader {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: #0d0d12;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #1e1e25;
  border-top: 5px solid #00ffe7;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Canvas background */
#bgCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;         /* changed this. Commented out. Testing. */
  align-items: center;
  padding: 1rem 5rem;                  /*changed this 2 --> 5 */
  background: #1e1e25;
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ffe7;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  text-decoration: none;
  color: #e4e4f0;          /* og: #e4e4f0 */		/* tester: #25ad1c */
  font-weight: 600;
  padding: 0.8rem 0.8rem;      /* og: 0.4, 0.8 */	/* tester: 1.0rem 0.8rem */
  border-radius: 5px;
  transition: 0.3s;
  display: inline-block;
  line-height: 1.6;
}
.nav-links a:hover {
  background: #00ffe7;          /* og:  #00ffe7 */	/* tester: #69d417 */
  color: #0d0d12;
}
.hamburger {
  display: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #1e1e25;
    width: 200px;
    display: none;
  }
  .nav-links.active {
    display: flex;
  }
  .hamburger {
    display: block;
  }
}

/* Hero */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(145deg, #0d0d12, #1c1c29);
}
.hero h1 {
  font-size: 3rem;
  color: #00ffe7;
}
.hero p {
  font-size: 1.25rem;
  color: #ccc;
  margin-top: 1rem;
}

/* Section styles */
.section {
  padding: 5rem 2rem;
  background-color: #1e1e25;
}
.section h2 {
  font-size: 2rem;
  color: #00ffe7;
  margin-bottom: 1rem;
}
.section p {
  max-width: 600px;
  margin: auto;
  font-size: 1.1rem;
}

/* SVG divider */
.divider {
  display: block;
  width: 100%;
  height: 100px;
}
.flip {
  transform: rotate(180deg);
}

/* Project Gallery */
.project-gallery {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.project-card {
  background: #2c2c38;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
}
.project-card:hover {
  transform: translateY(-5px);
  background: #00ffe7;
  color: #0d0d12;
}

/* Contact Form */
.contact-form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
}
.contact-form button {
  background: #00ffe7;
  color: #0d0d12;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
.contact-form button:hover {
  background: #00d6c1;
}

/* Footer */
footer {
  background: #1e1e25;
  text-align: center;
  padding: 1.5rem 2rem;
  color: #999;
}

/* Modal */
.modal {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: #1e1e25;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  color: #fff;
  text-align: center;
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #aaa;
}
.close:hover {
  color: #fff;
}








/* custom fonts ! */


.cascadia-code-semi-bold {
  font-family: "Cascadia Code", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.5px;
margin-bottom: 5.0em;
}







</style>
