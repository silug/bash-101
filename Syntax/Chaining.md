<!SLIDE>
# Chaining commands with `;`

In our examples so far, all commands have been terminated with a linefeed character (or the `Enter` key on the keyboard).

The semicolon (`;`) can be used as a command separator as well.

    @@@ Console
    $ echo 1 ; echo 2
    1
    2

<!SLIDE>
# Breaking long lines with `\\`

Conversely, if you have a long line that you want to break across multiple lines (usually for readability), end the line with `\\`.

    @@@ Console
    $ echo This is a very long line of text \
    > broken across two lines of input
    This is a very long line of text broken across two lines of input

<!SLIDE>
# `&&`

`&&` can be used to separate commands.  The second command will only run if the first command completes successfully.

    @@@ Console
    $ true && echo 'True!'
    True!
    $ false && echo 'True!'
    $ 

<!SLIDE>
# `||`

`||` can also be used to separate commands.  The second command will only run if the first command exits with a failure status code.

    @@@ Console
    $ true || echo 'False!'
    $ false || echo 'False!'
    False!
