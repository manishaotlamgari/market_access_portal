import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.webp"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h3> Collective Farming
        </h3>
          <p className="text-justify mt-2">
 
 A market access portal for farmers, especially in the context of collective farming, 
 serves as a digital platform that connects producers with consumers or businesses, 
 providing a streamlined way to buy and sell agricultural products.
 It's a transformative bridge connecting the agricultural ecosystem with modern technological tools.       
 This initiative is driven by a steadfast commitment to narrowing the divide between farmers and consumers,
 making it more than just a marketplace –
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
