export default function Header() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<header class="gbar">\n<div class="wrap brand-row">\n<input aria-controls="site-nav" aria-label="Menu" class="nav-check" id="navCheck" type="checkbox"/>\n<a class="brand" href="#top"><img alt="The Smile Club Dentistry and Orthodontics" height="244" src="/images/image-01.png" width="996"/></a>\n<nav aria-label="Main navigation" class="primary-nav" id="site-nav">\n<details><summary>Treatments</summary><div class="nav-links">\n<a href="#general">General dentistry</a><a href="#orthodontics">Orthodontics</a><a href="#cosmetic">Cosmetic dentistry</a><a href="#implants">Dental implants</a><a href="#services">All treatments</a>\n</div></details>\n<details><summary>About</summary><div class="nav-links">\n<a href="#care">Meet the team</a><a href="#office">Our office</a><a href="#reviews">Patient reviews</a>\n</div></details>\n<a class="nav-contact" href="#payment">Payment</a>\n<a class="nav-contact" href="#blog">Blog</a>\n<a class="nav-contact" href="#visit">Contact</a>\n</nav>\n<div class="header-actions"><a class="pill sm" href="#visit">Book an appointment</a><label aria-hidden="true" class="menu-toggle" for="navCheck"><span></span><span></span><span></span></label></div>\n</div>\n</header>',
      }}
    />
  );
}
