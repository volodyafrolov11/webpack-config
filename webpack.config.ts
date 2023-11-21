import webpack from 'webpack';
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./config/build/types/types";
import path from "path";

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
    bundleAnalyzer?: boolean;
    platform?: BuildPlatform;
    babelLoader?: boolean;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        bundleAnalyzer: env.bundleAnalyzer || false,
        platform: env.platform ?? 'desktop',
        babelLoader: env.babelLoader ?? false,
        paths,
    })
    return config;
}