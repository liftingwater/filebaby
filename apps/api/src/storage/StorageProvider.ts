export type CreateUploadUrlInput = {
  objectKey: string;
  contentType: string;
  sizeBytes: number;
}

export type CreateUploadUrlResult = {
  uploadUrl: string;
  method: "PUT" | "POST";
  expiresAt: string;
}

export interface StorageProvider = {
  createUploadUrl(
    input: CreateUploadUrlInput
  ): Promise<CreateUploadUrlResult>;
}
