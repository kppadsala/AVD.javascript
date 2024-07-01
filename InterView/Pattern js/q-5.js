// Armstrong Nuber find
var number=153
var num=number;
var sum=0
while(num>0){
    var temp=num%10;
    console.log(temp);
    // var ans=temp**3;
    sum += temp**3;
    num=parseInt(num/10);
    console.log("🚀 ~ file: q-5.js:10 ~ sum:", sum)
    console.log("=-=-=-=-=-=-=-=-=-=-");
};
if(number===sum){
    console.log("Num is amstrong");
}
else{
    console.log("Num is Not amstrong");

}