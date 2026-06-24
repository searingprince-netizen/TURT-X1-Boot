document.addEventListener("DOMContentLoaded", () => {
    
    const ambientLight = document.getElementById("ambient-lighting");
    const particles = document.querySelector(".ambient-particles");
    
    const origin = document.getElementById("energy-origin");
    const ringContainer = document.getElementById("crystal-ring-container");
    const layer1 = document.querySelector(".layer-shard-1");
    const layer2 = document.querySelector(".layer-shard-2");
    
    const brand = document.getElementById("brand-matrix");
    const textX1 = document.querySelector(".text-x1");
    const flare = document.querySelector(".anamorphic-flare");
    
    const manifest = document.getElementById("os-manifest");
    const complete = document.getElementById("boot-complete");

    function executeBoot() {
        // Frame 01: Energy Spark & Particles appear
        origin.classList.add("visible");
        particles.style.opacity = "1";

        // Frame 02-04: Ring Expands & Ambient light ignites
        setTimeout(() => {
            origin.classList.add("fade-out");
            ambientLight.style.opacity = "1"; // Deep background glow turns on
            ringContainer.classList.add("visible", "anim-ring-expand");
            
            setTimeout(() => {
                ringContainer.classList.remove("anim-ring-expand");
                layer1.classList.add("anim-ring-spin-1");
                layer2.classList.add("anim-ring-spin-2");
            }, 4000);
        }, 1200);

        // Frame 05-06: Brand Matrix
        setTimeout(() => {
            brand.classList.add("visible");
        }, 4200);

        // Frame 07: X1 Entry
        setTimeout(() => {
            ringContainer.style.opacity = "0.2"; 
            textX1.classList.add("slide-in");
        }, 5500);

        // Frame 08-10: Lens Flare Sweep
        setTimeout(() => {
            flare.classList.add("anim-flare-sweep");
            // Ambient light pulses brighter with the flare
            ambientLight.style.background = "radial-gradient(circle, rgba(0, 150, 255, 0.15) 0%, transparent 70%)";
        }, 6200);

        // Frame 11: OS Reveal (Diamond)
        setTimeout(() => {
            brand.classList.add("fade-out");
            ringContainer.classList.add("fade-out");
            ambientLight.style.background = "radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 60%)"; // reset light
            
            setTimeout(() => {
                manifest.classList.add("visible");
            }, 1000);
        }, 9000);

        // Frame 12: Boot Complete
        setTimeout(() => {
            manifest.classList.add("fade-out");
            particles.style.opacity = "0"; // Particles fade away
            setTimeout(() => {
                complete.classList.add("visible");
            }, 1000);
        }, 13500);
    }

    setTimeout(executeBoot, 1000);
});
