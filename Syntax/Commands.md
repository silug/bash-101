<!SLIDE>
# Running commands

At its simplest, `bash` can run commands (either internal keywords or external programs).

    @@@ Console
    $ /bin/uname
    Linux

Spaces in command lines are used to pass arguments.

    @@@ Console
    $ /bin/uname -s -m
    Linux x86_64

In the above example, the program `/bin/uname` is run with the arguments `-s` and `-m`.
