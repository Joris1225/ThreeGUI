/// <reference path="scripts/typings/threejs/three.d.ts" />
/// <reference path="threegui.ts" />
var Game = (function () {
    function Game(element) {
        var _this = this;
        this.tick = function () {
            _this.update();
            _this.render();

            window.requestAnimationFrame(_this.tick);
        };
        this.element = element;
    }
    Game.prototype.start = function () {
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
    };

    Game.prototype.update = function () {
    };

    Game.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };

    Game.prototype.createDemoScene = function () {
        this.scene.add(new THREE.Mesh(new THREE.SphereGeometry(50, 16, 16), new THREE.MeshLambertMaterial({ color: 0xff0000 })));
        var light = new THREE.PointLight(0xffffff);
        light.position.set(10, 50, 130);
        this.scene.add(light);
    };
    Game.WIDTH = 960;
    Game.HEIGHT = 600;
    return Game;
})();

window.onload = function () {
    var el = document.getElementById('content');
    new Game(el).start();
};
//# sourceMappingURL=app.js.map
