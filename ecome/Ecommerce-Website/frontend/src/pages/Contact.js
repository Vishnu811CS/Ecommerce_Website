import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%",textAlign:"center"}}
          />
        </div>
        <div className="col-md-4">
          <h5 className="bg-dark p-2 text-white text-center">CONTACT US</h5>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime.
          </p>
          <p className="mt-3">
            <BiMailSend /> : tsaikrishna.903@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9441296739
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-3860-9865 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;