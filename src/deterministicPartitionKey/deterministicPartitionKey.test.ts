import { deterministicPartitionKey } from "./deterministicPartitionKey";

describe("WHEN deterministicPartitionKey", () => {
    it("SHOULD return a string", () => {
        const result = deterministicPartitionKey({});
        expect(typeof result).toBe("string");
    });

    it("SHOULD return the partition key if present", () => {
        const event = { partitionKey: "foo" };
        const result = deterministicPartitionKey(event);
        expect(result).toBe(event.partitionKey);
    });

    it("SHOULD generate a partition key if none is present", () => {
        const event = { foo: "bar" };
        const result = deterministicPartitionKey(event);
        expect(typeof result).toBe("string");
    });

    it("SHOULD handle non-string inputs", () => {
        const event = { foo: { bar: "baz" } };
        const result = deterministicPartitionKey(event);
        expect(typeof result).toBe("string");
    });

    it("SHOULD handle long partition keys", () => {
        const longKey = "a".repeat(257);
        const event = {
            foo: "bar",
            partitionKey: longKey,
        };
        const result = deterministicPartitionKey(event);
        expect(result.length).toBe(128);
    });
});