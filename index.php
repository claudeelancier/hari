<?php include_once 'partials/header.php'; ?>
<?php include 'partials/menu.php'; ?>

<section class="hero hero-enter">
   <div class="shell hero-grid">
      <div class="hero-copy">
         <p class="kicker">Design · Development · Digital growth</p>
         <h1>
            <span class="line-reveal">Building digital experiences</span>
            <span class="line-reveal">that move businesses forward.</span>
         </h1>
         <p class="lede">Elancier Solutions is a Madurai studio for websites, ecommerce and mobile applications. We started in 2013 and still ship with the same brief: quality first, cost that a growing business can hold.</p>
         <div class="hero-cta">
            <a href="contact.php" class="btn btn-solid">Start Your Project <span class="arr" aria-hidden="true">→</span></a>
            <a href="portfolio.php" class="btn btn-ghost">Explore Our Work</a>
         </div>
         <div class="service-rail" aria-hidden="true">
            <span>Web Development</span>
            <span>Mobile Apps</span>
            <span>UI/UX</span>
            <span>Ecommerce</span>
            <span>Digital Marketing</span>
         </div>
      </div>
      <div class="hero-stage" data-tilt>
         <div class="ui-panel ui-web">
            <div class="ui-chrome"><i></i><i></i><i></i></div>
            <div class="ui-screen">
               <div class="bar w70"></div>
               <div class="bar w40"></div>
               <div class="bar w90"></div>
               <img src="images/portfolio/nbb_web.jpg" alt="" width="640" height="400" decoding="async">
            </div>
         </div>
         <div class="ui-panel ui-phone">
            <div class="ui-chrome"><i></i><i></i><i></i></div>
            <div class="ui-screen">
               <div class="app-row"></div>
               <img src="images/portfolio/zoppey_mobile.jpg" alt="" width="280" height="560" decoding="async">
               <div class="app-row"></div>
            </div>
         </div>
         <div class="ui-chip ui-panel">
            <p class="kicker">Madurai · Since 2013</p>
            <p>13+ years · 500+ projects · 450+ clients</p>
         </div>
      </div>
   </div>
</section>

<div class="marquee" aria-label="Client logos">
   <div class="marquee-track">
      <?php
      $homeClients = [
         ['rare_tech.png', 'Rare Tech'],
         ['dci.png', 'DCI'],
         ['dforth.svg', 'Dforth Technologies'],
         ['naga.png', 'Naga Foods'],
         ['bmg.png', 'Best Money Gold'],
         ['digicliff.png', 'Digicliff Solutions Pvt Ltd'],
         ['talknew.png', 'Talk New'],
         ['kuvempu.png', 'Kuvempu University'],
         ['rguhsqr.png', 'Rajiv Gandhi University'],
         ['akkama.png', 'Akkamahadevi University'],
         ['zoppey.png', 'zoppey'],
         ['abna.png', 'Abna Mobiles'],
      ];
      $loop = array_merge($homeClients, $homeClients);
      foreach ($loop as $client) {
         echo '<img src="images/client/' . $client[0] . '" alt="' . htmlspecialchars($client[1], ENT_QUOTES, 'UTF-8') . '" loading="lazy" decoding="async">';
      }
      ?>
   </div>
</div>

<section class="section">
   <div class="shell split">
      <p class="statement" data-reveal>We Are Creative Agency. Quality of our project is the business strategy we follow.</p>
      <div data-reveal="right">
         <p class="kicker">About Elancier</p>
         <h2>Top-rated web and mobile app development company</h2>
         <p class="lede">Elancier Solutions is a creative web design company with an energetic team that offers cost effective web and mobile application (Android and iOS) development. We look for simpler ways to help companies grow by building relationships and driving businesses.</p>
         <div class="pillars" data-stagger>
            <article class="pillar">
               <img src="images/icons/deal.svg" alt="" width="36" height="36">
               <div>
                  <h3>Big Ideas</h3>
                  <p>Your dream. We do it for you.</p>
               </div>
            </article>
            <article class="pillar">
               <img src="images/icons/computers.svg" alt="" width="36" height="36">
               <div>
                  <h3>New Tech</h3>
                  <p>Uplift your business with current technology.</p>
               </div>
            </article>
            <article class="pillar">
               <img src="images/icons/worker.svg" alt="" width="36" height="36">
               <div>
                  <h3>Creative people</h3>
                  <p>A professional team to meet the brief.</p>
               </div>
            </article>
         </div>
      </div>
   </div>
</section>

<section class="section soft">
   <div class="shell">
      <div class="section-head" data-reveal>
         <div>
            <p class="kicker">Integrated services</p>
            <h2>Web, commerce, apps and growth from one studio</h2>
            <p class="lede">Elancier provides solutions for web and mobile development. We started in 2013 and continue to deliver digital products from Madurai.</p>
         </div>
      </div>
      <div class="svc-explorer">
         <div>
            <article class="svc-item is-active" data-visual="web" tabindex="0">
               <span class="svc-num">01</span>
               <div>
                  <h3>Web Development</h3>
                  <p>PHP, Angular, React and .NET platforms built for real operations.</p>
                  <div class="svc-tags">
                     <a class="chip" href="web-development.php#WEB_DEVELOPMENT">PHP</a>
                     <a class="chip" href="web-development.php#WEB_DEVELOPMENT">Angular</a>
                     <a class="chip" href="web-development.php#WEB_DEVELOPMENT">React</a>
                     <a class="chip" href="web-development.php#WEB_DEVELOPMENT">.Net</a>
                  </div>
               </div>
               <span class="arr">→</span>
            </article>
            <article class="svc-item" data-visual="ecom" tabindex="0">
               <span class="svc-num">02</span>
               <div>
                  <h3>Ecommerce Development</h3>
                  <p>Magento, Shopify, WooCommerce and Joomla storefronts.</p>
                  <div class="svc-tags">
                     <a class="chip" href="web-development.php#Ecommerce">Magento</a>
                     <a class="chip" href="web-development.php#Wordpress">WP</a>
                     <a class="chip" href="web-development.php#Ecommerce">Shopify</a>
                  </div>
               </div>
               <span class="arr">→</span>
            </article>
            <article class="svc-item" data-visual="app" tabindex="0">
               <span class="svc-num">03</span>
               <div>
                  <h3>Mobile App Development</h3>
                  <p>Android and iOS products planned around your existing systems.</p>
                  <div class="svc-tags">
                     <a class="chip" href="mobileapp-development.php#Android">Android</a>
                     <a class="chip" href="mobileapp-development.php#IOS">iPhone</a>
                  </div>
               </div>
               <span class="arr">→</span>
            </article>
            <article class="svc-item" data-visual="design" tabindex="0">
               <span class="svc-num">04</span>
               <div>
                  <h3>Creative / UI Design</h3>
                  <p>Web design, identity and collaterals that support the product.</p>
                  <div class="svc-tags"><a class="chip" href="creative-design.php#Web_designing">Web Design</a></div>
               </div>
               <span class="arr">→</span>
            </article>
            <article class="svc-item" data-visual="mkt" tabindex="0">
               <span class="svc-num">05</span>
               <div>
                  <h3>Digital Marketing</h3>
                  <p>SEO, email and social programmes that keep a brand visible.</p>
                  <div class="svc-tags">
                     <a class="chip" href="online-marketing.php#SEO">SEO</a>
                     <a class="chip" href="online-marketing.php#Email_Marketing">Email</a>
                     <a class="chip" href="online-marketing.php#Social_Marketing">Social</a>
                  </div>
               </div>
               <span class="arr">→</span>
            </article>
            <article class="svc-item" data-visual="tech" tabindex="0">
               <span class="svc-num">06</span>
               <div>
                  <h3>Modern Technology Solutions</h3>
                  <p>React, Node and Angular for interfaces and APIs teams can maintain.</p>
                  <div class="svc-tags">
                     <a class="chip" href="web-development.php#WEB_DEVELOPMENT">React.JS</a>
                     <a class="chip" href="web-development.php#WEB_DEVELOPMENT">Node.JS</a>
                  </div>
               </div>
               <span class="arr">→</span>
            </article>
         </div>
         <div class="svc-visual" data-reveal="scale">
            <img class="is-on" data-visual="web" src="images/web-develop/code.jpg" alt="Web development work" width="720" height="480">
            <img data-visual="ecom" src="images/web-develop/e-com.jpg" alt="Ecommerce work" width="720" height="480">
            <img data-visual="app" src="images/mobile-app/mobile-app.jpg" alt="Mobile app work" width="720" height="480">
            <img data-visual="design" src="images/creative-design/creative_design-.jpg" alt="Creative design work" width="720" height="480">
            <img data-visual="mkt" src="images/online-marketing/seo.jpg" alt="Digital marketing work" width="720" height="480">
            <img data-visual="tech" src="images/web-develop/cms.jpg" alt="Technology platforms" width="720" height="480">
         </div>
      </div>
      <div class="hire-bar" data-reveal>
         <p>Hire a <span>Dedicated Developer</span></p>
         <a href="https://api.whatsapp.com/message/JMMCX6T3VMLPK1" class="btn btn-wa"><i class="fab fa-whatsapp"></i> Hire Now</a>
      </div>
   </div>
</section>

<section class="section">
   <?php include 'card_portfolio.php'; ?>
</section>

<section class="section tight">
   <div class="shell">
      <div class="section-head" data-reveal>
         <div>
            <p class="kicker">Technology</p>
            <h2>Tools we ship with</h2>
         </div>
      </div>
      <div class="tech-pills" data-stagger>
         <a href="web-development.php#WEB_DEVELOPMENT"><img src="images/icons/php.svg" alt=""> PHP</a>
         <a href="web-development.php#WEB_DEVELOPMENT"><img src="images/icons/react.svg" alt=""> React</a>
         <a href="web-development.php#WEB_DEVELOPMENT"><img src="images/icons/angular.svg" alt=""> Angular</a>
         <span>Node.js</span>
         <span>Flutter</span>
         <a href="web-development.php#Ecommerce"><img src="images/icons/shopify.svg" alt=""> Shopify</a>
         <a href="web-development.php#Ecommerce"><img src="images/icons/woocommerce.svg" alt=""> WooCommerce</a>
         <a href="web-development.php#Ecommerce"><img src="images/icons/magento.svg" alt=""> Magento</a>
         <a href="web-development.php#Wordpress"><img src="images/icons/wordpress.svg" alt=""> WordPress</a>
      </div>
   </div>
</section>

<section class="section soft">
   <div class="shell split">
      <div data-reveal>
         <p class="kicker">Industries we work for</p>
         <h2>Helping businesses in all domains</h2>
         <p class="lede">Successfully delivered digital products across social, commerce, education, health, travel and enterprise teams.</p>
         <div class="industry-rail" data-stagger>
            <?php
            $industries = [
               ['Social Networking', 'Products that keep people connected and exchanging value.'],
               ['Digital Marketing', 'Campaign systems and content platforms for growth teams.'],
               ['Ecommerce Development', 'Catalogues, carts and operations for retail brands.'],
               ['B2B Service', 'Portals and workflows for business-to-business teams.'],
               ['Banking Service', 'Careful interfaces for financial operations.'],
               ['Enterprise Service', 'Internal tools that match existing infrastructure.'],
               ['Education Service', 'University and campus digital services.'],
               ['Tour and Travels', 'Booking and itinerary products for travel operators.'],
               ['Health Service', 'Healthcare information and patient-facing apps.'],
               ['Event & Ticket', 'Listings and ticketing for live events.'],
               ['Restaurant Service', 'Menus, orders and storefronts for food brands.'],
               ['Business Consultant', 'Advisory firms that need a sharper digital presence.'],
            ];
            foreach ($industries as $i => $item) {
               $on = $i === 0 ? ' is-on' : '';
               echo '<button class="industry-btn' . $on . '" type="button" data-copy="' . htmlspecialchars($item[1], ENT_QUOTES, 'UTF-8') . '">' . $item[0] . '</button>';
            }
            ?>
         </div>
      </div>
      <div class="industry-panel" data-reveal="right">
         <p class="kicker">Focus</p>
         <h3>Social Networking</h3>
         <p>Products that keep people connected and exchanging value.</p>
      </div>
   </div>
</section>

<section class="section">
   <div class="shell split">
      <div>
         <div data-reveal>
            <p class="kicker">Why Choose Us</p>
            <h2>Why Elancier is trusted for web and app work</h2>
            <p class="lede">We believe in teamwork and support our people with current technology.</p>
         </div>
         <div class="why-grid" data-stagger>
            <article class="why-card">
               <h3>The Right Team</h3>
               <p>Elancier helps you set a roadmap for the product and stay with it through launch.</p>
            </article>
            <article class="why-card">
               <h3>Years of Experience</h3>
               <p>Years of mobile app development experience, used to keep builds cost-effective.</p>
            </article>
            <article class="why-card">
               <h3>User Centric Designs</h3>
               <p>Ideas translated into industry-standard mobile and web interfaces.</p>
            </article>
            <article class="why-card">
               <h3>Timely Delivery</h3>
               <p>Develop and deliver in a way that is quick, measured and on time.</p>
            </article>
         </div>
      </div>
      <div data-reveal="right">
         <img src="images/home/top_rank.jpg" alt="Elancier product work" width="640" height="720" loading="lazy" decoding="async">
         <p class="lede" style="margin-top:16px">Got an app idea for your business? We Design | Develop | Deploy | Support.</p>
         <a href="contact.php" class="btn btn-solid">Request A Quote</a>
      </div>
   </div>
</section>

<section class="section soft">
   <div class="shell">
      <div class="section-head" data-reveal>
         <div>
            <p class="kicker">Process</p>
            <h2>How an engagement typically moves</h2>
         </div>
      </div>
      <div class="process" data-stagger>
         <div class="step"><b>01</b><div><h3>Discover</h3><p>Understand the business goal, users and current systems.</p></div></div>
         <div class="step"><b>02</b><div><h3>Strategy</h3><p>Shape scope, platforms and a delivery sequence.</p></div></div>
         <div class="step"><b>03</b><div><h3>Design</h3><p>Interface, identity and content structure.</p></div></div>
         <div class="step"><b>04</b><div><h3>Develop</h3><p>Build the website or application with the chosen stack.</p></div></div>
         <div class="step"><b>05</b><div><h3>Launch</h3><p>Deploy, test and hand over a stable release.</p></div></div>
         <div class="step"><b>06</b><div><h3>Scale</h3><p>Maintenance, marketing and the next iteration.</p></div></div>
      </div>
   </div>
</section>

<section class="section">
   <div class="shell">
      <div class="stat-ribbon" data-reveal>
         <div class="stat"><b><span data-count="13">13</span>+</b><span>Year In Business</span></div>
         <div class="stat"><b><span data-count="13">13</span>+</b><span>Team Members</span></div>
         <div class="stat"><b><span data-count="450">450</span>+</b><span>Happy Clients</span></div>
         <div class="stat"><b><span data-count="500">500</span>+</b><span>Projects Done</span></div>
         <div class="stat"><b><span data-count="95">95</span>k</b><span>Hours Worked</span></div>
         <div class="stat"><b>12/5</b><span>Support Available</span></div>
      </div>
   </div>
</section>

<section class="section tight">
   <div class="shell">
      <div class="client-head" data-reveal>
         <div>
            <p class="kicker">Our happy customers</p>
            <h2>Some of our Clients</h2>
         </div>
         <a class="btn btn-line" href="clients.php">View all clients</a>
      </div>
   </div>
   <div class="marquee reverse" aria-label="More client logos">
      <div class="marquee-track">
         <?php
         $homeClients2 = [
            ['ssquare.png', 'Ssquare'],
            ['kaviya.png', 'Kaviya Mobiles'],
            ['joy.png', 'Joy Mobiles'],
            ['vanitha.png', 'Vanitha Crackers'],
            ['phdprime.png', 'PHD Prime'],
            ['newhappymobiles.png', 'New Happy Mobiles'],
            ['manjapai.png', 'Manjapai'],
            ['kvis.png', 'KVIS'],
            ['jaksi.png', 'Jaksi Cinema'],
            ['rehaan.png', 'Rehaan Furnishing'],
            ['vasantham.png', 'Vasantham & Co'],
            ['vasantham_store.gif', 'Vasantham Store'],
         ];
         $loop2 = array_merge($homeClients2, $homeClients2);
         foreach ($loop2 as $client) {
            echo '<img src="images/client/' . $client[0] . '" alt="' . htmlspecialchars($client[1], ENT_QUOTES, 'UTF-8') . '" loading="lazy" decoding="async">';
         }
         ?>
      </div>
   </div>
</section>

<?php include 'partials/footer.php'; ?>
