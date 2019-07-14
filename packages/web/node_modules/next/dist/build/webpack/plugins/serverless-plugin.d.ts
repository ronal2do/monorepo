import { Compiler } from 'webpack';
export declare class ServerlessPlugin {
    private buildId;
    private isServer;
    constructor(buildId: string, { isServer }?: {
        isServer?: boolean | undefined;
    });
    apply(compiler: Compiler): void;
}
