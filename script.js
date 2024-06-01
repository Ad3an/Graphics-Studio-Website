function ValhallaAnimations() {
  gsap.fromTo(
    ".hero h1",
    {
      y: 60,
      opacity: 0,
      stagger: 0.6,
    },
    {
      opacity: 1,
      y: 0,
      ease: "elastic",
      delay: 0.5,
      duration: 2,
    }
  );
  gsap.fromTo(
    ".hero p",
    {
      opacity: 0,
      right: 150,
    },
    {
      opacity: 1,
      right: 80,
      ease: "elastic",
      delay: 0.7,
      duration: 2,
    }
  );
  gsap.fromTo(
    ".text",
    {
      opacity: 0,
      stagger: 0.6,
    },
    {
      duration: 2,
      opacity: 1,
      delay: 0.5,
    }
  );
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".offer-section",
      scrub: false,
      start: "-5% 20%",
      end: "bottom 50%",
      
    
    },
  });
  tl.fromTo(
    ".left .head h1",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      ease: "elastic",
      duration: 2,
    }
  );
  gsap.to(".portfolio", {
    scrollTrigger: {
      trigger: ".portfolio-section",
      start: "25% top",
      end: "bottom top",
      pin: true,
      scrub:true,
    },
    ease: Power1,
    xPercent: -200,
  });
  var dl = gsap.timeline({
    scrollTrigger: {
      trigger: ".divine-section",
      start: "top 80%",
      end: "bottom 80%",
      scrub: false,
    },
  });
  dl.from(".divine-section .rightd ", {
    opacity: 0,
    x: -100,
    stagger: 0.9,
    duration: 1,
    ease: Power4,
  });
  dl.from(
    ".divine-section .leftd",
    {
      opacity: 0,
      scale: 0,
      ease: Power1,
      duration: 1,
    },
    "<"
  );
  var sl = gsap.timeline({
    scrollTrigger:{
      trigger:".services-section",
      start:"top 50%",
      end:"bottom 80%",
      scrub:false,
  
    }
  })
  sl.fromTo(".service-container",{
    opacity:0,
    y:100,
    stagger:0.7
  },
{
  opacity:1,
  y:0,
  ease:Power1
})
  // mouse follow buttons
  let buttons = document.querySelectorAll(".btn");
  let icons = document.querySelectorAll(".btn i");

  const activateMagneto = (event) => {
    let hoveredButton = event.target.closest(".btn");
    let index = [...buttons].indexOf(hoveredButton);

    if (index !== -1) {
      let boundbox = hoveredButton.getBoundingClientRect();
      const magnetoStrength = 50;
      const magnetoTextStrength = 100;
      const newX =
        (event.clientX - boundbox.left) / hoveredButton.offsetWidth - 0.5;
      const newY =
        (event.clientY - boundbox.top) / hoveredButton.offsetHeight - 0.5;

      gsap.to(hoveredButton, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut,
      });

      gsap.to(icons[index], {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut,
      });
    }
  };
  const deactivateMagneto = (event) => {
    let hoveredButton = event.target.closest(".btn");
    let index = [...buttons].indexOf(hoveredButton);

    if (index !== -1) {
      gsap.to(hoveredButton, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });

      gsap.to(icons[index], {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    }
  };
  // Add event listeners for mouse enter and mouse leave to each button
  buttons.forEach((button) => {
    button.addEventListener("mousemove", activateMagneto);
    button.addEventListener("mouseleave", deactivateMagneto);
  });
}
function loco() {
  const locomotiveScroll = new LocomotiveScroll();
}



ValhallaAnimations();
loco();
