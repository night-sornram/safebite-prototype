'use client'

import Image from "next/image";
import Link from 'next/link'
import { useState  } from "react";

export default function Navbar(){
  const [email,setEmail] = useState('')
  const [invalid,setInvalid] = useState(false)
  const validateEmail = () => {
    email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? setInvalid(false) : setInvalid(true);
  };
    return (
      <div className=" w-full space-y-10 relative bg-custom-300  flex flex-col md:px-10 lg:px-20 py-40 ">
        <div className=" w-full absolute left-0 -top-60 md:-top-32 flex justify-center">
          <div className=" w-11/12 md:w-2/3 p-5 md:p-10 rounded-md space-y-7 bg-custom-100">
            <div className=" text-white font-raleway text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">
              Get early access today
            </div>
            <div className=" text-gray-300 font-raleway  text-xs lg:text-sm xl:text-base font-semibold text-center">
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
            </div>
            <div className=" w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-7">
              <div className="w-full md:w-2/3 flex flex-col">
                <input onChange={(e)=>{
                  setEmail(e.currentTarget.value)
                }} placeholder="email@example.com" type="text" className=" w-full p-5 rounded-full ring-offset-0 ring-0 text-sm md:text-xs lg:text-sm xl:text-base" />
                <div className={invalid ? " text-xs ml-7 text-custom-700 font-opensan" : "hidden"}>
                  Please enter a valid email address
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <button onClick={validateEmail} className=" w-full px-5  h-[60px] py-3 bg-custom-600 rounded-full outline- font-opensan font-semibold text-white text-sm md:text-xs lg:text-sm xl:text-base">Get Started For Free</button>
              </div>
            </div>

            
          </div>
        </div>
        <div className=" px-[8.3%] md:px-0">
          <Image
          src={"/images/logo.svg"}
          width={176}
          height={52}
          alt="logo"/>
        </div>
        <div className=" flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0  items-center ">
          <div className=" w-10/12  md:w-1/4 flex flex-row">
            <div className=" w-1/12 md:w-1/5">
              <Image
              src={"/images/icon-location.svg"}
              width={18}
              height={18}
              className=" bg-fit"
              alt="location"/>
            </div>
            <div className=" w-11/12 md:w-4/5 text-sm text-white md:text-xs lg:text-sm xl:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          <div className="  w-10/12  md:w-1/4 flex flex-col space-y-3">
            <div className=" flex flex-row">
              <div className="w-1/12 md:w-1/5">
                <Image
                src={"/images/icon-phone.svg"}
                width={18}
                height={18}
                className=" "
                alt="phone"/>
              </div>
              <div className=" w-11/12 md:w-4/5 text-sm text-white md:text-xs lg:text-sm xl:text-base">
                +1-543-123-4567
              </div>
            </div>
            <div className=" flex flex-row">
              <div className="w-1/12 md:w-1/5">
                <Image
                src={"/images/icon-email.svg"}
                width={18}
                height={18}
                className=" "
                alt="email"/>
              </div>
              <div className=" w-11/12 md:w-4/5 text-sm text-white md:text-xs lg:text-sm xl:text-base">
                example@fylo.com
              </div>
            </div>
          </div>
          <div className="  w-10/12  md:w-1/4 flex flex-col md:flex-row">
            <div className=" w-1/2 flex flex-col space-y-5 text-white">
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                About Us
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Jobs
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Press
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Blog
              </Link>
            </div>
            <div className=" w-1/2 flex flex-col space-y-5 text-white">
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Contact Us
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Term
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Policy
              </Link>
            </div>
          </div>
          <div className="  w-10/12  md:w-1/4 flex flex-row space-x-5 justify-center md:justify-normal">
            <Link className=" text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              <div className=" border border-white rounded-full p-2"> 
                <Image
                src={"/images/facebook.svg"}
                width={10}
                height={10}
                className=" w-4 h-4"
                alt="facebook"/>
              </div>
            </Link>
            <Link className=" text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              <div className=" border border-white rounded-full p-2"> 
                <Image
                src={"/images/x.svg"}
                width={10}
                height={10}
                className=" w-4 h-4"
                alt="x"/>
              </div>
            </Link>
            <Link className=" text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              <div className=" border border-white rounded-full p-2"> 
                <Image
                src={"/images/instagram.svg"}
                width={10}
                height={10}
                className=" w-4 h-4"
                alt="instagram"/>
              </div>
            </Link>

          </div>
        </div>
      </div>
    )
}