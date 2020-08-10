<!SLIDE>
# Arrays

Bash supports one-dimensional arrays.

There are many ways to assign values to variables.  The following are equivalent:

    @@@ Console
    $ array=( value1 value2 )

.break

    @@@ Console
    $ array[0]=value1
    $ array+=( value2 )

.break

    @@@ Console
    $ array=( [1]=value2 [0]=value1 )

<!SLIDE>
# Arrays

Values in an array are referenced in the form
<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">${<i>name</i>[<i>index</i>]}</span>.

The array <i>`index`</i> is a number starting at `0` for the first element.  Negative values (beginning with `-1`) can be used to reference elements at the end of the array.  (For example, the next-to-last element can be referenced as `-2`.)

    @@@ Console
    $ echo "${array[-2]}"
    value1

`*` or `@` can be used as <i>`index`</i> to reference the entire array.

    @@@ Console
    $ echo "${array[@]}"
    value1 value2

<!SLIDE>
# Arrays

To get the number of elements in an array, use
<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">${#<i>name</i>[@]}</span>.

    @@@ Console
    $ echo "${#array[@]}"
    2

You can also get the list of indexes of an array with
<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">${!<i>name</i>[@]}</span>.

    @@@ Console
    $ echo "${!array[@]}"
    0 1
