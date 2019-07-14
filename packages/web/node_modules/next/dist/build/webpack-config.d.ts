import webpack from 'webpack';
import { WebpackEntrypoints } from './entries';
export default function getBaseWebpackConfig(dir: string, { dev, isServer, buildId, config, target, entrypoints, selectivePageBuilding, }: {
    dev?: boolean;
    isServer?: boolean;
    buildId: string;
    config: any;
    target?: string;
    entrypoints: WebpackEntrypoints;
    selectivePageBuilding?: boolean;
}): Promise<webpack.Configuration>;
