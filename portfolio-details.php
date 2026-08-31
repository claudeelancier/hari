<?php  include 'partials/header.php' ?>
<!--Start Header -->
<header class="nav-bg-w main-header navfix fixed-top menu-white">
   <?php  include 'partials/menu.php' ?>
</header>


<!--Breadcrumb Area-->
<section 
    class="breadcrumb-area" 
    data-background="images/banner/5.jpg" 
    id="breadcrumb" 
    prTitle="Our Portfolio"
    brTitle="Portfolio Details"
>
    <?php  include 'partials/breadcrumb.php' ?>
</section>
<!--End Breadcrumb Area-->

<!--Start Portfolio-->
<section class="portfolio-page pad-tb">
   <div class="container">
      <div class="row justify-content-left">
         <div class="col-lg-7">
            <div class="common-heading pp p-details">
               <span>Selected work</span>
               <h1>Project details</h1>
               <p>This page is the shared project-detail layout used from the portfolio. For a walkthrough of a specific website or app, contact the Elancier team with the project name.</p>
            </div>
         </div>
         <div class="col-lg-5">
            <div class="portfolio-details">
               <div class="portfolio-meta link-hover">
                  <ul>
                     <li>
                        <i class="fas fa-tags"></i>
                        <p>Category: <span>Web design &amp; development</span></p>
                     </li>
                     <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <p>Studio: <span>Elancier Solutions, Madurai</span></p>
                     </li>
                     <li><a href="contact.php">Discuss a similar project</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-lg-12 single-card-item">
            <div class="isotope_item pv-">
               <div class="item-image">
                  <img src="images/portfolio/project-view-1.jpg" alt="project name" class="img-fluid"/>
               </div>
            </div>
            <div class="isotope_item pv- mt30">
               <div class="item-image">
                  <img src="images/portfolio/project-view-2.jpg" alt="project name" class="img-fluid"/>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<!--End Portfolio-->

<?php  include 'partials/footer.php' ?>