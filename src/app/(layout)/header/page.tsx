"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Helper function to transform WordPress URL to Next.js path
const transformUrlToPath = (url: string) => {
    const baseUrl = 'http://noformat-git.local'; // Your WordPress domain
    if (url === "#" || !url.startsWith(baseUrl)) {
        return url; // Return the URL unchanged if it's "#" or not starting with the base URL
    }
    // Remove the base URL part, leaving only the path, e.g., "/work/"
    return url.replace(baseUrl, '') || '/';
};

const Header: React.FC = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const response = await fetch('http://noformat-git.local/wp-json/wp/v2/menus?id=10');
            const menuData = await response.json();
            const transformedItems = menuData.items.map(item => ({
                ...item,
                url: transformUrlToPath(item.url),
                title: item.title || 'Unnamed Link'
            }));
            setMenuItems(transformedItems);
        };

        fetchMenuItems();
    }, []);

    return (
        <header className="bg-gray-100 p-4 shadow-md">
            <nav>
                {menuItems.map((item) => (
                    <Link key={item.ID} href={item.url}>
                        <p className={`p-2 hover:bg-blue-200 ${item.classes.join(' ')}`}>{item.title}</p>
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
