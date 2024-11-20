import {
  Button,
  Input,
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

export default function FeatureOne() {
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string[]>([]);

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .get(`${backendUrl}/api/food/ingredients?food_name=${text}`)
      .then((res) => {
        setIsLoading(false);
        setResult(res.data);
      });
  };

  return (
    <div className="mx-auto max-w-screen-lg px-7 pb-12 justify-center items-center flex flex-col space-y-7">
      <h3>Feature : Knowledge Graph</h3>
      <div className=" w-full flex flex-row space-x-7">
        <Input placeholder="Ingredient" />
        <Button onClick={handleSubmit} color="primary" variant="shadow">
          Search
        </Button>
      </div>
      {result.length > 0 && (
        <Table className="h-[200px]">
          <TableHeader>
            <TableColumn>Ingredient</TableColumn>
          </TableHeader>
          <TableBody>
            {result.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{item}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
