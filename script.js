function headerSectionAnimation() {
  const headerTl = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power2.out",
      opacity: 0,
    },
  });

  // Logo animation
  headerTl.from("nav .nav-logo", {
    y: -30,
  });

  // Nav links & CTA
  headerTl.from(
    "nav .nav-link, nav .nav-cta",
    {
      y: -30,
      stagger: 0.1,
    },
    "-=0.3"
  ); // overlap with previous animation for smoother flow

  // Hero titles and subtitles
  headerTl.from(
    ".hero-section .hero-section-title, .hero-section .hero-section-subtitle",
    {
      x: -30,
      stagger: 0.2,
    },
    "-=0.2"
  );

  // Illustration
  headerTl.from(
    ".hero-section .hero-section-illustration",
    {
      x: 30,
    },
    "-=0.3"
  );

  // Button
  headerTl.from(
    ".hero-section .hero-section-btn",
    {
      x: -30,
    },
    "-=0.2"
  );
}

function servicesSectionAnimation() {
  const servicesTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 50%",
      end: "top -50%",
      scrub: true,
    //   markers: true,
    },
    defaults: {
      ease: "power2.out",
      opacity: 0,
    },
  });

  // section heading
  servicesTl.from(".services-section-top", {
    y: 50,
  });

  // left cards
  servicesTl.from(".services-section .service-card-left", {
    x: -100,
    stagger: 0.3,
  });

  // right cards → starts at the same time as left cards
  servicesTl.from(
    ".services-section .service-card-right",
    {
      x: 100,
      stagger: 0.3,
    },
    "<"
  ); // ✅ "<" means start at same time as previous
}

headerSectionAnimation();
servicesSectionAnimation();
