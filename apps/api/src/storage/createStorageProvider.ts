import type { StorageProvider } from "./StorageProvider.ts";
import { FakeStorageProvider } from "./FakeStorageProvider.ts";

export function createStorageProvider(): StorageProvider {
  return new FakeStorageProvider();
}
