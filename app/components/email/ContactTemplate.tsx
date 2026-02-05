import * as React from 'react';

interface ContactTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    company?: string;
    message: string;
}

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
    firstName,
    lastName,
    email,
    company,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px' }}>
        <h2 style={{ color: '#333' }}>New Contact Form Submission</h2>
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

        <div style={{ marginBottom: '20px' }}>
            <p><strong>From:</strong> {firstName} {lastName}</p>
            <p><strong>Email:</strong> {email}</p>
            {company && <p><strong>Company:</strong> {company}</p>}
        </div>

        <div style={{ backgroundColor: '#f9fafb', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#6b7280' }}>Message:</h3>
            <p style={{ margin: '0', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>{message}</p>
        </div>
    </div>
);
