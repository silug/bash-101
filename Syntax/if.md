<!SLIDE>
# `if`

Bash supports conditional execution of code with `if`.

    @@@ bash
    if command ; then
        # Block to execute if "command"
        # above exits successfully ($? == 0)
    fi

Note that `if` blocks open with `then` and close with `fi`.

<!SLIDE>
# `if`

Bash also supports `elif` ("else if") and `else` in `if` blocks.

    @@@ bash
    if command1 ; then
        # Block to execute if "command1"
        # exits successfully
    elif command2 ; then
        # Block to execute if "command2"
        # exits successfully
    else
        # Block to execute if
        # none of the if/elif
        # conditions succeed
    fi

A few things to note here:

* `elif` and `else` are always optional.
* You can have any number of `elif` conditions.
* You can only have one `else`.
* `elif` requires a matching `then`, but `else` does not.
