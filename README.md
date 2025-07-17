<!--DOCTYPE html-->
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Neo Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet" />
</head>
<body>
  <canvas id="bgCanvas"></canvas>

  <header class="navbar">
    <div class="logo">NEO</div>
    <nav class="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h1>Explore the Future</h1>
    <p>Welcome to my portfolio</p>
  </section>

  <svg class="divider" viewBox="0 0 1440 320">
    <path fill="#1c1c29" d="M0,96L1440,224L1440,0L0,0Z"></path>
  </svg>

  <section id="about" class="section">
    <h2>About Me</h2>
    <p>I’m a developer passionate about building future-forward experiences.</p>
  </section>

  <svg class="divider flip" viewBox="0 0 1440 320">
    <path fill="#0d0d12" d="M0,96L1440,224L1440,0L0,0Z"></path>
  </svg>

  <section id="projects" class="section">
    <h2>Projects</h2>
    <p>Some awesome things I’ve built...</p>
  </section>

  <svg class="divider" viewBox="0 0 1440 320">
    <path fill="#1c1c29" d="M0,96L1440,224L1440,0L0,0Z"></path>
  </svg>

  <section id="contact" class="section">
    <h2>Contact Me</h2>
    <form class="contact-form" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <script>
    // Starry background
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
