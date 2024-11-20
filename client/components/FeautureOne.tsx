"use client"

import {
  Button,
  Autocomplete,
  AutocompleteItem,
  Table,
  Skeleton,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Progress,
} from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import { foods } from "@/app/data";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;



export default function FeatureOne() {
  const [value, setValue] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string[]>([]);

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .get(`${backendUrl}/api/food/ingredients?food_name=${value}`)
      .then((res) => {
        setIsLoading(false);
        setResult(res.data);
      });
  };

  const onInputChange = (value : string) => {
    setValue(value)
  };

  return (
    <div className="mx-auto max-w-screen-lg px-7 pb-12 justify-center items-center flex flex-col space-y-7">
      <h3>Feature : Knowledge Graph</h3>
      <div className=" w-full flex flex-row space-x-7">
        <Autocomplete
          label="Select a food"
          defaultItems={foods}
          className="w-full"
          allowsCustomValue={true}
          onInputChange={onInputChange}
        >
          {foods.map((food) => (
            <AutocompleteItem key={food.value} value={food.label}
            >
              {food.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Button
          className="h-auto"
          onClick={handleSubmit}
          color="primary"
          variant="shadow"
        >
          Search
        </Button>
      </div>
      {isLoading && (
        <Progress
          size="lg"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
        />
      )}

      {!isLoading && result.length > 0 && (
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
