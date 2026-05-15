var Webflow = Webflow || [];
Webflow.push(function () {
  
  // 1. Wanze: Läuft das Script überhaupt an?
  console.log("🚀 Mein lokales Script ist gestartet!");

  gsap.registerPlugin(ScrollTrigger);

  // 2. Wanze: Findet GSAP das Bild überhaupt?
  const bild = document.querySelector(".hero-image");
  console.log("📸 Habe ich das Bild gefunden?", bild);

  gsap.to(".hero-image", {
    scale: 1.3,
    ease: "none",
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

});