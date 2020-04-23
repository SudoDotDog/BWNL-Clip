/**
 * @author WMXPY
 * @namespace Clip
 * @description Copy
 * @override Story
 */

import * as React from 'react';
import { writeToClipboard, writeToClipboardWithClipboardAPI, writeToClipboardWithExecCommand } from "../src";

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
                await writeToClipboard(value);
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
                await writeToClipboardWithClipboardAPI(value);
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
                writeToClipboardWithExecCommand(value);
            }}
        >Copy</button>
    </div>);
};
