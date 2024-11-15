import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

export default {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
}