// 1.loop over all elements in an array and

// 2.if adjecent element are out of order,swap them

// 3.repeapt 1&2
const bubbleSort = require('./bubbleSort')
// test that it sorts and empty array
describe('bubbleSort',()=>{
    it('sort empty array',()=>{
        expect(bubbleSort([])).toEqual([]);
    })
    it('sort one array',()=>{
        expect(bubbleSort([55])).toEqual([55]);
    })
    it('sort many array',()=>{
        expect(bubbleSort([89,12,98,-11,40,5,26])).toEqual([-11,5,12,40,89,98]);
    })
})
// sorts an array of one elements
// sorts an array of many elements


