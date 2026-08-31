<?php
$title = 'Career';
$meta_description = 'Careers at Elancier Solutions, Madurai. Current openings and studio culture.';
$extra_inline_js = '$(".custom-file-input").on("change", function() { var fileName = $(this).val().split("\\\\").pop(); $(this).siblings(".custom-file-label").addClass("selected").html(fileName); });';
include 'partials/header.php';
include 'partials/menu.php';
?>
<section class="page-hero" id="breadcrumb" prTitle="Job Openings" brTitle="Career">
   <?php include 'partials/breadcrumb.php'; ?>
</section>

<section class="section">
   <div class="shell career-layout">
      <div data-reveal>
         <p class="kicker">Studio life</p>
         <h2>Build meaningful digital products with us.</h2>
         <p>At Elancier, we are constantly looking to bring quality professionals on board to join our family and enhance our abilities. We take pride in being able to identify individuals with an incredible talent for a design or programming career. With fun, enthusiasm and continual innovation as essential components of our web development careers, our work environment is best defined as bustling with creativity and innovation.</p>
         <a href="#jobs" class="btn btn-solid">View Opening</a>
      </div>
      <div data-reveal="right">
         <img src="images/career/career.jpg" alt="Elancier career culture" width="720" height="480" decoding="async">
      </div>
   </div>
</section>

<section class="section soft">
   <div class="shell">
      <div class="section-head" data-reveal>
         <div>
            <p class="kicker">Principles</p>
            <h2>How the studio works</h2>
         </div>
      </div>
      <div class="why-grid" data-stagger>
         <article class="why-card"><h3>Craft</h3><p>Design and programming treated as one product, not two hand-offs.</p></article>
         <article class="why-card"><h3>Clarity</h3><p>Requirements, reviews and delivery dates that people can actually use.</p></article>
         <article class="why-card"><h3>Learning</h3><p>Current stacks — PHP, Flutter, HTML/CSS, mobile UI — kept in daily use.</p></article>
         <article class="why-card"><h3>Care</h3><p>Clients stay for years because the work is maintained after launch.</p></article>
      </div>
   </div>
</section>

<section class="section" id="jobs">
   <div class="shell">
      <div class="section-head" data-reveal>
         <div>
            <p class="kicker">Jobs</p>
            <h2>Current opening</h2>
         </div>
      </div>
      <div class="career-card-div">
         <div id="accordion" class="accordion">
            <div class="card-2" style="display: none">
               <div class="card-header" id="acc5">
                  <button class="btn btn-link btn-block text-left acc-icon" type="button" data-toggle="collapse" data-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">Social Media Executive</button>
               </div>
               <div id="collapse-5" class="card-body collapse show p0" aria-labelledby="acc5" data-parent="#accordion"></div>
            </div>
            <div class="career-card card-2 mt30">
               <div class="card-header" id="accflt">
                  <button class="btn btn-link btn-block text-left acc-icon collapsed" type="button" data-toggle="collapse" data-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                     Urgent Required for Mobile/Web UI Designer
                  </button>
               </div>
               <div id="collapse-4" class="card-body collapse p0" aria-labelledby="accflt" data-parent="#accordion">
                  <div class="data-reqs">
                     <h5 class="pt20 pb20">Responsibilities</h5>
                     <ul class="check-list">
                        <li>Around 1+ years of IT experience in web-based application.</li>
                        <li>Having Strong Knowledge in HTML, Bootstrap, CSS, JQuery.</li>
                        <li>Prior Experience in developing designs / layouts for web based applications or products.</li>
                        <li>Ability to work in responsive design.</li>
                        <li>The candidate should have knowledge in creating wire frames, process flows, HTML Mock-up etc.</li>
                        <li>Share your resume to <a href="mailto:admin@elancier.com">admin@elancier.com</a></li>
                     </ul>
                     <h5 class="pt20 pb20">Required experience</h5>
                     <p>Must have at least 1+ years of experience</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<div class="popup-modals">
   <div class="modal" id="modalform">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h4 class="mt0 mb0">Apply Now</h4>
               <button type="button" class="closes" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body pt40 pb60">
               <div class="form-block fdgn2">
                  <form id="contact-form" method="post" action="#">
                     <div class="fieldsets row">
                        <div class="col-md-6 form-group">
                           <label class="field-label" for="form_name">Name</label>
                           <input id="form_name" type="text" name="name" placeholder="Enter your name *" required>
                        </div>
                        <div class="col-md-6 form-group">
                           <label class="field-label" for="form_email">Email</label>
                           <input id="form_email" type="email" name="email" placeholder="Enter your email *" required>
                        </div>
                     </div>
                     <div class="fieldsets row">
                        <div class="col-md-6 form-group">
                           <label class="field-label" for="form_phone">Phone</label>
                           <input id="form_phone" type="text" name="phone" placeholder="Enter your Phone No *" required>
                        </div>
                        <div class="col-md-6 form-group">
                           <label class="field-label" for="form_need">Role</label>
                           <select id="form_need" name="need" required>
                              <option value="">Select Post</option>
                              <option value="Mobile/Web UI Designer">Mobile/Web UI Designer</option>
                              <option value="Test Engineer">Test Engineer</option>
                              <option value="Php Developer">Php Developer</option>
                              <option value="Business Analyst">Business Analyst</option>
                              <option value="Other">Other</option>
                           </select>
                        </div>
                     </div>
                     <div class="fieldsets form-group">
                        <label class="field-label" for="form_message">Message</label>
                        <textarea id="form_message" name="message" placeholder="Message *" rows="4" required></textarea>
                     </div>
                     <div class="fieldsets- row">
                        <div class="col-md-12 form-group">
                           <label class="field-label" for="customFile">Resume</label>
                           <div class="custom-file">
                              <input type="file" class="custom-file-input mb0" id="customFile" name="resume" accept=".pdf,.doc,.docx">
                              <label class="custom-file-label" for="customFile">Choose file</label>
                           </div>
                           <p><small>Please upload maximum 5 files. Only pdf, docx and doc files.</small></p>
                        </div>
                     </div>
                     <div class="fieldsets mt20">
                        <button type="submit" class="btn btn-solid">Submit Resume</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<?php include 'partials/footer.php'; ?>
