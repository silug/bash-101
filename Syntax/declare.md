<!SLIDE>
# `declare`

`declare` can be used to view or change the type or properties of variables.  For example, you can define a variable as an integer with `declare -i`.

    @@@ Console
    $ string="1"
    $ string+="2"
    $ echo $string
    12
    $ declare -i int
    $ int="1"
    $ int+="2"
    $ echo $int
    3

*Note that `typeset` is equivalent to `declare`.*

<!SLIDE>
# Strong(er) typing with `declare`

| Option | Data type              |
| ------ | ---------              |
| -a     | Array                  |
| -A     | Associative array      |
| -i     | Integer                |
| -n     | Nameref                |
| -r     | Read-only              |
| -l     | Force to lower-case    |
| -u     | Force to upper-case    |
| -x     | Equivalent to `export` |

<!SLIDE>
# Viewing variable attributes with `declare`

`declare -p` will print the type, properties, and value of a variable (or all variables with no additional arguments).

    @@@ Console
    $ declare -p BASH_VERSINFO
    declare -ar BASH_VERSINFO=([0]="5" [1]="0" [2]="17" [3]="1" [4]="release" [5]="x86_64-redhat-linux-gnu")
