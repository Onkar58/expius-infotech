"use client";
import { FileText, Upload, X } from "lucide-react";
import {
  ChangeEvent,
  DragEvent,
  FC,
  Fragment,
  useCallback,
  useRef,
  useState,
} from "react";
import { Button, Input, Label } from "./ui";

export type FileUploadProps = {};

export const FileUpload: FC<FileUploadProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [isDragging, setDragging] = useState<boolean>(false);
  const dragCounter = useRef(0); // Keeps track of drag events

  const addFile = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const uploadFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setResume(file ?? null);
  }, []);

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    dragCounter.current = 0; // Reset counter

    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setResume(droppedFiles[0]);
    }
  };

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  const handleDragEnter = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current += 1; // Increment counter
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current -= 1; // Decrement counter

    if (dragCounter.current === 0) {
      setDragging(false);
    }
  }, []);
  const removeFile = useCallback(() => {
    setResume(null);
  }, []);

  return (
    <div>
      <Input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={uploadFile}
        name="resume"
      />
      <Label htmlFor="resume">Resume/CV</Label>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-all ${
          isDragging ? "border-blue-500 bg-blue-100" : "border-gray-300"
        }`}
      >
        {!resume ? (
          <Fragment>
            <Upload className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-1">
              Drag and drop your resume here, or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              Supported formats: PDF, DOCX, DOC (Max 5MB)
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              type="button"
              onClick={addFile}
            >
              <FileText className="mr-2 h-4 w-4" />
              Browse Files
            </Button>
          </Fragment>
        ) : (
          <div>
            <p className="mt-2 text-sm text-primary">
              Selected file: {resume.name}
              <X
                onClick={removeFile}
                className="inline text-red-500 cursor-pointer"
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
