function getRelationship(x, y) {
    
    if ((typeof(x) != 'number') & (typeof(y) != 'number')) {
        var out = "Can't compare relationships because "+x+" and "+y+" are not numbers";
        return out;
    }
    if ((typeof(x) === 'number') & (typeof(y) != 'number')) {
        var out = "Can't compare relationships because "+y+" is not a number";
        return out;
    }
    if ((typeof(x) != 'number') & (typeof(y) === 'number')) {
        var out = "Can't compare relationships because "+x+" is not a number";
        return out;
    }
    if (x>y){
        return ">";
        }
    if (x<y){
        return "<";
        }
    if (x===y){
        return "=";
        }
}
