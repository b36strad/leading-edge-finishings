<?php

use PHPMailer\PHPMailer\PHPMailer;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

header('Content-Type: application/json; charset=utf-8');

$cleanLine = static fn(string $key): string => trim(str_replace(["\r", "\n"], ' ', (string) ($_POST[$key] ?? '')));
$name = $cleanLine('name');
$email = trim((string) ($_POST['email'] ?? ''));
$phone = $cleanLine('phone');
$town = $cleanLine('town');
$project = $cleanLine('project');
$budget = $cleanLine('budget');
$timeline = $cleanLine('timeline');
$referral = $cleanLine('referral');
$details = trim((string) ($_POST['details'] ?? ''));

if (strlen($name) < 2 || $phone === '' || $town === '' || $project === '' || strlen($details) < 12) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields.']);
    exit;
}

$email = filter_var($email, FILTER_VALIDATE_EMAIL);
if ($email === false) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

$smtpConfigPath = dirname(__DIR__) . '/private-config/smtp-config.php';
$smtpConfig = is_file($smtpConfigPath) ? require $smtpConfigPath : [];
$smtpPassword = getenv('SMTP_PASSWORD') ?: (is_array($smtpConfig) ? ($smtpConfig['password'] ?? '') : '');

if (!is_string($smtpPassword) || $smtpPassword === '') {
    error_log('Contact form unavailable: SMTP_PASSWORD is not configured.');
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'We could not send your request right now. Please try again later.']);
    exit;
}

try {
    $mailerPath = dirname(__DIR__) . '/PHPMailer-master/src/';
    require $mailerPath . 'Exception.php';
    require $mailerPath . 'PHPMailer.php';
    require $mailerPath . 'SMTP.php';

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@rvwebcreations.com';
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('info@rvwebcreations.com', 'Leading Edge Finishings Website');
    $mail->addAddress('Info@leadingedgefinishings.com', 'Leading Edge Finishings');
    $mail->addReplyTo($email, $name);
    $mail->isHTML(false);
    $mail->Subject = "New project inquiry from $name";
    $mail->Body = implode("\n", [
        'New Project Inquiry',
        '',
        "Name: $name",
        "Email: $email",
        "Phone: $phone",
        "City or town: $town",
        "Project: $project",
        "Budget: " . ($budget !== '' ? $budget : 'Not provided'),
        "Timeline: " . ($timeline !== '' ? $timeline : 'Not provided'),
        "Referral: " . ($referral !== '' ? $referral : 'Not provided'),
        '',
        'Project details:',
        $details,
    ]);

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Your request was sent successfully.']);
} catch (\Throwable $error) {
    http_response_code(500);
    error_log('Contact form delivery failed: ' . (isset($mail) ? $mail->ErrorInfo . ' ' : '') . $error->getMessage());
    echo json_encode(['success' => false, 'message' => 'We could not send your request right now. Please try again later.']);
}