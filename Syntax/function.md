<!SLIDE>
# Grouping Commands

Collections of commands that are invoked as a single command can be created with the following syntax:

<pre class="highlight"><code class="language-bash hljs">{ <i>commands</i> ; }</code></pre>

<!SLIDE>
# `function`

Functions in Bash are named collections of commands that are invoked as a single command.

There are two different (but equivalent) ways to create a function:

<pre class="highlight"><code class="language-bash hljs"><span class="hljs-built_in">function</span> <i>name</i> { <i>commands</i> ; }</code></pre>

*or*

<pre class="highlight"><code class="language-bash hljs"><i>name</i> () { <i>commands</i> ; }</code></pre>

Arguments to a function are passed in `$1`, `$2`, and so on, and also in the array `$@`.

~~~SECTION:notes~~~

Technically any compound command block can be used as the body of the function, not just commands in curly braces.

~~~ENDSECTION~~~
