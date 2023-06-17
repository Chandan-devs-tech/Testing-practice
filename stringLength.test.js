const stringLength=require('./stringLength');
test('function returning the length of the string',()=>{
    expect(stringLength('hello')).toBe(5);
})

test('function returning the length of the string',()=>{
    expect(stringLength('helloooooooooooooooooooooo')).toEqual(new Error('Number should be between 1 and 10'));
})