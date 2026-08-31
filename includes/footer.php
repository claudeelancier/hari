<?php
require_once __DIR__ . '/config.php';
global $ELANCIER;
?>
  </main>

  <section class="final-cta" data-reveal>
    <div class="container cta-wrap">
      <p class="eyebrow">Have an idea?</p>
      <h2>Let’s turn it into something exceptional.</h2>
      <p class="lede">Tell us about the website, product or campaign you want to build. We’ll respond with a clear next step.</p>
      <div class="btn-row">
        <a class="btn btn-primary magnetic" href="contact.php">Start your project <?= icon('arrow', 18) ?></a>
        <a class="btn btn-ghost magnetic" href="<?= e($ELANCIER['whatsapp']) ?>" target="_blank" rel="noopener">Talk to our team <?= icon('whatsapp', 18) ?></a>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand" href="index.php"><img src="images/logo.svg" alt="Elancier" width="168" height="42"></a>
        <p>Elancier Solutions designs and builds websites, web applications and mobile products for businesses that want digital work done with care.</p>
        <p class="footer-address"><?= e($ELANCIER['address']) ?></p>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li><a href="index.php">Home</a></li>
          <li><a href="about-us.php">About Us</a></li>
          <li><a href="careers.php">Careers</a></li>
          <li><a href="portfolio.php">Selected Work</a></li>
          <li><a href="contact.php">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          <li><a href="web-development.php">Web Development</a></li>
          <li><a href="web-development.php#Ecommerce">Ecommerce</a></li>
          <li><a href="creative-design.php">Creative Design</a></li>
          <li><a href="mobileapp-development.php">Mobile Apps</a></li>
          <li><a href="online-marketing.php">Online Marketing</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul class="contact-list">
          <li><a href="<?= e($ELANCIER['phone_href']) ?>"><?= icon('phone', 16) ?> <?= e($ELANCIER['phone']) ?></a></li>
          <li><a href="<?= e($ELANCIER['phone_alt_href']) ?>"><?= icon('phone', 16) ?> <?= e($ELANCIER['phone_alt']) ?></a></li>
          <li><a href="mailto:<?= e($ELANCIER['email']) ?>"><?= icon('mail', 16) ?> <?= e($ELANCIER['email']) ?></a></li>
          <li><a href="<?= e($ELANCIER['map_link']) ?>" target="_blank" rel="noopener"><?= icon('map', 16) ?> Madurai office</a></li>
        </ul>
        <div class="socials">
          <a href="<?= e($ELANCIER['social']['facebook']) ?>" target="_blank" rel="noopener" aria-label="Facebook"><?= icon('facebook', 18) ?></a>
          <a href="<?= e($ELANCIER['social']['twitter']) ?>" target="_blank" rel="noopener" aria-label="X"><?= icon('x', 18) ?></a>
          <a href="<?= e($ELANCIER['social']['instagram']) ?>" target="_blank" rel="noopener" aria-label="Instagram"><?= icon('instagram', 18) ?></a>
          <a href="<?= e($ELANCIER['social']['linkedin']) ?>" target="_blank" rel="noopener" aria-label="LinkedIn"><?= icon('linkedin', 18) ?></a>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>Copyright © <?= date('Y') ?> All rights reserved. Elancier Solutions, Madurai.</p>
      <p class="wordmark" aria-hidden="true">ELANCIER</p>
    </div>
  </footer>

  <a class="whatsapp-fab" href="<?= e($ELANCIER['whatsapp']) ?>" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <?= icon('whatsapp', 22) ?>
  </a>

  <script src="js/app.js" defer></script>
</body>
</html>
