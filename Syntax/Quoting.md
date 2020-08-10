<!SLIDE>
# Quoting

Strings can be enclosed in double-quotes (`"`) to allow for variable interpolation and backslash (`\\`) escapes.

    @@@ Console
    $ echo "I am \"$USER\""
    I am "steve"

<!SLIDE>
# Quoting

Strings in single-quotes (`'`) are literal strings with no interpolation.

    @@@ Console
    $ echo 'net use \\\\hostname\IPC$'
    net use \\\\hostname\IPC$

<!SLIDE>
# Quoting

Bash also supports quoting strings with `$''`, which allows for ANSI C-style escapes.

    @@@ Console
    $ echo $'Cat\tnot-equal\tdog\n\U1F408\t\U2260\t\t\U1F415'
    Cat not-equal       dog
    🐈  ≠               🐕

<!SLIDE>
# Quoting

There is also a poorly-documented quoting style `$""` which handles locale translation.
