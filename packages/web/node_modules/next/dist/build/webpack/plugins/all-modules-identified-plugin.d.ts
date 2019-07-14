import { Compiler, Plugin } from 'webpack';
export declare class AllModulesIdentifiedPlugin implements Plugin {
    private dir;
    constructor(dir: string);
    apply(compiler: Compiler): void;
}
