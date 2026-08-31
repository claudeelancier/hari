<?php
$page = [
    'title' => 'Elancier | Careers',
    'description' => 'Careers at Elancier Solutions in Madurai. Join a studio that designs and builds websites and mobile applications.',
    'canonical' => 'https://elancier.com/careers.php',
    'active' => 'careers',
];
require __DIR__ . '/includes/header.php';
?>

<section class="page-hero">
  <div class="container">
    <p class="crumbs"><a href="index.php">Home</a> / Careers</p>
    <p class="eyebrow">Careers</p>
    <h1>Career and culture at Elancier</h1>
    <p class="lede">We look for people who care about design and programming. The work is busy, collaborative, and built around continual improvement.</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="#jobs">View openings <?= icon('arrow', 18) ?></a>
      <a class="btn btn-ghost" href="mailto:admin@elancier.com">Send a résumé</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container intro-grid" data-reveal>
    <div>
      <h2>A studio that stays close to the craft</h2>
      <p>At Elancier we look for professionals who raise the quality of the team. Fun, enthusiasm and continual innovation sit next to shipping websites and applications that clients can rely on. The environment is best described as busy with creativity.</p>
    </div>
    <div class="pillars" style="margin:0">
      <article class="pillar"><h3>Design-led</h3><p>Interfaces, identity and product thinking share the same table as engineering.</p></article>
      <article class="pillar"><h3>Hands-on</h3><p>You work on real client products — not endless internal prototypes.</p></article>
      <article class="pillar"><h3>Madurai based</h3><p>A 13+ person team with 12/5 support and a preference for people who take ownership.</p></article>
    </div>
  </div>
</section>

<section class="section section-soft" id="jobs">
  <div class="container" data-reveal>
    <p class="eyebrow">Open roles</p>
    <h2>Current opening</h2>
    <article class="job">
      <h3>Mobile / Web UI Designer</h3>
      <p>Around 1+ years of experience on web-based applications. Strong knowledge of HTML, Bootstrap, CSS and jQuery. Prior layout work for products, comfort with responsive design, and the ability to produce wireframes, process flows and HTML mockups.</p>
      <p>Required experience: at least 1+ years.</p>
      <p>Share your résumé with <a href="mailto:admin@elancier.com"><strong>admin@elancier.com</strong></a>.</p>
    </article>
    <p class="lede">Roles that are not listed here are not currently open. We do not keep a public backlog of hidden vacancies.</p>
  </div>
</section>

<section class="section">
  <div class="container" data-reveal>
    <p class="eyebrow">Hiring</p>
    <h2>How we hire</h2>
    <div class="process">
      <div class="step"><div class="step-n">01</div><div><h3>Introduce yourself</h3><p>Send a résumé and a short note about the work you want to do.</p></div></div>
      <div class="step"><div class="step-n">02</div><div><h3>Conversation</h3><p>We talk through your experience and the problems you like solving.</p></div></div>
      <div class="step"><div class="step-n">03</div><div><h3>Craft review</h3><p>A practical look at design or code that represents how you work.</p></div></div>
      <div class="step"><div class="step-n">04</div><div><h3>Offer</h3><p>If it’s a fit, we move quickly and stay clear about the role.</p></div></div>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
