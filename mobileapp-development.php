<?php
require __DIR__ . '/includes/service-page.php';

service_page([
    'title' => 'Mobile App Development | Android & iOS | Elancier',
    'description' => 'Android and iPhone application development by Elancier Solutions in Madurai.',
    'canonical' => 'https://elancier.com/mobileapp-development.php',
    'active' => 'service-mobile',
    'crumb' => 'Mobile Apps',
    'eyebrow' => 'Mobile app development',
    'heading' => 'Android and iOS products with a plan, not just a screen.',
    'lede' => 'Whether you need a business app or a mobile-first campaign, we plan the architecture, the user experience and how the product connects to the rest of your systems.',
    'faq' => [
        ['Do you build native Android and iOS apps?', 'Yes. Android and iPhone application development are listed services, each with its own planning and delivery path.'],
        ['Can an app connect to an existing website?', 'That integration is part of how we plan the product, not an afterthought.'],
    ],
    'jsonld' => ['@type' => 'Service', 'name' => 'Mobile App Development', 'provider' => ['@id' => 'https://elancier.com/#org']],
], [
    [
        'id' => 'Android',
        'eyebrow' => 'Android app development',
        'title' => 'We build for Android and use what the platform offers',
        'copy' => [
            'Every mobile solution needs planning: the end-user experience, and how the app sits with your existing infrastructure. We treat Android work as product work, not a wrapper around a website.',
        ],
        'points' => ['Android', 'Responsive layouts', 'Performance'],
    ],
    [
        'id' => 'IOS',
        'eyebrow' => 'iOS app development',
        'title' => 'iPhone applications that stay useful',
        'copy' => [
            'Our iPhone application development group focuses on inventive, adaptable products with a high usability bar — applications people can live with, not just download once.',
        ],
        'points' => ['iPhone', 'iOS'],
    ],
]);
