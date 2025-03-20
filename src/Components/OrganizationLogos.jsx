import React from "react";
import SectionHeader from "./Common/SectionHeader";
import mic from '../assets/images/mic.png';


const OrganizationLogos = ({ organizations }) => {
  return (
    <div className="container">
    <SectionHeader title={'TOP ORGANIZations'} url={mic} link={'View all'}/>
        <div className="organizationLogos_wrapper mt-4">
            {organizations.map((org, index) => (
                <div key={index} className="organizationLogos_wrap">
                <img src={org.logo} alt={org.name}/>
                <p className="mb-0">{org.name}</p>
                </div>
            ))}
        </div>
    </div>
  
  );
};

export default OrganizationLogos;
