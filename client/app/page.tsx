"use client";
import Navbar from "@/components/Navbar";
import {
  Button,
  Card,
  Link,
  CardBody,
  CardHeader,
  Divider,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Car, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import FeatureCard from "@/components/FeatureCard";
import FeatureOne from "@/components/FeautureOne";
import FeatureTwo from "@/components/FeatureTwo";
import {
  cards,
  featuresOne,
  featuresThree,
  featuresTwo,
} from "@/mock/features";
import ModalFeature from "@/components/ModalFeature";

export default function Home() {
  const features = Array(featuresOne, featuresTwo, featuresThree);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [feat, setFeat] = useState(0);

  const handleFeature = (index: number) => {
    setFeat(index);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className=" mx-auto grid w-screen grid-cols-12 gap-5 sm:gap-y-7 ">
      <motion.section
        className="col-span-12 bg-primary-50"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <div
          id="intro"
          className="sm:max-w-screen-lg h-screen grid grid-cols-1 sm:grid-cols-2 mx-auto gap-2 sm:gap-4 "
        >
          <div className="flex flex-col gap-4 justify-center items-center  ">
            <Image
              src="/images/illustration-intro.png"
              className="w-auto h-auto "
            />
          </div>
          <div className="flex justify-center sm:items-center items-start">
            <Card
              className="w-10/12 h-auto bg-white shadow-md p-10"
              shadow="none"
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-extrabold">
                  <span className="text-blue-600">Safe</span>bite
                </h1>
                <h5 className="text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </h5>
              </div>
            </Card>
          </div>
        </div>

        <motion.div
          className="sm:max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <div
            id="advantage"
            className="col-span-full flex justify-center items-center sm:pb-7 pb-4"
          >
            <h1>Benefit</h1>
          </div>
          {cards.map((card, idx) => {
            const controls = useAnimation();
            const [ref, inView] = useInView({ triggerOnce: true });

            useEffect(() => {
              if (inView) {
                controls.start("visible");
              }
            }, [controls, inView]);
            return (
              <motion.div
                key={idx}
                className="w-full flex items-center justify-center"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={sectionVariants}
              >
                <Card className="py-4 w-10/12">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h3>{card.title}</h3>
                    <h5 className="text-justify">{card.description}</h5>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      className="object-contain rounded-xl"
                      src={card.image}
                    />
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        <section
          id="feature"
          className="col-span-full flex pt-12 justify-center items-center"
        >
          <h1>Feature</h1>
        </section>
        <section className="col-span-12  bg-primary-50 pt-10">
          {features.map((feature, index) => (
            <FeatureCard
              features={feature}
              idx={index}
              openModal={onOpen}
              handleFeature={() => handleFeature(index)}
              key={index}
            />
          ))}
        </section>
        <ModalFeature
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          index={feat}
        />

        <section className=" col-span-full bg-primary-50  ">
          <div
            id="product"
            className="col-span-full flex justify-center items-center pb-12"
          >
            <h1>Our Product</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-screen-lg mx-auto gap-7">
            <div className="col-span-1 flex justify-center ">
              <Card className="w-10/12 ">
                <iframe
                  className="rounded-xl bg-inherit"
                  height={500}
                  // src="https://embed.figma.com/proto/kSAkgdSmWbP2bSLAejgVNW/Safebite?page-id=0%3A1&node-id=8-119&node-type=canvas&viewport=576%2C440%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A119&share=1&embed-host=share"
                  allowFullScreen
                ></iframe>
              </Card>
            </div>
            <div className="col-span-1 flex flex-col p-10 gap-4">
              <h2 className="font-extrabold">
                <span className=" text-blue-600">Safe</span>bite{" "}
                <span className="font-semibold">Application</span>
              </h2>
              <h5 className="text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </h5>
              <div className="col-span-full h-full flex items-end">
                <div className=" grid grid-cols-2 h-20 ">
                  <div className="col-span-1 flex justify-center items-center">
                    <Link href="#">
                      <Image src="/playstore_download.png" />
                    </Link>
                  </div>
                  <div className="col-span-1 flex justify-center items-center p-3">
                    <Link href="#">
                      <Image src="/appstore_download.webp" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Navbar />
      </motion.section>
    </main>
  );
}
