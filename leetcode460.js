/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.NO_SUCH_KEY = -1;
    this.capacity = capacity;
    this.keyToValue = new Map();
    this.keyToFrequency = new Map();
    this.frequencyToKey = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (!this.keyToValue.has(key)) {
        return this.NO_SUCH_KEY;
    }

    let previousFrequency = this.keyToFrequency.get(key);
    this.keyToFrequency.set(key, previousFrequency + 1);
    this.updateMapFrequencyToKey(previousFrequency, key);

    return this.keyToValue.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if (this.capacity === 0) {
        return;
    }

    if (this.keyToValue.size === this.capacity && !this.keyToValue.has(key)) {
        let leastFrequentlyUsed = Number.MAX_SAFE_INTEGER;
        for (let frequency of this.frequencyToKey.keys()) {
            leastFrequentlyUsed = Math.min(leastFrequentlyUsed, frequency);
        }
        this.removeLeastRecentlyUsedFromLeastFrequentlyUsed(leastFrequentlyUsed);
    }

    let previousFrequency = this.keyToFrequency.has(key) ? this.keyToFrequency.get(key) : 0;
    this.keyToValue.set(key, value);
    this.keyToFrequency.set(key, previousFrequency + 1);
    this.updateMapFrequencyToKey(previousFrequency, key);
};

/** 
 * @param {number} previousFrequency 
 * @param {number} key
 * @return {void}
 */
LFUCache.prototype.updateMapFrequencyToKey = function (previousFrequency, key) {
    if (!this.frequencyToKey.has(previousFrequency + 1)) {
        this.frequencyToKey.set(previousFrequency + 1, new DoublyLinkedList());
    }
    this.frequencyToKey.get(previousFrequency + 1).addBack(key);

    if (this.frequencyToKey.has(previousFrequency)) {
        this.frequencyToKey.get(previousFrequency).remove(key);

        if (this.frequencyToKey.get(previousFrequency).size === 0) {
            this.frequencyToKey.delete(previousFrequency);
        }
    }
};

/** 
 * @param {number} leastFrequentlyUsed 
 * @return {void}
 */
LFUCache.prototype.removeLeastRecentlyUsedFromLeastFrequentlyUsed = function (leastFrequentlyUsed) {
    let keyToRemove = this.frequencyToKey.get(leastFrequentlyUsed).removeFront();
    this.keyToValue.delete(keyToRemove);
    this.keyToFrequency.delete(keyToRemove);

    if (this.frequencyToKey.get(leastFrequentlyUsed).size === 0) {
        this.frequencyToKey.delete(leastFrequentlyUsed);
    }
};


function DDLNode(value = 0) {
    this.value = value;
    this.next = null;
    this.previous = null;
}

class DoublyLinkedList {

    constructor() {
        this.size = 0;
        this.frontSentinel = new DDLNode();
        this.backSentinel = new DDLNode();
        this.frontSentinel.next = this.backSentinel;
        this.backSentinel.previous = this.frontSentinel;
    }

    addFront(value) {
        let node = new DDLNode(value);
        this.frontSentinel.next.previous = node;
        node.next = this.frontSentinel.next;
        this.frontSentinel.next = node;
        node.previous = this.frontSentinel;
        ++this.size;
    }

    addBack(value) {
        let node = new DDLNode(value);
        this.backSentinel.previous.next = node;
        node.previous = this.backSentinel.previous;
        this.backSentinel.previous = node;
        node.next = this.backSentinel;
        ++this.size;
    }

    removeFront() {
        if (this.size === 0) {
            throw "List is empty";
        }
        let storeFront = this.frontSentinel.next;
        this.frontSentinel.next.next.previous = this.frontSentinel;
        this.frontSentinel.next = this.frontSentinel.next.next;
        --this.size;
        return storeFront.value;
    }

    removeBack() {
        if (this.size === 0) {
            throw "List is empty";
        }
        let storeBack = this.backSentinel.previous;
        this.backSentinel.previous.previous.next = this.backSentinel;
        this.backSentinel.previous = this.backSentinel.previous.previous;
        --this.size;
        return storeBack.value;
    }

    remove(value) {
        if (this.size === 0) {
            throw "List is empty";
        }

        let current = this.frontSentinel.next;
        while (current !== this.backSentinel) {
            if (current.value === value) {
                break;
            }
            current = current.next;
        }

        if (current === this.backSentinel) {
            return null;
        }
        current.next.previous = current.previous;
        current.previous.next = current.next;
        --this.size;
        return current.value;
    }

    isEmpty() {
        return this.size === 0;
    }
};