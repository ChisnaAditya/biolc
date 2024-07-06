"use client";

import { Tabs, Tab, Snippet, Textarea } from "@nextui-org/react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";
import LinkCard from "@/components/LinkCard";
import { useEffect, useState } from "react";

export default function Links() {
  const [links, setLinks] = useState([]);

  let tabs = [
    {
      id: "pare",
      label: "pare",
      content: ["bit.ly/tanya-pare", "bit.ly/daftar-pare", "bit.ly/web-pare"],
    },
    {
      id: "bandung",
      label: "bandung",
      content: [
        "bit.ly/tanya-bandung",
        "bit.ly/daftar-bandung",
        "bit.ly/web-bandung",
      ],
    },
    {
      id: "bogor",
      label: "bogor",
      content: [
        "bit.ly/tanya-bogor",
        "bit.ly/daftar-bogor",
        "bit.ly/web-bogor",
      ],
    },
    {
      id: "jogja",
      label: "jogja",
      content: [
        "bit.ly/tanya-jogja",
        "bit.ly/daftar-jogja",
        "bit.ly/web-jogja",
      ],
    },
    {
      id: "lampung",
      label: "lampung",
      content: [
        "bit.ly/tanya-lampung",
        "bit.ly/daftar-lampung",
        "bit.ly/web-lampung",
      ],
    },
    {
      id: "makassar",
      label: "makassar",
      content: [
        "bit.ly/tanya-makassar",
        "bit.ly/daftar-makassar",
        "bit.ly/web-makassar",
      ],
    },
    {
      id: "medan",
      label: "medan",
      content: [
        "bit.ly/tanya-medan",
        "bit.ly/daftar-medan",
        "bit.ly/web-medan",
      ],
    },
    {
      id: "serang",
      label: "serang",
      content: [
        "bit.ly/tanya-serang",
        "bit.ly/daftar-serang",
        "bit.ly/web-serang",
      ],
    },
  ];

  useEffect(() => {
    const dbRef = ref(db, "links");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setLinks(Object.values(data));
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto min-h-screen px-10 ">
      {/* <h1 className="text-2xl pb-5">Links to share</h1> */}
      {/* <div className="flex flex-col w-full p-5 rounded-lg shadow-lg bg-slate-100">
        <Tabs
          aria-label="Dynamic tabs"
          size="lg"
          radius="lg"
          //   placement="start"
          variant="bordered"
          color="warning"
        >
          {tabs.map((tab) => (
            <Tab key={tab.id} title={tab.label.toUpperCase()}>
              <div className="flex flex-wrap gap-4">
                {tab.content.map((snipet, index) => (
                  <div key={index}>
                    <Snippet symbol="" variant="shadow">
                      {snipet}
                    </Snippet>
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
        <Textarea
          variant="faded"
          label="Paste (optional)"
          placeholder="CTRL + V"
          description="You can paste text from Snipet here to ensure it's copied to clipboard."
          className="max-w-full mt-5"
        />
      </div> */}
      <div className=" px-10 w-full ">
        <div className="flex flex-wrap gap-4 p-5 rounded-lg shadow-lg bg-slate-100">
          {links.map((item, index) => (
            <LinkCard key={index} title={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
