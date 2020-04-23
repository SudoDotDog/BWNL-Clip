/**
 * @author WMXPY
 * @namespace Clip
 * @description Paste
 * @override Story
 */

import * as React from 'react';
import { pasteFromClipboard, pasteFromClipboardWithClipboardAPI, pasteFromClipboardWithExecCommand } from "../src";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Paste',
};

export const Dynamic: React.FC = () => {

    const [value, setValue] = React.useState('...');

    return (<div>
        <div>{value}</div>
        <button
            onClick={async () => {
                const target: string = await pasteFromClipboard();
                setValue(target);
            }}
        >Paste</button>
    </div>);
};

export const ClipboardAPI: React.FC = () => {

    const [value, setValue] = React.useState('...');

    return (<div>
        <div>{value}</div>
        <button
            onClick={async () => {
                const target: string = await pasteFromClipboardWithClipboardAPI();
                setValue(target);
            }}
        >Copy</button>
    </div>);
};

export const ExecCommandAPI: React.FC = () => {

    const [value, setValue] = React.useState('...');

    return (<div>
        <div>{value}</div>
        <button
            onClick={() => {
                const target: string = pasteFromClipboardWithExecCommand();
                setValue(target);
            }}
        >Copy</button>
    </div>);
};
