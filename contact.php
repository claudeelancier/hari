<?php
$title = 'Contact';
include 'partials/header.php' ?>

<!--Start Header -->
<header class="nav-bg-w main-header navfix fixed-top menu-white">
   <?php include 'partials/menu.php' ?>
</header>
<!--Breadcrumb Area-->

<!--Breadcrumb Area-->
<section class="breadcrumb-area" data-background="images/banner/4.jpg" id="breadcrumb" prTitle="Contact" brTitle="Contact">
   <?php include 'partials/breadcrumb.php' ?>
</section>
<!--End Breadcrumb Area-->

<!--Start Enquire Form-->
<section class="contact-page pad-tb">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-6 v-center">
            <div class="common-heading text-l">
               <span>Contact Now</span>
               <h2 class="mt0 mb0">Have Question? Write a Message</h2>
               <p class="mb60 mt20">We’re here to understand your business goal and we would like to discuss how we can help to grow your business online.</p>
            </div>
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
                  <button type="submit" id="form-submit" class="btn lnk btn-main bg-btn">Submit <span class="circle"></span></button>
                  <div id="msgSubmit" class="h3 text-center hidden" role="status"></div>
                  <div class="clearfix"></div>
               </form>
            </div>
         </div>
         <div class="col-lg-5 v-center">
            <div class="contact-details">
               <div class="contact-card wow fadeIn" data-wow-delay=".2s">
                  <div class="info-card v-center">
                     <span><i class="fas fa-phone-alt"></i> Phone:</span>
                     <div class="info-body">
                        <p>Assistance hours: Monday – Friday, 10 am to 6 pm</p>
                        <a href="tel:8144688721">+91 81446 88721</a>
                     </div>
                  </div>
               </div>
               <div class="email-card mt30 wow fadeIn" data-wow-delay=".5s">
                  <div class="info-card v-center">
                     <span><i class="fas fa-envelope"></i> Email:</span>
                     <div class="info-body">
                        <p>Our support team will get back to in 24-h during standard business hours.</p>
                        <a href="mailto:admin@elancier.com">admin@elancier.com</a>
                     </div>
                  </div>
               </div>
               <div class="skype-card mt30 wow fadeIn" data-wow-delay=".9s">
                  <div class="info-card v-center">
                     <span><i class="fab fa-skype"></i> Skype:</span>
                     <div class="info-body">
                        <p>We Are Online: Monday – Friday, 10:30 am to 6 pm</p>
                        <a href="skype:selva8040?call">elancier</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<!--End Enquire Form-->
<!--Start Location-->
<section class="contact-location pad-tb bglight">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-8">
            <div class="common-heading">
               <span>Our Locations</span>
               <h2>Our office</h2>
            </div>
         </div>
      </div>
      <div class="row justify-content-center upset shape-numm">
         <div class="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".2s">
            <div class="office-card">
               <div class="skyline-img">
                  <img src="images/location/madurai.jpg" style="border-radius: 8px 30px 8px 0px;" alt="Madurai" class="img-fluid" />
               </div>
               <div class="office-text">
                  <h4>Madurai</h4>
                  <p>94-19, 2nd floor, Mani Kothanar street, Bypass Rd, Sathyamoorthy Nagar, Madurai, Tamil Nadu 625016.</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=ELANCIER+SOLUTIONS+Madurai+Sathyamoorthy+Nagar" target="_blank" rel="noopener" class="btn-outline rount-btn" aria-label="Open map"><i class="fas fa-map-marker-alt"></i></a>
                  <a href="tel:8144688721" class="btn-outline rount-btn" aria-label="Call Elancier"><i class="fas fa-phone-alt"></i></a>
                  <a href="mailto:admin@elancier.com" class="btn-outline rount-btn" aria-label="Email Elancier"><i class="fas fa-envelope"></i></a>
                  <a href="skype:selva8040?call" class="btn-outline rount-btn" aria-label="Skype Elancier"><i class="fab fa-skype"></i></a><br>
                  <a href="https://www.google.com/maps/search/?api=1&query=ELANCIER+SOLUTIONS+Madurai+Sathyamoorthy+Nagar" target="_blank" rel="noopener" class="btn-outline mt-4">View on Map <i class="fas fa-chevron-right fa-icon"></i></a>
               </div>
            </div>
         </div>

         <div class="col-lg-8 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".4s">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d502987.9831900911!2d78.19896454322713!3d9.967728693204961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c52606455dcb%3A0xef91ea0fca0da57!2sELANCIER%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1779752604926!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
         </div>
      </div>
   </div>
</section>
<!--End Location-->

<?php include 'partials/footer.php' ?>

<script src="js/validator.min.js"></script>
<script src="js/form.js"></script>