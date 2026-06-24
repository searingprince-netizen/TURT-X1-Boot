const container = document.getElementById("three-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

camera.position.z = 8;

/* Crystal Ring */
const ringGeometry = new THREE.TorusGeometry(2.8, 0.12, 32, 200);
const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x00aaff,
    transparent: true,
    opacity: 0.6
});
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
scene.add(ring);

/* Glow Ring */
const glowGeometry = new THREE.TorusGeometry(2.85, 0.25, 32, 200);
const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x0088ff,
    transparent: true,
    opacity: 0.12
});
const glow = new THREE.Mesh(glowGeometry, glowMaterial);
scene.add(glow);

function animate() {
    requestAnimationFrame(animate);
    
    // Smooth background rotation
    ring.rotation.z += 0.002;
    glow.rotation.z -= 0.001;
    
    renderer.render(scene, camera);
}

animate();

// Handle Window Resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
