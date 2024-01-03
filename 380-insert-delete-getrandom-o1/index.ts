class RandomizedSet {
    s: Set<number>;

    constructor() {
        this.s = new Set<number>();
    }

    insert(val: number): boolean {
        if (this.s.has(val)) {
            return false;
        }

        this.s.add(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.s.has(val)) {
            return false;
        }

        this.s.delete(val);
        return true;
    }

    getRandom(): number {
        let a = Array.from(this.s);
        return a[Math.floor(Math.random() * a.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */