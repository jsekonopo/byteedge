import { ContactTemplate } from '@/app/components/email/ContactTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, company, message } = body;

        // Basic validation
        if (!firstName || !lastName || !email || !message) {
            return Response.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'ByteEdge Contact <onboarding@resend.dev>', // Update this if you have a custom domain verified in Resend
            to: ['info@byteedge.ca'],
            subject: `New Inquiry from ${firstName} ${lastName}`,
            react: await ContactTemplate({ firstName, lastName, email, company, message }),
            replyTo: email,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
