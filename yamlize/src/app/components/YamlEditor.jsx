"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";

const YamlEditor = () => {
  const [yaml, setYaml] = useState(`community:
  compute:
    gpu-test:
      resources:
        cpu:
          units: 1
        memory:
          size: 20Gi`);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <Editor
        height="400px"
        defaultLanguage="yaml"
        value={yaml}
        onChange={(value) => setYaml(value || "")}
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
};

export default YamlEditor;
