import { siteConfig } from '../data/index';

export async function GET() {
    return new Response(
        JSON.stringify(siteConfig.resume, null, 2),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}
