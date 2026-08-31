<?php
$title = 'Page not found';
$meta_description = 'The page you requested was not found on Elancier Solutions.';
include 'partials/header.php';
?>
<header class="nav-bg-w main-header navfix fixed-top menu-white">
   <?php include 'partials/menu.php'; ?>
</header>
<section class="page-404">
   <div class="container">
      <img src="images/icons/404.svg" alt="" width="220" height="160">
      <p class="common-heading"><span>Error 404</span></p>
      <h1>This page is not available</h1>
      <p>The address may be mistyped, or the page may have moved. You can return to the homepage or talk to the Elancier team.</p>
      <a class="btn-main bg-btn lnk" href="index.php">Back to Home <i class="fas fa-chevron-right" aria-hidden="true"></i></a>
      <a class="btn-outline lnk ml-2" href="contact.php">Contact Us</a>
   </div>
</section>
<?php include 'partials/footer.php'; ?>
