import { LinkedList } from "./LinkedList.js";

let list;

beforeEach(() =>{
    list = new LinkedList();
})


test("creating Linked list", () => {
    list.append(5)
	expect(list.head).toBe(5);
});