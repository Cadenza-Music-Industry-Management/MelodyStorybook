import React from 'react';
import {Sidebar} from '../components/Melody/src/components/Sections/Sidebar';
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
                test
            </main>
        </div>
    </ProSidebarProvider>

</div>;

export const SidebarTemplate = Template.bind({});
SidebarTemplate.args = {
    links: [
        {
            type: 'menu',
            title: 'Home',
            icon: {icon: 'melody-home', containerType: 'contents'},
            href: '/'
        },
        //TODO need to have different objects besides menu items like titles, separators, buttons, text blurb, etc...
        {
            title: 'Content',
            icon: {icon: 'melody-content', containerType: 'contents'},
            children: [
                {
                    type: 'title',
                    title: 'View:'
                },
                {
                    type: 'menu',
                    title: 'Releases',
                    icon: {icon: 'melody-releases', containerType: 'contents'},
                    onClick: () => console.log("Release")
                },
                {
                    type: 'menu',
                    title: 'Artists',
                    icon: {icon: 'melody-artist', containerType: 'contents'},
                    onClick: () => console.log("Artists")
                },
                {
                    type: 'menu',
                    title: 'Apparel',
                    icon: {icon: 'melody-merchandise', containerType: 'contents'},
                    children: [
                        {
                            type: 'menu',
                            title: 'Apparel Items',
                            onClick: () => console.log("Apparel Items")
                        },
                        {
                            type: 'menu',
                            title: 'Apparel Orders',
                            onClick: () => console.log("Apparel Orders")
                        }
                    ]
                },
                {
                    type: 'menu',
                    title: 'Blog Posts',
                    icon: {icon: 'melody-blog-post', containerType: 'contents'},
                    onClick: () => console.log("Blog Posts")
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
                    title: 'Release',
                    icon: {icon: 'melody-releases', containerType: 'contents'},
                    href: '/content/releases'
                },
                {
                    type: 'menu',
                    title: 'Artist',
                    icon: {icon: 'melody-artist', containerType: 'contents'},
                    href: '/content/artist'
                },
                {
                    type: 'menu',
                    title: 'Apparel',
                    icon: {icon: 'melody-merchandise', containerType: 'contents'},
                    href: '/content/merchandise',
                    children: [
                        {
                            type: 'menu',
                            title: 'Apparel Item',
                            href: '/content/merchandise/apparel'
                        },
                        {
                            type: 'menu',
                            title: 'Apparel Order',
                            href: '/content/merchandise/orders'
                        }
                    ]
                },
                {
                    type: 'menu',
                    title: 'Blog Post',
                    icon: {icon: 'melody-blog-post', containerType: 'contents'},
                    href: '/content/blog'
                },
                {
                    type: 'button',
                    title: 'Import Data By CSV',
                    //TODO icon
                    onClick: () => console.log("Import CSV")
                }
            ]
        },
        {
            title: 'Tools',
            icon: {icon: 'melody-org-tools', containerType: 'contents'},
            children: [
                {
                    type: 'menu',
                    title: 'Planning Board',
                    icon: {icon: 'melody-kanban', containerType: 'contents'},
                    href: '/tools/kanban'
                },
                {
                    type: 'menu',
                    title: 'Calendar',
                    icon: {icon: 'melody-calendar', containerType: 'contents'},
                    href: '/tools/calendar'
                },
                {
                    type: 'menu',
                    title: 'Accounting',
                    icon: {icon: 'melody-accounting', containerType: 'contents'},
                    href: '/tools/accounting',
                    children: [
                        {
                            type: 'menu',
                            title: 'Expenses',
                            href: '/tools/accounting/expenses'
                        },
                        {
                            type: 'menu',
                            title: 'Income',
                            href: '/tools/accounting/income'
                        },
                        {
                            type: 'menu',
                            title: 'Sources',
                            href: '/tools/accounting/sources'
                        }
                    ]
                },
                {
                    type: 'menu',
                    title: 'Staff Management',
                    icon: {icon: 'melody-staff-management', containerType: 'contents'},
                    href: '/tools/staff'
                },
                {
                    type: 'menu',
                    title: 'File Storage',
                    icon: {icon: 'melody-file-storage', containerType: 'contents'},
                    href: '/tools/files'
                },
                {
                    type: 'menu',
                    title: 'Music Promotion',
                    icon: {icon: 'melody-promotion', containerType: 'contents'},
                    href: '/tools/promotion',
                    children: [
                        {
                            type: 'title',
                            title: 'Create:'
                        },
                        {
                            type: 'menu',
                            title: 'Release Promotions',
                            href: '/tools/promotion/releases'
                        },
                        {
                            type: 'menu',
                            title: 'Promoters',
                            href: '/tools/promotion/promoters'
                        },
                        {
                            type: 'menu',
                            title: 'Promotion Pages',
                            href: '/tools/promotion/pages'
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
                            title: 'Free to use until December 31st! Vicace subscription required Dec. 31st+'
                        }
                    ]
                },
                {
                    type: 'menu',
                    title: 'Email Hub',
                    icon: {icon: 'melody-email', containerType: 'contents'},
                    href: '/tools/emails'
                },
                {
                    type: 'menu',
                    title: 'Event History',
                    icon: {icon: 'melody-history', containerType: 'contents'},
                    href: '/tools/history'
                },
            ]
        },
        {
            title: 'Public Site',
            icon: {icon: 'melody-public-site', containerType: 'contents'},
            children: [
                {
                    type: 'menu',
                    title: 'View Site',
                    icon: {icon: 'melody-public-site', containerType: 'contents'}, //TODO has its own icon?
                    href: '/' //TODO send to public site
                },
                {
                    type: 'menu',
                    title: 'Site Builder',
                    icon: {icon: 'melody-site-builder', containerType: 'contents'},
                    href: '/' //TODO send to site builder, different page than dashboard / new sidebar?
                },
                {
                    type: 'menu',
                    title: 'Visibility Settings',
                    icon: {icon: 'melody-visibility', containerType: 'contents'},
                    href: '/site/visibility'
                },
            ]
        },
        {
            title: 'Settings',
            icon: {icon: 'melody-settings', containerType: 'contents'},
            children: [
                {
                    type: 'menu',
                    title: 'Organization',
                    icon: {icon: 'melody-org', containerType: 'contents'},
                    href: '/settings'
                },
                {
                    type: 'menu',
                    title: 'Subscription',
                    icon: {icon: 'melody-payment-settings', containerType: 'contents'},
                    href: '/settings/payment'
                },
            ]
        }
    ]
}
//  title: string;
//     href: string;
//     icon?: AddIconProps;
//     children?: SidebarLink[];