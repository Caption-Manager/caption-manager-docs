import * as React from "react";
import { Link } from "gatsby";
import { Segment, Container } from "semantic-ui-react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export function Head() {
  return <Seo title="Terms of Service" pathname="terms-of-service" />;
}

export default function TermsOfService() {
  const siteMetadata = useSiteMetadata();
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Segment padded basic style={{ margin: "1em", width: "90%" }}>
          <Container text>
            <h1 style={{ textAlign: "center" }}>
              Terms of Service for Caption Manager
            </h1>
            <p>
              <i>Last updated: 2022-19-09</i>
            </p>
            {/*  */}
            <h1>Introduction</h1>
            <p>
              Welcome to <b>Caption Manager</b> add-on!
            </p>
            <p>
              These Terms of Service (“Terms”, “Terms of Service”) govern your
              use of our Add-on, whose documentation can be found at the website
              located at{" "}
              <a target={"_blank"} href={siteMetadata?.siteUrl}>
                {siteMetadata?.siteUrl}
              </a>{" "}
              (together or individually “Service”) operated by{" "}
              <b>Caption Manager</b>.
            </p>
            <p>
              Our <Link to="/privacy-policy">Privacy Policy</Link> also governs
              your use of our Service and explains how we collect, safeguard and
              disclose information that results from your use of our services.
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy
              (“Agreements”). You acknowledge that you have read and understood
              Agreements, and agree to be bound of them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then
              you may not use the Service, but please let us know by emailing at{" "}
              <a href={"mailto:captionmanagerondocs@gmail.com"}>
                captionmanagerondocs@gmail.com
              </a>{" "}
              so we can try to find a solution. These Terms apply to all
              visitors, users and others who wish to access or use Service.
            </p>
            {/*  */}

            <h1>Content</h1>
            <p>
              Content found on or through this Service are used as specified on
              the Privacy Policy. You may not distribute, modify, transmit,
              reuse, download, repost, copy, or use said Content, whether in
              whole or in part, for commercial purposes or for personal gain,
              without express advance written permission from us.
            </p>
            {/*  */}
            <h1>Prohibited Uses</h1>
            <p>
              You may use Service only for lawful purposes and in accordance
              with Terms. You agree not to use Service:
            </p>
            <p>
              0.1. In any way that violates any applicable national or
              international law or regulation.
            </p>
            <p>
              0.2. For the purpose of exploiting, harming, or attempting to
              exploit or harm minors in any way by exposing them to
              inappropriate content or otherwise.
            </p>
            <p>
              0.3. To transmit, or procure the sending of, any advertising or
              promotional material, including any “junk mail”, “chain letter,”
              “spam,” or any other similar solicitation.
            </p>
            <p>
              0.4. To impersonate or attempt to impersonate Company, a Company
              employee, another user, or any other person or entity.
            </p>
            <p>
              0.5. In any way that infringes upon the rights of others, or in
              any way is illegal, threatening, fraudulent, or harmful, or in
              connection with any unlawful, illegal, fraudulent, or harmful
              purpose or activity.
            </p>
            <p>
              0.6. To engage in any other conduct that restricts or inhibits
              anyone’s use or enjoyment of Service, or which, as determined by
              us, may harm or offend Company or users of Service or expose them
              to liability.
            </p>
            <p>Additionally, you agree not to:</p>
            <p>
              0.1. Use Service in any manner that could disable, overburden,
              damage, or impair Service or interfere with any other party’s use
              of Service, including their ability to engage in real time
              activities through Service.
            </p>
            <p>
              0.2. Use any robot, spider, or other automatic device, process, or
              means to access Service for any purpose, including monitoring or
              copying any of the material on Service.
            </p>
            <p>
              0.3. Use any manual process to monitor or copy any of the material
              on Service or for any other unauthorized purpose without our prior
              written consent.
            </p>
            <p>
              0.4. Use any device, software, or routine that interferes with the
              proper working of Service.
            </p>
            <p>
              0.5. Introduce any viruses, trojan horses, worms, logic bombs, or
              other material which is malicious or technologically harmful.
            </p>
            <p>
              0.6. Attempt to gain unauthorized access to, interfere with,
              damage, or disrupt any parts of Service, the server on which
              Service is stored, or any server, computer, or database connected
              to Service.
            </p>
            <p>
              0.7. Attack Service via a denial-of-service attack or a
              distributed denial-of-service attack.
            </p>
            <p>
              0.8. Take any action that may damage or falsify Company rating.
            </p>
            <p>
              0.9. Otherwise attempt to interfere with the proper working of
              Service.
            </p>
            {/*  */}
            <h1>Intellectual Property</h1>
            <p>
              Service and its original content (excluding Content provided by
              users), features and functionality are and will remain the
              exclusive property of Caption Manager and its licensors. Service
              is protected by copyright, trademark, and other laws of and
              foreign countries. Our trademarks may not be used in connection
              with any product or service without the prior written consent of
              Caption Manager as specfied on our license at{" "}
              <a href="https://github.com/Caption-Manager/caption-manager/blob/main/LICENSE">
                Github
              </a>{" "}
              (if any).
            </p>
            {/*  */}
            <h1>Copyright Policy</h1>
            <p>
              We respect the intellectual property rights of others. It is our
              policy to respond to any claim that Content posted on Service
              infringes on the copyright or other intellectual property rights
              (“Infringement”) of any person or entity.
            </p>
            <p>
              If you are a copyright owner, or authorized on behalf of one, and
              you believe that the copyrighted work has been copied in a way
              that constitutes copyright infringement, please submit your claim
              via email to captionmanagerondocs@gmail.com, with the subject
              line: “Copyright Infringement” and include in your claim a
              detailed description of the alleged Infringement as detailed
              below, under “DMCA Notice and Procedure for Copyright Infringement
              Claims”
            </p>
            <p>
              You may be held accountable for damages (including costs and
              attorneys’ fees) for misrepresentation or bad-faith claims on the
              infringement of any Content found on and/or through Service on
              your copyright.
            </p>
            {/*  */}
            <h1>DMCA Notice and Procedure for Copyright Infringement Claims</h1>
            <p>
              You may submit a notification pursuant to the Digital Millennium
              Copyright Act (DMCA) by providing our Copyright Agent with the
              following information in writing (see 17 U.S.C 512(c)(3) for
              further detail):
            </p>
            <p>
              0.1. an electronic or physical signature of the person authorized
              to act on behalf of the owner of the copyright’s interest;
            </p>
            <p>
              0.2. a description of the copyrighted work that you claim has been
              infringed, including the URL (i.e., web page address) of the
              location where the copyrighted work exists or a copy of the
              copyrighted work;
            </p>
            <p>
              0.3. identification of the URL or other specific location on
              Service where the material that you claim is infringing is
              located;
            </p>
            <p>0.4. your address, telephone number, and email address;</p>
            <p>
              0.5. a statement by you that you have a good faith belief that the
              disputed use is not authorized by the copyright owner, its agent,
              or the law;
            </p>
            <p>
              0.6. a statement by you, made under penalty of perjury, that the
              above information in your notice is accurate and that you are the
              copyright owner or authorized to act on the copyright owner’s
              behalf.
            </p>
            <p>
              You can contact our Copyright Agent via email at
              captionmanagerondocs@gmail.com.
            </p>
            {/*  */}
            <h1>Error Reporting and Feedback</h1>
            <p>
              You may provide us either directly at
              captionmanagerondocs@gmail.com or via third party sites and tools
              with information and feedback concerning errors, suggestions for
              improvements, ideas, problems, complaints, and other matters
              related to our Service (“Feedback”). You acknowledge and agree
              that: (i) you shall not retain, acquire or assert any intellectual
              property right or other right, title or interest in or to the
              Feedback; (ii) Company may have development ideas similar to the
              Feedback; (iii) Feedback does not contain confidential information
              or proprietary information from you or any third party; and (iv)
              Company is not under any obligation of confidentiality with
              respect to the Feedback. In the event the transfer of the
              ownership to the Feedback is not possible due to applicable
              mandatory laws, you grant Company and its affiliates an exclusive,
              transferable, irrevocable, free-of-charge, sub-licensable,
              unlimited and perpetual right to use (including copy, modify,
              create derivative works, publish, distribute and commercialize)
              Feedback in any manner and for any purpose.
            </p>
            {/*  */}
            <h1>Links To Other Web Sites</h1>
            <p>
              Our Service may contain links to third party web sites or services
              that are not owned or controlled by Caption Manager.
            </p>
            <p>
              Caption Manager has no control over, and assumes no responsibility
              for the content, privacy policies, or practices of any third party
              web sites or services. We do not warrant the offerings of any of
              these entities/individuals or their websites.
            </p>
            <p>
              For example, the outlined{" "}
              <a href="https://policymaker.io/terms-and-conditions/">
                Terms of Use
              </a>{" "}
              have been created using{" "}
              <a href="https://policymaker.io/">PolicyMaker.io</a>, a free web
              application for generating high-quality legal documents.
              PolicyMaker’s{" "}
              <a href="https://policymaker.io/terms-and-conditions/">
                Terms and Conditions generator
              </a>{" "}
              is an easy-to-use free tool for creating an excellent standard
              Terms of Service template for a website, blog, e-commerce store or
              app.
            </p>
            <p>
              YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR
              LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR
              ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE
              ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY
              SUCH THIRD PARTY WEB SITES OR SERVICES.
            </p>
            <p>
              WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
              POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
            </p>
            {/*  */}
            <h1>Disclaimer Of Warranty</h1>
            <p>
              THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS
              AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES
              OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR
              SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED
              THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES,
              THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT
              YOUR SOLE RISK.
            </p>
            <p>
              NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY
              WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS,
              SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
              SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR
              ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE
              SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH
              THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR
              UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES
              OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS
              OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR
              EXPECTATIONS.
            </p>
            <p>
              COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
              EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT
              LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT,
              AND FITNESS FOR PARTICULAR PURPOSE.
            </p>
            <p>
              THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
              EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </p>
            {/*  */}
            <h1>Limitation Of Liability</h1>
            <p>
              EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
              DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT,
              PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT
              ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND
              EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL,
              IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED),
              WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS
              ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT,
              INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR
              PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY
              YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR
              REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE
              IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO
              THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO
              CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES.
              SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE,
              INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR
              EXCLUSION MAY NOT APPLY TO YOU.
            </p>
            {/*  */}
            <h1>Termination</h1>
            <p>
              We may terminate or suspend your account and bar access to Service
              immediately, without prior notice or liability, under our sole
              discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue
              using Service.
            </p>
            <p>
              All provisions of Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
            {/*  */}
            <h1>Governing Law</h1>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of Brazil, which governing law applies to agreement without
              regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service and supersede and replace any prior agreements we might
              have had between us regarding Service.
            </p>
            {/*  */}
            <h1>Changes To Service</h1>
            <p>
              We reserve the right to withdraw or amend our Service, and any
              service or material we provide via Service, in our sole discretion
              without notice. We will not be liable if for any reason all or any
              part of Service is unavailable at any time or for any period. From
              time to time, we may restrict access to some parts of Service, or
              the entire Service, to users, including registered users.
            </p>
            {/*  */}
            <h1>Amendments To Terms</h1>
            <p>
              We may amend Terms at any time by posting the amended terms on
              this site. It is your responsibility to review these Terms
              periodically.
            </p>
            <p>
              Your continued use of the Platform following the posting of
              revised Terms means that you accept and agree to the changes. You
              are expected to check this page frequently so you are aware of any
              changes, as they are binding on you.
            </p>
            <p>
              By continuing to access or use our Service after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, you are no longer authorized to
              use Service.
            </p>
            {/*  */}
            <h1>Waiver And Severability</h1>
            <p>
              No waiver by Company of any term or condition set forth in Terms
              shall be deemed a further or continuing waiver of such term or
              condition or a waiver of any other term or condition, and any
              failure of Company to assert a right or provision under Terms
              shall not constitute a waiver of such right or provision.
            </p>
            <p>
              If any provision of Terms is held by a court or other tribunal of
              competent jurisdiction to be invalid, illegal or unenforceable for
              any reason, such provision shall be eliminated or limited to the
              minimum extent such that the remaining provisions of Terms will
              continue in full force and effect.
            </p>
            {/*  */}
            <h1>Acknowledgement</h1>
            <p>
              BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
              THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY
              THEM.
            </p>
            {/*  */}
            <h1>Contact Us</h1>
            <p>
              Please send your feedback, comments, requests for technical
              support by email: <b>captionmanagerondocs@gmail.com</b>.
            </p>
            <p style={{ marginTop: "5em", fontSize: "0.7em" }}>
              These{" "}
              <a href="https://policymaker.io/terms-and-conditions/">
                Terms of Service
              </a>{" "}
              were first generated for <b>{siteMetadata?.siteUrl}</b> by{" "}
              <a href="https://policymaker.io">PolicyMaker.io</a> on 2022-09-09.
            </p>
          </Container>
        </Segment>
      </div>
    </Layout>
  );
}
