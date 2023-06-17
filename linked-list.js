/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    /** pop(): return & remove last item. */

    pop() {
        if (!this.head) {
            throw "List is empty";
        }
        let current = this.head;
        if (!current.next) {
            const val = this.head.val;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return val;
        }
        while (current) {
            if (current.next === this.tail) {
                const val = this.tail.val;
                this.tail = current;
                current.next = null;
                this.length--;
                return val;
            } else {
                current = current.next;
            }
        }
    }

    /** shift(): return & remove first item. */

    shift() {
        if (!this.head) {
            throw "List is empty";
        }
        if (!this.head.next) {
            const val = this.head.val;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return val;
        } else {
            const val = this.head.val;
            let current = this.head;
            this.head = current.next;
            current = null;
            this.length--;
            return val;
        }
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        if (!this.head) {
            throw "List is empty";
        }
        if (idx === 0) {
            return this.head.val;
        }
        if (0 > idx || idx >= this.length) {
            throw "value not found";
        }
        let current = this.head;
        let count = 0;
        while (count <= idx) {
            if (idx === count) {
                return current.val;
            }
            current = current.next;
            count++;
        }
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        if (!this.head) {
            throw "List is empty";
        }
        if (idx === 0) {
            this.head.val = val;
            return undefined;
        }
        if (0 > idx || idx >= this.length) {
            throw "value not found";
        }
        let current = this.head;
        let count = 0;
        while (count <= idx) {
            if (idx === count) {
                current.val = val;
                return undefined;
            }
            current = current.next;
            count++;
        }
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            return undefined;
        }
        if (0 > idx || idx > this.length) {
            throw "value not found";
        }
        let current = this.head;
        let count = 0;
        while (count <= idx - 1) {
            if (idx - 1 === count && idx === this.length) {
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
            }
            if (idx - 1 === count) {
                newNode.next = current.next;
                current.next = newNode;
                this.length++;
            }
            current = current.next;
            count++;
        }
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        if (!this.head) {
            throw "List is empty";
        }
        if (0 > idx || idx >= this.length) {
            throw "invalid index";
        }
        if (idx === 0 && this.length === 1) {
            const val = this.head.val;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return val;
        }
        let current = this.head;
        let count = 0;
        while (count <= idx) {
            if (idx - 1 === count) {
                if (!current.next.next) {
                    current.next = null;
                    this.tail = current;
                }
                const nextNode = current.next.next;
                const removed = current.next;
                current.next = null;
                current.next = nextNode;
                this.length--;
                return removed;
            }
            current = current.next;
            count++;
        }
    }

    /** average(): return an average of all values in the list */

    average() {
        if (!this.head) {
            return 0;
        }
        let current = this.head;
        let count = 0;
        let idx = 0;
        while (idx < this.length) {
            count = count + current.val;
            current = current.next;
            idx++;
        }
        return count / this.length;
    }
}

let test = new LinkedList();

module.exports = LinkedList;
