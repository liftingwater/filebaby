import type {
  CreateUploadUrlInput,
  CreateUploadUrlResult,
  StorageProvider
} from "./StorageProvider.ts";

export class FakeStorageProvider implements StorageProvider {
  async createUploadUrl(
    input: CreateUploadUrlInput,
  ): Promise<CreateUploadUrlResult> {
    return {
      uploadUrl: `https://example.test/upload/${input.objectKey}`,
      method: "PUT",
      expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
    };
  }
}
