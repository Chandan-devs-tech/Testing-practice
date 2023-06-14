const reverseString=require('./reverseString');
test('function is returning reverse of a string',()=>{
    expect(reverseString('hello')).toBe('olleh');
})