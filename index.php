<?php
$page = [
    'title' => 'Elancier | Website Design Company in Madurai, Website Design in Madurai',
    'description' => 'Elancier is a web services company based in Madurai offering website development, mobile application development and custom web development.',
    'canonical' => 'https://elancier.com/',
    'active' => 'home',
];
require __DIR__ . '/includes/header.php';
?>

<section class="hero">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="container hero-grid">
    <div>
      <p class="eyebrow" data-hero="1">Digital products · Web · Mobile · Growth</p>
      <h1 data-hero="2">We build digital experiences that <span class="accent">move businesses forward.</span></h1>
      <p class="lede" data-hero="3">Elancier designs and develops websites, web applications, ecommerce stores and mobile apps for companies that need a reliable product partner in Madurai.</p>
      <div class="btn-row" data-hero="4">
        <a class="btn btn-primary magnetic" href="contact.php">Start a Project <?= icon('arrow', 18) ?></a>
        <a class="btn btn-ghost magnetic" href="portfolio.php">Explore our work</a>
      </div>
      <div class="trust-row" data-hero="5">
        <div class="trust-item"><strong>13+</strong><span>Years in business</span></div>
        <div class="trust-item"><strong>450+</strong><span>Clients served</span></div>
        <div class="trust-item"><strong>500+</strong><span>Projects delivered</span></div>
      </div>
    </div>
    <div class="hero-stage" data-hero="6" aria-hidden="true">
      <article class="float-card fc-browser">
        <div class="window-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
        <div class="ui-body">
          <div class="ui-row w80"></div>
          <div class="ui-row w60"></div>
          <div class="ui-chart"><span></span><span></span><span></span><span></span><span></span><span></span></div>
        </div>
      </article>
      <article class="float-card fc-phone">
        <div class="phone-notch"></div>
        <div class="ui-body">
          <div class="ui-row w60"></div>
          <div class="ui-row w80"></div>
          <div class="ui-row w40"></div>
          <div class="ui-chart" style="height:120px"><span></span><span></span><span></span><span></span></div>
        </div>
      </article>
      <article class="float-card fc-analytics">
        <div class="window-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
        <div class="ui-body">
          <div class="ui-row w40"></div>
          <div class="ui-chart"><span></span><span></span><span></span><span></span><span></span></div>
        </div>
      </article>
      <article class="float-card fc-code">
        <div class="window-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
        <div class="ui-body">
          <p class="code-line"><b>const</b> product = <i>build</i>({ web, app })</p>
          <p class="code-line"><b>await</b> elancier.<i>launch</i>(product)</p>
          <p class="code-line">return <i>growth</i></p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="container" data-reveal>
    <p class="eyebrow">Social proof</p>
    <h2>Trusted by ambitious businesses</h2>
  </div>
  <div class="marquee" aria-label="Client logos">
    <div class="marquee-track">
      <?php for ($loop = 0; $loop < 2; $loop++): foreach ($CLIENTS as $client): ?>
        <div class="logo-card" title="<?= e($client['name']) ?>">
          <img src="<?= e($client['src']) ?>" alt="<?= e($client['name']) ?>" loading="lazy" width="130" height="48">
        </div>
      <?php endforeach; endfor; ?>
    </div>
  </div>
</section>

<section class="section">
  <div class="container intro-grid" data-reveal>
    <div>
      <p class="eyebrow">About Elancier</p>
      <h2>13+ years of turning ideas into digital products.</h2>
    </div>
    <div>
      <p>Elancier Solutions is a creative technology studio in Madurai. Since 2013 we have helped companies grow through websites, custom web platforms and Android and iOS applications.</p>
      <p>We keep the work practical: clear communication, quality delivery, and relationships that last longer than a single launch. Quality is the strategy we follow on every project.</p>
      <a class="svc-link" href="about-us.php">Our story <?= icon('arrow', 16) ?></a>
    </div>
  </div>
  <div class="container pillars" data-reveal>
    <article class="pillar">
      <div class="num">01 — Think</div>
      <h3>Strategy & ideas</h3>
      <p>We start with the business problem, the audience and the outcome you need — then shape the product around it.</p>
    </article>
    <article class="pillar">
      <div class="num">02 — Build</div>
      <h3>Design & engineering</h3>
      <p>Interfaces, websites and applications are designed to be usable, fast and maintainable.</p>
    </article>
    <article class="pillar">
      <div class="num">03 — Grow</div>
      <h3>Optimization & marketing</h3>
      <p>SEO, email and social programs keep the product visible after launch.</p>
    </article>
  </div>
</section>

<section class="section section-blue">
  <div class="container" data-reveal>
    <p class="eyebrow">Capabilities</p>
    <h2>Capabilities built around your business</h2>
    <p class="lede">From ecommerce and CMS platforms to native apps and digital marketing — one team, one conversation.</p>
    <div class="bento" style="margin-top:36px">
      <a class="svc wide" href="web-development.php" data-cursor="Service">
        <span class="num">01</span>
        <span class="icon-wrap"><?= icon('globe') ?></span>
        <h3>Web Development</h3>
        <p>Custom websites and applications with PHP, React, Angular and .NET — built for performance and long-term care.</p>
        <div class="tech"><span class="chip">PHP</span><span class="chip">Angular</span><span class="chip">React</span><span class="chip">.NET</span></div>
        <span class="svc-link">Explore <?= icon('arrow-up-right', 16) ?></span>
      </a>
      <a class="svc mid" href="web-development.php#Ecommerce" data-cursor="Service">
        <span class="num">02</span>
        <span class="icon-wrap"><?= icon('shopping') ?></span>
        <h3>Ecommerce Development</h3>
        <p>Storefronts, carts and catalogues on Magento, Shopify, WooCommerce and WordPress.</p>
        <div class="tech"><span class="chip">Magento</span><span class="chip">Shopify</span><span class="chip">WooCommerce</span></div>
      </a>
      <a class="svc sm" href="mobileapp-development.php" data-cursor="Service">
        <span class="num">03</span>
        <span class="icon-wrap"><?= icon('smartphone') ?></span>
        <h3>Mobile App Development</h3>
        <p>Android and iOS products planned around real user journeys.</p>
        <div class="tech"><span class="chip">Android</span><span class="chip">iOS</span></div>
      </a>
      <a class="svc sm" href="creative-design.php" data-cursor="Service">
        <span class="num">04</span>
        <span class="icon-wrap"><?= icon('palette') ?></span>
        <h3>Creative Design</h3>
        <p>Web design, identity, indoor collaterals and outdoor promotion.</p>
        <div class="tech"><span class="chip">UI</span><span class="chip">Brand</span><span class="chip">Print</span></div>
      </a>
      <a class="svc sm" href="web-development.php#WEB_DEVELOPMENT" data-cursor="Service">
        <span class="num">05</span>
        <span class="icon-wrap"><?= icon('cpu') ?></span>
        <h3>Trending Technologies</h3>
        <p>Modern stacks for products that need to stay current.</p>
        <div class="tech"><span class="chip">React.js</span><span class="chip">Node.js</span><span class="chip">Angular</span></div>
      </a>
      <a class="svc wide" href="online-marketing.php" data-cursor="Service">
        <span class="num">06</span>
        <span class="icon-wrap"><?= icon('megaphone') ?></span>
        <h3>Digital Marketing</h3>
        <p>Search, email and social programmes that keep your brand discoverable after the product ships.</p>
        <div class="tech"><span class="chip">SEO</span><span class="chip">Email</span><span class="chip">Social</span></div>
        <span class="svc-link">Hire a dedicated developer <?= icon('arrow', 16) ?></span>
      </a>
    </div>
    <div class="btn-row">
      <a class="btn btn-primary" href="<?= e($ELANCIER['whatsapp']) ?>" target="_blank" rel="noopener"><?= icon('whatsapp', 18) ?> Hire now</a>
    </div>
  </div>
</section>

<section class="section section-cyan">
  <div class="container" data-reveal style="text-align:center">
    <p class="eyebrow">Stack</p>
    <h2>Technologies we work with</h2>
    <div class="tech-cloud" style="margin-top:32px">
      <?php foreach (['PHP','React','Node.js','Angular','.NET','WordPress','Shopify','Magento','WooCommerce','Android','iOS'] as $t): ?>
        <span class="tech-pill"><?= e($t) ?></span>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section" id="work">
  <div class="container" data-reveal>
    <p class="eyebrow">Portfolio</p>
    <h2>Selected work</h2>
    <p class="lede">A few products from our studio. Visuals are shown as they appear on the original Elancier site.</p>
  </div>
  <div class="container">
    <?php foreach ($PROJECTS as $i => $project): ?>
      <article class="work-item <?= $i === 1 ? 'reverse' : '' ?>" data-reveal data-cursor="VIEW" id="<?= e(strtolower($project['name']) === 'now way' ? 'nowway' : strtolower($project['name'])) ?>">
        <div class="work-visual">
          <img src="<?= e($project['image']) ?>" alt="<?= e($project['name']) ?> mobile application" loading="lazy" width="370" height="400">
        </div>
        <div class="work-copy">
          <p class="eyebrow"><?= e($project['category']) ?></p>
          <h3><?= e($project['name']) ?></h3>
          <div class="meta-row">
            <?php foreach ($project['tech'] as $tech): ?><span class="chip"><?= e($tech) ?></span><?php endforeach; ?>
          </div>
          <p><?= e($project['outcome']) ?></p>
          <a class="svc-link" href="portfolio.php">View project <?= icon('arrow', 16) ?></a>
        </div>
      </article>
    <?php endforeach; ?>
  </div>
</section>

<section class="section section-lavender">
  <div class="container" data-reveal>
    <p class="eyebrow">Industries we work for</p>
    <h2>Helping businesses across domains</h2>
    <p class="lede">We deliver digital products for organisations in commerce, education, finance, healthcare and more.</p>
    <div class="industry-grid" style="margin-top:32px">
      <?php
      $industries = [
        'Social Networking','Digital Marketing','Ecommerce','B2B','Banking','Enterprise',
        'Education','Travel','Healthcare','Events','Restaurant','Consulting',
      ];
      foreach ($industries as $i => $name): ?>
        <a class="industry" href="contact.php">
          <span class="n"><?= str_pad((string)($i + 1), 2, '0', STR_PAD_LEFT) ?></span>
          <h3><?= e($name) ?></h3>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section">
  <div class="container why-layout">
    <div class="sticky-visual" data-reveal>
      <div>
        <p class="eyebrow">Why Elancier</p>
        <h2>Not just developers. Your digital product partner.</h2>
        <p>We believe in teamwork and supporting our people with current technology — then applying the same care to your product.</p>
      </div>
    </div>
    <div>
      <?php
      $whys = [
        ['Experienced team', 'The Right Team — a practical group of designers and engineers who stay close to the work.'],
        ['User-centric design', 'Interfaces that people can actually use, on the devices they already have.'],
        ['Modern technology', 'PHP, React, Angular, .NET, Android and iOS — chosen to fit the product, not the trend of the week.'],
        ['Reliable delivery', 'Timelines we can stand behind, with communication you can follow.'],
        ['Long-term support', 'Maintenance, iteration and a team that still answers after launch. Support is available 12/5.'],
      ];
      foreach ($whys as $item): ?>
        <article class="why-item" data-reveal>
          <h3><?= icon('check', 18) ?> <?= e($item[0]) ?></h3>
          <p><?= e($item[1]) ?></p>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section-mist">
  <div class="container" data-reveal>
    <p class="eyebrow">Method</p>
    <h2>How we turn ideas into products</h2>
    <div class="process" style="margin-top:28px">
      <?php
      $steps = [
        ['Discover', 'Understand the business, users and constraints.'],
        ['Strategy', 'Define scope, success measures and the product shape.'],
        ['Design', 'Interface, content structure and brand application.'],
        ['Develop', 'Build the website, application or commerce platform.'],
        ['Launch', 'Deploy, test and hand over with documentation.'],
        ['Scale', 'Maintain, improve and support the product in production.'],
      ];
      foreach ($steps as $i => $s): ?>
        <div class="step">
          <div class="step-n"><?= str_pad((string)($i + 1), 2, '0', STR_PAD_LEFT) ?></div>
          <div>
            <h3><?= e($s[0]) ?></h3>
            <p><?= e($s[1]) ?></p>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section-blue">
  <div class="container" data-reveal>
    <p class="eyebrow">By the numbers</p>
    <h2>Work that has compounded since 2013</h2>
    <div class="stats-grid" style="margin-top:32px">
      <div class="stat"><b><span data-count="13" data-suffix="+">0</span></b><span>Years in business</span></div>
      <div class="stat"><b><span data-count="450" data-suffix="+">0</span></b><span>Happy clients</span></div>
      <div class="stat"><b><span data-count="500" data-suffix="+">0</span></b><span>Projects done</span></div>
      <div class="stat"><b><span data-count="95" data-suffix="k">0</span></b><span>Hours worked</span></div>
    </div>
    <p class="lede" style="margin-top:20px">Team of 13+ people. Support available 12/5.</p>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
