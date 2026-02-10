import { LinkedList } from "./LinkedList.js";
import { Node } from "./Node.js";

let list;

beforeEach(() => {
	list = new LinkedList();
});

test("creating Linked list", () => {
	expect(list.headNode).toEqual(null);
});

describe("append() implementation", () => {
	test("adding to Linked List x2", () => {
		list.append(5);
		list.append(7);

		const testNode2 = new Node(7);
		const testNode1 = new Node(5, testNode2);
		expect(list.headNode).toEqual(testNode1);
		expect(list.headNode.nextNode).toEqual(testNode2);
	});

	test("adding to Linked List x3", () => {
		list.append(5);
		list.append(7);
		list.append(9);

		const testNode3 = new Node(9);
		const testNode2 = new Node(7, testNode3);
		const testNode1 = new Node(5, testNode2);
		expect(list.headNode).toEqual(testNode1);
		expect(list.headNode.nextNode).toEqual(testNode2);
		expect(list.headNode.nextNode.nextNode).toEqual(testNode3);
		expect(list.headNode.nextNode.nextNode.nextNode).toEqual(null);

		expect(list.headNode.value).toEqual(5);
		expect(list.headNode.nextNode.value).toEqual(7);
		expect(list.headNode.nextNode.nextNode.value).toEqual(9);
	});
});

describe("toString() implementation", () => {
	test("toString on empty", () => {
		expect(list.toString()).toBe("null");
	});

	test("toString implementation test 1", () => {
		list.append("dog");
		list.append("cat");
		list.append("parrot");
		list.append("hamster");
		list.append("snake");
		list.append("turtle");
		expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
	});

	test("toString implementation test 2", () => {
		list.append("dog");
		expect(list.toString()).toBe("( dog ) -> null");
	});
});

describe("prepend() implementation", () => {
	test("prepend to empty LinkedList", () => {
		list.prepend(1);
		// list.prepend(2);
		expect(list.toString()).toBe("( 1 ) -> null");
	});
	test("prepend x2", () => {
		list.prepend(1);
		list.prepend(2);
		expect(list.toString()).toBe("( 2 ) -> ( 1 ) -> null");
	});
	test("prepend x3", () => {
		list.prepend(1);
		list.prepend(2);
		list.prepend(3);
		expect(list.toString()).toBe("( 3 ) -> ( 2 ) -> ( 1 ) -> null");
	});
});

describe("size() implementation", () => {
	test("size on empty LinkedList", () => {
		expect(list.size()).toBe(0);
	});

	test("size on size 2 from prepend LinkedList", () => {
		list.prepend(1);
		list.prepend(2);
		expect(list.size()).toBe(2);
	});
	test("size on size 2 from append LinkedList", () => {
		list.append(1);
		list.append(2);
		expect(list.size()).toBe(2);
	});

	test("size on size 3 from append and prepend LinkedList", () => {
		list.append(1);
		list.append(2);
		list.prepend(3);
		expect(list.size()).toBe(3);
	});
});

describe("head() and tail() implementation", () => {
	test("head and tail on empty LinkedList", () => {
		expect(list.head()).toBe(undefined);
		expect(list.tail()).toBe(undefined);
	});

	test("head and tail on 2x LinkedList", () => {
		list.append(1);
		list.append(2);

		expect(list.head()).toBe(1);
		expect(list.tail()).toBe(2);
	});

	test("tail on 1x LinkedList", () => {
		list.append(1);
		expect(list.tail()).toBe(1);
	});

	test("head on 1x LinkedList", () => {
		list.append(1);
		expect(list.head()).toBe(1);
	});
});

describe("at() implementation", () => {
	test("at on empty LinkedList", () => {
		expect(list.at(0)).toBe(undefined);
	});

	test("at on 2x LinkedList", () => {
		list.append(1);
		list.append(2);

		expect(list.at(0)).toBe(1);
		expect(list.at(1)).toBe(2);
	});

	test("at on 2x LinkedList out of range", () => {
		list.append(1);
		list.append(2);

		expect(() => {
			list.at(3);
		}).toThrow(new Error("Out of range of linked list!"));
		expect(() => {
			list.at(-1);
		}).toThrow(new Error("Out of range of linked list!"));
		expect(() => {
			list.at(2);
		}).toThrow(new Error("Out of range of linked list!"));
	});
});

describe("pop() implementation", () => {
	test("pop() on empty LinkedList", () => {
		expect(list.pop(0)).toBe(undefined);
	});

	test("pop() 2x on size 2 LinkedList", () => {
		list.append(1);
		list.append(2);

		expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> null");
		expect(list.pop()).toBe(1);
		expect(list.toString()).toBe("( 2 ) -> null");
		expect(list.pop()).toBe(2);
		expect(list.toString()).toBe("null");
	});
});

describe("contains() implementation", () => {
	test("contains() on empty LinkedList", () => {
		expect(list.contains(0)).toBe(false);
	});

	test("contains() on size 4 LinkedList ", () => {
		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);

		expect(list.contains(1)).toBe(true);
		expect(list.contains(2)).toBe(true);
		expect(list.contains(3)).toBe(true);
		expect(list.contains(4)).toBe(true);
		expect(list.contains(5)).toBe(false);
	});
});

describe("findIndex() implementation", () => {
	test("findIndex() on empty LinkedList", () => {
		expect(list.findIndex(0)).toBe(-1);
	});

	test("findIndex() on size 5 LinkedList ", () => {
		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);
		list.append(3);

		expect(list.findIndex(1)).toBe(0);
		expect(list.findIndex(2)).toBe(1);
		expect(list.findIndex(3)).toBe(2);
		expect(list.findIndex(4)).toBe(3);
		expect(list.findIndex(5)).toBe(-1);
	});
});

describe("insertAt() implementation", () => {
	test("insertAt(0) on empty LinkedList", () => {
		list.insertAt(0, 1, 2, 3);
		expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> null");
	});

    test("insertAt(1) on 1 size LinkedList", () => {
        list.append(1)
		list.insertAt(1, 2, 3, 4);
		expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null");
        list.insertAt(4, 5);
        expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null");
        expect(() => {
			list.insertAt(6, 1);
		}).toThrow(new Error("Out of range of linked list!"));
	});

	test("insertAt() on a size 3 LinkedList", () => {
		list.append(1);
		list.append(2);
		list.append(3);
        expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> null");
        list.insertAt(1, 1)
        expect(list.toString()).toBe("( 1 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null");
        list.insertAt(2, 1, 4)
        expect(list.toString()).toBe("( 1 ) -> ( 1 ) -> ( 1 ) -> ( 4 ) -> ( 2 ) -> ( 3 ) -> null");
	});
});
