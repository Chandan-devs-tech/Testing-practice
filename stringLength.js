const stringLength=str=>{
    if(str.length>1 && str.length<10){
        return str.length;
    }else{
        return new Error('Number should be between 1 and 10');
    }
}


module.exports=stringLength;