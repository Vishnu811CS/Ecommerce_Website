import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-eccomerce app"}>
     <div className="row contactus">
  <div className="col-md-8">
    <img
      src="/images/about.jpeg"
      alt="contactus"
      style={{ width: "100%", borderRadius: "10px"}}
    />
  </div>
  <div className="col-md-6">
    <h2>Welcome to our Ecommerce Website!</h2>
    <p className="text-justify mt-2">
      Thank you for visiting our website. If you have any questions or
      inquiries, please feel free to reach out to us using the contact
      information.
    </p>
  </div>
</div>

    </Layout>
  );
};

export default About;