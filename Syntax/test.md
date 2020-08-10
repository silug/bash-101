<!SLIDE>
# `test`

The `test` command can be used for string and numeric comparisons, file property checks, and a number of other conditions.

    @@@ Console
    $ a='a string'
    $ test "$a" = 'a string'
    $ echo $?
    0
    $ test "$a" = 'another string'
    $ echo $?
    1

<!SLIDE>
# `test` string comparisons

| Operator | Description |
| -------- | ----------- |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>string1</i>&nbsp;=&nbsp;<i>string2</i></span>    | Strings are equal (POSIX-compatible)            |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>string1</i>&nbsp;==&nbsp;<i>string2</i></span>   | Strings are equal                               |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>string1</i>&nbsp;!=&nbsp;<i>string2</i></span>   | Strings are not equal                           |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>string1</i>&nbsp;&lt;&nbsp;<i>string2</i></span> | *`string1`* is before *`string2`* in sort order |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>string1</i>&nbsp;&gt;&nbsp;<i>string2</i></span> | *`string1`* is after *`string2`* in sort order  |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-z&nbsp;<i>string</i></span>                        | *`string`* is empty (zero-length)               |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-n&nbsp;<i>string</i></span>                        | *`string`* is not empty (non-zero length)       |

<!SLIDE>
# `test` numeric comparisons

| Operator | Description |
| -------- | ----------- |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>num1</i>&nbsp;-eq&nbsp;<i>num2</i></span> | Numbers are equal                             |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>num1</i>&nbsp;-ne&nbsp;<i>num2</i></span> | Numbers are not equal                         |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>num1</i>&nbsp;-lt&nbsp;<i>num2</i></span> | *`num1`* is less than *`num2`*                |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>num1</i>&nbsp;-le&nbsp;<i>num2</i></span> | *`num1`* is less than or equal to *`num2`*    |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>num1</i>&nbsp;-gt&nbsp;<i>num2</i></span> | *`num1`* is greater than *`num2`*             |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>num1</i>&nbsp;-ge&nbsp;<i>num2</i></span> | *`num1`* is greater than or equal to *`num2`* |

<!SLIDE>
# `test` file properties

| Operator | Description |
| -------- | ----------- |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-e&nbsp;<i>file</i></span> | *`file`* exists                                 |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-f&nbsp;<i>file</i></span> | *`file`* exists and is a regular file           |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-d&nbsp;<i>file</i></span> | *`file`* exists and is a directory              |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-r&nbsp;<i>file</i></span> | *`file`* exists and is readable                 |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-w&nbsp;<i>file</i></span> | *`file`* exists and is writable                 |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-x&nbsp;<i>file</i></span> | *`file`* exists and is executable               |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-b&nbsp;<i>file</i></span> | *`file`* exists and is a block special file     |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-c&nbsp;<i>file</i></span> | *`file`* exists and is a character special file |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-u&nbsp;<i>file</i></span> | *`file`* exists and is set-user-id              |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-g&nbsp;<i>file</i></span> | *`file`* exists and is set-group-id             |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-L&nbsp;<i>file</i></span> | *`file`* exists and is a symbolic link          |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-p&nbsp;<i>file</i></span> | *`file`* exists and is a named pipe (FIFO)      |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-S&nbsp;<i>file</i></span> | *`file`* exists and is a socket                 |

<!SLIDE>
# `test` file properties

| Operator | Description |
| -------- | ----------- |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-s&nbsp;<i>file</i></span> | *`file`* exists and has a size greater than zero             |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-N&nbsp;<i>file</i></span> | *`file`* exists and has been modified since it was last read |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-O&nbsp;<i>file</i></span> | *`file`* exists and is owned by the effective user id        |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-G&nbsp;<i>file</i></span> | *`file`* exists and is owned by the effective group id       |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-t&nbsp;<i>fd</i></span>   | File descriptor *`fd`* is open and refers to a terminal      |

<!SLIDE>
# `test` file comparisons

| Operator | Description |
| -------- | ----------- |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>file1</i>&nbsp;&#8209;ef&nbsp;<i>file2</i></span> | *`file1`* and *`file2`* refer to the same device and inode numbers                                                |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>file1</i>&nbsp;&#8209;nt&nbsp;<i>file2</i></span> | *`file1`* is newer (according to modification date) than *`file2`*, or if *`file1`* exists and *`file2`* does not |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>file1</i>&nbsp;&#8209;ot&nbsp;<i>file2</i></span> | *`file1`* is older than *`file2`*, or if *`file2`* exists and *`file1`* does not                                  |

<!SLIDE>
# `test` shell properties

| Operator | Description |
| -------- | ----------- |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-o&nbsp;<i>option</i></span> | Shell option *`optname`* is enabled  |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-v&nbsp;<i>var</i></span>    | Variable *`var`* is set              |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">-R&nbsp;<i>var</i></span>    | Variable *`var`* is a name reference |

<!SLIDE>
# `test` boolean operators

| Operator | Description |
| -------- | ----------- |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>expression1</i>&nbsp;&#8209;a&nbsp;<i>expression2</i></span> | *`expression1`* **and** *`expression2`* |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>expression1</i>&nbsp;&#8209;o&nbsp;<i>expression2</i></span> | *`expression1`* **or** *`expression2`*  |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">!&nbsp;<i>expression</i></span>                    | **not** *`expression`*                  |

~~~SECTION:notes~~~

This is not a complete list.

~~~ENDSECTION~~~

<!SLIDE>
# `[`

`[` is an alias for the `test` command, but when `test` is called as `[`, the final parameter **must** be `]`.

    @@@ Console
    $ test -x .
    $ echo $?
    0
    $ [ -x . ]
    $ echo $?
    0
    $ [ -x .
    bash: [: missing `]'

~~~SECTION:notes~~~

There are `/bin/test` and `/bin/[` executables on Linux systems, but the `test` and `[` commands (when run without an absolute path) are shell built-ins.

~~~ENDSECTION~~~

<!SLIDE>
# `[[ ]]`

<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">[[ <i>expression</i> ]]</span> can be used with all of the same values for *`expression`* that can be used for `test` with the following additions:

| Operator | Description |
| -------- | ----------- |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">(&nbsp;<i>expression</i>&nbsp;)</span>   | Evaluate *`expression`* as a group                             |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>string</i>&nbsp;==&nbsp;<i>pattern</i></span>   | *`string`* matches *`pattern`*                               |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>string</i>&nbsp;!=&nbsp;<i>pattern</i></span>   | *`string`* does not match *`pattern`*                           |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>string</i>&nbsp;=~&nbsp;<i>regex</i></span>   | *`string`* matches *`regex`*                               |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>expression1</i>&nbsp;&amp;&amp;&nbsp;<i>expression2</i></span> | *`expression1`* **and** *`expression2`* |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>expression1</i>&nbsp;&#124;&#124;&nbsp;<i>expression2</i></span> | *`expression1`* **or** *`expression2`*  |

In addition, arithmetic expressions are automatically evaluated.
