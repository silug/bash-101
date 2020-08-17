<!SLIDE>
# Shell scripts

A shell script is just a series of shell commands saved in a file.

Shell scripts can be run with
<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">bash <i>filename</i></span>.

Shell scripts can also be run directly as an executable
(<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">./<i>filename</i></span>)
by setting execute permissions on the script file
(<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">chmod +x <i>filename</i></span>)
**if** the first line of the script file is
<span style="font-family: monospace; border: 1px solid #666; background-color: #ededed;">#!/bin/bash</span>.

~~~SECTION:notes~~~

`#!` is **magic** (that's what it is called) that tells the executable interpreter that this is a script.  Anything after `#!` and before the first linefeed is run as the script interpreter.  `./filename` turns into `/bin/bash ./filename`.

It's also important to note that shell scripts are parsed as they are executed, so invalid commands or syntax may or may not abort the script (depending on the type of error).

~~~ENDSECTION~~~
