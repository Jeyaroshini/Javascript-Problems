function combine(num1,num2,num3,num4)
{
    four(num1,num2,num3,num4);
    three (num1,num2,num3);
    two(num1,num2);
}
function four(num1,num2,num3,num4)
{
    alert (num1+num2+num3+num4);
}
function three(num1,num2,num3)
{
    alert (num1+num2+num3);
}
function two(num1,num2)
{
    alert (num1+num2);
}
var a = combine(10,20,30,40);