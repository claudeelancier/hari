<?php
$title = 'Page not found';
$meta_description = 'The page you requested was not found on Elancier Solutions.';
include 'partials/header.php';
include 'partials/menu.php';
?>
<section class="page-404">
   <div>
      <p class="kicker">Error 404</p>
      <h1>This page is not available</h1>
      <p class="lede">The address may be mistyped, or the page may have moved. You can return to the homepage or talk to the Elancier team.</p>
      <div class="actions">
         <a class="btn btn-solid" href="index.php">Back to Home</a>
         <a class="btn btn-line" href="contact.php">Contact Us</a>
      </div>
   </div>
</section>
<?php include 'partials/footer.php'; ?>
