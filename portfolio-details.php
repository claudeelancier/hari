<?php
$title = 'Portfolio details';
include 'partials/header.php';
include 'partials/menu.php';
?>
<section class="page-hero" id="breadcrumb" prTitle="Our Portfolio" brTitle="Portfolio Details">
   <?php include 'partials/breadcrumb.php'; ?>
</section>
<section class="section">
   <div class="shell about-layout">
      <div class="in-view">
         <p class="kicker">Selected work</p>
         <h1>Project details</h1>
         <p>This page is the shared project-detail layout used from the portfolio. For a walkthrough of a specific website or app, contact the Elancier team with the project name.</p>
      </div>
      <div class="info-tile in-view">
         <p><i class="fas fa-tags"></i> Category: <span>Web design &amp; development</span></p>
         <p><i class="fas fa-map-marker-alt"></i> Studio: <span>Elancier Solutions, Madurai</span></p>
         <a class="btn btn-solid" href="contact.php">Discuss a similar project</a>
      </div>
   </div>
   <div class="shell" style="margin-top:24px">
      <img class="in-view" src="images/portfolio/project-view-1.jpg" alt="project name" style="border-radius:24px;margin-bottom:16px">
      <img class="in-view" src="images/portfolio/project-view-2.jpg" alt="project name" style="border-radius:24px">
   </div>
</section>
<?php include 'partials/footer.php'; ?>
