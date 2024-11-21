"use client";

import { foods } from "@/app/data";
import { getKnowledgeGraph } from "@/libs/getKnowledgeGraph";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";

export default function ModalFeatureOne() {
  const [data, setData] = useState<Array<string>>(Array<string>());
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await getKnowledgeGraph(value).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  };

  const onInputChange = (value: string) => {
    setValue(value);
  };

  return (
    <>
      <ModalHeader>
        <h2>Feature : Knowledge Graph</h2>
      </ModalHeader>
      <ModalBody>
        <div className=" w-full flex flex-col gap-4">
          <div className=" w-full flex flex-row gap-2">
            <Autocomplete
              placeholder="Select a food"
              className="w-full"
              variant="faded"
              allowsCustomValue={true}
              onInputChange={onInputChange}
            >
              {foods.map((food, index) => (
                <AutocompleteItem key={index} value={food.label}>
                  {food.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            <Button variant="solid" color="primary" onPress={handleSubmit}>
              Search
            </Button>
          </div>
          {data?.length > 0 && (
            <Table isStriped className="h-52">
              <TableHeader>
                <TableColumn style={{ paddingLeft: "10px" }}>
                  Ingredient
                </TableColumn>
              </TableHeader>
              <TableBody
                isLoading={isLoading}
                loadingContent={<Spinner color="primary" />}
              >
                {data.map((item, index) => {
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
          )}
        </div>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
}
