<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = 'kepin@berkeley.edu';

    // Construct the email
    $fullMessage = "From: $firstName $lastName <$email>\n\n" . $message;
    $headers = "From: $email"; // Sender's email, collected from the form

    // Send the email
    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
}
?>
