class MyFooter extends HTMLElement {
   connectedCallback() {
     this.innerHTML = `
<footer id="footer">
   <div class="footer-top">
      <div class="container">
         <div class="row">
            <div class="col-md-6 col-lg-3">
               <div class="footer-info">
                  <h4>Resume Making Services</h4>
                  <p class="pb-3"><em>Our Services Makes Your Professional Life Easy</em></p>
                  <p>
                  71-75, Shelton Street, Covent Garden,<br> London, WC2H 9JQ,<br>
                      UNITED KINGDOM<br><br>
                     <strong>Phone:</strong> <a href="tel:+46764363833">+46764363833</a><br>
                     <strong>Email:</strong> <a href="mailto:info@resumemakingservices.com">info@resumemakingservices.com</a><br>
                  </p>
                  <div class="social-links mt-3">
                     <a href="https://www.facebook.com/resumemakingservices/?ref=pages_you_manage" target="_blank" class="facebook"><i class="bx bxl-facebook"></i></a>
                     <a href="https://api.whatsapp.com/send?phone=+467643638 33&text=link" target="_blank" class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
                     <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                  </div>
               </div>
            </div>
            <div class="col-md-6 col-lg-2 footer-links">
               <h4>Useful Links</h4>
               <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="services">Services</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="pricing">Pricing</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="blog">Blog</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="/#contact">Contact</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="privacy">Privacy policy</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="terms-of-service">Terms of Service</a></li>
               </ul>
            </div>
            <div class="col-md-12 col-lg-4 footer-link-services">
               <h4>Our Services</h4>
               <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="/">Resume Writing</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="cover-letter-writing">Cover Letter Writing</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="linkedin-profile-writing-services">Linkedin Profile Writing</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="job-interview-preparation">Job Interview Preparation</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="thank-you-letter">Thank You Letter</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="professional-biography-writing">Professional Biography</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="career-coaching">Career Coaching</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="job-apply">Job Apply</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="career-change-resume">Career Change Resume</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="outplacement-services">Outplacement Services</a> </li>
                  <li><i class="bx bx-chevron-right"></i> <a href="statement-of-purpose-writing">Statement of Purpose</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="commitment-letter">Commitment Letter</a></li>
               </ul>
            </div>
            <div class="col-md-12 col-lg-3 footer-links">
                <h4>Recent Blogs</h4>
                <ul>
                    <li><i class="bx bx-chevron-right"></i> <a href="best-advice-for-job-seekers">Top 10 Best Advice for Jobseekers</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="importance-of-original-resume">Importance of original resume.</a></li>
                </ul>
            </div>
         </div>
      </div>
   </div>
   <div class="container">
      <div class="copyright">
         Copyright &copy;2025 <strong><span>ResumeAndBeyond</span></strong>. All Rights Reserved
      </div>
   </div>
</footer>
`;
  }
}
customElements.define("my-footer", MyFooter);
