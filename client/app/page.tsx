import Image from "next/image";
import Link from 'next/link'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";


export default function Home() {
  return (

    <div className=" w-full flex flex-col">
      <div className=" w-full  bg-custom-100">
        <Header/>
        <div className=" pb-60 flex flex-col justify-center items-center bg-desktop-curve bg-bottom bg-contain bg-no-repeat  space-y-10">
          <div className=" mt-10 w-full flex justify-center">
            <Image
            src={"/images/illustration-intro.png"}
            width={720}
            height={534}
            alt="intro"/>
          </div>
          <div className=" w-full flex justify-center ">
            <div className="w-10/12  md:w-1/2 text-white text-center text-4xl font-raleway font-semibold">
              All your files in one secure location, accessible anywhere. 
            </div>
          </div>
          <div className=" w-full flex justify-center ">
            <div className=" w-10/12  md:w-1/2 text-gray-300 text-center font-opensan ">
            Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
            </div>
          </div>
          <button className=" bg-custom-500 text-white font-opensan w-40 px-5 py-3 rounded-full font-semibold">
            Get Started 
          </button>

        </div>
        <div className=" w-full bg-custom-200 flex flex-col items-center space-y-24 pb-20"> 
          <div className=" md:w-10/12 lg:w-2/3 md:space-x-5 flex flex-col justify-center items-center md:flex-row md:space-y-0 space-y-24">
            <div className=" space-y-5w-10/12 md:w-1/2 flex flex-col justify-start items-center">
              <div>
                <Image
                src={"/images/icon-access-anywhere.svg"}
                width={83}
                height={78}
                className=" h-24 w-auto"
                alt="access"/>
              </div>
              <div className="md:text-base lg:text-xl text-white text-center font-raleway font-semibold ">
                Access your files, anywhere 
              </div>
              <div className=" md:text-sm lg:text-base px-5 text-gray-300 text-center font-raleway">
                The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
              </div>
            </div>
            <div className=" space-y-5 w-10/12 md:w-1/2 flex flex-col  items-center">
              <div>
                <Image
                src={"/images/icon-security.svg"}
                width={83}
                height={78}
                className=" h-24 w-auto"
                alt="security"/>
              </div>
              <div className=" md:text-base lg:text-xl text-white text-center font-raleway font-semibold ">
                Security you can trust
              </div>
              <div className="md:text-sm lg:text-base px-5 text-gray-300 text-center font-raleway">
                2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. 
              </div>
            </div>
          </div>
          <div className=" md:w-10/12 lg:w-2/3 md:space-x-5 flex flex-col items-center md:flex-row md:space-y-0 space-y-24">
            <div className=" space-y-5 w-10/12 md:w-1/2 flex flex-col justify-start items-center">
              <div>
                <Image
                src={"/images/icon-collaboration.svg"}
                width={83}
                height={78}
                className=" h-24 w-auto"
                alt="collaboration"/>
              </div>
              <div className=" md:text-base lg:text-xl text-white text-center font-raleway font-semibold ">
                Real-time collaboration  
              </div>
              <div className=" md:text-sm lg:text-base px-5 text-gray-300 text-center font-raleway">
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
              </div>
            </div>
            <div className=" space-y-5  w-10/12 md:w-1/2 flex flex-col justify-start items-center">
              <div>
                <Image
                src={"/images/icon-any-file.svg"}
                width={83}
                height={78}
                className=" h-24 w-auto"
                alt="file"/>
              </div>
              <div className="md:text-base lg:text-xl text-white text-center font-raleway font-semibold ">
                Store any type of file
              </div>
              <div className="md:text-sm lg:text-base px-5 text-gray-300 text-center font-raleway">
                Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-custom-200 md:pt-5 lg:pt-10 flex flex-col md:flex-row"> 
          <div className=" w-full md:w-1/2 flex p-10 md:p-5 lg:p-10 xl:p-20">
            <Image
            src={"/images/illustration-stay-productive.png"}
            width={615}
            height={465}
            className=" bg-contain"
            alt="stay"/>
          </div>
          <div className="w-full px-10 md:px-0  md:w-1/2 flex space-y-3 lg:space-y-5 md:pr-10 lg:pr-20 flex-col justify-center">
            <div className=" text-white text-xl md:text-2xl lg:text-3xl xl:text-5xl font-raleway flex md:flex-col  md:space-y-1 lg:space-y-3 font-semibold ">
              Stay productive, wherever you are
            </div>
            <div className=" text-gray-200 md:text-xs lg:text-sm xl:text-base font-opensan">
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. 
            </div>
            <div className=" text-gray-200 md:text-xs lg:text-sm xl:text-base font-opensan">
              Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
            </div>
            <Link href={"/"} className=" text-custom-500 md:text-xs lg:text-sm xl:text-base underline-offset-8 underline font-opensan">
              <div className=" flex flex-row">
                See how Fylo works 
                <span className=" flex justify-center items-end"> 
                  <Image
                  src={"/images/icon-arrow.svg"}
                  width={16}
                  height={16}
                  alt="arrow"/>
                </span>
              </div> 
            </Link>
          </div>
        </div>
        <div className="bg-quotes bg-customp md:bg-custompp  lg:bg-customp bg-no-repeat  w-full bg-custom-200 pt-20 pb-96 flex flex-row justify-center items-center">
          <div className="   md:w-11/12 lg:w-10/12 md:space-x-10 flex flex-col md:flex-row items-center md:space-y-0 space-y-7">
            <div className=" bg-custom-400 space-y-7 px-5 pt-10 pb-5 rounded-md flex flex-col font-opensan w-10/12 md:w-1/3">
              <div className=" text-gray-300 md:text-xs lg:text-sm xl:text-base">
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
              </div>
              <div className=" flex flex-row">
                <div className=" flex justify-center items-center">
                  <Image
                  src={"/images/profile-1.jpg"}
                  width={128}
                  height={128}
                  className=" w-7 h-7 rounded-full"
                  alt="profile1"/>
                </div>
                <div className="ml-3  flex flex-col justify-center">
                  <div className=" text-sm font-semibold text-white font-opensan">
                    Satish Patel
                  </div>
                  <div className=" text-[10px] text-white font-opensan">
                    Founder & CEO, Huddle
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-custom-400 space-y-7 px-5 pt-10 pb-5 rounded-md flex flex-col font-opensan  w-10/12 md:w-1/3">
              <div className=" text-gray-300 md:text-xs lg:text-sm xl:text-base">
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
              </div>
              <div className=" flex flex-row">
                <div className=" flex justify-center items-center">
                  <Image
                  src={"/images/profile-2.jpg"}
                  width={128}
                  height={128}
                  className=" w-7 h-7 rounded-full"
                  alt="profile2"/>
                </div>
                <div className="ml-3  flex flex-col justify-center">
                  <div className=" text-sm font-semibold text-white font-opensan">
                    Bruce McKenzie
                  </div>
                  <div className=" text-[10px] text-white font-opensan">
                    Founder & CEO, Huddle
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-custom-400 space-y-7 px-5 pt-10 pb-5 rounded-md flex flex-col font-opensan  w-10/12 md:w-1/3">
              <div className=" text-gray-300 md:text-xs lg:text-sm xl:text-base">
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
              </div>
              <div className=" flex flex-row">
                <div className=" flex justify-center items-center">
                  <Image
                  src={"/images/profile-3.jpg"}
                  width={128}
                  height={128}
                  className=" w-7 h-7 rounded-full"
                  alt="profile3"/>
                </div>
                <div className="ml-3  flex flex-col justify-center">
                  <div className=" text-sm font-semibold text-white font-opensan">
                    Iva Boyd
                  </div>
                  <div className=" text-[10px] text-white font-opensan">
                    Founder & CEO, Huddle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <Navbar/>
      
    </div>
    
  )}