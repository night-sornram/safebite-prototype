import { FeatureProps } from "@/types/feature";
import {
  Button,
  Select,
  SelectItem,
  Image,
  Progress,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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

export default function FeatureTwo() {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string[]>([]);

  const handleSubmit = () => {
    setIsLoading(true);
    // Can't fetch data because can't deploy ocr model on free version of render
    // axios
    //   .get(`${backendUrl}/api/ocr?image_path=image/${selectedImage}`)
    //   .then((res) => {
    //     setIsLoading(false);
    //     setResult(res.data);
    //   });
    setTimeout(() => {
      setIsLoading(false);
      setResult(options.find((option) => option.key === selectedImage)?.value || []);
    }, 2000);

  };

  return (
    <div className="mx-auto max-w-screen-lg px-7 pb-12 justify-center items-center flex flex-col space-y-7">
      <h3>Feature : OCR</h3>
      <div className=" w-full flex flex-row space-x-7">
        <Select
          items={options}
          label="Select Image"
          placeholder="Select an image"
          className="w-full"
          value={selectedImage}
          onChange={(value) => {
            setSelectedImage(value.target.value);
          }}
        >
          {(option) => <SelectItem key={option.key}>{option.label}</SelectItem>}
        </Select>
        <Button
          className="h-auto"
          color="primary"
          variant="shadow"
          onClick={handleSubmit}
        >
          OCR
        </Button>
      </div>
      {selectedImage !== "" && (
        <div className=" w-full flex flex-row ">
          <div className=" w-1/4">
            <Image
              src={`/images/${selectedImage}`}
              alt="selected image"
              width={200}
              height={300}
            />
          </div>
          <div className="w-3/4 flex justify-center items-center">
            {isLoading && (
              <Progress
                size="lg"
                isIndeterminate
                aria-label="Loading..."
                className="max-w-md"
              />
            )}
            {!isLoading && (
              <Table
                className="w-full h-[300px]"
                aria-label="Example static collection table"
              >
                <TableHeader>
                  <TableColumn>Word</TableColumn>
                </TableHeader>
                <TableBody>
                  {result.map((word) => (
                    <TableRow key={word}>
                      <TableCell>{word}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
