import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("astro:page-load", () => {
    // Reinitialize any client-side components or libraries
    initializeComponents();

    // Update active state in navigation
    updateActiveNavLink();
  
    // Scroll to top of page
    window.scrollTo(0, 0);
  
    // Analytics page view tracking
    trackPageView();
  
    // Re-run any syntax highlighting
    highlightCode();
  
    console.log("Page loaded and ready");

    initializeSmoothScrolling();
    animateFooter();
});

function initializeComponents() {
  // Initialize or re-initialize any client-side components
  // For example, if you're using libraries like Alpine.js or custom components
}

function updateActiveNavLink() {
  // Update the active state of navigation links based on current URL
  const currentPath = window.location.pathname;
  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === currentPath);
  });
}

function trackPageView() {
  // If you're using an analytics service, track the page view here
  // For example, with Google Analytics:
  // if (typeof gtag === 'function') {
  //   gtag('config', 'YOUR-TRACKING-ID', {'page_path': window.location.pathname});
  // }
}

function highlightCode() {
  // If you're using a syntax highlighting library like Prism.js
  // if (typeof Prism !== 'undefined') {
  //   Prism.highlightAll();
  // }
}

function initializeSmoothScrolling() {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    smooth: true,
    lerp: 0.07,
    infinite: false,
    smoothTouch: false,
    ease: (t) => 1 - Math.pow(1 - t, 3), // Lenis easing function
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  ScrollTrigger.refresh();
}

function animateFooter() {
  const footer = document.getElementById("footer");
  const mainPanel = document.getElementById("mainPanel");

  gsap.fromTo(
    footer,
    { y: "20%" }, // Footer starts 40% down
    {
      y: "0%", // Moves to normal position when user is at the bottom
      scrollTrigger: {
        trigger: mainPanel,
        start: "bottom bottom", // Footer starts moving when mainPanel starts leaving viewport
        end: "bottom top", // Fully animates when mainPanel is out of viewport
        scrub: 1, // Makes animation bind to user scroll
      },
      modifiers: {
        y: (value) => {
          const t = parseFloat(value) / 20; // Normalize value
          return `${(1 - Math.pow(1 - t, 3)) * 20}%`; // Apply Lenis easing
        },
      },
    }
  );
}
