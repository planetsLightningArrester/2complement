# 2complement
Go back and forth from 2's complement like a charm in NodeJS

### Install
`npm i 2complement`

### Usage
```Javascript
decode = require('2complement');

console.log(decode.int2complement(32765).toString(2));
//1000000000000011

console.log(decode.complement2int(0b1000000000000011))
//-32765

console.log(decode.complement2int(decode.int2complement(-2000)));
//-2000

console.log("You rock");
//just a motivational quote. But you do <3

```

### Methods
+ ***decode.complement2int(_2complement[,nBits]):***
    + *_2complement:* Number to be converted to int
    + *nBits:* (optional) Number of bits. 16 is the default
+ ***decode.int2complement(number[,nBits]):***
    + *number:* Number to be converted to 2's complement
    + *nBits:* (optional) Number of bits. 16 is the default
