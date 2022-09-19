import * as React from "react";
import { Segment, Container } from "semantic-ui-react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export function Head() {
  return <Seo title="Privacy Policy" pathname="privacy-policy" />;
}

export default function PrivacyPolicy() {
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
        <Segment basic padded style={{ margin: "1em", width: "90%" }}>
          <Container text>
            <h1>Privacy Policy for Caption Manager</h1>
            <p>
              Caption Manager is a{" "}
              <a
                target={"_blank"}
                href="https://developers.google.com/apps-script/add-ons/concepts/types#editor_add-ons"
              >
                Google Editor's Add-On
              </a>
              , whose documentation can be found at{" "}
              <a target={"_blank"} href={siteMetadata?.siteUrl}>
                {siteMetadata?.siteUrl}
              </a>
              . The website and add-on were created as a free open-source
              project avaliable at{" "}
              <a target={"_blank"} href="https://github.com/Caption-Manager/">
                Github
              </a>{" "}
              and we do no intent to store your data for purposes beyond the
              ones described in this document.
            </p>
            <p>
              This document describes the types of information that is collected
              and recorded by Caption Manager and how we use it. If you have
              additional questions or require more information about our Privacy
              Policy, do not hesitate to contact us at{" "}
              <a href={"mailto:captionmanagerondocs@gmail.com"}>
                captionmanagerondocs@gmail.com
              </a>
              .
            </p>
            {/*  */}
            <h2>Requested Scopes</h2>
            <p>
              This Google Docs Add-on requests the following sensitive privacy
              OAuth scopes for the described reasons:
            </p>
            <ul>
              <li>
                https://www.googleapis.com/auth/script.container.ui
                <ul>
                  <li>
                    This scope allows this Add-on to display an add-on menu,
                    where you can insert a list referencing your captions, open
                    a sidebar to insert or edit captions, insert lists or
                    receive quick instructions to perform the aforementioned
                    tasks.
                  </li>
                </ul>
              </li>
              <li>
                https://www.googleapis.com/auth/documents.currentonly
                <ul>
                  <li>
                    This scope allows this Add-on to create or modify the
                    current active document. This Add-on utilizes this scope in
                    a few ways. The first is to get ongoing information about
                    user's active selection and cursor position, to then enable
                    the insertion or edition of a caption for a selected
                    element; or, if no valid element is being selected, to give
                    instructions on how to properly use the Add-on. The second
                    usage is to write and replace text and manage bookmarks on
                    the active document, when inserting or editing a caption and
                    when inserting lists (blocks of text consisting of a header
                    and paragraphs referencing captions).
                  </li>
                </ul>
              </li>
            </ul>
            You can learn more about requested scopes at{" "}
            <a
              target={"_blank"}
              href="https://developers.google.com/terms/api-services-user-data-policy"
            >
              https://developers.google.com/terms/api-services-user-data-policy
            </a>
            {/*  */}
            <h2>Information we collect</h2>
            <p>
              This Add-on stores information about caption label of an element
              in a document through
              <a
                target={"_blank"}
                href="https://developers.google.com/apps-script/guides/properties"
              >
                Google App Script's Properties API
              </a>
              . The documentation for the <b>Document Properties</b> states that
              data is shared among{" "}
              <i>"All users of an add-on in the open document"</i>, but makes
              sure that
              <i>
                "Document properties created by a script are not accessible
                outside that script, even by other scripts accessing the same
                document".{" "}
              </i>
            </p>
            <p>
              This Add-on does not collect nor store any information about your
              documents anywhere else.
            </p>
            {/*  */}
            <h2>GDPR Data Protection Rights</h2>
            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p>
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
            {/*  */}
            <h2>Consent</h2>
            <p>
              By installing the add-on and following Google's consent process,
              you hereby consent to our Privacy Policy and agree to its terms.
            </p>
            {/*  */}
            <hr />
            <p>
              Generated with the help of{" "}
              <a href="https://www.privacypolicygenerator.info">
                Privacy Policy Generator
              </a>
            </p>
          </Container>
        </Segment>
      </div>
    </Layout>
  );
}
