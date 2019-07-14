import { loader } from 'webpack';
export declare type ServerlessLoaderQuery = {
    page: string;
    distDir: string;
    absolutePagePath: string;
    absoluteAppPath: string;
    absoluteDocumentPath: string;
    absoluteErrorPath: string;
    assetPrefix: string;
    ampBindInitData: boolean | string;
    generateEtags: string;
    dynamicBuildId?: string | boolean;
    canonicalBase: string;
};
declare const nextServerlessLoader: loader.Loader;
export default nextServerlessLoader;
