<?php
require_once __DIR__ . '/config.php';

function service_page(array $meta, array $blocks): void
{
    global $PROJECTS, $ELANCIER, $NAV_SERVICES;
    $page = $meta;
    require __DIR__ . '/header.php';
    ?>
    <section class="page-hero">
      <div class="container">
        <p class="crumbs"><a href="index.php">Home</a> / <?= e($meta['crumb'] ?? 'Services') ?></p>
        <p class="eyebrow"><?= e($meta['eyebrow']) ?></p>
        <h1><?= e($meta['heading']) ?></h1>
        <p class="lede"><?= e($meta['lede']) ?></p>
        <div class="btn-row">
          <a class="btn btn-primary" href="contact.php">Start a Project <?= icon('arrow', 18) ?></a>
          <a class="btn btn-ghost" href="portfolio.php">Related work</a>
        </div>
      </div>
    </section>

    <?php foreach ($blocks as $i => $block): ?>
      <section class="section <?= $i % 2 ? 'section-soft' : '' ?>" id="<?= e($block['id']) ?>">
        <div class="container cap-block" data-reveal>
          <div class="cap-visual" aria-hidden="true"></div>
          <div>
            <p class="eyebrow"><?= e($block['eyebrow']) ?></p>
            <h2><?= e($block['title']) ?></h2>
            <?php foreach ($block['copy'] as $p): ?><p><?= e($p) ?></p><?php endforeach; ?>
            <?php if (!empty($block['points'])): ?>
              <div class="meta-row">
                <?php foreach ($block['points'] as $pt): ?><span class="chip"><?= e($pt) ?></span><?php endforeach; ?>
              </div>
            <?php endif; ?>
          </div>
        </div>
      </section>
    <?php endforeach; ?>

    <section class="section section-blue">
      <div class="container" data-reveal>
        <p class="eyebrow">Process</p>
        <h2>How this work usually runs</h2>
        <div class="process" style="margin-top:20px">
          <?php foreach (['Discover the brief','Shape the approach','Design the experience','Build and test','Launch with care','Support what ships'] as $n => $label): ?>
            <div class="step"><div class="step-n"><?= str_pad((string)($n+1), 2, '0', STR_PAD_LEFT) ?></div><div><h3><?= e($label) ?></h3></div></div>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container faq" data-reveal>
        <p class="eyebrow">FAQ</p>
        <h2>Questions we hear often</h2>
        <?php foreach ($meta['faq'] as $qa): ?>
          <details>
            <summary><?= e($qa[0]) ?></summary>
            <p><?= e($qa[1]) ?></p>
          </details>
        <?php endforeach; ?>
      </div>
    </section>
    <?php
    require __DIR__ . '/footer.php';
}
