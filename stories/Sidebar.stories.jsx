import React from 'react';
import {Sidebar} from '../components/Melody/src/components/Sections/Sidebar/Sidebar';
import { ProSidebarProvider } from "react-pro-sidebar";

export default {
    title: 'Section/Melody Sidebar',
    component: Sidebar,
    argTypes: {

    },
};

const Template = (args) => <div className="melody-flex melody-h-screen melody-bg-gray-200">
    <ProSidebarProvider>

        <Sidebar {...args} />

        <div className="melody-flex melody-flex-col melody-flex-1 melody-overflow-hidden">
            <main className="melody-flex-1 melody-overflow-x-hidden melody-overflow-y-auto melody-bg-gray-200 melody-p-6">
                main content here
            </main>
        </div>
    </ProSidebarProvider>

</div>;

export const SidebarTemplate = Template.bind({});
SidebarTemplate.args = {
    organization: {
        name: 'The Landing Strip Records',
        groupUniqueId: 'tlsrecords',
        groupType: 'Label'
    },
    organizations: [
        {
            name: 'Test 2',
            groupUniqueId: 'test2',
            groupType: 'Artist'
        }
    ],
    links: [
        {
            type: 'menu',
            title: 'Home',
            icon: {icon: 'melody-home', containerType: 'contents'},
            href: '/',
            selected: false
        },
        {
            title: 'Content',
            type: 'menu',
            icon: {icon: 'melody-content', containerType: 'contents'},
            children: [
                {
                    type: 'title',
                    title: 'View:'
                },
                {
                    type: 'menu',
                    title: 'Release',
                    icon: {icon: 'melody-releases', containerType: 'contents'},
                    href: '/',
                },
                {
                    type: 'menu',
                    title: 'Artist',
                    icon: {icon: 'melody-artist', containerType: 'contents'},
                    href: '/',
                },
                {
                    type: 'menu',
                    title: 'Apparel',
                    icon: {icon: 'melody-merchandise', containerType: 'contents'},
                    children: [
                        {
                            type: 'menu',
                            title: 'Apparel Item',
                            href: '/',
                        },
                        {
                            type: 'menu',
                            title: 'Apparel Order',
                            href: '/',
                        }
                    ]
                },
                {
                    type: 'menu',
                    title: 'Blog Post',
                    icon: {icon: 'melody-blog-post', containerType: 'contents'},
                    href: '/',
                },
                {
                    type: 'separator'
                },
                {
                    type: 'title',
                    title: 'Create:'
                },
                {
                    type: 'menu',
                    title: 'Releases',
                    icon: {icon: 'melody-releases', containerType: 'contents'},
                    onClick: () => console.log("Releases"),
                    selected: false
                },
                {
                    type: 'menu',
                    title: 'Artists',
                    icon: {icon: 'melody-artist', containerType: 'contents'},
                    onClick: () => console.log("Artists"),
                    selected: false
                },
                {
                    type: 'menu',
                    title: 'Apparel',
                    icon: {icon: 'melody-merchandise', containerType: 'contents'},
                    children: [
                        {
                            type: 'menu',
                            title: 'Apparel Items',
                            onClick: () => console.log("Apparel"),
                            selected: false
                        },
                        {
                            type: 'menu',
                            title: 'Apparel Orders',
                            onClick: () => console.log("Apparel Orders"),
                            selected: false
                        }
                    ]
                },
                {
                    type: 'menu',
                    title: 'Blog Posts',
                    icon: {icon: 'melody-blog-post', containerType: 'contents'},
                    onClick: () => console.log("Blog"),
                    selected: false
                },
                {
                    type: 'button',
                    title: 'Import Data By CSV',
                    icon: {icon: 'melody-csv', containerType: 'contents'},
                    onClick: () => console.log("Import CSV")
                }
            ]
        },
        {
            title: 'Tools',
            type: 'menu',
            icon: {icon: 'melody-org-tools', containerType: 'contents'},
            children: [
                {
                    type: 'menu',
                    title: 'Planning Board',
                    icon: {icon: 'melody-kanban', containerType: 'contents'},
                    href: '/',
                },
                {
                    type: 'menu',
                    title: 'Calendar',
                    icon: {icon: 'melody-calendar', containerType: 'contents'},
                    href: '/',
                },
                {
                    type: 'menu',
                    title: 'Accounting',
                    icon: {icon: 'melody-accounting', containerType: 'contents'},
                    // href: getDashboardLink('/tools/accounting',
                    children: [
                        {
                            type: 'menu',
                            title: 'Expenses',
                            icon: {icon: 'melody-expenses', containerType: 'contents'},
                            href: '/',
                        },
                        {
                            type: 'menu',
                            title: 'Income',
                            icon: {icon: 'melody-income', containerType: 'contents'},
                            href: '/',
                        },
                        {
                            type: 'menu',
                            title: 'Sources',
                            icon: {icon: 'melody-sources', containerType: 'contents'},
                            href: '/',
                        }
                    ]
                },
                {
                    type: 'menu',
                    title: 'Staff Management',
                    icon: {icon: 'melody-staff-management', containerType: 'contents'},
                    href: '/',
                },
                {
                    type: 'menu',
                    title: 'File Storage',
                    icon: {icon: 'melody-file-storage', containerType: 'contents'},
                    href: '/',
                },
                {
                    type: 'menu',
                    title: 'Music Promotion',
                    icon: {icon: 'melody-promotion', containerType: 'contents'},
                    // href: getDashboardLink('/tools/promotion'),
                    children: [
                        {
                            type: 'title',
                            title: 'Create:'
                        },
                        {
                            type: 'menu',
                            title: 'Release Promotions',
                            href: '/',
                        },
                        {
                            type: 'menu',
                            title: 'Promoters',
                            href: '/',
                        },
                        {
                            type: 'menu',
                            title: 'Promotion Pages',
                            href: '/',
                        },
                        {
                            type: 'separator'
                        },
                        {
                            type: 'title',
                            title: 'Create:'
                        },
                        {
                            type: 'menu',
                            title: 'Release Promotions',
                            onClick: () => console.log("Release Promotions")
                        },
                        {
                            type: 'menu',
                            title: 'Promoters',
                            onClick: () => console.log("Promoters")
                        },
                        {
                            type: 'menu',
                            title: 'Promotion Pages',
                            onClick: () => console.log("Promotion Pages")
                        },
                        {
                            type: 'menu',
                            title: 'Send Email',
                            onClick: () => console.log("Send Email")
                        },
                        {
                            type: 'text',
                            title: 'Free to use until December 31st! Vivace subscription required Dec. 31st+'
                        }
                    ]
                },
                {
                    type: 'menu',
                    title: 'Email Hub',
                    icon: {icon: 'melody-email', containerType: 'contents'},
                    href: '/'
                },
                {
                    type: 'menu',
                    title: 'Event History',
                    icon: {icon: 'melody-history', containerType: 'contents'},
                    href: '/'
                },
            ]
        },
        {
            title: 'Public Site',
            type: 'menu',
            icon: {icon: 'melody-public-site', containerType: 'contents'},
            children: [
                {
                    type: 'menu',
                    title: 'View Site',
                    icon: {icon: 'desktop', containerType: 'contents'}, //TODO do we want Melody icon?
                    href: '/'
                },
                {
                    type: 'menu',
                    title: 'Site Builder',
                    icon: {icon: 'melody-site-builder', containerType: 'contents'},
                    href: '/'
                },
                {
                    type: 'menu',
                    title: 'Visibility Settings',
                    icon: {icon: 'melody-visibility', containerType: 'contents'},
                    href: '/'
                },
            ]
        },
        {
            title: 'Settings',
            type: 'menu',
            icon: {icon: 'melody-settings', containerType: 'contents'},
            children: [
                {
                    type: 'menu',
                    title: 'Organization',
                    icon: {icon: 'melody-org', containerType: 'contents'},
                    href: '/'
                },
                {
                    type: 'menu',
                    title: 'Subscription',
                    icon: {icon: 'melody-payment-settings', containerType: 'contents'},
                    href: '/'
                },
            ]
        }
    ]
}