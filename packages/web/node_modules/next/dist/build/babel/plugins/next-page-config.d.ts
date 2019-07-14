import { PluginObj } from '@babel/core';
import * as BabelTypes from '@babel/types';
export declare const inlineGipIdentifier = "__NEXT_GIP_INLINE__";
export declare const dropBundleIdentifier = "__NEXT_DROP_CLIENT_FILE__";
export default function nextPageConfig({ types: t, }: {
    types: typeof BabelTypes;
}): PluginObj;
