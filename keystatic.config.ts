import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        writing: collection({
            label: 'Writing',
            slugField: 'title',
            path: 'src/content/writing/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                publishDate: fields.date({ label: 'Publish Date' }),
                updatedDate: fields.date({ label: 'Updated Date' }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: (props) => props.value,
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
                }),
                approach: fields.text({ label: 'Approach', multiline: true }),
                keyDecisions: fields.array(
                    fields.object({
                        decision: fields.text({ label: 'Decision' }),
                        reasoning: fields.text({ label: 'Reasoning', multiline: true }),
                        alternatives: fields.array(fields.text({ label: 'Alternative' }), {
                            label: 'Alternatives',
                        }),
                    }),
                    { label: 'Key Decisions' }
                ),
                techStack: fields.array(fields.text({ label: 'Tech' }), {
                    label: 'Tech Stack',
                }),
                impact: fields.object({
                    metrics: fields.array(
                        fields.object({
                            label: fields.text({ label: 'Label' }),
                            value: fields.text({ label: 'Value' }),
                        }),
                        { label: 'Metrics' }
                    ),
                    qualitative: fields.text({ label: 'Qualitative Impact', multiline: true }),
                }),
                learnings: fields.array(fields.text({ label: 'Learning' }), {
                    label: 'Learnings',
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
                }),
                relatedDecisions: fields.array(fields.text({ label: 'Related Decision Slug' }), {
                    label: 'Related Decisions',
                }),
                content: fields.mdx({ label: 'Content' }),
            },
        }),
        decisions: collection({
            label: 'Decisions',
            slugField: 'title',
            path: 'src/content/decisions/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.date({ label: 'Date' }),
                context: fields.text({ label: 'Context', multiline: true }),
                decision: fields.text({ label: 'Decision', multiline: true }),
                alternatives: fields.array(
                    fields.object({
                        option: fields.text({ label: 'Option' }),
                        pros: fields.array(fields.text({ label: 'Pro' }), { label: 'Pros' }),
                        cons: fields.array(fields.text({ label: 'Con' }), { label: 'Cons' }),
                    }),
                    { label: 'Alternatives' }
                ),
                reasoning: fields.text({ label: 'Reasoning', multiline: true }),
                tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
                relatedProjects: fields.array(fields.text({ label: 'Related Project Slug' }), { label: 'Related Projects' }),
                relatedDecisions: fields.array(fields.text({ label: 'Related Decision Slug' }), { label: 'Related Decisions' }),
                content: fields.mdx({ label: 'Content' }),
            },
        }),
        journey: collection({
            label: 'Journey',
            slugField: 'title',
            path: 'src/content/journey/*',
            format: { contentField: 'content' },
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
                skills: fields.array(fields.text({ label: 'Skill' }), { label: 'Skills' }),
                content: fields.mdx({ label: 'Content' }),
            }
        }),
        testimonials: collection({
            label: 'Testimonials',
            slugField: 'name',
            path: 'src/content/testimonials/*',
            format: { contentField: 'content' },
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
