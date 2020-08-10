<!SLIDE>
# `trap`

`trap` can be used to execute code when signals are received or in certain other circumstances.

<pre class="highlight"><code class="language-bash hljs"><span class="hljs-built_in">trap</span> <i>string</i> <i>sigspec</i></code></pre>

*`string`* above is a command that is executed `eval`-style any time that *`sigspec`* is triggered.

<!SLIDE>
# `trap`

*`sigspec`* can be a signal name or number (e.g. `INT`, `SIGINT`, or `2`) plus the following:

| Name            | Description                                    |
| ----            | -----------                                    |
| `EXIT` *or* `0` | On exit from the shell                         |
| `DEBUG`         | After every command                            |
| `RETURN`        | On exit from functions                         |
| `ERR`           | After every command with a non-zero exit value |

*`sigspec`* can also be supplied as a lower-case string.

<!SLIDE>
# `trap`

    @@@ Console
    $ trap 'echo Last command returned exit status $?.' ERR
    $ true
    $ false
    Last command returned exit status 1.
    $ bash -c 'exit 42'
    Last command returned exit status 42.

You can view the commands associated with a specific *`sigspec`* with `trap -p`.

    @@@ Console
    $ trap -p ERR
    trap -- 'echo Last command returned exit status $?.' ERR

You can reset a `trap` with omitting the command or specifying only `-` as the command.

    @@@ Console
    $ trap - ERR

