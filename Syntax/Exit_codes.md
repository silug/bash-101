<!SLIDE>
# Exit codes

Every program returns an *exit code* when it ends.

The exit code of the last program is stored in the special shell variable `$?`.

By convention, success is denoted with an exit code of `0`.  A non-zero exit code is considered a failure.

    @@@ Console
    $ /bin/true
    $ echo $?
    0
    $ /bin/false
    $ echo $?
    1

<!SLIDE>
# `exit`

You can exit and set the status of a script with the `exit` command.

    @@@ bash
    exit 0 # Success

    exit 1 # Failure

    exit 42 # Fail with an arbitrary value
