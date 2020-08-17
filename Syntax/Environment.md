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

<!SLIDE>
# Environment Variables

To assign an environment variable only for a specific command, preface the command with a variable assignment in the form
<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>name</i>=<i>value</i></span>.

    @@@ Console
    $ variable=value ruby -e 'puts ENV["variable"]'
    value
    $ echo $variable

    $
