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
    { key: "n1.jpg", label: "n1.jpg" },
    { key: "n2.png", label: "n2.png" },
    { key: "n3.jpg", label: "n3.jpg" },
    { key: "n4.webp", label: "n4.webp" },
  ];

  const handleOCR = async (image: string) => {
    setIsClicked(true);
    setData([]);
    setIsLoading(true);
    await getOCR(image).then((res) => {
      setData(res);
      setIsLoading(false);
    });
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
              color="primary"
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
