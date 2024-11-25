import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import loader from "sass-loader";

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
            use: ["style-loader" , "css-loader"],
          },
          {
            test: /\.scss$/i,
            use: [
                "style-loader",
                "css-loader" , 
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            quietDeps: true,
                        }
                    }
                }
            ],
          },
          {
          test: /\.njk$/,
          use: [
            {
              loader: "simple-nunjucks-loader",
              options: {},
            },
          ]
        }
    ],
},
    plugins: [
        new HtmlWebpackPlugin({
            template:  './src/index.njk',
        }),
        new HtmlWebpackPlugin({
            template:  './src/about.njk',
            filename: 'about.html'
        }),
    ],
}