<?php
$title = 'Our Clients';
include 'partials/header.php';
include 'partials/menu.php';
include 'data/clients.php';
?>
<section class="page-hero" id="breadcrumb" prTitle="Our Clients" brTitle="Our Clients">
    <?php include 'partials/breadcrumb.php'; ?>
</section>
<section class="section">
    <div class="shell">
        <div class="section-head" data-reveal>
            <div>
                <p class="kicker">Our happy customers</p>
                <h2>Some of our Clients</h2>
            </div>
        </div>
        <div class="logo-wall">
            <?php foreach ($elancier_clients as $client) { ?>
                <div class="client-tile">
                    <a href="javascript:void(0)">
                        <img src="<?php echo htmlspecialchars($client['src'], ENT_QUOTES, 'UTF-8'); ?>" alt="<?php echo htmlspecialchars($client['name'], ENT_QUOTES, 'UTF-8'); ?>" class="img-fluid" loading="lazy" decoding="async">
                        <p class="clients_p"><?php echo htmlspecialchars($client['name'], ENT_QUOTES, 'UTF-8'); ?></p>
                    </a>
                </div>
            <?php } ?>
        </div>
    </div>
</section>
<?php include 'partials/footer.php'; ?>
