
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 
<header id="header" class="sticky-top">
    <div class="container d-flex align-items-center justify-content-between">
        <span class="logo"><a href="/"><img src="assets/img/resume-beyond-logo.png" alt="logo"></a></span>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto" href="/">Home</a></li>
              <li class="dropdown"><a href="services"><span>Our Services</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <!--<li><a href="resume-writing"> Resume Writing</a></li>-->
                  <li><a href="cover-letter-writing">Cover Letter Writing</a></li>
                  <li><a href="linkedin-profile-writing-services">Linkedin Profile Writing</a></li>
                  <li><a href="job-interview-preparation">Job Interview Preparation</a></li>
                  <li><a href="thank-you-letter">Thank You Letter</a></li>
                  <li><a href="professional-biography-writing">Professional Biography Writing</a></li>
                  <li><a href="career-coaching">Career Coaching</a></li>
                  <li><a href="job-apply">Job Apply</a></li>
                  <li><a href="career-change-resume">Career Change Resume</a></li>
                  <li><a href="outplacement-services">Outplacement Services</a></li>
                  <li><a href="statement-of-purpose-writing">Statement of Purpose</a></li>
                  <li><a href="commitment-letter">Commitment Letter</a></li>
                </ul>
              </li>
              <li><a class="nav-link scrollto" href="pricing">Pricing</a></li>
              <li><a class="nav-link scrollto" href="blog">Blog</a></li>
              <li><a class="nav-link scrollto" href="/#contact">Contact</a></li>
              <li><a class="getstarted scrollto" href="tel:+977 9808853822" target="_blank"><i class="bx bx-phone-call " style="font-size: 30px;"></i> +977-9808853822</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
    </div>
</header>
`;
  }
}
customElements.define("my-header", MyHeader);
