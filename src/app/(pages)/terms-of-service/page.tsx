import React from "react";
import "../(page-styles)/page-style.scss";

const TermsOfServicePage = () => {
  return (
    <div className="legal-section">
      <div className="app-container">
        <div className="legal-container-wrapper">
          <div className="section-block">
            <div className="title-text"> Acceptance of Terms</div>

            <div className="content-area">
              By accessing or using our telemedicine website, you agree to be
              bound by these Terms and Conditions. If you do not agree to these
              terms, please refrain from using our services.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Telemedicine Services</div>

            <div className="content-area">
              Our website provides a platform for virtual medical consultations
              between patients and qualified healthcare professionals. While we
              strive to deliver high-quality services, we do not guarantee the
              accuracy, suitability, or effectiveness of any medical advice or
              treatment provided through our platform.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">User Responsibilities</div>
            <div className="content-area content-area-list">
              <div>
                a. Eligibility: By using our services, you confirm that you are
                at least 18 years old or have the legal consent of a parent or
                guardian.
              </div>

              <div>
                b. Account Security: You are responsible for maintaining the
                confidentiality of your account credentials and are liable for
                any activities that occur under your account.
              </div>

              <div>
                c. Accurate Information: You must provide accurate and
                up-to-date information during registration and when using our
                services.
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Telemedicine Consultations</div>
            <div className="content-area content-area-list">
              <div>
                a. Privacy and Consent: By participating in telemedicine
                consultations, you consent to the collection, use, and
                disclosure of your personal and health information as outlined
                in our Privacy Policy.
              </div>

              <div>
                b. Emergency Situations: Telemedicine consultations may not be
                suitable for emergencies. If you experience a medical emergency,
                please seek immediate in-person medical assistance or call
                emergency services.
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Intellectual Property</div>

            <div className="content-area">
              All content and materials available on our website, including but
              not limited to text, graphics, logos, images, and software, are
              the property of [Telemedicine Website] and are protected by
              applicable copyright and trademark laws.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Prohibited Activities</div>
            <div className="content-area content-area-list">
              <div>You agree not to:</div>

              <div>
                a. Use our website for any unlawful or unauthorized purposes.
              </div>

              <div>
                b. Interfere with the functionality of our website or disrupt
                the experience of other users.
              </div>

              <div>
                c. Attempt to gain unauthorized access to our systems or the
                accounts of other users.
              </div>

              <div>
                d. Engage in any activity that may harm, compromise, or
                undermine our website's security.
              </div>
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Indemnification</div>

            <div className="content-area">
              You agree to indemnify and hold [Telemedicine Website] and its
              affiliates, partners, directors, employees, and agents harmless
              from any claims, losses, damages, liabilities, or expenses arising
              out of your use of our services or violation of these Terms and
              Conditions.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Limitation of Liability</div>

            <div className="content-area">
              To the extent permitted by law, [Telemedicine Website] and its
              affiliates shall not be liable for any direct, indirect,
              incidental, special, consequential, or punitive damages arising
              from the use or inability to use our website or services.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Changes to Terms and Conditions</div>

            <div className="content-area">
              We reserve the right to modify or update these Terms and
              Conditions at any time. Any changes will be effective upon posting
              on our website. Your continued use of our services after the
              changes constitute acceptance of the updated Terms and Conditions.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Governing Law</div>

            <div className="content-area">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of [Country/State], without regard to its
              conflict of law principles.
            </div>
          </div>

          <div className="section-block">
            <div className="title-text">Contact Us</div>

            <div className="content-area">
              If you have any questions, concerns, or inquiries regarding these
              Terms and Conditions, please contact us at [contact email/phone
              number]. By using our telemedicine website, you acknowledge that
              you have read, understood, and agreed to these Terms and
              Conditions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
