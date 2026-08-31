<?php
declare(strict_types=1);

$ELANCIER = [
    'name' => 'Elancier Solutions',
    'short' => 'Elancier',
    'tagline' => 'think different — simplified',
    'founded' => 2013,
    'years' => 13,
    'clients' => 450,
    'projects' => 500,
    'hours' => '95k',
    'team' => 13,
    'support' => '12/5',
    'phone' => '+91 81446 88721',
    'phone_href' => 'tel:+918144688721',
    'phone_alt' => '+91 80123 08030',
    'phone_alt_href' => 'tel:+918012308030',
    'email' => 'admin@elancier.com',
    'skype' => 'elancier',
    'skype_href' => 'skype:selva8040?call',
    'whatsapp' => 'https://api.whatsapp.com/message/JMMCX6T3VMLPK1',
    'hours_text' => 'Monday – Friday, 10:00 am to 6:00 pm IST',
    'address' => '94-19, 2nd floor, Mani Kothanar Street, Bypass Rd, Sathyamoorthy Nagar, Madurai, Tamil Nadu 625016',
    'map_embed' => 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d502987.9831900911!2d78.19896454322713!3d9.967728693204961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c52606455dcb%3A0xef91ea0fca0da57!2sELANCIER%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1779752604926!5m2!1sen!2sin',
    'map_link' => 'https://www.google.com/maps/search/?api=1&query=ELANCIER+SOLUTIONS+Madurai',
    'social' => [
        'facebook' => 'https://www.facebook.com/elanciersolutions/?ref=aymt_homepage_panel',
        'twitter' => 'https://twitter.com/elanciermdu',
        'instagram' => 'https://www.instagram.com/elanciersolutions/',
        'linkedin' => 'https://in.linkedin.com/company/elanciersolutions',
    ],
    'base' => '',
];

function e(string $s): string
{
    return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function page_url(string $path = 'index.php'): string
{
    return $path;
}

function icon(string $name, int $size = 24): string
{
    $icons = [
        'arrow' => '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
        'arrow-up-right' => '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
        'phone' => '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
        'mail' => '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
        'map' => '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
        'clock' => '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
        'menu' => '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
        'close' => '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
        'chevron' => '<path d="m6 9 6 6 6-6"/>',
        'globe' => '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
        'shopping' => '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
        'smartphone' => '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
        'palette' => '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
        'cpu' => '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M9 2v2"/><path d="M9 20v2"/><path d="M2 9h2"/><path d="M2 15h2"/><path d="M20 9h2"/><path d="M20 15h2"/>',
        'megaphone' => '<path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
        'layers' => '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="m22 12.57-8.58 3.91a2 2 0 0 1-1.66 0L3.18 12.57"/><path d="m22 17.57-8.58 3.91a2 2 0 0 1-1.66 0L3.18 17.57"/>',
        'spark' => '<path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="m5.6 5.6 2.1 2.1"/><path d="m16.3 16.3 2.1 2.1"/><path d="m5.6 18.4 2.1-2.1"/><path d="m16.3 7.7 2.1-2.1"/>',
        'users' => '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        'shield' => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>',
        'heart' => '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
        'zap' => '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
        'check' => '<path d="M20 6 9 17l-5-5"/>',
        'whatsapp' => '<path d="M20.5 11.5a8.5 8.5 0 0 1-12.1 7.7L4 21l1.9-4.3A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M9.2 8.8c.2-.5.3-.5.6-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.2.6l-.4.4c-.1.1-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5 0l.4-.4c.2-.2.4-.3.6-.2l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .4-.5.6A6 6 0 0 1 9.2 8.8Z"/>',
        'linkedin' => '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
        'instagram' => '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
        'facebook' => '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
        'x' => '<path d="M4 4l11.7 16h4.3L8.3 4z"/><path d="M4 20 15.7 4H20L8.3 20z"/>',
        'code' => '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
        'layout' => '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
        'chart' => '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
        'briefcase' => '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
        'star' => '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
        'plus' => '<path d="M12 5v14"/><path d="M5 12h14"/>',
        'send' => '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
        'monitor' => '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
    ];
    $path = $icons[$name] ?? $icons['spark'];
    return '<svg class="icon" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $path . '</svg>';
}

$NAV_SERVICES = [
    [
        'title' => 'Web Development',
        'href' => 'web-development.php',
        'icon' => 'globe',
        'items' => [
            ['label' => 'Ecommerce Solutions', 'href' => 'web-development.php#Ecommerce', 'desc' => 'Shopify, Magento & WooCommerce stores'],
            ['label' => 'CMS Solutions', 'href' => 'web-development.php#Wordpress', 'desc' => 'Flexible content platforms'],
            ['label' => 'WordPress Development', 'href' => 'web-development.php#Wordpress', 'desc' => 'Themes, plugins and custom builds'],
            ['label' => 'Website Maintenance', 'href' => 'web-development.php#web_maintenance', 'desc' => 'Care, updates and redesigns'],
        ],
    ],
    [
        'title' => 'Creative Design',
        'href' => 'creative-design.php',
        'icon' => 'palette',
        'items' => [
            ['label' => 'Web Design', 'href' => 'creative-design.php#Web_designing', 'desc' => 'Responsive, conversion-led UI'],
            ['label' => 'Corporate Identity', 'href' => 'creative-design.php#Corporate_identity', 'desc' => 'Logos, stationery and brand systems'],
            ['label' => 'Indoor Collaterals', 'href' => 'creative-design.php#Indoor_Collaterals', 'desc' => 'Print and in-venue materials'],
            ['label' => 'Outdoor Promotion', 'href' => 'creative-design.php#Outdoor_Promotion', 'desc' => 'Hoardings, flex and signage'],
        ],
    ],
    [
        'title' => 'Mobile App Development',
        'href' => 'mobileapp-development.php',
        'icon' => 'smartphone',
        'items' => [
            ['label' => 'Android App Development', 'href' => 'mobileapp-development.php#Android', 'desc' => 'Native Android product builds'],
            ['label' => 'iOS App Development', 'href' => 'mobileapp-development.php#IOS', 'desc' => 'iPhone applications with polish'],
        ],
    ],
    [
        'title' => 'Online Marketing',
        'href' => 'online-marketing.php',
        'icon' => 'megaphone',
        'items' => [
            ['label' => 'Search Engine Optimization', 'href' => 'online-marketing.php#SEO', 'desc' => 'Visibility that compounds'],
            ['label' => 'Email Marketing', 'href' => 'online-marketing.php#Email_Marketing', 'desc' => 'Campaigns that stay on-brand'],
            ['label' => 'Social Marketing', 'href' => 'online-marketing.php#Social_Marketing', 'desc' => 'Social presence with purpose'],
        ],
    ],
];

$CLIENTS = [
    ['src' => 'images/client/rare_tech.png', 'name' => 'Rare Tech'],
    ['src' => 'images/client/dci.png', 'name' => 'DCI'],
    ['src' => 'images/client/dforth.svg', 'name' => 'Dforth Technologies'],
    ['src' => 'images/client/naga.png', 'name' => 'Naga Foods'],
    ['src' => 'images/client/bmg.png', 'name' => 'Best Money Gold'],
    ['src' => 'images/client/digicliff.png', 'name' => 'Digicliff Solutions'],
    ['src' => 'images/client/talknew.png', 'name' => 'Talk New'],
    ['src' => 'images/client/kuvempu.png', 'name' => 'Kuvempu University'],
    ['src' => 'images/client/rguhsqr.png', 'name' => 'Rajiv Gandhi University'],
    ['src' => 'images/client/akkama.png', 'name' => 'Akkamahadevi University'],
    ['src' => 'images/client/zoppey.png', 'name' => 'Zoppey'],
    ['src' => 'images/client/abna.png', 'name' => 'Abna Mobiles'],
    ['src' => 'images/client/ssquare.png', 'name' => 'Ssquare'],
    ['src' => 'images/client/kaviya.png', 'name' => 'Kaviya Mobiles'],
    ['src' => 'images/client/joy.png', 'name' => 'Joy Mobiles'],
    ['src' => 'images/client/vanitha.png', 'name' => 'Vanitha Crackers'],
    ['src' => 'images/client/phdprime.png', 'name' => 'PHD Prime'],
    ['src' => 'images/client/newhappymobiles.png', 'name' => 'New Happy Mobiles'],
    ['src' => 'images/client/manjapai.png', 'name' => 'Manjapai'],
    ['src' => 'images/client/kvis.png', 'name' => 'KVIS'],
    ['src' => 'images/client/jaksi.png', 'name' => 'Jaksi Cinema'],
    ['src' => 'images/client/rehaan.png', 'name' => 'Rehaan Furnishing'],
    ['src' => 'images/client/vasantham.png', 'name' => 'Vasantham & Co'],
];

$PROJECTS = [
    [
        'name' => 'emplix',
        'category' => 'Mobile App',
        'tech' => ['iOS', 'Android', 'Product UI'],
        'outcome' => 'A workforce-ready mobile product designed for day-to-day operational clarity.',
        'image' => 'images/portfolio/emplix.png',
        'href' => 'portfolio.php#emplix',
    ],
    [
        'name' => 'Zoppey',
        'category' => 'Mobile App',
        'tech' => ['Mobile', 'Commerce'],
        'outcome' => 'A consumer-facing mobile experience built for browsing, discovery and conversion.',
        'image' => 'images/portfolio/zoppey_mobile.jpg',
        'href' => 'portfolio.php#zoppey',
    ],
    [
        'name' => 'Now Way',
        'category' => 'Mobile App',
        'tech' => ['iOS', 'Android'],
        'outcome' => 'A focused mobile application with a clean interface and practical user flows.',
        'image' => 'images/portfolio/nowway.jpg',
        'href' => 'portfolio.php#nowway',
    ],
];
