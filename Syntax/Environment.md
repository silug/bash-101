<!SLIDE>
# Environment Variables

**Environment variables** are part of the running state of a process inherited from the parent.

In Bash, environment variables are referenced the same way as internal variables, but they are passed through to any programs run by the shell.  Internal variables can be turned in to environment variables with the `export` command.

    @@@ Console
    $ variable=value
    $ ruby -e 'puts ENV["variable"]'

    $ export variable
    $ ruby -e 'puts ENV["variable"]'
    value

~~~SECTION:notes~~~

By convention (due to ancient Unix rules), environment variable names are generally uppercase.

~~~ENDSECTION~~~
