import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        // @ts-ignore
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': options.paths.src,
        },
    };
}
