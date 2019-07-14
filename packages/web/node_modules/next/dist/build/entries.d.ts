declare type PagesMapping = {
    [page: string]: string;
};
export declare function createPagesMapping(pagePaths: string[], extensions: string[]): PagesMapping;
export declare type WebpackEntrypoints = {
    [bundle: string]: string | string[];
};
declare type Entrypoints = {
    client: WebpackEntrypoints;
    server: WebpackEntrypoints;
};
export declare function createEntrypoints(pages: PagesMapping, target: 'server' | 'serverless', buildId: string, dynamicBuildId: boolean, config: any): Entrypoints;
export {};
