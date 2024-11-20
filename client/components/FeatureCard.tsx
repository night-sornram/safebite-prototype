import { FeatureProps } from "@/types/feature";
import { Button, Card, Image } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  features: FeatureProps;
  idx: number;
  openModal: () => void;
  handleFeature: () => void;
}

export default function FeatureCard(prop: Props) {
  const [image, setImage] = useState(0);

  return (
    <div
      className={`mx-auto max-w-screen-lg  flex max-sm:flex-col  gap-10 pb-12 ${
        prop.idx % 2 ? "flex-row-reverse" : ""
      }`}
    >
      <div className=" flex flex-row justify-center items-center w-full sm:w-1/2">
        {/* <Button
          className="bg-inherit"
          radius="full"
          startContent={<ChevronLeft />}
          isIconOnly={true}
          variant="flat"
          onPress={() => setImage((prev) => prev - 1)}
        ></Button> */}

        <Card className=" bg-white shadow-md w-10/12" shadow="none">
          <Image
            src={
              prop.features.images[
                Math.abs(image) % prop.features.images.length
              ].image
            }
            height={300}
            className="object-cover"
          />
        </Card>

        {/* <Button
          className="bg-inherit"
          radius="full"
          startContent={<ChevronRight />}
          isIconOnly={true}
          variant="flat"
          onPress={() => setImage((prev) => prev + 1)}
        ></Button> */}
      </div>
      <div className="flex flex-col w-full sm:w-1/2 max-sm:pt-0 p-10  gap-3">
        <h2>{prop.features.title}</h2>
        <h5 className="text-justify">{prop.features.description}</h5>
        <div className="flex flex-row pt-6 ">
          <Button
            variant="shadow"
            radius="lg"
            className="bg-slate-400 text-white"
            onPress={() => {
              prop.openModal();
              prop.handleFeature();
            }}
          >
            <h3>Try it</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}
