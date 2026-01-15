"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CustomSelect from "../../approach/components/CustomSelect";
import TextField from "./TextField";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyEmail: "",
    company: "",
    jobTitle: "",
    state: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const reasonOptions = [
    "Client Support",
    "Consulting Services",
    "Careers at 66degrees",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReasonSelect = (value: string) => {
    setFormData({
      ...formData,
      reason: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.companyEmail) {
      setError("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    setError("");
    // Here you would typically send the form data to your backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        companyEmail: "",
        company: "",
        jobTitle: "",
        state: "",
        reason: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className=" py-8 bg-brown-light">
      <div className="container mx-auto">
        <div className="w-full">
          <h2 className="text-2xl sm:text-xl text-foreground mb-8">
            Please complete the form with your request
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <TextField
                label="First Name"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <TextField
                label="Last Name"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

              <TextField
                label="Company Email"
                id="companyEmail"
                name="companyEmail"
                type="email"
                value={formData.companyEmail}
                onChange={handleChange}
                required
              />

              <TextField
                label="Company"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />

              <TextField
                label="Job Title"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />

              <TextField
                label="State"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            <div>
              <CustomSelect
                label="Reason for contact"
                options={reasonOptions}
                placeholder="Select Option"
                onSelect={handleReasonSelect}
                variant="contactForm"
              />
            </div>

            <TextField
              label="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              as="textarea"
              rows={6}
              className="min-h-[120px]"
            />

            {error && <div className="text-destructive text-sm">{error}</div>}

            {submitted && (
              <div className="text-green-600 text-sm">
                Thanks for you message! We will reach back to you as soon as
                possible.
              </div>
            )}

            <Button
              type="submit"
              variant="default"
              className="rounded-none uppercase font-family-secondary"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
