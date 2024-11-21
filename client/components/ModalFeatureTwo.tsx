import { getOCR } from "@/libs/getOCR";
import {
  Button,
  Image,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Progress,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";

export default function ModalFeatureTwo() {
  const [data, setData] = useState<Array<string>>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const options = [
    {
      key: "n1.jpg",
      label: "n1.jpg",
      value: [
        "fat",
        "trans fat",
        "sugar",
        "fiber",
        "calcium",
        "saturated fat",
        "thiamin",
        "calories",
        "vitamin",
        "iron",
        "total fat",
        "cholesterol",
        "carbohydrate",
      ],
    },
    {
      key: "n2.png",
      label: "n2.png",
      value: [
        "potassium",
        "fat",
        "iron",
        "trans fat",
        "sugar",
        "fiber",
        "calcium",
        "sodium",
        "saturated fat",
        "dietary fiber",
        "calories",
        "vitamin",
        "protein",
        "total fat",
        "carbohydrate",
      ],
    },
    {
      key: "n3.jpg",
      label: "n3.jpg",
      value: ["fat", "sugar", "salt", "energy", "protein", "carbohydrate"],
    },
    {
      key: "n4.webp",
      label: "n4.webp",
      value: [
        "potassium",
        "fat",
        "sugar",
        "calcium",
        "sodium",
        "calories",
        "protein",
        "total fat",
        "carbohydrate",
      ],
    },
  ];

  const handleOCR = async (image: string) => {
    setIsClicked(true);
    setData([]);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setData(options.find((option) => option.key === selectedImage)?.value || []);
    }, 2000);
    // Can't fetch data because can't deploy ocr model on free version of render
    // await getOCR(image).then((res) => {
    //   setData(res);
    //   setIsLoading(false);
    // });
  };

  return (
    <>
      <ModalHeader>
        <h2>Feature : OCR</h2>
      </ModalHeader>
      <ModalBody>
        <div className=" w-full flex flex-col gap-4">
          <div className=" w-full flex flex-row gap-2">
            <Select
              variant="faded"
              placeholder="Select image"
              value={selectedImage}
              onChange={(e) => setSelectedImage(e.target.value)}
            >
              {options.map((option) => (
                <SelectItem key={option.key}>{option.label}</SelectItem>
              ))}
            </Select>
            <Button
              variant="solid"
              className="bg-gradient-to-r text-white from-primary-500 to-primary-400"
              onPress={() => {
                handleOCR(selectedImage);
              }}
            >
              OCR
            </Button>
          </div>
          {selectedImage !== "" && (
            <div className="  w-full grid grid-cols-2 gap-2">
              <div className="col-span-1 flex w-full h-52">
                <Image src={`/images/${selectedImage}`} />
              </div>

              <div className="col-span-1 flex w-full">
                <Table isStriped className="h-52">
                  <TableHeader>
                    <TableColumn style={{ paddingLeft: "10px" }}>
                      Ingredients
                    </TableColumn>
                  </TableHeader>
                  <TableBody
                    isLoading={isLoading}
                    loadingContent={<Spinner color="primary" />}
                  >
                    {data?.map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell style={{ paddingLeft: "10px" }}>
                            {item}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
}
