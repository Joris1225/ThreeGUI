module ThreeGUI {
    export class GUI {

        private ctx: CanvasRenderingContext2D;
        private canvas: HTMLCanvasElement;

        constructor(gameCanvas: HTMLCanvasElement) {
            this.canvas = document.createElement('canvas');
            this.canvas.style.zIndex = "10";

            this.canvas.width = gameCanvas.width;
            this.canvas.height = gameCanvas.height;
            var location: ClientRect = gameCanvas.getBoundingClientRect();
            this.canvas.style.position = 'absolute';
            this.canvas.style.top = location.top.toString() + 'px';
            this.canvas.style.left = location.left.toString() + 'px';
            this.ctx = this.canvas.getContext('2d');
            if (this.ctx == null)
                console.error('Could not create 2D context. Consider upgrading your browser!');
            gameCanvas.parentNode.appendChild(this.canvas);
        }

        public clear(): void {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        public setFillColor(fillStyle : any): void {
            this.ctx.fillStyle = fillStyle; 
        }

        public fillText(text: string, x: number, y: number): void {
            this.ctx.fillText(text, x, y);
        }

        public setFont(font: string): void {
            this.ctx.font = font;
        }

    }
} 