<?php
require __DIR__ . '/includes/service-page.php';

service_page([
    'title' => 'Creative Design | Elancier Solutions',
    'description' => 'Web design, corporate identity, indoor collaterals and outdoor promotion from Elancier Solutions, Madurai.',
    'canonical' => 'https://elancier.com/creative-design.php',
    'active' => 'service-creative',
    'crumb' => 'Creative Design',
    'eyebrow' => 'Creative design',
    'heading' => 'Design that explains the business at a glance.',
    'lede' => 'Web interfaces, identity systems and print — planned so the brand feels consistent on screen and in the room.',
    'faq' => [
        ['Can you design a logo if we have no brief?', 'Yes. If you have no direction yet, we propose options that fit the business, then refine with you.'],
        ['Do you handle print as well as web?', 'Indoor collaterals and outdoor promotion are part of the same design practice.'],
    ],
    'jsonld' => ['@type' => 'Service', 'name' => 'Creative Design', 'provider' => ['@id' => 'https://elancier.com/#org']],
], [
    [
        'id' => 'Web_designing',
        'eyebrow' => 'Web design',
        'title' => 'Unique web designs that load quickly and stay usable',
        'copy' => [
            'Web design still decides whether an online presence feels trustworthy. A site should make its purpose obvious. Elancier designs to the customer’s brief, does not change work without agreement, and keeps iterating until the design is right.',
        ],
        'points' => ['Unique layouts', 'Easy accessibility', 'Fast loading', 'Fully responsive'],
    ],
    [
        'id' => 'Corporate_identity',
        'eyebrow' => 'Corporate identity',
        'title' => 'Logos and stationery that stand in for the company',
        'copy' => [
            'A logo is the emblem of an institution — name and function in a single mark. We design logos around the customer’s need. If there is no idea yet, we propose a mark that fits the business, then apply it to cards, letterheads and ID cards.',
        ],
        'points' => ['Logo', 'Business card', 'Letterhead', 'ID card'],
    ],
    [
        'id' => 'Indoor_Collaterals',
        'eyebrow' => 'Indoor collaterals',
        'title' => 'Sales materials that look as considered as the product',
        'copy' => [
            'Marketing and sales work better when collaterals match the brand. We produce contemporary indoor materials for both interactive and traditional media.',
        ],
        'points' => ['Tags', 'Signage', 'Standee', 'Posters', 'Flyers', 'Banners', 'Leaflets'],
    ],
    [
        'id' => 'Outdoor_Promotion',
        'eyebrow' => 'Outdoor promotion',
        'title' => 'Campaigns that still work at street scale',
        'copy' => [
            'A marketing campaign is incomplete without outdoor pieces. Elancier design teams produce outdoor media that holds up at a distance and in print.',
        ],
        'points' => ['Hoardings', 'Flex & digital prints', 'Outdoor posters', 'Outdoor signage'],
    ],
]);
