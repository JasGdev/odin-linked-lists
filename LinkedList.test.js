import { LinkedList } from "./LinkedList.js";
import { Node } from "./Node.js";

let list;

beforeEach(() => {
	list = new LinkedList();
});

test("creating Linked list", () => {
	expect(list.head).toEqual(null);
});

describe("append() implementation", () => {
	test("adding to Linked List x2", () => {
		list.append(5);
		list.append(7);

		const testNode2 = new Node(7);
		const testNode1 = new Node(5, testNode2);
		expect(list.head).toEqual(testNode1);
		expect(list.head.nextNode).toEqual(testNode2);
	});

	test("adding to Linked List x3", () => {
		list.append(5);
		list.append(7);
		list.append(9);

		const testNode3 = new Node(9);
		const testNode2 = new Node(7, testNode3);
		const testNode1 = new Node(5, testNode2);
		expect(list.head).toEqual(testNode1);
		expect(list.head.nextNode).toEqual(testNode2);
		expect(list.head.nextNode.nextNode).toEqual(testNode3);
		expect(list.head.nextNode.nextNode.nextNode).toEqual(null);

		expect(list.head.value).toEqual(5);
		expect(list.head.nextNode.value).toEqual(7);
		expect(list.head.nextNode.nextNode.value).toEqual(9);
	});
});

describe("toString() implementation", () => {
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
