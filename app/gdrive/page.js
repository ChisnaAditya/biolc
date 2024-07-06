"use client";

import { onValue, push, ref } from "firebase/database";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import LinkCard from "@/components/LinkCard";

export default function GdriveLink() {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (title.length === 0) {
      errors.title = "Title is required.";
    }
    if (link.length === 0) {
      errors.link = "Link is required.";
    }
    setError(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      push(ref(db, "links/"), {
        title: title,
        link: link,
      });
      setTitle("");
      setLink("");
      setLoading(false);
    } catch (err) {
      alert("Try again");
    }
  };

  useEffect(() => {
    validateForm();
    const dbRef = ref(db, "links");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setLinks(Object.values(data));
    });
  }, [title, link]);

  useEffect(() => {});
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-[400px] min-h-screen mx-auto">
      {/* <AddLink /> */}
      <div className="px-10 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-5 w-full rounded-lg shadow-lg bg-slate-100"
        >
          <Input
            type="text"
            label="Title"
            placeholder="Enter title"
            variant="bordered"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isInvalid={error.title}
            errorMessage={error.title}
            required
          />
          <Input
            type="text"
            label="Link"
            placeholder="Enter link"
            variant="bordered"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            isInvalid={error.link}
            errorMessage={error.link}
            required
          />
          <Button
            type="submit"
            variant="shadow"
            color="warning"
            isLoading={loading}
          >
            Send
          </Button>
        </form>
      </div>
      {/* <div className=" px-10 w-full ">
        <div className="flex flex-wrap gap-4 p-5 rounded-lg shadow-lg bg-slate-100">
          {links.map((item, index) => (
            <LinkCard cardKey={index} title={item.title} link={item.link} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
