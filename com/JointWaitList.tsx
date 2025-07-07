import React from 'react';
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface JoinWaitlistEmailProps {
  email: string;
  organization?: string;
  country?: string;
  role?: string;
  [key: string]: any;
}

export const JoinWaitlistEmail = ({
  email,
  organization,
  country,
  role,
  ...otherProps
}: JoinWaitlistEmailProps) => (
  <Html>
    <Head />
    <Preview>New Waitlist Signup</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={heading}>🎉 New Waitlist Submission</Text>

        <Text style={paragraph}>
          <strong>Email:</strong> {email}
        </Text>
        {organization && (
          <Text style={paragraph}>
            <strong>Organization:</strong> {organization}
          </Text>
        )}
        {country && (
          <Text style={paragraph}>
            <strong>Country:</strong> {country}
          </Text>
        )}
        {role && (
          <Text style={paragraph}>
            <strong>Role:</strong> {role}
          </Text>
        )}
        {Object.keys(otherProps).length > 0 && (
          <Section style={additionalInfoSection}>
            <Text style={subHeading}>Extra Details:</Text>
            {Object.entries(otherProps).map(([key, value]) => (
              <Text key={key} style={paragraph}>
                <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : String(value)}
              </Text>
            ))}
          </Section>
        )}
        <Hr style={hr} />
        <Text style={footer}>
          This email was generated from your waitlist form submission.
        </Text>
      </Container>
    </Body>
  </Html>
);

// Preview for development
JoinWaitlistEmail.PreviewProps = {
  email: 'user@example.com',
  organization: 'Nova Labs',
  country: 'Kenya',
  role: 'Product Manager',
  referralCode: 'EARLYBIRD50',
} as JoinWaitlistEmailProps;

export default JoinWaitlistEmail;

// Style Definitions (same as before)
const main = {
  backgroundColor: '#f0f0f0',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '20px',
  textAlign: 'center' as const,
};

const subHeading = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#555',
  marginTop: '20px',
  marginBottom: '10px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#444',
  marginBottom: '10px',
};

const additionalInfoSection = {
  marginTop: '20px',
  paddingTop: '15px',
  borderTop: '1px solid #eee',
};

const hr = {
  borderColor: '#e0e0e0',
  margin: '20px 0',
};

const footer = {
  color: '#777',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '20px',
};
