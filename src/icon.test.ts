import { expect, test } from "bun:test";
import { House } from "./index";

test("icon should be a function", () => {
	expect(typeof House === "function").toBe(true);
});
