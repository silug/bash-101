<!SLIDE>
# Variables

Variables in Bash are assigned with the syntax
<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;"><i>name</i>=<i>value</i></span>.

Values are then referenced with
<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">$<i>name</i></span> or
<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">${<i>name</i>}</span>.

    @@@ Console
    $ state=testing
    $ echo I am $state
    I am testing
