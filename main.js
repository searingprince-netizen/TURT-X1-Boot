document.addEventListener("DOMContentLoaded", () => {
    // DOM Element hooks
    const core = document.getElementById("energy-core");
    const ring = document.getElementById("crystal-ring");
    const brand = document.getElementById("brand-container");
    const sweep = document.querySelector(".laser-sweep");
    const manifest = document.getElementById("os-manifest");
    const diamond = document.querySelector(".core-diamond");

    // Boot Time Sequence Manager
    function runBootPipeline() {
        // Frame 01 & 02: Spark manifestation
        setTimeout(() => {
            core.classList.add("show-block", "pulse-fast");
        }, 200);

        // Frame 03 & 04: Spark explodes into spinning crystal ring
        setTimeout(() => {
            core.style.display = "none";
            ring.classList.add("show-block", "spin-ring");
        }, 1500);

        // Frame 05 & 06: Ring compresses & TURT branding establishes
        setTimeout(() => {
            ring.style.display = "none";
            brand.classList.add("show-flex");
        }, 3800);

        // Frame 07 & 08: X1 entries & Horizontal light sweep ignition
        setTimeout(() => {
            sweep.classList.add("sweep-active");
        }, 4600);

        // Frame 09 & 10: Hold state for brand matrix validation
        setTimeout(() => {
            brand.style.transform = "scale(0.95)";
            brand.style.transition = "all 0.8s ease-in-out";
            brand.style.opacity = "0";
        }, 6500);

        // Frame 11 & 12: Final geometric crystal reveal & Welcome sequence
        setTimeout(() => {
            brand.style.display = "none";
            manifest.classList.add("show-flex");
            diamond.classList.add("diamond-glow");
        }, 7300);
    }

    // Initialize boot pipeline
    runBootPipeline();
});
