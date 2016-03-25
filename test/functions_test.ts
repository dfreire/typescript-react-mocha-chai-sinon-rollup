import * as mocha from "mocha";
import { assert } from "chai";
import { spy } from "sinon";

import { sum, once } from "../src/functions";

suite("sum", () => {
    test("add two numbers", () => {
        assert.equal(sum(2, 3), 5);
        assert.equal(sum(4, 5), 9);
    });
});

suite("once", () => {
    test("should be called once", () => {
        let callback = sinon.spy();
        let proxy = once(callback);
        proxy();
        assert.isTrue(callback.called);
    });
});
