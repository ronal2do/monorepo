"use strict";exports.__esModule=true;exports.AllModulesIdentifiedPlugin=void 0;var _crypto=require("crypto");var _path=_interopRequireDefault(require("path"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * From escape-string-regexp: https://github.com/sindresorhus/escape-string-regexp
 * brought here to reduce the bundle size
 * MIT License
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
 */const matchOperatorsRe=/[|\\{}()[\]^$+*?.-]/g;const escapeRegex=str=>{if(typeof str!=='string'){throw new TypeError('Expected a string');}return str.replace(matchOperatorsRe,'\\$&');};function getRawModuleIdentifier(m,dir){// webpack impl:
// new RawModule(
//   "/* (ignored) */",
//   `ignored ${context} ${request}`,
//   `${request} (ignored)`
// )
let request=m.readableIdentifierStr.replace(/ \(ignored\)$/,'');let context=m.identifierStr.match(new RegExp(`^ignored (.*) ${escapeRegex(request)}$`)).pop();if(_path.default.isAbsolute(request)){request=_path.default.relative(dir,request);}if(_path.default.isAbsolute(context)){context=_path.default.relative(dir,context);}return`${context}::${request}`;}function getMultiModuleIdentifier(m){const mods=m.dependencies.map(d=>d.module);if(mods.some(d=>!Boolean(d))){throw new Error('Cannot handle a MultiModule with moduleless dependencies');}const ids=mods.map(m=>m.id);if(ids.some(i=>!Boolean(i))){throw new Error('Cannot handle a MultiModule dependency without a module id');}return ids.sort().join('::');}class AllModulesIdentifiedPlugin{constructor(dir){this.dir=void 0;this.dir=dir;}apply(compiler){compiler.hooks.compilation.tap('AllModulesIdentifiedPlugin',compilation=>{compilation.hooks.beforeModuleIds.tap('AllModulesIdentifiedPlugin',modules=>{;modules.forEach(m=>{if(m.id!=null){return;}let identifier;if(m.constructor&&m.constructor.name==='RawModule'){identifier=getRawModuleIdentifier(m,this.dir);}else if(m.constructor&&m.constructor.name==='MultiModule'){identifier=getMultiModuleIdentifier(m);}else{throw new Error(`Do not know how to handle module: ${m.name}, ${m.identifier&&m.identifier()}, ${m.type}, ${m.constructor&&m.constructor.name}`);}// This hashing algorithm is consistent with how the rest of
// webpack does it (n.b. HashedModuleIdsPlugin)
m.id=(0,_crypto.createHash)('md4').update(identifier).digest('hex').substr(0,4);});});});}}exports.AllModulesIdentifiedPlugin=AllModulesIdentifiedPlugin;