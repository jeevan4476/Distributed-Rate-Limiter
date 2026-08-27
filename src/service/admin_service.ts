import { AdminRepository, BucketStats } from "../domain/types";

export class AdminService {
    constructor(
        private repo: AdminRepository
    ) {}

    async resetBucket(key: string): Promise<number> {
        return this.repo.resetBucket(key);
    }

    async getBucketStats(key: string): Promise<BucketStats> {
        return this.repo.getBucketStats(key);
    }

    async listBuckets(): Promise<BucketStats[]> {
        return this.repo.listBuckets();
    }
}