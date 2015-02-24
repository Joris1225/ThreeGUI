module ThreeGUI {
    export class GUI {

        private ctx: CanvasRenderingContext2D;
        private canvas: HTMLCanvasElement;

        constructor(gameCanvas: HTMLCanvasElement) {
            this.canvas = document.createElement("canvas");

            this.canvas.width = gameCanvas.width;
            this.canvas.height = gameCanvas.height;
            var location: ClientRect = gameCanvas.getBoundingClientRect();
            this.canvas.style.position = "absolute";
            this.canvas.style.top = location.top.toString() + "px";
            this.canvas.style.left = location.left.toString() + "px";
            this.ctx = this.canvas.getContext("2d");
            if (this.ctx == null)
                console.error("Could not create 2D context. Consider upgrading your browser!");
            gameCanvas.parentNode.appendChild(this.canvas);
            this.render();
        }

        private render() {
            this.ctx.fillStyle = "#00ff00";
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillText("test1234", 10, 10);

        }

    }
} 