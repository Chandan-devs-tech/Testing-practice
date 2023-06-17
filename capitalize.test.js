const capitalize=require('./capitalize');

test('Making a string capitalize',()=>{
    expect(capitalize('chandan')).toBe('Chandan');
})