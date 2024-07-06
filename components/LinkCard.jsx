import React from "react";
import { Snippet } from "@nextui-org/react";
import { PaperIcon } from "./Icons";
export default function LinkCard(props) {
  return (
    <div key={props.cardKey}>
      <h2 className="text-md py-2">{props.title}</h2>
      <Snippet
        symbol=""
        variant="shadow"
        color="warning"
        onCopy={() => window.open(`${props.link}`)}
        copyIcon={<PaperIcon />}
        tooltipProps={{
          color: "foreground",
          content: "Open in Google Drive",
        }}
      >
        Click icon to open
      </Snippet>
    </div>
  );
}
