import RbTree from "../src/rbTree";

let rbTree, v, index;
const MAX = 40;

beforeEach(() => {
    rbTree = new RbTree();

    v = [];
    for (let i=0; i < 500; i++) {
        v.push(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER/1000));
        rbTree.insert( v[i], i.toString() );
    }

    index = Math.floor(Math.random()*v.length);

    return rbTree;
})

test('rbTree sorted', () => {

    const sorted = rbTree.toSortedArray();
    expect(sorted.length).toBe( v.length ) ;

    for (let i=0; i < sorted.length-1; i++)
        expect(sorted[i].key).toBeLessThanOrEqual(sorted[i+1].key )

    const sortedInverted = rbTree.toSortedArrayReverse();
    expect(sortedInverted.length).toBe( v.length ) ;

    for (let i=0; i < sortedInverted.length-1; i++)
        expect(sortedInverted[i].key).toBeGreaterThanOrEqual( sortedInverted[i+1].key )

});

test('rbTree sorted 2', () => {

    const sorted = rbTree.getSortedAfter( v[index], MAX );

    let count = 0;
    for (let i= 0; i < v.length; i++)
        if (v[i] >= v[index])
            count += 1;

    expect(sorted.length).toBe( Math.min( count, MAX )  );

    for (let i=0; i < sorted.length-1; i++)
        expect(sorted[i].key).toBeLessThanOrEqual(sorted[i+1].key )

    expect(sorted[0].key).toBe(v[index]);

    const sorted2 = [...v].sort( (a,b) => a - b );

    for (let i=0; i < sorted2.length; i++)
        if (sorted2[i] === v[index]) {
            for (let j = i; j < sorted2.length && j - i < MAX; j++)
                expect(sorted2[j]).toBe(sorted[j - i].key);
            break;
        }

});

test('rbTree sorted 3', () => {

    const sorted = rbTree.getSortedBefore( v[index], MAX );

    let count = 0;
    for (let i= 0; i < v.length; i++)
        if (v[i] <= v[index])
            count += 1;

    expect(sorted.length).toBe( Math.min( count, MAX )  );

    for (let i=0; i < sorted.length-1; i++)
        expect(sorted[i].key).toBeGreaterThanOrEqual( sorted[i+1].key )

    expect(sorted[0].key).toBe(v[index]);

    const sorted2 = [...v].sort( (a,b) => b - a );

    for (let i=0; i < sorted2.length; i++)
        if (sorted2[i] === v[index]) {
            for (let j = i; j < sorted2.length && j - i < MAX; j++)
                expect(sorted2[j]).toBe(sorted[j - i].key);
            break;
        }

});

