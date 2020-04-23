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
        <div>
            <input
                type="text"
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                }}
            />
        </div>
        <button
            onClick={async () => {
                await copyToClipboard(value);
            }}
        >Copy</button>
    </div>);
};

export const ClipboardAPI: React.FC = () => {

    const [value, setValue] = React.useState('Target');

    return (<div>
        <div>
            <input
                type="text"
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                }}
            />
        </div>
        <button
            onClick={async () => {
                await copyToClipboardWithClipboardAPI(value);
            }}
        >Copy</button>
    </div>);
};

export const ExecCommandAPI: React.FC = () => {

    const [value, setValue] = React.useState('Target');

    return (<div>
        <div>
            <input
                type="text"
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                }}
            />
        </div>
        <button
            onClick={() => {
                copyToClipboardWithExecCommand(value);
            }}
        >Copy</button>
    </div>);
};
