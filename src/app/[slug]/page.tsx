"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamic component loader using a dynamic import
const loadComponent = (blockName) => {
    if (blockName.startsWith('acf/')) {
        // Extract the specific component name after 'acf/'
        const componentName = blockName.split('/')[1];
        return dynamic(() => import(`/src/app/(components)/${componentName}/page`).then(mod => mod.default));
    } else if (blockName.startsWith('core/')) {
        // Load native component for core blocks
        return dynamic(() => import('/src/app/(components)/native/page').then(mod => mod.default));
    } else {
        // Return undefined if no matching pattern
        return undefined;
    }
};

const BlockComponentLoader = ({ block }) => {
    const { blockName } = block;
    const Component = loadComponent(blockName);

    if (!Component) {
        return <div>Unsupported block type: {blockName}</div>;
    }

    return <Component block={block} />;
};

export default function Page({ params }) {
    const customURL = `http://noformat-git.local/wp-json/wp/v2/pages?slug=${params.slug}&_fields=custom_acf_blocks`;

    const [blocks, setBlocks] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(customURL);
            const data = await response.json();
            setBlocks(data[0]?.custom_acf_blocks || []);
            setLoading(false);
        }

        fetchData();
    }, [params.slug]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {blocks.map((block, index) => (
                <BlockComponentLoader key={index} block={block} />
            ))}
        </div>
    );
}
