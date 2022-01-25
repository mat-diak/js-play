```
➜  playing_with_js git:(main) ✗ node
Welcome to Node.js v17.4.0.
Type ".help" for more information.
> let array = [1,2,3]
undefined
> array
[ 1, 2, 3 ]
> array.push(4)
4
> array
[ 1, 2, 3, 4 ]
> array.concat(5)
[ 1, 2, 3, 4, 5 ]
> array
[ 1, 2, 3, 4 ]
> let new_array = array.concat(5)
undefined
> new_array
[ 1, 2, 3, 4, 5 ]
> new_array.length
5
> new_array.splice(new_array.length, 0, 6)
[]
> new_array
[ 1, 2, 3, 4, 5, 6 ]
> new_array.splice(new_array.length, 2, 6)
[]
> new_array
[
  1, 2, 3, 4,
  5, 6, 6
]
> new_array.splice(3, 2, 6)
[ 4, 5 ]
> new_array
[ 1, 2, 3, 6, 6, 6 ]
> empty_array = []
[]
> empty_array[array.length] = 1
1
> empty_array
[ <4 empty items>, 1 ]
> empty_array[0]
undefined
> empty_array[1]
undefined
> empty_array[2]
undefined
> empty_array[4]
1
> 7
7
> const fun = (a, b) => a + b;
undefined
> fun(2,3)
5
> const fun2 = (a, b) => {
... a + b;
... };
undefined
> fun2(2,2)
undefined
> const fun3 = (a, b) => {
... return a + b;
... };
undefined
> fun3(5,4)
9
> const two = 2
undefined
> two === 2
true
> array
[ 1, 2, 3, 4 ]
> new_array
[ 1, 2, 3, 6, 6, 6 ]
> let extra_array = [...array, ...new_array]
undefined
> extra_array
[
  1, 2, 3, 4, 1,
  2, 3, 6, 6, 6
]
> 
```