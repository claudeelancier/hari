<?php
$page = [
    'title' => 'Elancier | Contact',
    'description' => 'Contact Elancier Solutions in Madurai. Call +91 81446 88721, email admin@elancier.com, or send a project enquiry.',
    'canonical' => 'https://elancier.com/contact.php',
    'active' => 'contact',
    'jsonld' => [
        '@type' => 'BreadcrumbList',
        'itemListElement' => [
            ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => 'https://elancier.com/'],
            ['@type' => 'ListItem', 'position' => 2, 'name' => 'Contact', 'item' => 'https://elancier.com/contact.php'],
        ],
    ],
];
require __DIR__ . '/includes/header.php';
?>

<section class="page-hero">
  <div class="container">
    <p class="crumbs"><a href="index.php">Home</a> / Contact</p>
    <p class="eyebrow">Contact now</p>
    <h1>Have a question? Write a message.</h1>
    <p class="lede">We’re here to understand your business goal and discuss how we can help you grow online.</p>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div>
      <article class="contact-card">
        <h2>Talk to Elancier</h2>
        <p>Assistance hours: <?= e($ELANCIER['hours_text']) ?></p>
        <ul class="contact-list">
          <li><a href="<?= e($ELANCIER['phone_href']) ?>"><?= icon('phone') ?> <?= e($ELANCIER['phone']) ?></a></li>
          <li><a href="<?= e($ELANCIER['phone_alt_href']) ?>"><?= icon('phone') ?> <?= e($ELANCIER['phone_alt']) ?></a></li>
          <li><a href="mailto:<?= e($ELANCIER['email']) ?>"><?= icon('mail') ?> <?= e($ELANCIER['email']) ?></a></li>
          <li><a href="<?= e($ELANCIER['skype_href']) ?>"><?= icon('users') ?> Skype: <?= e($ELANCIER['skype']) ?></a></li>
        </ul>
        <p>Our team typically replies within 24 hours during standard business hours. Support is available 12/5.</p>
        <h3>Madurai office</h3>
        <p><?= e($ELANCIER['address']) ?></p>
        <a class="btn btn-ghost" href="<?= e($ELANCIER['map_link']) ?>" target="_blank" rel="noopener">View on map <?= icon('map', 16) ?></a>
      </article>
    </div>
    <div class="form-card">
      <form id="contactForm" action="api/contact.php" method="post" novalidate>
        <input type="text" name="company_website" tabindex="-1" autocomplete="off" class="hp" aria-hidden="true" style="position:absolute;left:-9999px">
        <div class="form-grid">
          <div class="field">
            <label for="name">Full name</label>
            <input id="name" name="name" type="text" autocomplete="name" required>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" autocomplete="email" required>
          </div>
          <div class="field">
            <label for="mobile">Phone</label>
            <input id="mobile" name="mobile" type="tel" autocomplete="tel" required>
          </div>
          <div class="field">
            <label for="subject">Subject</label>
            <input id="subject" name="subject" type="text" required>
          </div>
          <div class="field full">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
        </div>
        <button class="btn btn-primary" type="submit" id="form-submit" style="margin-top:16px">Send enquiry <?= icon('send', 18) ?></button>
        <p class="form-status" id="formStatus" role="status"></p>
      </form>
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="container" data-reveal>
    <p class="eyebrow">Our locations</p>
    <h2>Our office</h2>
    <div class="map-wrap" style="margin-top:24px">
      <iframe src="<?= e($ELANCIER['map_embed']) ?>" loading="lazy" title="Elancier Solutions on Google Maps" allowfullscreen></iframe>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
