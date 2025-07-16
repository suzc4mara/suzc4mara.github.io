import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  LineBasicMaterial,
  EdgesGeometry,
  LineSegments,
} from "three";

export default function PortfolioAnimation() {
  const div = document.querySelector("#animation");

  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  renderer.setClearColor(0xffffff, 0);
  div.appendChild(renderer.domElement);

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: "#474a51" });
  const cube = new Mesh(geometry, material);

  scene.add(cube);

  // Wireframe
  const geo = new EdgesGeometry(cube.geometry);
  const mat = new LineBasicMaterial({ color: "#f2e7bf" });
  const wireframe = new LineSegments(geo, mat);
  cube.add(wireframe);

  camera.position.z = 1.5;

  // Função para atualizar as cores do cubo conforme o tema
  function updateCubeColors() {
    const isLight = document.body.classList.contains("light-theme");
    // Troque as cores conforme o tema
    material.color.set(isLight ? "#f2e7bf"  : "#474a51");
    mat.color.set(isLight ? "#474a51" :"#f2e7bf");
  }

  // Detecta troca de tema
  const themeToggler = document.getElementById("theme");
  if (themeToggler) {
    themeToggler.addEventListener("change", () => {
      setTimeout(updateCubeColors, 100);
    });
  }

  // Atualiza ao carregar
  updateCubeColors();

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}
