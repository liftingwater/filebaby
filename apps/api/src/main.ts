import { Hono } from "hono";
import { createStorageProvider } from "./storage/createStorageProvider.ts";

const app = new Hono;
const storage = createStorageProvider();

app.get("/healthcheck", (res) => {
  return res.json({
    "status": "OK",
  });
});

app.post("/files/upload-url", async (c) => {
  const body = await c.req.json();

  const result = await storage.createUploadUrl({
    objectKey: body.objectKey ?? crypto.randomUUID(),
    contentType: body.contentType ?? "application/octet-stream",
    sizeBytes: body.sizeBytes ?? 0,
  });

  return c.json(result);
});


Deno.serve({ port: 8080 }, app.fetch);
