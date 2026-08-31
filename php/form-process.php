<?php
header('Content-Type: text/plain; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo 'Invalid request';
    exit;
}

$name = isset($_POST['name']) ? trim((string) $_POST['name']) : '';
$email = isset($_POST['email']) ? trim((string) $_POST['email']) : '';
$message = isset($_POST['message']) ? trim((string) $_POST['message']) : '';
$mobile = isset($_POST['mobile']) ? trim((string) $_POST['mobile']) : '';
$subjectIn = isset($_POST['subject']) ? trim((string) $_POST['subject']) : 'Website enquiry';
$dtype = isset($_POST['Dtype']) ? trim((string) $_POST['Dtype']) : '';

if ($email === '' || $message === '' || $name === '') {
    echo 'Please complete the required fields.';
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Enter a valid email address!';
    exit;
}

$receiver = 'admin@elancier.com';
$subject = 'Website enquiry: ' . $subjectIn;
$body = "Name: {$name}\nEmail: {$email}\nPhone: {$mobile}\nSubject: {$subjectIn}\nType: {$dtype}\n\nMessage:\n{$message}\n";
$headers = 'From: no-reply@elancier.com' . "\r\n" . 'Reply-To: ' . $email . "\r\n";

if (@mail($receiver, $subject, $body, $headers)) {
    echo 'success';
} else {
    echo 'Sorry, failed to send your message!';
}
