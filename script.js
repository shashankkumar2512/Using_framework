
const m = window.motion;


function animateFadeUp(el, delay = 0) {
  m.animate(el, { opacity: [0,1], transform: ["translateY(18px)", "translateY(0)"] }, { duration: 600, delay });
}


window.addEventListener('load', () => {
  const hero = document.getElementById('hero');
  animateFadeUp(hero, 80);
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseInt(el.dataset.delay) || 0;
      animateFadeUp(el, delay);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .project-item, .exp-item').forEach(el => observer.observe(el));

document.querySelectorAll('.chip, .tag').forEach(node => {
  node.addEventListener('mouseenter', () => m.animate(node, { transform: ['scale(1)', 'scale(1.04)'] }, { duration: 180 }));
  node.addEventListener('mouseleave', () => m.animate(node, { transform: ['scale(1.04)', 'scale(1)'] }, { duration: 160 }));
});
