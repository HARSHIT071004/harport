import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
import React from "react";
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="harshsharmavatasa@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="8384030533" Image={FiPhone} />
      <SingleInfo text="Noida,India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;