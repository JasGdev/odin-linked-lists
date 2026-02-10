import { LinkedList } from "./LinkedList.js";
import { Node } from "./Node.js";

let list;

beforeEach(() => {
	list = new LinkedList();
});

test("creating Linked list", () => {
	list.append(5);
	const testNode = new Node(5);
	expect(list.head).toEqual(testNode);
});

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
