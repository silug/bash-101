<!SLIDE>
# `while`

Bash also supports loops using `while`.

    @@@ bash
    while command ; do
        # Loop until command returns
        # a non-true value.
    done

<!SLIDE>
# `until`

Alternatively, you can use `until` for loops.

    @@@ bash
    until command ; do
        # Loop until command returns
        # a true value.
    done

<!SLIDE>
# `break` and `continue`

In any `for`, `while`, or `until` loop, you can use `break` or `continue` to stop executing the code in the loop.

`break` will exit the loop.  `continue` will restart the loop (as though the block completed).

<!SLIDE>
# `break` and `continue`

Optionally, you can supply a number to `break` or `continue` to exit that many loops.

    @@@ Console
    $ for (( n=3 ; n<7 ; n++ )) ; do
    > for (( m=3 ; m<7 ; m++ )) ; do
    > echo n=$n m=$m
    > [[ $n*$m -eq 25 ]] && break 2
    > done
    > done
    n=3 m=3
    n=3 m=4
    n=3 m=5
    n=3 m=6
    n=4 m=3
    n=4 m=4
    n=4 m=5
    n=4 m=6
    n=5 m=3
    n=5 m=4
    n=5 m=5
