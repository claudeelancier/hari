<?php
$brTitleText = isset($brTitle) ? $brTitle : '';
$prTitleText = isset($prTitle) ? $prTitle : '';
?>
<div class="shell">
   <p class="crumbs"><a href="index.php">Home</a> <span aria-hidden="true">/</span> <span id="breadcrumb_title"><?php echo htmlspecialchars($brTitleText, ENT_QUOTES, 'UTF-8'); ?></span></p>
   <h1 class="page-hero-title" id="pageTitle"><?php echo htmlspecialchars($prTitleText, ENT_QUOTES, 'UTF-8'); ?></h1>
</div>
