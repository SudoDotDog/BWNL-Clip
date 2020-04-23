/**
 * @author WMXPY
 * @namespace Clip
 * @description Support
 */

export const testClipboardSupport = (): boolean => {

    if (Boolean(navigator.clipboard)) {
        return true;
    }
    return false;
};
