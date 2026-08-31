<?php
$title = 'Contact';
$extra_js = ['js/validator.min.js', 'js/form.js'];
include 'partials/header.php';
include 'partials/menu.php';
?>
<section class="page-hero" id="breadcrumb" prTitle="Contact" brTitle="Contact">
   <?php include 'partials/breadcrumb.php'; ?>
</section>

<section class="section">
   <div class="shell contact-layout">
      <div class="in-view">
         <p class="kicker">Contact Now</p>
         <h2>Have Question? Write a Message</h2>
         <p class="lede">We’re here to understand your business goal and we would like to discuss how we can help to grow your business online.</p>
         <div class="form-block">
            <form id="contactForm" data-toggle="validator" class="shake" novalidate>
               <div class="row">
                  <div class="form-group col-sm-6">
                     <label class="field-label" for="name">Full name</label>
                     <input type="text" id="name" name="name" placeholder="Enter name" required data-error="Please fill Out" autocomplete="name">
                     <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group col-sm-6">
                     <label class="field-label" for="email">Email</label>
                     <input type="email" id="email" name="email" placeholder="Enter email" required autocomplete="email">
                     <div class="help-block with-errors"></div>
                  </div>
               </div>
               <div class="row">
                  <div class="form-group col-sm-6">
                     <label class="field-label" for="mobile">Phone</label>
                     <input type="text" id="mobile" name="mobile" placeholder="Enter mobile" required data-error="Please fill Out" autocomplete="tel">
                     <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group col-sm-6">
                     <label class="field-label" for="subject">Subject</label>
                     <input type="text" id="subject" name="subject" placeholder="Enter Subject" required data-error="Please fill Out">
                     <div class="help-block with-errors"></div>
                  </div>
               </div>
               <div class="form-group">
                  <label class="field-label" for="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                  <div class="help-block with-errors"></div>
               </div>
               <button type="submit" id="form-submit" class="btn btn-solid">Submit</button>
               <div id="msgSubmit" class="h3 text-center hidden" role="status"></div>
            </form>
         </div>
      </div>
      <div>
         <div class="info-tile in-view">
            <span><i class="fas fa-phone-alt"></i> Phone:</span>
            <p>Assistance hours: Monday – Friday, 10 am to 6 pm</p>
            <a href="tel:8144688721">+91 81446 88721</a>
         </div>
         <div class="info-tile in-view">
            <span><i class="fas fa-envelope"></i> Email:</span>
            <p>Our support team will get back to in 24-h during standard business hours.</p>
            <a href="mailto:admin@elancier.com">admin@elancier.com</a>
         </div>
         <div class="info-tile in-view">
            <span><i class="fab fa-skype"></i> Skype:</span>
            <p>We Are Online: Monday – Friday, 10:30 am to 6 pm</p>
            <a href="skype:selva8040?call">elancier</a>
         </div>
      </div>
   </div>
</section>

<section class="section" style="padding-top:0">
   <div class="shell">
      <div class="section-head center in-view">
         <p class="kicker">Our Locations</p>
         <h2>Our office</h2>
      </div>
      <div class="about-layout">
         <div class="office-card in-view">
            <img src="images/location/madurai.jpg" alt="Madurai">
            <div class="office-text">
               <h3>Madurai</h3>
               <p>94-19, 2nd floor, Mani Kothanar street, Bypass Rd, Sathyamoorthy Nagar, Madurai, Tamil Nadu 625016.</p>
               <a href="https://www.google.com/maps/search/?api=1&query=ELANCIER+SOLUTIONS+Madurai+Sathyamoorthy+Nagar" target="_blank" rel="noopener">View on Map</a>
               <a href="tel:8144688721">Call</a>
               <a href="mailto:admin@elancier.com">Email</a>
               <a href="skype:selva8040?call">Skype</a>
            </div>
         </div>
         <div class="contact-map in-view">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d502987.9831900911!2d78.19896454322713!3d9.967728693204961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c52606455dcb%3A0xef91ea0fca0da57!2sELANCIER%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1779752604926!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" title="Elancier Solutions map"></iframe>
         </div>
      </div>
   </div>
</section>
<?php include 'partials/footer.php'; ?>
