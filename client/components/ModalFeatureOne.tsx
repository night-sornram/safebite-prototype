"use client";

import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";

export default function ModalFeatureOne() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<Array<string>>(Array<string>());

  const handleSubmit = () => {};

  return (
    <>
      <ModalHeader>
        <h2>Feature : Knowledge Graph</h2>
      </ModalHeader>
      <ModalBody>
        <div className=" w-full flex flex-col">
          <div className=" w-full flex flex-row gap-2">
            <Input
              placeholder="Ingredient"
              variant="faded"
              onValueChange={setText}
              isClearable
            />
            <Button variant="solid" color="primary">
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
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
}
