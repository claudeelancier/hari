<?php
require __DIR__ . '/includes/service-page.php';

service_page([
    'title' => 'Web Development Company in Madurai | Elancier',
    'description' => 'Ecommerce, CMS, WordPress and website maintenance from Elancier Solutions in Madurai. PHP, React, Angular and .NET.',
    'canonical' => 'https://elancier.com/web-development.php',
    'active' => 'service-web',
    'crumb' => 'Web Development',
    'eyebrow' => 'Web development',
    'heading' => 'Websites and platforms that can actually run a business.',
    'lede' => 'Elancier builds ecommerce stores, CMS sites, WordPress products and long-term website care — with PHP, React, Angular and .NET in the toolkit.',
    'faq' => [
        ['Do you rebuild existing sites?', 'Yes. Website redesign and maintenance are a core service when a site is slow, dated or hard to update.'],
        ['Which ecommerce platforms do you use?', 'Magento, Shopify and WooCommerce, chosen to match catalogue size and operations.'],
        ['Can you maintain WordPress after launch?', 'Yes. WordPress development includes themes, plugins and ongoing care.'],
    ],
    'jsonld' => [
        '@type' => 'Service',
        'name' => 'Web Development',
        'provider' => ['@id' => 'https://elancier.com/#org'],
        'areaServed' => 'IN',
    ],
], [
    [
        'id' => 'Ecommerce',
        'eyebrow' => 'Ecommerce solutions',
        'title' => 'Stores built for a fast-moving industry',
        'copy' => [
            'Web development and design are essential if you want an online store to attract and hold traffic. Elancier offers ecommerce web design, theme development, shopping-cart, plug-in and module work for small, mid and large-scale businesses.',
        ],
        'points' => ['Magento', 'Shopify', 'WooCommerce'],
    ],
    [
        'id' => 'WEB_DEVELOPMENT',
        'eyebrow' => 'Web development',
        'title' => 'Custom sites that carry a company’s identity',
        'copy' => [
            'Every organisation needs a presence that matches the work it does. We build static and dynamic websites with current tools. Our developers have delivered projects across multiple industries using UI/UX, PHP, React and Angular.',
        ],
        'points' => ['UI/UX', 'PHP', 'React', 'Angular', '.NET'],
    ],
    [
        'id' => 'Wordpress',
        'eyebrow' => 'CMS & WordPress',
        'title' => 'WordPress when you need an editable, durable CMS',
        'copy' => [
            'WordPress is an open-source publishing platform with a large ecosystem of plugins, themes and widgets. It remains a practical CMS for organisations that need to publish without waiting on a developer for every change. We build and extend WordPress sites with that in mind.',
        ],
        'points' => ['WordPress', 'CMS'],
    ],
    [
        'id' => 'web_maintenance',
        'eyebrow' => 'Redesign & maintenance',
        'title' => 'Keep the site current — or replace what no longer works',
        'copy' => [
            'If a website is poorly designed, a redesign can restore clarity and help it attract visitors again.',
            'Website maintenance keeps a site running smoothly. It can be regular or scheduled. When access needs to pause, we plan notices so people are not surprised.',
        ],
        'points' => ['High quality', 'Clear visual hierarchy', 'Reliable', 'Customer-friendly'],
    ],
]);
