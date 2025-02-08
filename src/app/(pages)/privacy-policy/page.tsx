import React from "react";
import "../(page-styles)/page-style.scss";

const PrivacyPolicyPage = () => {
  return (
    <div className="legal-section">
      <div className="app-container">
        <div className="legal-container-wrapper">
          {/* HEADER TEXT */}
          <h2 className="header-text">
            Our Privacy Policy safeguards your personal and health information
            during telemedicine consultations, ensuring confidentiality and
            compliance with applicable laws.
          </h2>

          <div className="section-block">
            <div className="title-text">Introduction</div>

            <div className="content-area">
              Welcome to Askadoctor, a platform that provides telemedicine
              services connecting patients with healthcare professionals through
              virtual consultations. This Privacy Policy outlines how we
              collect, use, disclose, and protect the personal information of
              users of our website and services. By accessing or using our
              website and services, you consent to the practices described in
              this Privacy Policy.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Information We Collect</div>

            <div className="content-area content-area-list">
              <div>
                a. Personal Information: We may collect personal information,
                such as your name, email address, contact number, date of birth,
                and relevant medical history when you register for an account or
                use our services.
              </div>

              <div>
                b. Health Information: During virtual consultations, our
                healthcare professionals may collect health-related information
                to provide you with medical advice and treatment. This may
                include medical history, symptoms, images, and videos.
              </div>

              <div>
                c. Usage Information: We automatically collect certain
                information when you visit our website, such as your IP address,
                device information, browser type, pages visited, and actions
                taken.
              </div>

              <div>
                d. Cookies and Similar Technologies: We may use cookies and
                similar technologies to improve user experience, track usage
                patterns, and gather information about how users interact with
                our website.
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Use of Information</div>
            <div className="content-area content-area-list">
              <div>
                a. Providing Services: We use your personal and health
                information to facilitate telemedicine consultations and deliver
                medical services to you.
              </div>

              <div>
                b. Communication: We may use your contact information to send
                appointment reminders, service updates, and other relevant
                communications.
              </div>

              <div>
                c. Improving Services: Your information helps us improve and
                personalize our services, website, and user experience.
              </div>

              <div>
                d. Legal Compliance: We may use your information to comply with
                applicable laws, regulations, and legal processes.
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Sharing of Information</div>
            <div className="content-area content-area-list">
              <div>
                a. Healthcare Professionals: We share your health information
                with our team of qualified healthcare professionals who are
                involved in your telemedicine consultations.
              </div>

              <div>
                b. Service Providers: We may share your information with
                third-party service providers who assist us in delivering our
                services. These providers are bound by confidentiality
                obligations.
              </div>

              <div>
                c. Legal Requirements: We may disclose your information if
                required by law, regulation, legal process, or governmental
                request.
              </div>

              <div>
                d. Business Transfers: In the event of a merger, acquisition, or
                sale of assets, your information may be transferred as part of
                the business transaction.
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Data Security</div>

            <div className="content-area">
              We take appropriate measures to protect your information from
              unauthorized access, alteration, disclosure, or destruction.
              However, no data transmission over the internet or storage system
              can be guaranteed to be completely secure. We encourage you to
              take precautions to protect your personal information as well.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Your Choices</div>
            <div className="content-area content-area-list">
              <div>
                a. Account Settings: You can review and update your account
                information through your profile settings.
              </div>

              <div>
                b. Communication Preferences: You can manage your communication
                preferences and opt-out of non-essential communications.
              </div>

              <div>
                c. Deletion: You may request the deletion of your account and
                personal information. However, some information may be retained
                for legal and legitimate business purposes.
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Children's Privacy</div>

            <div className="content-area">
              Our services are not intended for children under the age of 18. We
              do not knowingly collect personal information from children.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Contact Us</div>

            <div className="content-area">
              If you have any questions, concerns, or requests related to this
              Privacy Policy, please contact us at [contact email/phone number].
              By using our telemedicine website and services, you acknowledge
              that you have read and understood this Privacy Policy and consent
              to the collection, use, and sharing of your information as
              described herein.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
