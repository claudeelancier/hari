<?php
$page = [
    'title' => 'Elancier | Selected Work',
    'description' => 'Selected websites and mobile applications designed and developed by Elancier Solutions, Madurai.',
    'canonical' => 'https://elancier.com/portfolio.php',
    'active' => 'work',
];
require __DIR__ . '/includes/header.php';
?>

<section class="page-hero">
  <div class="container">
    <p class="crumbs"><a href="index.php">Home</a> / Work</p>
    <p class="eyebrow">Our work</p>
    <h1>Selected work</h1>
    <p class="lede">These are the projects currently featured on Elancier. We present them as case-study layouts without inventing extra client claims.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <?php foreach ($PROJECTS as $i => $project):
      $id = strtolower(str_replace(' ', '', $project['name']));
    ?>
      <article class="work-item <?= $i === 1 ? 'reverse' : '' ?>" id="<?= e($id) ?>" data-reveal data-cursor="VIEW">
        <div class="work-visual">
          <img src="<?= e($project['image']) ?>" alt="<?= e($project['name']) ?> screenshot" width="370" height="400">
        </div>
        <div class="work-copy">
          <p class="eyebrow">0<?= $i + 1 ?> · <?= e($project['category']) ?></p>
          <h2><?= e($project['name']) ?></h2>
          <div class="meta-row"><?php foreach ($project['tech'] as $tech): ?><span class="chip"><?= e($tech) ?></span><?php endforeach; ?></div>
          <p><?= e($project['outcome']) ?></p>
          <a class="btn btn-primary" href="contact.php">Start a similar project <?= icon('arrow', 16) ?></a>
        </div>
      </article>
    <?php endforeach; ?>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
