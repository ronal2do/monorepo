import { PageInfo } from './utils';
export declare class FlyingShuttle {
    private apexShuttleDirectory;
    private flyingShuttleId;
    private buildId;
    private pagesDirectory;
    private distDirectory;
    private parentCacheIdentifier;
    private _shuttleBuildId;
    private _restoreSema;
    private _recalledManifest;
    constructor({ buildId, pagesDirectory, distDirectory, cacheIdentifier, }: {
        buildId: string;
        pagesDirectory: string;
        distDirectory: string;
        cacheIdentifier: string;
    });
    readonly shuttleDirectory: string;
    private findShuttleId;
    hasShuttle: () => Promise<boolean | "" | undefined>;
    readonly shuttleBuildId: string | undefined;
    getPageInfos: () => Promise<Map<string, PageInfo>>;
    getUnchangedPages: () => Promise<string[]>;
    mergePagesManifest: () => Promise<void>;
    restorePage: (page: string, pageInfo?: PageInfo) => Promise<boolean>;
    save: (staticPages: Set<string>, pageInfos: Map<string, PageInfo>) => Promise<void>;
}
