var Webflow = Webflow || [];
Webflow.push(function () {
  
  // 1. Dem Browser sagen, dass wir das ScrollTrigger Plugin nutzen wollen
  gsap.registerPlugin(ScrollTrigger);

  // 2. Die Scroll-Animation definieren
  gsap.to(".hero-image", {
    scale: 1.3,           // Vergrößert das Bild auf das 1.3-fache
    ease: "none",         // Wichtig, damit die Animation nicht künstlich abbremst
    
    scrollTrigger: {
      trigger: ".header", // Der Container, der die Animation auslöst
      start: "top top",   // Startet, wenn die Oberkante des Headers am oberen Bildschirmrand ist
      end: "bottom top",  // Endet, wenn die Unterkante des Headers oben verschwindet
      scrub: true         // Koppelt die Animation butterweich an dein Scrollrad
    }
  });

});