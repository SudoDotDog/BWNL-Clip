/**
 * @author WMXPY
 * @namespace Clip
 * @description Copy
 * @override Story
 */

import * as React from 'react';
import { copyToClipboard, copyToClipboardWithClipboardAPI, copyToClipboardWithExecCommand } from "../src";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Copy',
};

export const Dynamic: React.FC = () => {

    const [value, setValue] = React.useState('Target');

    return (<div>
        <input
            type="text"
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value);
            }}
        />
        <button
            onClick={async () => {
                const result: boolean = await copyToClipboard(value);
                alert(result);
            }}
        >Copy</button>
    </div>);
};

export const ClipboardAPI: React.FC = () => {

    const [value, setValue] = React.useState('Target');

    return (<div>
        <input
            type="text"
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value);
            }}
        />
        <button
            onClick={async () => {
                const result: boolean = await copyToClipboardWithClipboardAPI(value);
                alert(result);
            }}
        >Copy</button>
    </div>);
};

export const ExecCommandAPI: React.FC = () => {

    const [value, setValue] = React.useState('Target');

    return (<div>
        <input
            type="text"
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value);
            }}
        />
        <button
            onClick={() => {
                const result: boolean = copyToClipboardWithExecCommand(value);
                alert(result);
            }}
        >Copy</button>
    </div>);
};
