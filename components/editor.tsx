"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.snow.css";
import { forwardRef } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

export const Editor = forwardRef<HTMLDivElement, EditorProps>((props, ref) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <div ref={ref}>
      <ReactQuill theme="snow" value={props.value} onChange={props.onChange} />
    </div>
  );
});
