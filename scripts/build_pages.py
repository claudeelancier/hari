#!/usr/bin/env python3
"""Generate Srimurugan Travel static pages from shared chrome."""
from pathlib import Path

ROOT = Path("/workspace")

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <meta name="theme-color" content="#0B132B">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80">
  <link rel="canonical" href="{canonical}">
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/site.css">
  {extra_head}
</head>
<body>
<a class="sr-only" href="#main" style="position:absolute;left:-999px">Skip to content</a>
<header id="site-header"></header>
<main id="main">
{body}
</main>
<footer id="site-footer"></footer>
<div class="lightbox" role="dialog" aria-modal="true" aria-label="Image preview"><button type="button" aria-label="Close">&times;</button><img alt=""></div>
<script src="assets/js/data.js"></script>
<script src="assets/js/site.js"></script>
</body>
</html>
"""

PAGES = {}

PAGES["index.html"] = dict(
    title="Srimurugan Travel | Premium Tours from Madurai since 1985",
    description="Sri Murugan Travel Agency — IATA authorised tours from Madurai. International, domestic, pilgrimage, honeymoon and custom holidays by road, rail, flight and cruise.",
    canonical="https://www.srimurugantravel.com/",
    extra_head='<link rel="preload" as="image" href="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=80">',
    body="""
<section class="hero" data-hero aria-roledescription="carousel" aria-label="Featured destinations">
  <div class="hero-slides"></div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-copy">
    <p class="eyebrow" data-hero-label>Travel beyond ordinary</p>
    <h1 data-hero-title>Discover Beautiful Destinations</h1>
    <p class="hero-sub" data-hero-sub>Create memories that last forever with Srimurugan Travel — crafted journeys since 1985.</p>
    <div class="hero-actions">
      <a class="btn btn-gold" data-hero-cta href="packages.html">Explore packages</a>
      <a class="btn btn-ghost" href="contact.html">Contact us</a>
    </div>
  </div>
  <div class="hero-controls">
    <button class="hero-nav-btn" type="button" data-hero-prev aria-label="Previous destination">‹</button>
    <button class="hero-nav-btn" type="button" data-hero-next aria-label="Next destination">›</button>
  </div>
  <div class="hero-dots" role="tablist" aria-label="Hero slides"></div>
  <form class="hero-search" action="enquire.html" method="get" aria-label="Travel enquiry">
    <div class="field">
      <label for="q-dest">Destination</label>
      <input id="q-dest" name="destination" required placeholder="Maldives, Kashmir, Europe…">
    </div>
    <div class="field">
      <label for="q-date">Travel date</label>
      <input id="q-date" name="date" type="date">
    </div>
    <div class="field">
      <label for="q-pax">Travellers</label>
      <input id="q-pax" name="travellers" type="number" min="1" value="2">
    </div>
    <div class="field">
      <label for="q-type">Tour type</label>
      <select id="q-type" name="type">
        <option>Leisure</option>
        <option>Pilgrimage</option>
        <option>Honeymoon</option>
        <option>Family</option>
        <option>Education</option>
        <option>Custom</option>
      </select>
    </div>
    <div class="field">
      <label for="q-budget">Budget</label>
      <select id="q-budget" name="budget">
        <option>Flexible</option>
        <option>Under ₹25,000</option>
        <option>₹25,000 – ₹75,000</option>
        <option>₹75,000 – ₹1,50,000</option>
        <option>Above ₹1,50,000</option>
      </select>
    </div>
    <button class="btn btn-gold" type="submit">Enquire</button>
  </form>
</section>

<section class="section" id="about-section">
  <div class="container about-split">
    <div class="reveal">
      <p class="eyebrow">Who we are</p>
      <h2>Sri Murugan Travel Agency</h2>
      <div class="gold-rule"><span></span><span></span><span></span></div>
      <p style="margin-top:18px;color:var(--muted)">Sri Murugan Travel Agency (SMTA) is one of the leading travel agencies in Tamil Nadu, operating packaged inbound and outbound tours by four modes of transport — road, rail, flight and cruise — on a fixed departure basis. We specialise in pilgrimage, educational, leisure, MICE, honeymoon, trekking and business tours.</p>
      <p style="margin-top:14px;color:var(--muted)">Established in 1985, we have escorted lakhs of travellers across the world for more than 35 years. We are an authorised IATA agent and an Approved Tour Operator recognised by the Department of Tourism, Government of India.</p>
      <div style="display:flex;gap:28px;flex-wrap:wrap;margin:28px 0">
        <div><b class="serif" style="font-size:1.8rem;color:var(--navy-3)">35+</b><div style="color:var(--muted);font-size:.85rem">Years of experience</div></div>
        <div><b class="serif" style="font-size:1.8rem;color:var(--navy-3)">Lakhs</b><div style="color:var(--muted);font-size:.85rem">Happy travellers</div></div>
        <div><b class="serif" style="font-size:1.8rem;color:var(--navy-3)">IATA</b><div style="color:var(--muted);font-size:.85rem">Authorised agent</div></div>
      </div>
      <a class="btn btn-navy" href="customize.html">Plan my journey</a>
    </div>
    <div class="reveal d2">
      <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80" alt="Travellers overlooking a mountain valley" loading="lazy">
    </div>
  </div>
</section>

<section class="section" style="background:#fff;padding-top:0">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Curated for you</p>
      <h2>Every way to wander</h2>
      <div class="gold-rule"><span></span><span></span><span></span></div>
    </div>
    <div class="feature-grid">
      <a class="feature-card" href="train.html"><div class="icon-line">01</div><h3>Train pilgrimage</h3><p>Divine journeys on a spiritual pathway, escorted from Madurai.</p></a>
      <a class="feature-card" href="train.html"><div class="icon-line">02</div><h3>Budget train tour</h3><p>Economic India roamings with comfort and care.</p></a>
      <a class="feature-card" href="domestic.html"><div class="icon-line">03</div><h3>Domestic flight tour</h3><p>Your holidays made simple across Incredible India.</p></a>
      <a class="feature-card" href="education.html"><div class="icon-line">04</div><h3>Education tour</h3><p>Industrial visits and college tours, planned end to end.</p></a>
      <a class="feature-card" href="weekend.html"><div class="icon-line">05</div><h3>Weekend tour</h3><p>Collated getaways when you have just a few days.</p></a>
      <a class="feature-card" href="honeymoon.html"><div class="icon-line">06</div><h3>Honeymoon</h3><p>Handpicked packages for couples, near and far.</p></a>
      <a class="feature-card" href="customize.html"><div class="icon-line">07</div><h3>Customised packages</h3><p>Tailor-made itineraries, the way you like.</p></a>
      <a class="feature-card" href="enquire.html"><div class="icon-line">08</div><h3>Elite enquiry</h3><p>Tell us your dream trip — our planners will craft it.</p></a>
    </div>
  </div>
</section>

<section class="section" id="destinations">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Discover</p>
      <h2>Destinations that stay with you</h2>
      <p class="lead">From atolls to alpine meadows — a selection of journeys we operate year round.</p>
      <div class="gold-rule"><span></span><span></span><span></span></div>
    </div>
    <div class="dest-grid" data-destinations></div>
  </div>
</section>

<section class="section" id="tours-section" style="background:#fff">
  <div class="container">
    <div class="section-head left reveal">
      <p class="eyebrow">Beyond borders</p>
      <h2>International tours</h2>
    </div>
    <div class="slider-wrap" data-slider>
      <button class="slider-btn prev" type="button" aria-label="Previous international tours">‹</button>
      <div class="track" data-intl-track></div>
      <button class="slider-btn next" type="button" aria-label="Next international tours">›</button>
    </div>

    <div class="section-head left reveal" style="margin-top:56px">
      <p class="eyebrow">Incredible India</p>
      <h2>Domestic tours</h2>
    </div>
    <div class="slider-wrap" data-slider>
      <button class="slider-btn prev" type="button" aria-label="Previous domestic tours">‹</button>
      <div class="track" data-dom-track></div>
      <button class="slider-btn next" type="button" aria-label="Next domestic tours">›</button>
    </div>

    <div class="section-head left reveal" style="margin-top:56px">
      <p class="eyebrow">Scenic rails</p>
      <h2>Train tours</h2>
    </div>
    <div class="slider-wrap" data-slider>
      <button class="slider-btn prev" type="button" aria-label="Previous train tours">‹</button>
      <div class="track" data-train-track></div>
      <button class="slider-btn next" type="button" aria-label="Next train tours">›</button>
    </div>
  </div>
</section>

<section class="section offers">
  <div class="offers-bg" aria-hidden="true">
    <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=80" alt="" loading="lazy">
  </div>
  <div class="container">
    <div class="section-head left" style="color:#fff">
      <p class="eyebrow">Seasonal invitations</p>
      <h2>Special ways to travel</h2>
    </div>
    <div class="offers-grid">
      <article class="offer-card">
        <span class="badge">Made for you</span>
        <h3 class="serif" style="font-size:2rem;margin-bottom:10px">Need a more customised tour?</h3>
        <p>Travelling rejuvenates mind, body and soul. We pledge to take you to a breezy experience — planned around your dates, your people, your pace.</p>
        <a class="btn btn-gold" style="margin-top:18px" href="customize.html">Start customising</a>
      </article>
      <article class="offer-card">
        <span class="badge">Fixed departures</span>
        <h3 class="serif" style="font-size:1.5rem">Group-friendly departures</h3>
        <p>Road, rail, flight and cruise packages on announced dates — ideal for families and temple groups.</p>
        <a class="btn btn-outline-light" style="margin-top:18px" href="packages.html">See packages</a>
      </article>
      <article class="offer-card">
        <span class="badge">Speak to us</span>
        <h3 class="serif" style="font-size:1.5rem">Last-seat updates</h3>
        <p>For current departure dates and remaining seats, call customer care or send an enquiry. Offers change with inventory.</p>
        <a class="btn btn-outline-light" style="margin-top:18px" href="tel:+919791848265">Call 97918 48265</a>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Why Srimurugan Travel</p>
      <h2>Travel, held with care</h2>
      <div class="gold-rule"><span></span><span></span><span></span></div>
    </div>
    <div class="why-grid">
      <article class="why-card reveal"><div class="icon-line">✦</div><h3>Expert travel planning</h3><p>Itineraries shaped by four decades of operating from Madurai.</p></article>
      <article class="why-card reveal d1"><div class="icon-line">✦</div><h3>Best-value packages</h3><p>We know your need at your budget — excellence without the noise.</p></article>
      <article class="why-card reveal d2"><div class="icon-line">✦</div><h3>24/7 guest support</h3><p>Help when you need it. Call +91 97918 48265.</p></article>
      <article class="why-card reveal d3"><div class="icon-line">✦</div><h3>Customised trips</h3><p>Elite and tailor-made programmes for families and corporates.</p></article>
      <article class="why-card"><div class="icon-line">✦</div><h3>Experienced team</h3><p>Specialised experts make the dream stop hassle-free.</p></article>
      <article class="why-card"><div class="icon-line">✦</div><h3>Hassle-free booking</h3><p>Fixed departures and clear inclusions across every mode of travel.</p></article>
      <article class="why-card"><div class="icon-line">✦</div><h3>Trusted service</h3><p>IATA agent. Approved tour operator, Department of Tourism, India.</p></article>
      <article class="why-card"><div class="icon-line">✦</div><h3>Memorable experiences</h3><p>Stay, transport and sightseeing composed as one journey.</p></article>
    </div>
  </div>
</section>

<section class="section-tight stats-band">
  <div class="container stats-grid">
    <div class="stat"><b>35+</b><span>Years of experience</span></div>
    <div class="stat"><b>Lakhs</b><span>Travellers escorted</span></div>
    <div class="stat"><b>4</b><span>Modes of travel</span></div>
    <div class="stat"><b>IATA</b><span>Authorised agent</span></div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Traveller stories</p>
      <h2>Notes from the road</h2>
      <p class="lead">Words already published on the existing Srimurugan Travel homepage. Replace with verified new reviews as they arrive.</p>
      <div class="gold-rule"><span></span><span></span><span></span></div>
    </div>
    <div class="track" data-testimonials style="grid-auto-columns:minmax(280px,1fr)"></div>
  </div>
</section>

<section class="section" style="background:#fff;padding-top:0">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Gallery</p>
      <h2>A cinematic glance</h2>
      <div class="gold-rule"><span></span><span></span><span></span></div>
    </div>
    <div class="masonry" data-gallery></div>
  </div>
</section>

<section class="finale">
  <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f0?auto=format&fit=crop&w=1800&q=80" alt="Boat on still water at sunrise" loading="lazy">
  <div class="shade"></div>
  <div class="inner">
    <p class="eyebrow">Begin</p>
    <h2>Your next journey starts here</h2>
    <p>Let Srimurugan Travel create your perfect holiday.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <a class="btn btn-gold" href="enquire.html">Plan my trip</a>
      <a class="btn btn-ghost" href="contact.html">Contact us</a>
    </div>
  </div>
</section>
""",
)

PAGES["about.html"] = dict(
    title="About Srimurugan Travel | Since 1985, Madurai",
    description="Learn about Sri Murugan Travel Agency — IATA authorised, Government of India approved tour operator from Madurai since 1985.",
    canonical="https://www.srimurugantravel.com/about",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=80" alt="Vintage travel map and planning desk">
  <div class="shade"></div>
  <div class="container inner">
    <p class="eyebrow">Our story</p>
    <h1>Thirty-five years of taking Tamil Nadu to the world</h1>
  </div>
</section>
<section class="section">
  <div class="container about-split">
    <div>
      <p class="eyebrow">Sri Murugan Travel Agency</p>
      <h2>A Madurai house of journeys</h2>
      <div class="gold-rule"><span></span><span></span><span></span></div>
      <p style="margin-top:18px;color:var(--muted)">Sri Murugan Travel Agency (SMTA) is one of the leading travel agencies in Tamil Nadu, operating fascinating packaged inbound and outbound tours by four modes of transport (road, rail, flight and cruise) on a fixed departure basis.</p>
      <p style="margin-top:14px;color:var(--muted)">We specialise in pilgrimage tours, educational tours, leisure tours, MICE tours, honeymoon tours, trekking tours and business tours. Established in 1985, we have escorted lakhs of travellers across the globe. We are an authorised IATA agent and recognised as an Approved Tour Operator by the Department of Tourism, Government of India.</p>
    </div>
    <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80" alt="Open road through dramatic landscape" loading="lazy">
  </div>
</section>
<section class="section-tight stats-band">
  <div class="container stats-grid">
    <div class="stat"><b>1985</b><span>Established in Madurai</span></div>
    <div class="stat"><b>IATA</b><span>Authorised agent</span></div>
    <div class="stat"><b>Govt.</b><span>Approved tour operator</span></div>
    <div class="stat"><b>4</b><span>Modes: road, rail, flight, cruise</span></div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head"><h2>How we work</h2><div class="gold-rule"><span></span><span></span><span></span></div></div>
    <div class="why-grid">
      <article class="why-card"><h3>Listen</h3><p>Dates, elders, children, darshan needs, budget — we start with the real journey.</p></article>
      <article class="why-card"><h3>Compose</h3><p>Fixed departures or a custom file. Hotels, coaches, flights and local guides aligned.</p></article>
      <article class="why-card"><h3>Escort</h3><p>On-ground care from our network, with a Madurai team you can actually reach.</p></article>
      <article class="why-card"><h3>Return</h3><p>The same desk for the next festival, the next honeymoon, the next family reunion.</p></article>
    </div>
    <p style="text-align:center;margin-top:36px"><a class="btn btn-navy" href="enquire.html">Talk to a planner</a></p>
  </div>
</section>
""",
)

PAGES["destinations.html"] = dict(
    title="Destinations | Srimurugan Travel",
    description="Explore international and Indian destinations operated by Srimurugan Travel — Maldives, Dubai, Singapore, Bali, Kashmir, Kerala, Rajasthan and more.",
    canonical="https://www.srimurugantravel.com/destinations",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80" alt="Tropical coastline">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Atlas</p><h1>Destinations</h1></div>
</section>
<section class="section"><div class="container"><div class="dest-grid" data-destinations></div>
<p style="margin-top:28px;color:var(--muted)">Looking for a place not listed? <a href="customize.html" style="color:var(--teal);font-weight:700">Request a custom itinerary</a>.</p>
</div></section>
""",
)

PAGES["packages.html"] = dict(
    title="Tour Packages | Srimurugan Travel",
    description="Browse international, domestic and train tour packages from Srimurugan Travel with starting prices from the live catalogue.",
    canonical="https://www.srimurugantravel.com/tour_list_page",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=80" alt="Aircraft wing above clouds">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Catalogue</p><h1>Tour packages</h1></div>
</section>
<section class="section">
  <div class="container">
    <p class="lead" style="margin-bottom:24px;color:var(--muted)">Prices shown are starting figures from the existing Srimurugan Travel catalogue and may vary by departure. Taxes extra where marked.</p>
    <div class="pkg-grid" data-packages="all"></div>
  </div>
</section>
""",
)

PAGES["international.html"] = dict(
    title="International Tours | Srimurugan Travel",
    description="International holiday packages including Maldives, Dubai, Singapore, Malaysia, Thailand, Bali, Europe and Sri Lanka.",
    canonical="https://www.srimurugantravel.com/international",
    extra_head="",
    body="""
<section class="page-hero" id="maldives">
  <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1800&q=80" alt="Maldives water villa">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Beyond borders</p><h1>International tours</h1></div>
</section>
<section class="section">
  <div class="container">
    <div class="pkg-grid" data-packages="international"></div>
    <div id="dubai"></div><div id="singapore"></div><div id="bali"></div><div id="thailand"></div><div id="europe"></div><div id="srilanka"></div><div id="malaysia"></div>
  </div>
</section>
""",
)

PAGES["domestic.html"] = dict(
    title="Domestic Tours | Srimurugan Travel",
    description="Indian holiday and pilgrimage packages — Kashmir, Goa, Kerala, Rajasthan, Himachal, Andaman, Kasi and Ayodhya.",
    canonical="https://www.srimurugantravel.com/domestic",
    extra_head="",
    body="""
<section class="page-hero" id="kashmir">
  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=80" alt="Himalayan peaks">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Incredible India</p><h1>Domestic tours</h1></div>
</section>
<section class="section">
  <div class="container">
    <div class="pkg-grid" data-packages="domestic"></div>
    <div id="goa"></div><div id="kerala"></div><div id="rajasthan"></div><div id="himachal"></div><div id="andaman"></div><div id="kasi"></div><div id="ayodhya"></div>
  </div>
</section>
""",
)

PAGES["train.html"] = dict(
    title="Train Tours | Srimurugan Travel",
    description="Escorted train pilgrimage and leisure tours across India from Srimurugan Travel, Madurai.",
    canonical="https://www.srimurugantravel.com/train",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1544620341-11cb2cdcd534?auto=format&fit=crop&w=1800&q=80" alt="Passenger train at a station">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Scenic rails</p><h1>Train tours</h1></div>
</section>
<section class="section"><div class="container"><div class="pkg-grid" data-packages="train"></div></div></section>
""",
)

PAGES["contact.html"] = dict(
    title="Contact Srimurugan Travel | Madurai & branches",
    description="Contact Sri Murugan Travel Agency — head office in Madurai, customer care +91 97918 48265, email info@srimurugantravel.com.",
    canonical="https://www.srimurugantravel.com/contact",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=80" alt="Temple architecture in India">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Reach us</p><h1>Contact</h1></div>
</section>
<section class="section">
  <div class="container contact-split">
    <div>
      <h2>Head office</h2>
      <p style="color:var(--muted);margin:12px 0 20px">10, North Avani Moola Street, Near Meenakshi Temple, Madurai, Tamil Nadu 625001</p>
      <p><a href="tel:+919791848265"><strong>Customer care:</strong> +91 97918 48265</a></p>
      <p><a href="tel:+919842117473"><strong>Bookings:</strong> +91 98421 17473</a></p>
      <p><a href="mailto:info@srimurugantravel.com">info@srimurugantravel.com</a></p>
      <div class="office-grid" style="margin-top:28px">
        <article class="office-card"><h3>International desk</h3><p>89, North Avani Moola Street, Madurai 625001<br>+91 98421 17415</p></article>
        <article class="office-card"><h3>PeL Holidays</h3><p>33, North Avani Moola Street, Madurai 625001</p></article>
        <article class="office-card"><h3>Madurai North</h3><p>10, North Avani Moola Street, Madurai 625001<br>+91 98421 62416</p></article>
      </div>
    </div>
    <form class="form-card" data-enquire>
      <h3 class="serif" style="font-size:1.6rem;margin-bottom:12px">Send a message</h3>
      <div class="form-grid">
        <div><label>Name<input name="name" required></label></div>
        <div><label>Email<input type="email" name="email" required></label></div>
        <div><label>Phone<input name="phone" required pattern="[0-9]{10}" placeholder="10-digit mobile"></label></div>
        <div><label>Subject<input name="subject"></label></div>
        <div class="full"><label>Message<textarea name="message" rows="5" required></textarea></label></div>
      </div>
      <button class="btn btn-gold" type="submit" style="margin-top:16px">Send</button>
      <p class="form-note" data-success hidden>Thank you. This preview confirms your form locally. Connect it to the existing enquiry.php endpoint when deploying on the live server.</p>
    </form>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="container">
    <h2 style="margin-bottom:16px">Branch offices</h2>
    <div class="office-grid">
      <article class="office-card"><h3>Chennai — Ashok Nagar</h3><p>75/2, Indira Colony, 100 Feet Road, Chennai 8<br>9842162265</p></article>
      <article class="office-card"><h3>Chennai — Mylapore</h3><p>South Mada Street, Sakash Complex, Mylapore<br>6347211201</p></article>
      <article class="office-card"><h3>Salem</h3><p>5/1 5/2 Gokulanathan Street, Salem 636016<br>7845915265</p></article>
      <article class="office-card"><h3>Trichy</h3><p>5A, Chinnakkadai Street, Trichy<br>9842162410</p></article>
      <article class="office-card"><h3>Coimbatore</h3><p>198-H, Chinnammal Cross Street, Saibaba Colony<br>9842862265</p></article>
      <article class="office-card"><h3>Tirunelveli</h3><p>16, Thilak Nagar, Madurai Road, Junction<br>9842162215</p></article>
    </div>
  </div>
</section>
""",
)

PAGES["honeymoon.html"] = dict(
    title="Honeymoon Tours | Srimurugan Travel",
    description="Handpicked honeymoon packages from Srimurugan Travel — Maldives, Bali, Goa, Kashmir and more.",
    canonical="https://www.srimurugantravel.com/honeymoon-tour",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1800&q=80" alt="Overwater villa in a tropical lagoon">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">For two</p><h1>Honeymoon journeys</h1></div>
</section>
<section class="section"><div class="container">
<p style="color:var(--muted);max-width:62ch;margin-bottom:28px">Handpicked packages for couples, using the same Maldives, Bali, Goa and Kashmir departures as the live catalogue. Tell us your dates and we will shape stays and transfers around you.</p>
<div class="pkg-grid" data-packages="international"></div>
<p style="margin-top:28px"><a class="btn btn-gold" href="enquire.html?tour=Honeymoon">Enquire for a couple’s itinerary</a></p>
</div></section>
""",
)

PAGES["education.html"] = dict(
    title="Education Tours | Srimurugan Travel",
    description="Industrial visits and college education tours planned by Srimurugan Travel, Madurai.",
    canonical="https://www.srimurugantravel.com/education-tours",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=80" alt="University campus walkway">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Campus to country</p><h1>Education tours</h1></div>
</section>
<section class="section"><div class="container about-split">
<div>
<h2>Industrial visits and college circuits</h2>
<p style="margin-top:14px;color:var(--muted)">Group movements with escorts, stays and factory or institutional visits — the same education-tour service described on the live Srimurugan Travel site. Share headcount, cities and academic dates via the enquiry form.</p>
<a class="btn btn-navy" style="margin-top:20px" href="enquire.html?tour=Education%20tour">Request a group quote</a>
</div>
<img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80" alt="Students on a study trip" loading="lazy">
</div></section>
""",
)

PAGES["weekend.html"] = dict(
    title="Weekend Tours | Srimurugan Travel",
    description="Short weekend getaways planned by Srimurugan Travel.",
    canonical="https://www.srimurugantravel.com/weekend-tour",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80" alt="Weekend beach escape">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Short breaks</p><h1>Weekend tours</h1></div>
</section>
<section class="section"><div class="container">
<p style="color:var(--muted);margin-bottom:24px">Collated weekend getaways when you have just a few days. Ask for current short-haul departures from Madurai and Chennai.</p>
<div class="pkg-grid" data-packages="domestic"></div>
</div></section>
""",
)

PAGES["enquire.html"] = dict(
    title="Enquiry | Srimurugan Travel",
    description="Send a tour enquiry to Srimurugan Travel — destination, dates, travellers and tour type.",
    canonical="https://www.srimurugantravel.com/enquire",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80" alt="Mountain road at dusk">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Plan with us</p><h1>Travel enquiry</h1></div>
</section>
<section class="section">
  <div class="container" style="max-width:860px">
    <form class="form-card" data-enquire>
      <div class="form-grid">
        <div><label>Name<span> *</span><input name="name" required></label></div>
        <div><label>Email<span> *</span><input type="email" name="email" required></label></div>
        <div><label>Contact no<span> *</span><input name="contact_no" required></label></div>
        <div><label>Alternate no<input name="alternate_no"></label></div>
        <div class="full"><label>Address<textarea name="address" rows="3"></textarea></label></div>
        <div><label>Destination / place of interest<span> *</span><input name="destination" required></label></div>
        <div><label>Tour starting place<span> *</span><input name="starting_place" required></label></div>
        <div><label>From date<input type="date" name="tentative_fromdate"></label></div>
        <div><label>To date<input type="date" name="tentative_todate"></label></div>
        <div><label>No. of days<span> *</span><input type="number" min="1" name="days" required></label></div>
        <div><label>Adults<span> *</span><input type="number" min="1" name="adult" value="2" required></label></div>
        <div><label>Children<input type="number" min="0" name="child" value="0"></label></div>
        <div><label>Tour type
          <select name="type"><option>Leisure</option><option>Pilgrimage</option><option>Honeymoon</option><option>Family</option><option>Education</option><option>Custom / Elite</option></select>
        </label></div>
        <div><label>Hotel type
          <select name="hotel_type"><option value="">Select</option><option>3 star</option><option>4 star</option><option>5 star</option></select>
        </label></div>
        <div><label>Budget
          <select name="budget"><option>Flexible</option><option>Under ₹25,000</option><option>₹25,000 – ₹75,000</option><option>₹75,000 – ₹1,50,000</option><option>Above ₹1,50,000</option></select>
        </label></div>
        <div class="full"><label>Other requirements<textarea name="other_requirement" rows="4"></textarea></label></div>
      </div>
      <button class="btn btn-gold" type="submit" style="margin-top:18px">Submit enquiry</button>
      <p class="form-note">On the production PHP site this form posts to enquiry.php. This redesign keeps the same fields so the backend can be reconnected without renaming inputs.</p>
      <p class="form-note" data-success hidden>Enquiry captured in this preview. Wire the action to enquiry.php on the live server to restore email/CRM delivery.</p>
    </form>
  </div>
</section>
""",
)

PAGES["customize.html"] = dict(
    title="Customise a Tour | Srimurugan Travel",
    description="Request a tailor-made holiday from Srimurugan Travel — dates, hotels, food preference and destinations.",
    canonical="https://www.srimurugantravel.com/customize-tour",
    extra_head="",
    body="""
<section class="page-hero">
  <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f0?auto=format&fit=crop&w=1800&q=80" alt="Lake and mountains">
  <div class="shade"></div>
  <div class="container inner"><p class="eyebrow">Made just for you</p><h1>Customised packages</h1></div>
</section>
<section class="section">
  <div class="container about-split">
    <div>
      <h2>Tell us the journey. We will compose it.</h2>
      <p style="margin-top:14px;color:var(--muted)">Use the same elite enquiry fields as the live website — starting place, place of interest, hotel category and food preference — so operations can process requests without a new schema.</p>
      <a class="btn btn-gold" style="margin-top:20px" href="enquire.html">Open enquiry form</a>
    </div>
    <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" alt="Passport and camera on a wooden table" loading="lazy">
  </div>
</section>
""",
)

PAGES["privacy.html"] = dict(
    title="Privacy Policy | Srimurugan Travel",
    description="Privacy policy for Sri Murugan Travel Agency. Contact info@srimurugantravel.com for privacy queries.",
    canonical="https://www.srimurugantravel.com/privacy-policy",
    extra_head="",
    body="""
<section class="page-hero"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80" alt=""><div class="shade"></div>
<div class="container inner"><h1>Privacy policy</h1></div></section>
<section class="section"><div class="container" style="max-width:760px;color:var(--muted)">
<p>Sri Murugan Travel Agency, 10 North Avani Moola Street, Madurai 625001, collects enquiry details you submit (name, contact numbers, travel preferences) to respond to booking requests. We do not sell personal data. You may write to info@srimurugantravel.com with privacy concerns. This page restates the live site’s privacy contact and should be replaced with the full legal text from the production CMS when merging.</p>
<p style="margin-top:16px">Customer care: +91 97918 48265.</p>
</div></section>
""",
)

PAGES["terms.html"] = dict(
    title="Terms | Srimurugan Travel",
    description="Booking terms for Sri Murugan Travel Agency packages. Prices and seats are subject to availability.",
    canonical="https://www.srimurugantravel.com/terms",
    extra_head="",
    body="""
<section class="page-hero"><img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80" alt=""><div class="shade"></div>
<div class="container inner"><h1>Terms of booking</h1></div></section>
<section class="section"><div class="container" style="max-width:760px;color:var(--muted)">
<p>Package prices marked with an asterisk are starting prices and may exclude peak-season supplements, optional activities and government taxes. Seats and hotel categories are subject to availability at the time of confirmation. Cancellation and refund rules follow the live Refund Policy published by Sri Murugan Travel Agency. For grievances write to info@srimurugantravel.com.</p>
<p style="margin-top:16px"><a href="https://www.srimurugantravel.com/refund-policy">View the current refund policy on the live website</a>.</p>
</div></section>
""",
)


def main():
    for name, meta in PAGES.items():
        html = HEAD.format(**meta)
        (ROOT / name).write_text(html, encoding="utf-8")
        print("wrote", name)


if __name__ == "__main__":
    main()
