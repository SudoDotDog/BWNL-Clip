/**
 * @author WMXPY
 * @namespace Clip
 * @description Paste
 */

import { testClipboardSupport } from "./support";

export const readFromClipboardWithClipboardAPI = async (): Promise<string> => {

    const text: string = await navigator.clipboard.readText();
    return text;
};

export const readFromClipboardWithExecCommand = (): string => {

    const textarea: HTMLTextAreaElement = document.createElement('textarea');

    textarea.style.height = '0';
    textarea.style.width = '0';
    textarea.style.padding = '0';
    textarea.style.margin = '0';
    textarea.style.border = '1px solid transparent';
    textarea.style.overflow = 'hidden';

    document.body.appendChild(textarea);

    textarea.select();

    const result: boolean = document.execCommand('paste');
    const text: string = textarea.value;

    document.body.removeChild(textarea);
    return text;
};

export const readFromClipboard = async (): Promise<string> => {

    if (testClipboardSupport()) {
        return await readFromClipboardWithClipboardAPI();
    }
    return readFromClipboardWithExecCommand();
};
