<?php
require __DIR__ . '/includes/service-page.php';

service_page([
    'title' => 'Online Marketing | SEO, Email & Social | Elancier',
    'description' => 'Search engine optimisation, email marketing and social media marketing from Elancier Solutions, Madurai.',
    'canonical' => 'https://elancier.com/online-marketing.php',
    'active' => 'service-marketing',
    'crumb' => 'Online Marketing',
    'eyebrow' => 'Online marketing',
    'heading' => 'Visibility that is planned, then maintained.',
    'lede' => 'SEO, email and social programmes designed as an ongoing relationship — not a one-week burst of posts.',
    'faq' => [
        ['Is SEO a one-off project?', 'Monthly search engine optimisation is how we describe the work: improve visibility, then keep it.'],
        ['Which social networks do you cover?', 'Facebook, X (Twitter), LinkedIn and Instagram are part of the social marketing offer. Google+ is no longer a live channel.'],
    ],
    'jsonld' => ['@type' => 'Service', 'name' => 'Online Marketing', 'provider' => ['@id' => 'https://elancier.com/#org']],
], [
    [
        'id' => 'SEO',
        'eyebrow' => 'Search engine optimisation',
        'title' => 'Someone who stays with the work',
        'copy' => [
            'Elancier helps businesses improve online visibility. Monthly SEO is an ongoing relationship: strengthen the brand’s presence, keep it, and continue attracting customers. We take time to understand the business and the audience, then build a strategy that can increase share of search over time.',
        ],
        'points' => ['Website', 'App'],
    ],
    [
        'id' => 'Email_Marketing',
        'eyebrow' => 'Email marketing',
        'title' => 'Email that reaches people and asks them to act',
        'copy' => [
            'Email can reach a wide audience quickly and lets recipients act immediately. Campaigns can run with modest tooling when the message, heading and brand marks are consistent. Regular, well-structured mail supports awareness and client relationships.',
        ],
        'points' => ['Bulk email', 'Email resources'],
    ],
    [
        'id' => 'Social_Marketing',
        'eyebrow' => 'Social marketing',
        'title' => 'Attention that compounds when people engage well',
        'copy' => [
            'With planning and careful implementation, social media can create awareness far faster than waiting for organic search alone. When people engage with a brand in a positive way, goodwill spreads. We help run that work on the networks that still matter.',
        ],
        'points' => ['Facebook', 'X', 'LinkedIn', 'Instagram'],
    ],
]);
