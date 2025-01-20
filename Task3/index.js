import fetch from 'node-fetch';

class ArrayQueryProcessor {
    constructor() {
        this.inputUrl = 'https://share.shub.edu.vn/api/intern-test/input';
        this.outputUrl = 'https://share.shub.edu.vn/api/intern-test/output';
        this.token = '';
        this.data = [];
        this.queries = [];
    }

    async fetchJson(url, options = {}) {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }

    initializePrefixArrays() {
        const n = this.data.length;
        this.prefixSum = Array(n + 1).fill(0);
        this.alternatingPrefixSum = Array(n + 1).fill(0);

        for (let i = 0; i < n; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + this.data[i];
            this.alternatingPrefixSum[i + 1] = this.alternatingPrefixSum[i] + (i % 2 === 0 ? this.data[i] : -this.data[i]);
        }
    }

    processQuery(query) {
        const [l, r] = query.range;
        if (query.type === "1") {
            return this.prefixSum[r + 1] - this.prefixSum[l];
        } else if (query.type === "2") {
            const sign = l % 2 === 0 ? 1 : -1;
            return sign * (this.alternatingPrefixSum[r + 1] - this.alternatingPrefixSum[l]);
        }
        throw new Error(`Invalid query type: ${query.type}`);
    }

    async process() {
        const inputData = await this.fetchJson(this.inputUrl);
        this.token = inputData.token;
        this.data = inputData.data;
        this.queries = inputData.query;
        this.initializePrefixArrays();
        const results = this.queries.map(query => this.processQuery(query));
        await this.fetchJson(this.outputUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(results)
        });

        console.log('Results:', results);
    }
}

(async () => {
    try {
        const processor = new ArrayQueryProcessor();
        await processor.process();
        console.log('Thành công!');
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
