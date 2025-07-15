




<head>
    <meta charset="UTF-8">
    <title>Multi-Tab Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        <!-- Tab button styles -->
        .tab-buttons {
            display: flex;
            background-color: #333;
        }

        .tab-buttons button {
            flex: 1;
            padding: 14px 20px;
            background-color: #333;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }

        .tab-buttons button:hover {
            background-color: #575757;
        }

        .tab-buttons button.active {
            background-color: #2196F3;
        }

        <!-- Tab content styles -->
        .tab-content {
            display: none;
            padding: 20px;
            border: 1px solid #ccc;
        }

        .tab-content.active {
            display: block;
        }
    </style>
</head>
<body>

    <h1>My Multi-Tab Website</h1>

    <div class="tab-buttons">
        <button class="tab-btn active" onclick="showTab('home')">Home</button>
        <button class="tab-btn" onclick="showTab('about')">About</button>
        <button class="tab-btn" onclick="showTab('contact')">Contact</button>
    </div>

    <div id="home" class="tab-content active">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home tab content.</p>
    </div>

    <div id="about" class="tab-content">
        <h2>About Us</h2>
        <p>This is the about tab content.</p>
    </div>

    <div id="contact" class="tab-content">
        <h2>Contact Information</h2>
        <p>This is the contact tab content.</p>
    </div>

    <script>
        function showTab(tabId) {
            <!-- Hide all tab contents -->
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.remove('active'));

            <!-- Remove 'active' from all buttons -->
            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(button => button.classList.remove('active'));

            <!-- Show selected tab and activate button -->
            document.getElementById(tabId).classList.add('active');
            event.target.classList.add('active');
        }
    </script>

</body>




<a href="html2.html">Visit Example Website</a>

<!-- Image object -->
<div style="text-align: center;">
  <img 
    src="Screenshot 2023-06-10 145027.png" 
    alt="Yellow cardinal on a branch"
    style="width: 300px; height: auto; border: 2px solid #ccc; border-radius: 8px;"
  >
</div>
