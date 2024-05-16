<?php
  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'contato@prevenclin.com.br';

  // Check if the form was submitted
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $from_name = $_POST['name'];
    $from_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Validate email
    if (!filter_var($from_email, FILTER_VALIDATE_EMAIL)) {
      die('Invalid email address.');
    }

    // Set the email headers
    $headers = "From: " . $from_name . " <" . $from_email . ">\r\n";
    $headers .= "Reply-To: " . $from_email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Compose the email
    $full_message = "From: " . $from_name . "\n";
    $full_message .= "Email: " . $from_email . "\n";
    $full_message .= "Message:\n" . $message;

    // Send the email
    if (mail($receiving_email_address, $subject, $full_message, $headers)) {
      echo 'Email sent successfully.';
    } else {
      echo 'Email sending failed.';
    }
  } else {
    echo 'Invalid request method.';
  }
?>
