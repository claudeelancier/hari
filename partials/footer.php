</main>
<section class="cta-band">
   <div class="shell cta-grid">
      <div>
         <p class="kicker">Let's work together</p>
         <h2>We Love to Listen to Your Requirements</h2>
         <p class="lede">Or you can feel free call and mail us</p>
      </div>
      <div class="cta-actions">
         <a class="btn btn-solid" href="contact.php">Share Your Thoughts</a>
         <a class="btn btn-line" href="tel:+918144688721">+91 81446 88721</a>
         <a class="btn btn-line" href="mailto:admin@elancier.com">admin@elancier.com</a>
      </div>
   </div>
</section>
<footer class="site-footer">
   <div class="shell footer-grid">
      <div>
         <a href="index.php"><img src="images/inner_logo.png" alt="Elancier" class="footer-logo"></a>
         <p>Website and App development solution for transforming and innovating businesses. Studio in Madurai since 2013.</p>
      </div>
      <div>
         <h3>Explore</h3>
         <a href="index.php">Home</a>
         <a href="about-us.php">About Us</a>
         <a href="web-development.php">Services</a>
         <a href="portfolio.php">Work</a>
      </div>
      <div>
         <h3>Company</h3>
         <a href="clients.php">Clients</a>
         <a href="careers.php">Career</a>
         <a href="contact.php">Contact Us</a>
         <a href="https://api.whatsapp.com/message/JMMCX6T3VMLPK1">WhatsApp</a>
      </div>
      <div>
         <h3>Madurai studio</h3>
         <p>94-19, 2nd floor, Mani Kothanar Street, Bypass Rd, Sathyamoorthy Nagar, Madurai, Tamil Nadu 625016.</p>
         <a href="tel:+918012308030">+91 80123 08030</a>
      </div>
   </div>
   <div class="shell footer-base">
      <p>Copyright &copy; <?php echo date('Y'); ?> All Rights Reserved. Elancier</p>
      <div class="socials">
         <a href="https://www.facebook.com/elanciersolutions/?ref=aymt_homepage_panel" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
         <a href="https://twitter.com/elanciermdu" target="_blank" rel="noopener" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
         <a href="https://www.instagram.com/elanciersolutions/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
         <a href="https://in.linkedin.com/company/elanciersolutions" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      </div>
   </div>
</footer>
<script src="js/vendor/modernizr-3.5.0.min.js"></script>
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/plugin.min.js"></script>
<script src="js/main.js"></script>
<script src="js/custom.js"></script>
<script src="js/studio.js"></script>
<?php
if (!empty($extra_js)) {
   foreach ((array) $extra_js as $src) {
      echo '<script src="' . htmlspecialchars($src, ENT_QUOTES, 'UTF-8') . '"></script>' . "\n";
   }
}
if (!empty($extra_inline_js)) {
   echo '<script>' . $extra_inline_js . '</script>' . "\n";
}
?>
</body>
</html>
