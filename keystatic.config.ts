import { config, fields, collection, singleton } from '@keystatic/core';
import siteData from './src/data/site.json';

export default config({
    storage: {
        kind: 'local',
    },
    ui: {
        brand: {
            name: siteData.cms.brandName || 'Chinmay Singh'
        },
        navigation: {
            'Editorial': ['writing', 'decisions'],
            'Projects': ['projects'],
            'CV Dashboard': ['cv', 'work'],
            'Profile': ['testimonials'],
            'Site Settings': ['site'],
        },
    },
    singletons: {
        site: singleton({
            label: 'Site & CV Profile',
            path: 'src/data/site',
            format: { data: 'json' },
            schema: {
                site: fields.object({
                    url: fields.text({ label: 'Site URL' }),
                    language: fields.text({ label: 'Language (ISO code)' }),
                    title: fields.text({ label: 'Site Title' }),
                    description: fields.text({ label: 'Site Description', multiline: true }),
                    favicon: fields.image({
                        label: 'Site Favicon',
                        directory: 'src/assets/images/site',
                        publicPath: '~/assets/images/site/',
                    }),
                }, { label: 'Site Metadata' }),
                author: fields.object({
                    name: fields.text({ label: 'Name' }),
                    title: fields.text({ label: 'Title / Role' }),
                    bio: fields.text({ label: 'Bio', multiline: true }),
                    location: fields.text({ label: 'Location' }),
                    locationLink: fields.text({ label: 'Location Maps Link' }),
                    profilePic: fields.image({
                        label: 'Profile Picture',
                        description: 'Profile photo',
                        directory: 'public/images/author',
                        publicPath: '/images/author/',
                    }),
                }, { label: 'Author Information' }),
                cms: fields.object({
                    brandName: fields.text({ label: 'CMS Brand Name' }),
                }, { label: 'CMS Configuration' }),
                contact: fields.object({
                    email: fields.text({ label: 'Primary Contact Email' }),
                    tel: fields.text({ label: 'Phone Number' }),
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
                                    { label: 'Email', value: 'email' },
                                    { label: 'Other', value: 'other' },
                                ],
                                defaultValue: 'github',
                            }),
                            url: fields.text({ label: 'URL' }),
                            label: fields.text({ label: 'Label' }),
                        }),
                        { label: 'Social Links', itemLabel: props => props.fields.label.value || 'Link' }
                    ),
                }, { label: 'Contact Settings' }),
                contactPage: fields.object({
                    title: fields.text({ label: 'Page Title' }),
                    description: fields.text({ label: 'Page Description', multiline: true }),
                    heading: fields.text({ label: 'Page Heading' }),
                }, { label: 'Contact Page Metadata' }),
                newsletter: fields.object({
                    action: fields.text({ label: 'Form Action URL' }),
                    u: fields.text({ label: 'User ID (u)' }),
                    id: fields.text({ label: 'List ID (id)' }),
                    f_id: fields.text({ label: 'Field ID (f_id)' }),
                }, { label: 'Mailchimp Newsletter' }),
                nav: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Label' }),
                        href: fields.text({ label: 'URL' }),
                        show: fields.checkbox({ label: 'Show in Navigation', defaultValue: true }),
                        children: fields.array(
                            fields.object({
                                label: fields.text({ label: 'Label' }),
                                href: fields.text({ label: 'URL' }),
                                show: fields.checkbox({ label: 'Show in Navigation', defaultValue: true }),
                            }),
                            { label: 'Submenu Items', itemLabel: props => props.fields.label.value }
                        ),
                    }),
                    { label: 'Navigation Items', itemLabel: props => props.fields.label.value }
                ),
            },
        }),
        cv: singleton({
            label: 'CV Profile',
            path: 'src/data/cv',
            format: { data: 'json' },
            schema: {
                basics: fields.object({
                    label: fields.text({ label: 'Professional Title/Label (e.g. Programmer)' }),
                    summary: fields.text({ label: 'Professional Summary', multiline: true }),
                    about: fields.text({ label: 'About Me (Longer bio/intro)', multiline: true }),
                }, { label: 'Basics' }),
                education: fields.array(
                    fields.object({
                        institution: fields.text({ label: 'Institution' }),
                        url: fields.text({ label: 'URL' }),
                        area: fields.text({ label: 'Area of Study' }),
                        studyType: fields.text({ label: 'Study Type (e.g. Bachelor)' }),
                        startDate: fields.text({ label: 'Start Date' }),
                        endDate: fields.text({ label: 'End Date' }),
                        score: fields.text({ label: 'Score / GPA' }),
                        courses: fields.array(
                            fields.object({ name: fields.text({ label: 'Course' }) }),
                            { label: 'Courses', itemLabel: props => props.fields.name.value }
                        ),
                    }),
                    { label: 'Education', itemLabel: props => props.fields.institution.value }
                ),
                skills: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Skill Category/Name (e.g. Web Development)' }),
                        level: fields.text({ label: 'Level (e.g. Master)' }),
                        keywords: fields.array(
                            fields.object({ name: fields.text({ label: 'Keyword' }) }),
                            { label: 'Keywords', itemLabel: props => props.fields.name.value }
                        ),
                    }),
                    { label: 'Skills', itemLabel: props => props.fields.name.value }
                ),
                certificates: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Certificate Name' }),
                        date: fields.text({ label: 'Date' }),
                        issuer: fields.text({ label: 'Issuer' }),
                        url: fields.text({ label: 'URL' }),
                    }),
                    { label: 'Certifications', itemLabel: props => props.fields.name.value }
                ),
            },
        }),
        work: singleton({
            label: 'Experience & Projects',
            path: 'src/data/work',
            format: { data: 'json' },
            schema: {
                work: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Company Name' }),
                        position: fields.text({ label: 'Position' }),
                        url: fields.text({ label: 'URL' }),
                        startDate: fields.text({ label: 'Start Date' }),
                        endDate: fields.text({ label: 'End Date' }),
                        summary: fields.text({ label: 'Summary', multiline: true }),
                        highlights: fields.array(
                            fields.object({ value: fields.text({ label: 'Highlight' }) }),
                            { label: 'Highlights', itemLabel: props => props.fields.value.value }
                        ),
                    }),
                    { label: 'Work Experience', itemLabel: props => props.fields.name.value }
                ),
                projects: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Project Name' }),
                        description: fields.text({ label: 'Description', multiline: true }),
                        startDate: fields.text({ label: 'Start Date' }),
                        endDate: fields.text({ label: 'End Date' }),
                        url: fields.text({ label: 'URL' }),
                        highlights: fields.array(
                            fields.object({ value: fields.text({ label: 'Highlight' }) }),
                            { label: 'Highlights', itemLabel: props => props.fields.value.value }
                        ),
                        keywords: fields.array(
                            fields.object({ value: fields.text({ label: 'Keyword / Tech Stack' }) }),
                            { label: 'Keywords', itemLabel: props => props.fields.value.value }
                        ),
                    }),
                    { label: 'Projects', itemLabel: props => props.fields.name.value }
                ),
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
