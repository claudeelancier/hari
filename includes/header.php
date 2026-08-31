<?php
require_once __DIR__ . '/config.php';
global $ELANCIER, $NAV_SERVICES, $CLIENTS, $PROJECTS;
$pageTitle = $page['title'] ?? 'Elancier | Website Design Company in Madurai';
$pageDesc = $page['description'] ?? 'Elancier is a web services company based in Madurai offering website development, mobile application development and custom web development.';
$pageCanonical = $page['canonical'] ?? 'https://elancier.com/';
$active = $page['active'] ?? '';
$ogImage = 'https://elancier.com/images/logo.png';
$jsonLd = $page['jsonld'] ?? null;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#EEF5FF">
  <meta name="google-site-verification" content="5Zs5QR_4qPJk8wyuKvOup4NI3vloBcqwEq8_EDHDMMc">
  <title><?= e($pageTitle) ?></title>
  <meta name="description" content="<?= e($pageDesc) ?>">
  <meta name="author" content="Elancier">
  <link rel="canonical" href="<?= e($pageCanonical) ?>">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Elancier Solutions">
  <meta property="og:title" content="<?= e($pageTitle) ?>">
  <meta property="og:description" content="<?= e($pageDesc) ?>">
  <meta property="og:url" content="<?= e($pageCanonical) ?>">
  <meta property="og:image" content="<?= e($ogImage) ?>">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= e($pageTitle) ?>">
  <meta name="twitter:description" content="<?= e($pageDesc) ?>">
  <meta name="twitter:image" content="<?= e($ogImage) ?>">
  <link rel="icon" href="images/favicon.png" type="image/png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/app.css">
  <script type="application/ld+json">
  <?= json_encode([
    '@context' => 'https://schema.org',
    '@graph' => array_values(array_filter([
      [
        '@type' => ['Organization', 'LocalBusiness', 'ProfessionalService'],
        '@id' => 'https://elancier.com/#org',
        'name' => 'Elancier Solutions',
        'url' => 'https://elancier.com/',
        'logo' => 'https://elancier.com/images/logo.png',
        'email' => 'admin@elancier.com',
        'telephone' => '+91-81446-88721',
        'foundingDate' => '2013',
        'address' => [
          '@type' => 'PostalAddress',
          'streetAddress' => '94-19, 2nd floor, Mani Kothanar Street, Bypass Rd, Sathyamoorthy Nagar',
          'addressLocality' => 'Madurai',
          'addressRegion' => 'Tamil Nadu',
          'postalCode' => '625016',
          'addressCountry' => 'IN',
        ],
        'sameAs' => array_values($ELANCIER['social']),
        'areaServed' => 'IN',
      ],
      [
        '@type' => 'WebSite',
        '@id' => 'https://elancier.com/#website',
        'url' => 'https://elancier.com/',
        'name' => 'Elancier Solutions',
        'publisher' => ['@id' => 'https://elancier.com/#org'],
      ],
      $jsonLd,
    ])),
  ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) ?>
  </script>
</head>
<body class="<?= e($page['body_class'] ?? '') ?>" data-page="<?= e($active) ?>">
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="cursor" hidden></div>
  <div class="cursor-label" hidden>View</div>
  <div class="scroll-progress" aria-hidden="true"></div>

  <header class="site-header" id="site-header">
    <div class="header-inner">
      <a class="brand" href="index.php" aria-label="Elancier home">
        <img src="images/logo.svg" alt="Elancier" width="168" height="42">
      </a>

      <nav class="nav-desktop" aria-label="Primary">
        <a class="nav-link <?= $active === 'home' ? 'is-active' : '' ?>" href="index.php">Home</a>
        <a class="nav-link <?= $active === 'about' ? 'is-active' : '' ?>" href="about-us.php">About Us</a>
        <div class="nav-item has-mega">
          <button class="nav-link mega-toggle <?= str_starts_with($active, 'service') ? 'is-active' : '' ?>" type="button" aria-expanded="false" aria-controls="mega-menu" id="mega-btn">
            Services
            <?= icon('chevron', 16) ?>
          </button>
          <div class="mega-menu" id="mega-menu" role="region" aria-labelledby="mega-btn">
            <div class="mega-grid">
              <?php foreach ($NAV_SERVICES as $group): ?>
                <div class="mega-col">
                  <a class="mega-heading" href="<?= e($group['href']) ?>">
                    <span class="mega-icon"><?= icon($group['icon'], 18) ?></span>
                    <?= e($group['title']) ?>
                  </a>
                  <ul>
                    <?php foreach ($group['items'] as $item): ?>
                      <li>
                        <a href="<?= e($item['href']) ?>">
                          <span class="mega-item-title"><?= e($item['label']) ?></span>
                          <span class="mega-item-desc"><?= e($item['desc']) ?></span>
                        </a>
                      </li>
                    <?php endforeach; ?>
                  </ul>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
        </div>
        <a class="nav-link <?= $active === 'careers' ? 'is-active' : '' ?>" href="careers.php">Careers</a>
        <a class="nav-link <?= $active === 'contact' ? 'is-active' : '' ?>" href="contact.php">Contact Us</a>
      </nav>

      <div class="header-actions">
        <a class="btn btn-primary header-cta" href="contact.php">Start a Project <?= icon('arrow', 18) ?></a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-drawer" aria-label="Open menu">
          <span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-drawer" id="mobile-drawer" hidden>
    <div class="drawer-panel">
      <div class="drawer-top">
        <a class="brand" href="index.php"><img src="images/logo.svg" alt="Elancier" width="150" height="38"></a>
        <button class="drawer-close" type="button" aria-label="Close menu"><?= icon('close', 22) ?></button>
      </div>
      <nav class="drawer-nav" aria-label="Mobile">
        <a href="index.php">Home</a>
        <a href="about-us.php">About Us</a>
        <?php foreach ($NAV_SERVICES as $i => $group): ?>
          <details class="drawer-acc">
            <summary><?= e($group['title']) ?></summary>
            <div>
              <a href="<?= e($group['href']) ?>">Overview</a>
              <?php foreach ($group['items'] as $item): ?>
                <a href="<?= e($item['href']) ?>"><?= e($item['label']) ?></a>
              <?php endforeach; ?>
            </div>
          </details>
        <?php endforeach; ?>
        <a href="careers.php">Careers</a>
        <a href="contact.php">Contact Us</a>
      </nav>
      <div class="drawer-foot">
        <a class="btn btn-primary" href="contact.php">Start a Project</a>
        <a class="text-link" href="<?= e($ELANCIER['phone_href']) ?>"><?= e($ELANCIER['phone']) ?></a>
      </div>
    </div>
  </div>

  <main id="main">
