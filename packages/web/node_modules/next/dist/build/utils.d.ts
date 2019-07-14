import { getPageChunks } from './webpack/plugins/chunk-graph-plugin';
export declare function collectPages(directory: string, pageExtensions: string[]): Promise<string[]>;
export interface PageInfo {
    isAmp?: boolean;
    size: number;
    chunks?: ReturnType<typeof getPageChunks>;
    static?: boolean;
    serverBundle: string;
}
export declare function printTreeView(list: string[], pageInfos: Map<string, PageInfo>, serverless: boolean): void;
export declare function getFileForPage({ page, pagesDirectory, pageExtensions, }: {
    page: string;
    pagesDirectory: string;
    pageExtensions: string[];
}): Promise<string | undefined>;
export declare function getSpecifiedPages(dir: string, pagesString: string, pageExtensions: string[]): Promise<string[]>;
export declare function getCacheIdentifier({ pagesDirectory, env, }: {
    pagesDirectory: string;
    env?: any;
}): Promise<string>;
export declare function getPageSizeInKb(page: string, distPath: string, buildId: string): Promise<number>;
export declare function isPageStatic(serverBundle: string, runtimeEnvConfig: any): {
    static?: boolean;
    prerender?: boolean;
};
export declare function hasCustomAppGetInitialProps(_appBundle: string, runtimeEnvConfig: any): boolean;
