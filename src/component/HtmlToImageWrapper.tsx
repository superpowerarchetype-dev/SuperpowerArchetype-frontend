"use client"; // ให้ component นี้รันบน client เท่านั้น

import { toJpeg } from "html-to-image";

export const HtmlToJpeg = async (node: HTMLElement) => {
  if (!node) return null;
  try {
    const dataUrl = await toJpeg(node, { quality: 0.95 });
    return dataUrl;
  } catch (err) {
    console.error("html-to-image error:", err);
    return null;
  }
};
