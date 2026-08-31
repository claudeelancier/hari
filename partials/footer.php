</main>
<section class="cta-band">
   <div class="shell cta-grid">
      <div>
         <p class="kicker">Let’s work together</p>
         <h2>Ready to build something remarkable?</h2>
         <p class="lede">Have an idea? We design, develop and support websites and mobile products from Madurai.</p>
      </div>
      <div class="cta-actions">
         <a class="btn btn-solid" href="contact.php">Start a Project <span class="arr" aria-hidden="true">→</span></a>
         <a class="btn btn-ghost" href="contact.php">Contact Elancier</a>
         <a class="btn btn-ghost" href="tel:+918144688721">+91 81446 88721</a>
      </div>
   </div>
</section>
<footer class="site-footer">
   <div class="shell footer-grid">
      <div>
         <a href="index.php"><img src="images/inner_logo.png" alt="Elancier" class="footer-logo"></a>
         <p>Website and app development for businesses that want a clear digital presence. Studio in Madurai since 2013.</p>
      </div>
      <div>
         <h3>Company</h3>
         <a href="index.php">Home</a>
         <a href="about-us.php">About</a>
         <a href="careers.php">Career</a>
         <a href="contact.php">Contact</a>
      </div>
      <div>
         <h3>Services</h3>
         <a href="web-development.php">Web Development</a>
         <a href="mobileapp-development.php">Mobile Development</a>
         <a href="creative-design.php">Creative Design</a>
         <a href="online-marketing.php">Digital Marketing</a>
      </div>
      <div>
         <h3>Contact</h3>
         <p>94-19, 2nd floor, Mani Kothanar Street, Bypass Rd, Sathyamoorthy Nagar, Madurai, Tamil Nadu 625016.</p>
         <a href="tel:+918012308030">+91 80123 08030</a>
         <a href="tel:+918144688721">+91 81446 88721</a>
         <a href="mailto:admin@elancier.com">admin@elancier.com</a>
         <a href="https://api.whatsapp.com/message/JMMCX6T3VMLPK1">WhatsApp</a>
      </div>
   </div>
   <div class="shell footer-base">
      <p>Copyright &copy; <?php echo date('Y'); ?> All Rights Reserved. Elancier</p>
      <div class="socials">
         <a href="https://www.facebook.com/elanciersolutions/?ref=aymt_homepage_panel" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
         <a href="https://twitter.com/elanciermdu" target="_blank" rel="noopener" aria-label="X"><i class="fab fa-twitter"></i></a>
         <a href="https://www.instagram.com/elanciersolutions/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
         <a href="https://in.linkedin.com/company/elanciersolutions" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      </div>
   </div>
</footer>
<a class="wa-fab" href="https://api.whatsapp.com/message/JMMCX6T3VMLPK1" aria-label="WhatsApp">
   <i class="fab fa-whatsapp"></i>
</a>
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/custom.js"></script>
<script src="js/elancier-2026.js"></script>
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
