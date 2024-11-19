import { FeatureProps } from "@/types/feature";
import { Button, Card, Image } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  features: FeatureProps;
}

export default function FeatureCard(prop: Props) {
  const [image, setImage] = useState(0);

  return (
    <div className="mx-auto max-w-screen-lg  grid grid-cols-1 sm:grid-cols-2 gap-10 pb-12">
      <div className=" col-span-1 flex flex-row justify-center items-center w-full">
        <Button
          className="bg-inherit"
          radius="full"
          startContent={<ChevronLeft />}
          isIconOnly={true}
          variant="flat"
          onPress={() => setImage((prev) => prev - 1)}
        ></Button>

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

        <Button
          className="bg-inherit"
          radius="full"
          startContent={<ChevronRight />}
          isIconOnly={true}
          variant="flat"
          onPress={() => setImage((prev) => prev + 1)}
        ></Button>
      </div>
      <div className="flex flex-col col-span-1 max-sm:pt-0 p-10 w-full gap-3">
        <h2>{prop.features.title}</h2>
        <h5 className="text-justify">{prop.features.description}</h5>
      </div>
    </div>
  );
}
