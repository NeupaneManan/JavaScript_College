<?php

//1. Print Hello
echo "Hello World<br>";
echo "<br><br>";

//2. cal area and rectangle
$lenght= 20;
$breadth= 30;
$area = $lenght * $breadth;
echo "The Area of Rectangle is :{$area}<br><br>";

//3.swap without tem
$a=30;
$b=41;
echo "Before Swapping a:{$a} and b:{$b}<br>";
$a= $a+$b;
$b= $a-$b;
$a= $a-$b;
echo "After Swapping a:{$a} and b:{$b}<br><br>";

//4. 

$ab= 11;
$bc=12;
$cd= $ab & $bc;
$d= $ab | $bc; 
echo"The Op & value is : {$cd}<br>";
echo"The Op & value is : {$d}<br>";

if($ab>$bc){
    echo "{$ab} is greater";
}
else{
    echo "{$bc} is greater<br><br>";
}


//5. switch condition 
$day = "1";
switch ($day){
    case 1:{
        echo "Sunday";
        break;
    }
     case 2:
        {
        echo "Monday";
        break;
        }
     case 3:
        {
        echo "Tuesday";
        break;
        }
     case 4:
        {
        echo "Wednesday";
        break;
        }
     case 5:
        {
        echo "thursday";
        break;
        }
     case 6:
        {
        echo "Friday";
        break;
        }
     case 7:
        {
        echo "Saturday";
        break;
        }
    default:
    { 
        echo "Inavlid";
        break;
    }
}
echo "<br><br>";


//6.while loop natural number

$num =0;
while($num<10){
    $num = $num +1;
    echo "$num<br>";
}
echo "<br><br>";

$countries=array("Nepal","India", "China", "USA", "Sweden");

for($i=0; $i<count($countries); $i++)
{
   echo $countries[$i],"<br>";
}






?>