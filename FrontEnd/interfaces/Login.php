<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="../CSS/login.css">
    <title>Log-in</title>
</head>
<body>
<div class="login-container">
        
        <div class="login-content">
            <h1 class="logo">JobHunt</h1>
            
            <div class="logo-container">
                <img src="../images/Logo JH.png" alt="JobHunt Logo" class="company-logo">
            </div>

        <form action="" class="login-form" method="POST">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="e-mail" require>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="pass" require>
                </div>
                <p class="ocultar" id= "error">
                    <?php
                    require_once '../Backend/login.php';
                    ?>
                </p>
                <script>
                    
                let error = document.getElementById("error");
                if (error.textContent.trim() !== "") {
                    error.style.display = "block";
                }
                </script>
            <button type="submit" class="login-button">Log in</button>
            </form>
  
            <p class="signup-link">
                Don't have an account? 
                <a href="#">Sign up</a>
            </p>
        </div>
    </div>
</body>
</html>