import JoinWaitList from "@/com/JointWaitList";
import { NextResponse } from "next/server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


interface FormData {
    email: string;
    organization: string;
    country: string;
    role: string;
    message: string;
}

export async function POST(request: Request) {

    if (!request.body) return;
    const formData = await request.json() as FormData;

    const {  error } = await resend.emails.send({
        from: 'MedLink Joining Waitlist <medilink@vortan.io>',
        to: ["yosialukumai@gmail.com", "danielgbmkongo@gmail.com", "scopeelius@gmai.com", "info@vortan.io"],
        subject: 'MedLink Joining Waitlist',
        react: JoinWaitList({
            organization: formData.organization,
            email: formData.email,
            country: formData.country,
            role: formData.role,
            message: formData.message
        }),

    });


    if (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
    return NextResponse.json({ success: true, message: 'Message sent successfully!' });

}