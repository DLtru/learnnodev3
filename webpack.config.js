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
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["./style-loader" , "css-loader"],
          },
          {
            test: /\.scss$/i,
            use: ["./style-loader" ,  "sass-loader"],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  './src/index.html'
        }),
    ],
}