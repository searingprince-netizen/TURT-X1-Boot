document.addEventListener("DOMContentLoaded", () => {
    
    // Stages
    const origin = document.getElementById("energy-origin");
    const ring = document.getElementById("crystal-ring-container");
    const brand = document.getElementById("brand-matrix");
    const textX1 = document.querySelector(".text-x1");
    const sweep = document.querySelector(".laser-flare-sweep");
    const manifest = document.getElementById("os-manifest");
    const complete = document.getElementById("boot-complete");

    function bootSequence() {
        // Frame 01: Energy Origin
        origin.classList.add("visible");

        // Frame 02-04: Ring Expands & Rotates
        setTimeout(() => {
            origin.classList.add("fade-out");
            ring.classList.add("visible", "anim-ring-expand");
            
            // Switch to continuous rotation after expansion
            setTimeout(() => {
                ring.classList.remove("anim-ring-expand");
                ring.classList.add("anim-ring-rotate");
            }, 3000);
        }, 800);

        // Frame 05-06: Letters Form ("TURT" appears inside ring)
        setTimeout(() => {
            brand.classList.add("visible");
        }, 3200);

        // Frame 07: X1 Slides In & Ring starts fading
        setTimeout(() => {
            ring.classList.add("fade-out");
            textX1.classList.add("slide-in");
        }, 4500);

        // Frame 08-10: Light Sweep & Hold
        setTimeout(() => {
            sweep.classList.add("anim-sweep");
        }, 5200);

        // Frame 11: OS Reveal (Diamond & Pedestal)
        setTimeout(() => {
            brand.classList.add("fade-out");
            manifest.classList.add("visible");
        }, 7500);

        // Frame 12: Boot Complete
        setTimeout(() => {
            manifest.classList.add("fade-out");
            complete.classList.add("visible");
        }, 11000);
    }

    // Start Boot
    setTimeout(bootSequence, 500);
});
