/**
 * @author WMXPY
 * @namespace Clip
 * @description Copy
 * @override Story
 */

import * as React from 'react';
import { copyToClipboard } from "../src";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Copy',
};

export const Simple = () => {

    return (<button
        onClick={() => copyToClipboard()}
    >
        Copy
    </button>);
};
