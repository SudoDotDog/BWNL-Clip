/**
 * @author WMXPY
 * @namespace Clip
 * @description Copy
 */

import { testClipboardSupport } from "./support";

export const copyToClipboardWithClipboardAPI = async (text: string): Promise<boolean> => {

    await navigator.clipboard.writeText(text);
    return true;
};

export const copyToClipboardWithExecCommand = (text: string): boolean => {

    const textarea: HTMLTextAreaElement = document.createElement('textarea');

    textarea.style.height = '0';
    textarea.style.width = '0';
    textarea.style.padding = '0';
    textarea.style.margin = '0';
    textarea.style.border = '1px solid transparent';
    textarea.style.overflow = 'hidden';

    document.body.appendChild(textarea);

    textarea.value = text;
    textarea.select();

    const result: boolean = document.execCommand('copy');

    document.body.removeChild(textarea);
    return result;
};

export const copyToClipboard = async (text: string): Promise<boolean> => {

    if (testClipboardSupport()) {
        return await copyToClipboardWithClipboardAPI(text);
    }
    return copyToClipboardWithExecCommand(text);
};
