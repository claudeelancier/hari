<?php
$title = 'Web Development';
include 'partials/header.php' ?>

<!--Start Header -->
<header class="nav-bg-w main-header navfix fixed-top menu-white">
   <?php include 'partials/menu.php' ?>
</header>

<!--Breadcrumb Area-->
<section class="breadcrumb-area" data-background="images/banner/9.jpg" id="breadcrumb" prTitle="MOBILE APP DEVELOPMENT" brTitle="Services">
   <?php include 'partials/breadcrumb.php' ?>
</section>
<!--End Breadcrumb Area-->

<!-- Corporate Identity end here -->

<section class="service pad-tb bg-gradient5" id="Android">
   <!-- bg-gradient5 -->
   <div class="container">
      <div class="row">
         <div class="col-lg-8 block-1 m-mt50">
            <div class="common-heading text-l pl25">
               <span>Android App Development</span>
               <h2>We build for Android, we make full use of Android's functionality. </h2>
               <p>We build for Android, we make full use of Android's functionality. Whether it's creating mobile solutions be it an app for your business or a mobile optimized campaign - every solution requires a lot of planning and strategy to go into the architecture of the end user experience and how does it integrate back into your existing infrastructure.</p>
               <ul class="-service-list mt10">
                  <li> <a href="#">Android App</a> </li>
                  <li> <a href="#">Responsive</a> </li>
                  <li> <a href="#">Speed</a></li>
               </ul>
            </div>
         </div>

         <div class="col-lg-4">
            <div class="single-image bg-shape-dez mt0 wow fadeIn">
               <img src="images/mobile-app/mobile-app.jpg" alt="image" class="img-fluid no-shadow" />
            </div>
         </div>

      </div>
   </div>
</section>

<!-- Corporate Identity end here -->


<!-- Indoor Collaterals start here -->

<section class="service pad-tb" id="IOS">
   <!-- bg-gradient5 -->
   <div class="container">
      <div class="row">
         <div class="col-lg-4">
            <div class="single-image bg-shape-dez mt0 wow fadeIn">
               <img src="images/mobile-app/iphone_app.jpg" alt="image" class="img-fluid no-shadow" />
            </div>
         </div>
         <div class="col-lg-8 block-1 m-mt50">
            <div class="common-heading text-l pl25">
               <span>IOS App Development</span>
               <h2>iPhone Application Development</h2>
               <p>Our iPhone Application Development group improves with applications that are inventive, adaptable and have high convenience remainder.</p>
               <ul class="-service-list mt10">
                  <li> <a href="#">Iphone App</a> </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<!-- Indoor Collaterals end here -->


<section class="portfolio-section pad-tb">
   <?php include 'card_portfolio.php' ?>
</section>


<?php include 'partials/footer.php' ?>