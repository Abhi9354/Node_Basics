// Common JS Module
function add(x=0,y=0){
    return x  + y;
}
function sub(x,y){
    return x-y;
}
module.exports = {add, sub};
// {add:function(x,y){}, sub:function(x,y)}
// module.exports.add = add;
// module.exports.sub = sub;
