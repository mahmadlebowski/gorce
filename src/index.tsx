import * as React from "react";
import { render } from "react-dom";
import "./styles.css";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            quote: "Le discours progressiste"
        };
    }

    public componentDidMount() {
        this.renderCanvas(this.state.quote);
    }

    public componentDidUpdate() {
        this.renderCanvas(this.state.quote);
    }

    public renderCanvas(text: string) {
        var canvas = document.getElementById("canvas") as HTMLCanvasElement;
        if (canvas === null) {
            return;
        }
        var context = canvas.getContext("2d")!;


        // Draw Image function
        var img = new Image();
        img.src = process.env.PUBLIC_URL + "/background.png";
        console.log(img);
        img.onload = () => {
            console.log(img);
            var lineHeight = 18;
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#000000";
            context.font = lineHeight + "px Indie Flower";
            context.textAlign = "center";
            var x = 150;
            var y = 40;
            var lines = text.split("\n");
            for (var i = 0; i < lines.length; i += 1) {
                context.fillText(lines[i], x, y + i * lineHeight);
            }
            context.fillText("Vous êtes bête contrairement à moi", 420, 50);
            context.fillText(
                "(Xavier Gorce) qui suit intelligent",
                420,
                50 + lineHeight
            );
        };
    }

    public handleChange(event: any) {
        this.setState({
            quote: event.target.value
        });
    }

    public render() {
        return (
            <div className="App">
                <textarea
                    id="text"
                    className="flex-item"
                    value={this.state.quote}
                    onChange={(event) => this.handleChange(event)}
                ></textarea>
                <div className="flex-container">
                    <canvas
                        className="flex-item"
                        id="canvas"
                        width="560"
                        height="287"
                    ></canvas>
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
