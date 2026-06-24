document.addEventListener("DOMContentLoaded", () => {
    
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
        // Frame 01: Energy Spark
        origin.classList.add("visible");

        // Frame 02-04: Ring Expands and Starts Complex Rotation
        setTimeout(() => {
            origin.classList.add("fade-out");
            ringContainer.classList.add("visible", "anim-ring-expand");
            
            setTimeout(() => {
                ringContainer.classList.remove("anim-ring-expand");
                layer1.classList.add("anim-ring-spin-1");
                layer2.classList.add("anim-ring-spin-2");
            }, 3500);
        }, 1000);

        // Frame 05-06: TURT inside the ring
        setTimeout(() => {
            brand.classList.add("visible");
        }, 3800);

        // Frame 07: X1 Slides in & Ring fades back
        setTimeout(() => {
            ringContainer.style.opacity = "0.3"; // Ring goes to background
            textX1.classList.add("slide-in");
        }, 5200);

        // Frame 08-10: Anamorphic Light Sweep
        setTimeout(() => {
            flare.classList.add("anim-flare-sweep");
        }, 6000);

        // Frame 11: OS Reveal (Diamond & Hologram Pedestal)
        setTimeout(() => {
            brand.classList.add("fade-out");
            ringContainer.classList.add("fade-out");
            
            setTimeout(() => {
                manifest.classList.add("visible");
            }, 800);
        }, 8500);

        // Frame 12: Minimal Welcome Screen
        setTimeout(() => {
            manifest.classList.add("fade-out");
            setTimeout(() => {
                complete.classList.add("visible");
            }, 800);
        }, 12500);
    }

    setTimeout(executeBoot, 800);
});
