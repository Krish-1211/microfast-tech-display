import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  serviceInterest?: string;
  projectDetails?: string;
  timeline?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log("Processing contact form submission:", formData.email);

    // Send email to company
    const companyEmail = await resend.emails.send({
      from: "MicroFast Tech <onboarding@resend.dev>",
      to: ["sales@microfasttech.com"],
      subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${formData.industry || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${formData.serviceInterest || 'Not provided'}</p>
        <p><strong>Timeline:</strong> ${formData.timeline || 'Not provided'}</p>
        <p><strong>Project Details:</strong></p>
        <p>${formData.projectDetails || 'Not provided'}</p>
      `,
    });

    // Send confirmation to customer
    const customerEmail = await resend.emails.send({
      from: "MicroFast Tech <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting MicroFast Tech!",
      html: `
        <h1>Thank you for reaching out, ${formData.firstName}!</h1>
        <p>We have received your message and our team will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our services at our website or call us directly at 229 551 7613.</p>
        <br>
        <p>Best regards,<br>
        <strong>The MicroFast Tech Team</strong></p>
        <p style="color: #666; font-size: 12px;">
          MicroFast Tech<br>
          2905 Chastain Meadows Pkwy, STE 1108<br>
          Marietta, GA-30066<br>
          sales@microfasttech.com
        </p>
      `,
    });

    console.log("Emails sent successfully");

    return new Response(
      JSON.stringify({ 
        success: true,
        companyEmailId: companyEmail.data?.id,
        customerEmailId: customerEmail.data?.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
