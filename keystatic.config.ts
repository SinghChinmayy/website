import { config, fields, collection, singleton } from '@keystatic/core';
import settingsData from './src/content/cms/settings.json';

export default config({
    storage: {
        kind: 'local',
    },
    ui: {
        brand: {
            name: settingsData.cms.brandName || 'Chinmay Singh'
        },
        navigation: {
            'Editorial': ['writing', 'projects', 'decisions'],
            'Pages': ['contactPage'],
            'Profile': ['journey', 'testimonials'],
            'Configuration': ['settings', 'contact', 'newsletter'],
        },
    },
    singletons: {
        settings: singleton({
            label: 'Settings',
            path: 'src/content/cms/settings',
            format: { data: 'json' },
            schema: {
                nav: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Label' }),
                        href: fields.text({ label: 'URL (e.g., /projects, https://github.com)' }),
                        show: fields.checkbox({ label: 'Show in Navigation', defaultValue: true }),
                        children: fields.array(
                            fields.object({
                                label: fields.text({ label: 'Label' }),
                                href: fields.text({ label: 'URL' }),
                                show: fields.checkbox({ label: 'Show in Navigation', defaultValue: true }),
                            }),
                            {
                                label: 'Submenu Items',
                                itemLabel: (props) => `${props.fields.label.value} ${props.fields.show.value ? '✅' : '❌'}`,
                            }
                        ),
                    }),
                    {
                        label: 'Navigation Items',
                        itemLabel: (props) => `${props.fields.label.value} ${props.fields.show.value ? '✅' : '❌'}${props.fields.children.elements.length > 0 ? ' (Dropdown)' : ''}`,
                    }
                ),
                site: fields.object({
                    url: fields.text({ label: 'Site URL' }),
                    language: fields.text({ label: 'Language (ISO code)' }),
                    title: fields.text({ label: 'Site Title' }),
                    description: fields.text({ label: 'Site Description', multiline: true }),
                    logo: fields.image({
                        label: 'Site Logo',
                        directory: 'public/images',
                        publicPath: '/images/',
                    }),
                    favicon: fields.image({
                        label: 'Site Favicon',
                        directory: 'src/assets/images',
                        publicPath: '~/assets/images/',
                    }),
                }, { label: 'Site Metadata' }),
                author: fields.object({
                    name: fields.text({ label: 'Name' }),
                    title: fields.text({ label: 'Title / Role' }),
                    bio: fields.text({ label: 'Bio', multiline: true }),
                    location: fields.text({ label: 'Location' }),
                }, { label: 'Author Information' }),
                cms: fields.object({
                    brandName: fields.text({ label: 'CMS Brand Name' }),
                    brandLogo: fields.image({
                        label: 'CMS Brand Logo',
                        directory: 'public/images',
                        publicPath: '/images/',
                    }),
                }, { label: 'CMS Dashboard Configuration' }),
            },
        }),
        contact: singleton({
            label: 'Contact',
            path: 'src/content/cms/contact',
            format: { data: 'json' },
            schema: {
                email: fields.text({ label: 'Primary Contact Email' }),
                social: fields.array(
                    fields.object({
                        platform: fields.select({
                            label: 'Platform',
                            options: [
                                { label: 'GitHub', value: 'github' },
                                { label: 'LinkedIn', value: 'linkedin' },
                                { label: 'Twitter/X', value: 'twitter' },
                                { label: 'YouTube', value: 'youtube' },
                                { label: 'Instagram', value: 'instagram' },
                                { label: 'Mastodon', value: 'mastodon' },
                                { label: 'Bluesky', value: 'bluesky' },
                                { label: 'Email', value: 'email' },
                                { label: 'Other', value: 'other' },
                            ],
                            defaultValue: 'github',
                        }),
                        url: fields.text({ label: 'URL' }),
                        label: fields.text({ label: 'Label (Internal use or for "Other")' }),
                    }),
                    {
                        label: 'Social Links',
                        itemLabel: (props) => props.fields.label.value || props.fields.platform.value,
                    }
                ),
            },
        }),
        newsletter: singleton({
            label: 'Newsletter',
            path: 'src/content/cms/newsletter',
            format: { data: 'json' },
            schema: {
                action: fields.text({ label: 'Form Action URL' }),
                u: fields.text({ label: 'User ID (u)' }),
                id: fields.text({ label: 'List ID (id)' }),
                f_id: fields.text({ label: 'Field ID (f_id)' }),
            },
        }),
        contactPage: singleton({
            label: 'Contact Page',
            path: 'src/content/cms/pages/contact',
            format: { data: 'json' },
            schema: {
                title: fields.text({ label: 'Page Title' }),
                description: fields.text({ label: 'Page Description', multiline: true }),
                heading: fields.text({ label: 'Page Heading' }),
            },
        }),
    },
    collections: {
        writing: collection({
            label: 'Writing',
            slugField: 'title',
            path: 'src/content/writing/*',
            format: { contentField: 'content' },
            columns: ['title', 'publishDate'],
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                publishDate: fields.date({ label: 'Publish Date' }),
                updatedDate: fields.date({ label: 'Updated Date' }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: (props) => props.value || 'New Tag',
                }),
                draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
                content: fields.mdx({
                    label: 'Content',
                    options: {
                        image: {
                            directory: 'src/content/writing/_assets',
                            publicPath: './_assets/',
                        }
                    }
                }),
            },
        }),
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'src/content/projects/*',
            format: { contentField: 'content' },
            columns: ['title', 'year', 'role', 'status'],
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                role: fields.text({ label: 'Role' }),
                year: fields.number({ label: 'Year' }),
                duration: fields.text({ label: 'Duration' }),
                teamSize: fields.number({ label: 'Team Size' }),
                outcomeSummary: fields.text({ label: 'Outcome Summary', multiline: true }),
                overview: fields.text({ label: 'Overview', multiline: true }),
                problem: fields.text({ label: 'Problem', multiline: true }),
                constraints: fields.array(fields.text({ label: 'Constraint' }), {
                    label: 'Constraints',
                    itemLabel: (props) => props.value || 'New Constraint',
                }),
                approach: fields.text({ label: 'Approach', multiline: true }),
                keyDecisions: fields.array(
                    fields.object({
                        decision: fields.text({ label: 'Decision' }),
                        reasoning: fields.text({ label: 'Reasoning', multiline: true }),
                        alternatives: fields.array(fields.text({ label: 'Alternative' }), {
                            label: 'Alternatives',
                            itemLabel: (props) => props.value || 'New Alternative',
                        }),
                    }),
                    {
                        label: 'Key Decisions',
                        itemLabel: (props) => props.fields.decision.value || 'New Decision'
                    }
                ),
                techStack: fields.array(fields.text({ label: 'Tech' }), {
                    label: 'Tech Stack',
                    itemLabel: (props) => props.value || 'New Tech',
                }),
                impact: fields.object({
                    metrics: fields.array(
                        fields.object({
                            label: fields.text({ label: 'Label' }),
                            value: fields.text({ label: 'Value' }),
                        }),
                        {
                            label: 'Metrics',
                            itemLabel: (props) => `${props.fields.label.value}${props.fields.value.value ? ': ' + props.fields.value.value : ''}` || 'New Metric'
                        }
                    ),
                    qualitative: fields.text({ label: 'Qualitative Impact', multiline: true }),
                }),
                learnings: fields.array(fields.text({ label: 'Learning' }), {
                    label: 'Learnings',
                    itemLabel: (props) => props.value || 'New Learning',
                }),
                featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
                status: fields.select({
                    label: 'Status',
                    options: [
                        { label: 'Completed', value: 'completed' },
                        { label: 'Ongoing', value: 'ongoing' },
                        { label: 'Archived', value: 'archived' },
                    ],
                    defaultValue: 'completed',
                }),
                order: fields.number({ label: 'Order' }),
                relatedProjects: fields.array(fields.text({ label: 'Related Project Slug' }), {
                    label: 'Related Projects',
                    itemLabel: (props) => props.value || 'New Project Slug',
                }),
                relatedDecisions: fields.array(fields.text({ label: 'Related Decision Slug' }), {
                    label: 'Related Decisions',
                    itemLabel: (props) => props.value || 'New Decision Slug',
                }),
                content: fields.mdx({ label: 'Content' }),
            },
        }),
        decisions: collection({
            label: 'Decisions',
            slugField: 'title',
            path: 'src/content/decisions/*',
            format: { contentField: 'content' },
            columns: ['title', 'date'],
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.date({ label: 'Date' }),
                context: fields.text({ label: 'Context', multiline: true }),
                decision: fields.text({ label: 'Decision', multiline: true }),
                alternatives: fields.array(
                    fields.object({
                        option: fields.text({ label: 'Option' }),
                        pros: fields.array(fields.text({ label: 'Pro' }), {
                            label: 'Pros',
                            itemLabel: (props) => props.value || 'New Pro',
                        }),
                        cons: fields.array(fields.text({ label: 'Con' }), {
                            label: 'Cons',
                            itemLabel: (props) => props.value || 'New Con',
                        }),
                    }),
                    {
                        label: 'Alternatives',
                        itemLabel: (props) => props.fields.option.value || 'New Alternative'
                    }
                ),
                reasoning: fields.text({ label: 'Reasoning', multiline: true }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: (props) => props.value || 'New Tag',
                }),
                relatedProjects: fields.array(fields.text({ label: 'Related Project Slug' }), {
                    label: 'Related Projects',
                    itemLabel: (props) => props.value || 'New Project Slug',
                }),
                relatedDecisions: fields.array(fields.text({ label: 'Related Decision Slug' }), {
                    label: 'Related Decisions',
                    itemLabel: (props) => props.value || 'New Decision Slug',
                }),
                content: fields.mdx({ label: 'Content' }),
            },
        }),
        journey: collection({
            label: 'Journey',
            slugField: 'title',
            path: 'src/content/journey/*',
            format: { contentField: 'content' },
            columns: ['title', 'date', 'type'],
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.date({ label: 'Date' }),
                type: fields.select({
                    label: 'Type',
                    options: [
                        { label: 'Milestone', value: 'milestone' },
                        { label: 'Learning', value: 'learning' },
                        { label: 'Transition', value: 'transition' },
                    ],
                    defaultValue: 'milestone',
                }),
                description: fields.text({ label: 'Description', multiline: true }),
                skills: fields.array(fields.text({ label: 'Skill' }), {
                    label: 'Skills',
                    itemLabel: (props) => props.value || 'New Skill',
                }),
                content: fields.mdx({ label: 'Content' }),
            }
        }),
        testimonials: collection({
            label: 'Testimonials',
            slugField: 'name',
            path: 'src/content/testimonials/*',
            format: { contentField: 'content' },
            columns: ['name', 'company', 'date'],
            schema: {
                name: fields.slug({ name: { label: 'Name' } }),
                role: fields.text({ label: 'Role' }),
                company: fields.text({ label: 'Company' }),
                relationship: fields.text({ label: 'Relationship' }),
                quote: fields.text({ label: 'Quote', multiline: true }),
                linkedin: fields.text({ label: 'LinkedIn URL' }),
                featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
                date: fields.date({ label: 'Date' }),
                content: fields.mdx({ label: 'Content' }),
            }
        })
    },
});
