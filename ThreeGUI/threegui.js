var ThreeGUI;
(function (ThreeGUI) {
    var GUI = (function () {
        function GUI(gameCanvas) {
            this.canvas = document.createElement("canvas");

            this.canvas.width = gameCanvas.width;
            this.canvas.height = gameCanvas.height;
            var location = gameCanvas.getBoundingClientRect();
            this.canvas.style.position = "absolute";
            this.canvas.style.top = location.top.toString() + "px";
            this.canvas.style.left = location.left.toString() + "px";
            this.ctx = this.canvas.getContext("2d");
            if (this.ctx == null)
                console.error("Could not create 2D context. Consider upgrading your browser!");
            gameCanvas.parentNode.appendChild(this.canvas);
            this.render();
        }
        GUI.prototype.render = function () {
            this.ctx.fillStyle = "#00ff00";
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillText("test1234", 10, 10);
        };
        return GUI;
    })();
    ThreeGUI.GUI = GUI;
})(ThreeGUI || (ThreeGUI = {}));
//# sourceMappingURL=threegui.js.map
