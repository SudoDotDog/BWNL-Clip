/**
 * @author WMXPY
 * @namespace Clip
 * @description Paste
 * @override Story
 */

import * as React from 'react';
import { readFromClipboard, readFromClipboardWithClipboardAPI, readFromClipboardWithExecCommand } from "../src";

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
                const target: string = await readFromClipboard();
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
                const target: string = await readFromClipboardWithClipboardAPI();
                setValue(target);
            }}
        >Paste</button>
    </div>);
};

export const ExecCommandAPI: React.FC = () => {

    const [value, setValue] = React.useState('...');

    return (<div>
        <div>{value}</div>
        <button
            onClick={() => {
                const target: string = readFromClipboardWithExecCommand();
                setValue(target);
            }}
        >Paste</button>
    </div>);
};
