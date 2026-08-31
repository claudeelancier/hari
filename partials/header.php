<?php
if (!isset($title)) {
   $title = '';
}
if (!isset($meta_description)) {
   $meta_description = '';
}
$page_slug = basename($_SERVER['PHP_SELF'], '.php');
$is_home = ($page_slug === 'index');
$canonical = htmlspecialchars($page_slug === 'index' ? 'https://elancier.com/' : 'https://elancier.com/' . $page_slug . '.php', ENT_QUOTES, 'UTF-8');
$page_title = !empty($title) ? htmlspecialchars($title, ENT_QUOTES, 'UTF-8') : 'Website Design Company in Madurai, Website Design in Madurai';
$desc = !empty($meta_description) ? htmlspecialchars($meta_description, ENT_QUOTES, 'UTF-8') : 'Elancier is a web services company based in Madurai offering website development, mobile application development and custom web development.';
?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="google-site-verification" content="5Zs5QR_4qPJk8wyuKvOup4NI3vloBcqwEq8_EDHDMMc">
      <title>Elancier | <?php echo $page_title; ?></title>
      <meta name="description" content="<?php echo $desc; ?>">
      <meta name="author" content="Elancier">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="theme-color" content="#07143d">
      <link rel="canonical" href="<?php echo $canonical; ?>">
      <meta property="og:title" content="Elancier | <?php echo $page_title; ?>">
      <meta property="og:description" content="Elancier is a web services company based in Madurai offering website, ecommerce and mobile application development.">
      <meta property="og:type" content="website">
      <meta property="og:image" content="images/logo.png">
      <meta name="twitter:card" content="summary_large_image">
      <link href="images/favicon.png" rel="icon">
      <link href="css/bootstrap.min.css" rel="stylesheet">
      <link href="css/all.min.css" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
      <link href="css/elancier-2026.css" rel="stylesheet">
      <script>document.documentElement.classList.add('js');</script>
   </head>
   <body class="<?php echo $is_home ? 'is-home' : 'inner-page'; ?>">
      <a class="skip-link" href="#main-content">Skip to content</a>
      <div class="progress" id="scroll-progress" aria-hidden="true"></div>
      <div class="grain" aria-hidden="true"></div>
