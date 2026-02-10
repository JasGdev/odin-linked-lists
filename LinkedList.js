import { Node } from "./Node";

export class LinkedList {
	constructor(headNode = null) {
		this.headNode = headNode;
	}

	// add to end of list
	append(value) {
		if (this.headNode == null) {
			this.headNode = new Node(value);
		} else {
			let currentNode = this.headNode;
			while (currentNode.nextNode !== null) {
				currentNode = currentNode.nextNode;
			}

			currentNode.nextNode = new Node(value);
		}
	}

	// add to start of list
	prepend(value) {
		let prevheadNode = this.headNode;
		this.headNode = new Node(value, prevheadNode);
	}

	// total number of nodes
	size() {
		let size = 0;
		if (this.headNode == null) {
			return size;
		}
		let currentNode = this.headNode;
		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
			size += 1;
		}
		size += 1;
		return size;
	}

	// return first node in list (undefined if list empty)
	head() {
		if (this.headNode == null) {
			return undefined;
		} else {
			return this.headNode;
		}
	}

	// return value of final node (undefined if list empty)
	tail() {
		if (this.headNode == null) {
			return undefined;
		} else {
			let currentNode = this.headNode;
			while (currentNode.nextNode !== null) {
				currentNode = currentNode.nextNode;
			}
			return currentNode.value;
		}
	}

	// return value of node at index (undefined if list empty)
	at(index) {}

	// remove the headNode node from list and return value (undefined if list empty)
	pop() {}

	// return true if the value is in list, false else
	contains(value) {}

	// return index of first node containing the value, if not found return -1
	findIndex(value) {}

	// represent linked list objects as  strings
	// '( value ) -> ( value ) -> ( value ) -> null'
	toString() {
		let currentOutput = "";
		currentOutput = currentOutput.concat(`( ${this.headNode.value} )`);
		let currentNode = this.headNode;
		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
			currentOutput = currentOutput.concat(` -> ( ${currentNode.value} )`);
		}
		currentOutput = currentOutput.concat(` -> null`);
		return currentOutput;
	}

	// insert new nodes with the given values at the given index (if index out of bounds throw RangeError)
	insertAt(index, ...values) {}

	// remove node at given index (if index out of bounds throw RangeError)
	removeAt(index) {}
}
