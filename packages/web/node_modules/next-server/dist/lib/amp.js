"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const amp_context_1 = require("./amp-context");
function isInAmpMode({ ampFirst = false, hybrid = false, hasQuery = false, } = {}) {
    return ampFirst || (hybrid && hasQuery);
}
exports.isInAmpMode = isInAmpMode;
function useAmp() {
    const ampState = react_1.default.useContext(amp_context_1.AmpStateContext);
    // un-comment below to not be considered AMP in dirty mode
    return isInAmpMode(ampState); // && ampMode.hasQuery
}
exports.useAmp = useAmp;
