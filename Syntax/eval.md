<!SLIDE>
# `eval`

`eval` can be used to evaluate strings as Bash code.

    @@@ Console
    $ echo $BASH_VERSION
    5.0.17(1)-release
    $ commands=('echo' '$BASH_VERSION')
    $ eval "${commands[@]}"
    5.0.17(1)-release

As in any language, `eval` should be used extremely carefully since untrusted user input could execute unwanted code.
