<?php
$title = 'Some of our Works';
$meta_description = 'Selected website and mobile app work from Elancier Solutions.';
include 'partials/header.php';
include 'partials/menu.php';

$works = [
  ['nbb_web.jpg', 'NBB', 'Website', 'website', 'portfolio-details.php'],
  ['nhra_web.jpg', 'NHRA', 'Website', 'website', 'portfolio-details.php'],
  ['hra_helth_web.jpg', 'NHRA Healthcare', 'Website', 'website', 'portfolio-details.php'],
  ['non_stop_web.jpg', 'Non Stop', 'Website', 'website', 'portfolio-details.php'],
  ['vasantham.jpg', 'Vasantham & Co', 'Website', 'website', 'javascript:void(0)'],
  ['rehaan.jpg', 'Rehaan Furnishing', 'Website', 'website', 'portfolio-details.php'],
  ['jaksi.jpg', 'Jaksi Cinema', 'Website', 'website', 'javascript:void(0)'],
  ['dforth.jpg', 'Dforth Technologies', 'Website', 'website', 'javascript:void(0)'],
  ['phdprime.jpg', 'Phd Prime', 'Website', 'website', 'javascript:void(0)'],
  ['zoppey.jpg', 'Zoppey', 'Website', 'website', 'javascript:void(0)'],
  ['bnu.jpg', 'Bengaluru North University', 'Website', 'website', 'javascript:void(0)'],
  ['now_way_web.jpg', 'Now Way', 'Website', 'website', 'javascript:void(0)'],
  ['matlab.jpg', 'Mat Lab', 'Website', 'website', 'javascript:void(0)'],
  ['smc.jpg', 'SMC Co-Operative Society', 'Website', 'website', 'javascript:void(0)'],
  ['vasantham_store_web.jpg', 'Vasantham Store', 'Website', 'website', 'javascript:void(0)'],
  ['hra_helth_web.jpg', 'NHRA Healthcare', 'Mobile App', 'mobile_app', 'javascript:void(0)'],
  ['zoppey_mobile.jpg', 'Zoppey', 'Mobile App', 'mobile_app', 'javascript:void(0)'],
  ['talkmate_mobile.jpg', 'Talk Mate', 'Mobile App', 'mobile_app', 'javascript:void(0)'],
  ['vanitha_mobile.jpg', 'Vanitha', 'Mobile App', 'mobile_app', 'javascript:void(0)'],
  ['vhave_mobile.jpg', 'Vhave Shopping', 'Mobile App', 'mobile_app', 'javascript:void(0)'],
  ['indian_gst.jpg', 'Indian Gst', 'Mobile App', 'mobile_app', 'javascript:void(0)'],
];
?>
<section class="page-hero" id="breadcrumb" prTitle="Some of our Works" brTitle="Our Work">
  <?php include 'partials/breadcrumb.php'; ?>
</section>
<section class="section">
  <div class="shell">
    <div class="work-head" data-reveal>
      <div>
        <p class="kicker">Our Work</p>
        <h2>Our Latest Creative Work</h2>
      </div>
      <div class="filters" data-filter-group=".work-item">
        <button type="button" data-filter="*" class="is-on is-checked">All</button>
        <button type="button" data-filter="website">Website</button>
        <button type="button" data-filter="mobile_app">Mobile App</button>
      </div>
    </div>
    <div class="work-masonry card-list">
      <?php foreach ($works as $work) { ?>
        <a class="work-card work-item single-card-item <?php echo $work[3]; ?>" href="<?php echo $work[4]; ?>">
          <div class="frame">
            <img src="images/portfolio/<?php echo $work[0]; ?>" alt="<?php echo htmlspecialchars($work[1] . ' ' . $work[2], ENT_QUOTES, 'UTF-8'); ?>" loading="lazy" decoding="async" width="640" height="440">
          </div>
          <div class="meta">
            <div>
              <h3><?php echo htmlspecialchars($work[1], ENT_QUOTES, 'UTF-8'); ?></h3>
              <p><?php echo htmlspecialchars($work[2], ENT_QUOTES, 'UTF-8'); ?></p>
            </div>
            <span>View →</span>
          </div>
        </a>
      <?php } ?>
    </div>
  </div>
</section>
<?php include 'partials/footer.php'; ?>
