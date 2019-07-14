import { Compiler, Plugin } from 'webpack';
export declare class HashedChunkIdsPlugin implements Plugin {
    buildId: string;
    constructor(buildId: string);
    apply(compiler: Compiler): void;
}
