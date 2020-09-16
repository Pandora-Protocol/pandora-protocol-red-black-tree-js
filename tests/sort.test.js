import prettyFormat from 'pretty-format';
import RbTree from "../src/rbTree";
import Node from '../src/treeNode';
import nodeColor from '../src/color';
import createNode from '../src/createNode';

let rbTree;

beforeEach(() => {
    rbTree = new RbTree();
    return rbTree;
})

test('rbTree sorted', () => {

    const v = [];
    for (let i=0; i < 100; i++) {
        v.push(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
        rbTree.insert( v[i], i.toString() );
    }

    const sorted = rbTree.toSortedArray();
    expect(sorted.length).toBe( v.length ) ;

    for (let i=0; i < sorted.length-1; i++)
        expect(sorted[i].key).toBeLessThanOrEqual(sorted[i+1].key )

    const sortedInverted = rbTree.toSortedArrayInverted();
    expect(sortedInverted.length).toBe( v.length ) ;

    for (let i=0; i < sortedInverted.length-1; i++)
        expect(sortedInverted[i].key).toBeGreaterThanOrEqual( sortedInverted[i+1].key )

});
