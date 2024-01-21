#namaste react 
----------------
-[x] this is new-react from stcrach

### this is testing of markdown


>this is a blockquote


`#include <stdio.h>`



```
 const fruits=[
 {Apple : 4, Orange : 7, Grape : 3},
  {Guava : 6, Lemon : 4, Banana : 8} ,
 {Orange : 5 ,Pineapple :7, Apple : 7}  
 ];

  const countFruits={};

 fruits.forEach((element)=>{
    for(each in element)
    {
       if(each in countFruits) 
       {
         countFruits[each]+=element[each];
      }
       else
      {
       countFruits[each]=element[each];
      }

   }
 });

 console.log(countFruits);


```