module ThreeGUI {
    export class GUI {

        private ctx: CanvasRenderingContext2D;
        private canvas: HTMLCanvasElement;
        private elements: GUIElement[];

        constructor(gameCanvas: HTMLCanvasElement) {
            this.elements = [];

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
                throw new Error('Could not create 2D context. Consider upgrading your browser!');
            gameCanvas.parentNode.appendChild(this.canvas);
        }

        public update(): void {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.elements.forEach(el => {
                el.draw(this.ctx);
            });
        }

        public addGUIElement(element: GUIElement): void {
            this.elements.push(element);
        }

    }

    export class GUIElement {
        private x: number;
        private y: number;
        private content: any;

        public draw(ctx: CanvasRenderingContext2D): void { }
        public getContent(): any {
            return this.content;
        }

        public constructor(content: any, x: number, y: number) {
            this.content = content;
            this.x = x;
            this.y = y;
        }

        public getX(): number {
            return this.x;
        }

        public getY(): number {
            return this.y;
        }

        public setX(x: number): void {
            this.x = x;
        }

        public setY(y: number): void {
            this.y = y;
        }
    }

    export class GUITextElement extends GUIElement {

        private color: string;
        private font: string;

        public constructor(text: string, x: number, y: number) {
            super(text, x, y);
        }

        public getContent(): string {
            return super.getContent();
        }

        public draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = this.color;
            ctx.font = this.font;
            ctx.fillText(this.getContent(), this.getX(), this.getY());
        }

        public getColor(): string {
            return this.color;
        }

        public setColor(color: string): void {
            this.color = color;
        }

        public getFont(): string {
            return this.font;
        }

        public setFont(font: string): void {
            this.font = font;
        }
    }

    export class GUIImageElement extends GUIElement {

        private width: number;
        private height: number;

        public constructor(image: HTMLElement, x: number, y: number, width: number, height: number) {
            super(image, x, y);
            this.width = width;
            this.height = height;
        }

        public getContent(): HTMLElement {
            return super.getContent();
        }

        public draw(ctx: CanvasRenderingContext2D): void {
            ctx.drawImage(this.getContent(), this.getX(), this.getY(), this.width, this.height);
        }

        public getWidth(): number {
            return this.width;
        }

        public getHeight(): number {
            return this.height;
        }

        public setWidth(width: number): void {
            this.width = width;
        }

        public setHeight(height: number): void {
            this.height = height;
        }
    }
} 