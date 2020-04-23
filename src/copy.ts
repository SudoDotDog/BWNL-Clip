/**
 * @author WMXPY
 * @namespace Clip
 * @description Copy
 */

import { testClipboardSupport } from "support";

export const copyToClipboardWithClipboardAPI = async (text: string): Promise<boolean> => {

    await navigator.clipboard.writeText(text);
    return true;
};

export const copyToClipboardWithExecCommand = (text: string): boolean => {

    const textarea: HTMLTextAreaElement = document.createElement('textarea');
    textarea.style.display = 'none';
    textarea.style.height = '0';
    textarea.style.width = '0';

    textarea.value = text;
    textarea.select();

    const result: boolean = document.execCommand('copy');
    return result;
};

export const copyToClipboard = async (text: string): Promise<boolean> => {

    if (testClipboardSupport()) {
        return await copyToClipboardWithClipboardAPI(text);
    }
    return copyToClipboardWithExecCommand(text);
};
