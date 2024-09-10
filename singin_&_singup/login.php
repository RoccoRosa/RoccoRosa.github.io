<?php
  // Configuration
  $db_host = 'localhost';
  $db_username = 'your_username';
  $db_password = 'your_password';
  $db_name = 'your_database';

  // Create connection
  $conn = new mysqli($db_host, $db_username, $db_password, $db_name);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Get form data
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Validate form data (optional)
  // You can add validation logic here to ensure the email and password are valid

  // Insert data into database
  $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
  $result = $conn->query($sql);

  if ($result) {
    echo "Data saved successfully!";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  // Close connection
  $conn->close();
?>