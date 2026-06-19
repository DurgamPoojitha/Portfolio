import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleViewFile = async (e: React.MouseEvent, fileUrl: string) => {
  e.preventDefault();
  if (fileUrl.startsWith("data:")) {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank");
    } catch (error) {
      console.error("Failed to open file", error);
    }
  } else {
    window.open(fileUrl, "_blank");
  }
};
