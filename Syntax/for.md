<!SLIDE>
# `for`

Bash supports loops using `for`.

    @@@ bash
    for variable in list ; do
        # Block to execute with each
        # element in list assigned to
        # $variable.
    done

<!SLIDE>
# `for`

If *`list`* is omitted, `"$@"` (the arguments to the script or function) is assumed.

    @@@ bash
    for variable do
        # Block to execute with each
        # element in "$@" assigned to
        # $variable.
    done

<!SLIDE>
# `for`

The final form of `for` evaluates arithmetic expressions.

    @@@ bash
    for (( n=0 ; n<10 ; n++ )) ; do
        # Block to execute with each
        # element in "$@" assigned to
        # $variable.
    done
