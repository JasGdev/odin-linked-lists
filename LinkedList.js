import { Node } from "./Node";

export class LinkedList {
	constructor(headNode = null) {
		this.headNode = headNode;
	}

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

	prepend(val) {
		let prevheadNode = this.headNode;
		this.headNode = new Node(val, prevheadNode);
	}

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

	head() {
		if (this.headNode == null) {
			return undefined;
		} else {
			return this.headNode;
		}
	}

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
	at(index) {
        if (this.headNode == null) {
			return undefined;
		} else if (index < 0 || index >= this.size()){
            throw new Error("Out of range of linked list!")
        } else {
            let currentIndex = 0;
            let currentNode = this.headNode;
			while (currentIndex != index) {
				currentNode = currentNode.nextNode;
                currentIndex += 1;
			}
			return currentNode.value;
        }

    }

	// remove the headNode node from list and return value (undefined if list empty)
	pop() {
        if (this.headNode == null) {
			return undefined;
		} else {
            const newHead = this.headNode.nextNode
            const returnValue = this.headNode.value
            this.headNode = newHead
            return returnValue
        }

    }

	// return true if the value is in list, false else
	contains(val) {
        if (this.headNode == null) {
			return false;
		} else {
            let currentNode = this.headNode;
			while (currentNode.nextNode !== null) {
                if (currentNode.value == val){
                    return true
                }
				currentNode = currentNode.nextNode;
			}
            if (currentNode.value == val){
                    return true
                }
            return false
			

        }


    }

	// return index of first node containing the value, if not found return -1
	findIndex(val) {
        if (this.headNode == null) {
			return -1;
		} else {
            let currentIndex = 0
            let currentNode = this.headNode;
			while (currentNode.nextNode !== null) {
                if (currentNode.value == val){
                    return currentIndex
                }
                currentIndex += 1;
				currentNode = currentNode.nextNode;
			}
            if (currentNode.value == val){
                    return currentIndex
                }
            return -1
			

        }
    }

	// represent linked list objects as  strings
	// '( value ) -> ( value ) -> ( value ) -> null'
	toString() {
        if (this.headNode == null) {
			return 'null';
		} else {
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

		
	}

	// insert new nodes with the given values at the given index (if index out of bounds throw RangeError)
	insertAt(index, ...values) {}

	// remove node at given index (if index out of bounds throw RangeError)
	removeAt(index) {}
}
