/// <reference path="scripts/typings/threejs/three.d.ts" />
/// <reference path="threegui.ts" />

class Game {
    private static WIDTH: number = 960;
    private static HEIGHT: number = 600;
    private element: HTMLElement;
    private canvas: HTMLCanvasElement;
    private camera: THREE.Camera;
    private renderer: THREE.Renderer;
    private scene: THREE.Scene;
    private gui: ThreeGUI.GUI;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    start() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(Game.WIDTH, Game.HEIGHT);

        this.camera = new THREE.PerspectiveCamera(50, Game.WIDTH / Game.HEIGHT);
        this.scene = new THREE.Scene();
        this.scene.add(this.camera);
        this.camera.position.setZ(300);

        this.canvas = this.renderer.domElement;
        this.element.appendChild(this.canvas);

        this.createDemoScene();

        this.gui = new ThreeGUI.GUI(this.canvas);

        this.tick();
    }

    private tick = () => {
        this.update();
        this.render();

        window.requestAnimationFrame(this.tick);
    }

    private update() {
    }

    private render() {
        this.renderer.render(this.scene, this.camera);
    }


    private createDemoScene() {
        this.scene.add(new THREE.Mesh(
            new THREE.SphereGeometry(50, 16, 16),
            new THREE.MeshLambertMaterial({ color: 0xff0000 })
            ));
        var light: THREE.Light = new THREE.PointLight(0xffffff);
        light.position.set(10, 50, 130);
        this.scene.add(light);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    new Game(el).start();
};