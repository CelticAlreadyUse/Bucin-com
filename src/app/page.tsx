'use client'
import HeroSection from '@/components/IndexPage/hero'
import PopupFeature from '@/components/IndexPage/PopupFeature'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useState } from 'react'

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div style={{ height: '100svh' }}>
        <HeroSection onOpen={onOpen} />
        <PopupFeature isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </>
  )
}

