<?php
$page = [
    'title' => 'Elancier | About Us',
    'description' => 'Elancier Solutions is a Madurai-based web and mobile product studio founded in 2013. Learn how we design, develop and support digital work.',
    'canonical' => 'https://elancier.com/about-us.php',
    'active' => 'about',
    'jsonld' => [
        '@type' => 'BreadcrumbList',
        'itemListElement' => [
            ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => 'https://elancier.com/'],
            ['@type' => 'ListItem', 'position' => 2, 'name' => 'About Us', 'item' => 'https://elancier.com/about-us.php'],
        ],
    ],
];
require __DIR__ . '/includes/header.php';
?>

<section class="page-hero">
  <div class="container">
    <p class="crumbs"><a href="index.php">Home</a> / About Us</p>
    <p class="eyebrow">About Elancier</p>
    <h1>A Madurai studio for websites, apps and lasting product work.</h1>
    <p class="lede">Founded in 2013, Elancier Solutions helps companies grow with cost-effective web and mobile application development — and with relationships that outlast a launch.</p>
  </div>
</section>

<section class="section">
  <div class="container intro-grid" data-reveal>
    <div>
      <h2>The company story</h2>
      <p>Elancier Solutions is a creative web design company with an energetic team that builds websites and Android and iOS applications. As a technology company we keep looking for simpler ways to help organisations grow: by building relationships, shipping work we can stand behind, and treating quality as the strategy.</p>
    </div>
    <div class="contact-card">
      <p class="eyebrow">Since 2013</p>
      <div class="process">
        <div class="step"><div class="step-n">13</div><div><h3>Founded in Madurai</h3><p>We started as a digital solutions studio focused on practical web work.</p></div></div>
        <div class="step"><div class="step-n">→</div><div><h3>Products across domains</h3><p>Commerce, education, healthcare, retail and enterprise teams now sit in the same portfolio.</p></div></div>
        <div class="step"><div class="step-n">+</div><div><h3>Still close to the work</h3><p>A 13+ person team, 12/5 support, and a preference for long-term clients.</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="container" data-reveal>
    <p class="eyebrow">The strengths</p>
    <h2>How we work with clients</h2>
    <div class="industry-grid" style="margin-top:28px">
      <?php
      $strengths = [
        'In business since 2013',
        'Customer-oriented, with long-term relationships',
        'Serving client interests as a matter of culture',
        'Strong object-oriented programming and design skills',
        'Management and specialists experienced in their craft',
        'Global thinking applied to local and national work',
      ];
      foreach ($strengths as $s): ?>
        <article class="industry"><h3><?= icon('check', 18) ?> <?= e($s) ?></h3></article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section">
  <div class="container" data-reveal>
    <p class="eyebrow">Mission</p>
    <h2>Design. Develop. Deploy. Support.</h2>
    <div class="pillars">
      <article class="pillar"><h3>Design</h3><p>Unique web designs with easy access, fast loading and full responsiveness.</p></article>
      <article class="pillar"><h3>Develop</h3><p>We use current tools to deliver websites and applications that hold up in production.</p></article>
      <article class="pillar"><h3>Deploy</h3><p>Reliable launches that explain the product clearly to the people who will use it.</p></article>
      <article class="pillar"><h3>Support</h3><p>Help that stays available after go-live — quickly, carefully and on time.</p></article>
    </div>
  </div>
</section>

<section class="section section-blue">
  <div class="container stats-grid" data-reveal>
    <div class="stat"><b>13+</b><span>Years in business</span></div>
    <div class="stat"><b>450+</b><span>Happy clients</span></div>
    <div class="stat"><b>500+</b><span>Projects done</span></div>
    <div class="stat"><b>95k</b><span>Hours worked</span></div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
