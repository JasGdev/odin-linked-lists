import { Node } from "./Node";

export class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	// add to end of list
	append(value) {
		if (this.head == null) {
			this.head = new Node(value);
		} else {
			let currentNode = this.head;
			while (currentNode.nextNode !== null) {
				currentNode = currentNode.nextNode;
			}

			currentNode.nextNode = new Node(value);
		}
	}

	// add to start of list
	prepend(value) {}

	// total number of nodes
	size() {}

	// return first node in list (undefined if list empty)
	head() {}

	// return value of final node (undefined if list empty)
	tail() {}

	// return value of node at index (undefined if list empty)
	at(index) {}

	// remove the head node from list and return value (undefined if list empty)
	pop() {}

	// return true if the value is in list, false else
	contains(value) {}

	// return index of first node containing the value, if not found return -1
	findIndex(value) {}

	// represent linked list objects as  strings
	// '( value ) -> ( value ) -> ( value ) -> null'
	toString() {
		const currentOutput = "";
		currentOutput.concat(`( ${this.head.value} )`);
		let currentNode = this.head;
		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
			currentOutput.concat(` -> ( ${currentNode.value} )`);
		}
		currentOutput.concat(` -> null`);

		return currentOutput;
	}

	// insert new nodes with the given values at the given index (if index out of bounds throw RangeError)
	insertAt(index, ...values) {}

	// remove node at given index (if index out of bounds throw RangeError)
	removeAt(index) {}
}
