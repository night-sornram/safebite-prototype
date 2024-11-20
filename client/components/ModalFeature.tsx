"use client";

import { FeatureProps } from "@/types/feature";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import ModalFeatureOne from "./ModalFeatureOne";
import ModalFeatureTwo from "./ModalFeatureTwo";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  index: number;
}

export default function ModalFeature(prop: Props) {
  const renderModal = (index: number) => {
    switch (index) {
      case 0:
        return <ModalFeatureOne />;
      case 1:
        return <ModalFeatureTwo />;
      default:
        return <ModalFeatureOne />;
    }
  };
  return (
    <Modal
      isOpen={prop.isOpen}
      onOpenChange={prop.onOpenChange}
      size="lg"
      scrollBehavior="inside"
    >
      <ModalContent>{(onClose) => renderModal(prop.index)}</ModalContent>
    </Modal>
  );
}
