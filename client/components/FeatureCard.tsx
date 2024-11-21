import { FeatureProps } from "@/types/feature";
import { Button, Card, Image } from "@nextui-org/react";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  features: FeatureProps;
  idx: number;
  openModal: () => void;
  handleFeature: () => void;
}

export default function FeatureCard(prop: Props) {
  const [image, setImage] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`mx-auto max-w-screen-lg  flex max-sm:flex-col  gap-10 pb-12 ${
        prop.idx % 2 ? "flex-row-reverse" : ""
      }`}
    >
      <div className=" flex flex-row justify-center items-center w-full sm:w-1/2">
        <Card
          isBlurred
          className=" shadow-md w-10/12 bg-gradient-to-tr from-primary-50 to-blue-100"
          shadow="none"
        >
          <Image
            src={
              prop.features.images[
                Math.abs(image) % prop.features.images.length
              ].image
            }
            height={300}
            className="object-contain"
          />
        </Card>
      </div>
      <div className="flex flex-col w-full sm:w-1/2 max-sm:pt-0 p-10  gap-3">
        <h2>{prop.features.title}</h2>
        <h5 className="text-justify">{prop.features.description}</h5>
        <div className="flex flex-row pt-6 ">
          <Button
            variant="shadow"
            radius="lg"
            className="from-slate-500 to-slate-400 bg-gradient-to-r text-white"
            isDisabled={prop.idx === 2}
            onPress={() => {
              prop.openModal();
              prop.handleFeature();
            }}
          >
            <h3>{prop.idx === 2 ? "Not done yet" : "Try it"}</h3>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
