import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

export default function AddLink() {
  const [periode, setPeriode] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const validateForm = () => {
    let errors = {};
    if (!periode) {
      errors.email = "Periode is required.";
    }
    if (!link) {
      errors.whatsapp = "Link is required.";
    }
    setError(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("send");
    console.log(periode);
    console.log(link);
  };

  useState(() => {
    validateForm();
  }, [periode, link]);

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Add new link
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add new</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit}>
                  <Input
                    autoFocus
                    label="Periode"
                    type="text"
                    placeholder="Masukkan periode program "
                    variant="bordered"
                    onChange={(e) => setPeriode(e.target.value)}
                    isInvalid={error.periode}
                    errorMessage={error.periode}
                  />
                  <Input
                    label="Link"
                    type="text"
                    placeholder="Masukkan link beserta disini"
                    variant="bordered"
                    onChange={(e) => setLink(e.target.value)}
                    isInvalid={error.link}
                    errorMessage={error.link}
                  />
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Send
                  </Button>
                  {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Petunjuk
                  </Link>
                </div> */}
                </form>
              </ModalBody>
              {/* <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Send
                  </Button>
                </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>

      <form onSubmit={handleSubmit}>
        <Input
          autoFocus
          label="Periode"
          type="text"
          placeholder="Masukkan periode program "
          variant="bordered"
          value={periode}
          onChange={(e) => setPeriode(e.target.value)}
          isInvalid={error.periode}
          errorMessage={error.periode}
        />
        <Input
          label="Link"
          type="text"
          placeholder="Masukkan link beserta disini"
          variant="bordered"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          isInvalid={error.link}
          errorMessage={error.link}
        />

        <Button color="primary" type="submit">
          Send
        </Button>
        {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Petunjuk
                  </Link>
                </div> */}
      </form>
    </>
  );
}
