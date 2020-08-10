<!SLIDE>
# `PATH`

The `PATH` environment variable is a `:`-separated list of directories that Bash will search when looking for a command.

    @@@ Console
    $ echo $PATH
    /bin:/usr/bin:/usr/local/bin

Bash will search **only** for commands run with no path information.

You can find the path to a command with the `which` command.

    @@@ Console
    $ which which
    /usr/bin/which
