<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '[]', true);
if (!is_array($data)) {
    $data = $_POST;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$mobile = trim((string)($data['mobile'] ?? $data['phone'] ?? ''));
$subject = trim((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$honeypot = trim((string)($data['company_website'] ?? ''));

if ($honeypot !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

if ($name === '' || $email === '' || $mobile === '' || $subject === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}

$to = 'admin@elancier.com';
$mailSubject = 'Website enquiry: ' . $subject;
$body = "Name: {$name}\nEmail: {$email}\nPhone: {$mobile}\nSubject: {$subject}\n\n{$message}\n";
$headers = [
    'From: Elancier Website <no-reply@elancier.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

$dir = dirname(__DIR__) . '/data';
if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}
file_put_contents(
    $dir . '/inquiries.log',
    date('c') . ' ' . json_encode(['name' => $name, 'email' => $email, 'mobile' => $mobile, 'subject' => $subject], JSON_UNESCAPED_UNICODE) . PHP_EOL,
    FILE_APPEND | LOCK_EX
);

@mail($to, $mailSubject, $body, implode("\r\n", $headers));

echo json_encode(['ok' => true]);
