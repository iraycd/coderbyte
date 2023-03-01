import crypto from "crypto";

const generateHash = (data: unknown | string): string => {
    return crypto.createHash("sha3-512").update(JSON.stringify(data)).digest("hex");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deterministicPartitionKey = (event: any): string => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;
    let candidatePartitionKey: string | undefined;

    if (event) {
        candidatePartitionKey = event.partitionKey || generateHash(event);
    }

    if (!candidatePartitionKey) {
        candidatePartitionKey = TRIVIAL_PARTITION_KEY;
    }

    if (typeof candidatePartitionKey !== "string") {
        candidatePartitionKey = JSON.stringify(candidatePartitionKey);
    }

    if (candidatePartitionKey.length > MAX_PARTITION_KEY_LENGTH) {
        candidatePartitionKey = generateHash(candidatePartitionKey);
    }

    return candidatePartitionKey;
};
