<!SLIDE>
# Math

Bash supports various math operations.

Variables can be used in arithmetic expressions either by using `declare -i` or by using `let` or `(( ))`.

    @@@ Console
    $ (( n = 2 + 2 )) ; echo $n
    4

.break

    @@@ Console
    $ let 'n = 2 + 2' ; echo $n
    4

<!SLIDE>
# Math

Bash also supports inline arithmetic expansion.

    @@@ Console
    $ echo $(( 2 + 2 ))
    4

.break

    @@@ Console
    $ echo $[ 2 + 2 ]
    4

<!SLIDE>
# Operators

| Operator | Description         |
| -------- | -----------         |
| `+`      | Addition            |
| `-`      | Subtraction         |
| `*`      | Multiplication      |
| `/`      | Division            |
| `%`      | Modulo (remainder)  |
| `**`     | Exponentiation      |
| `<<`     | Left bitwise shift  |
| `>>`     | Right bitwise shift |
| `&`      | Bitwise **AND**     |
| `^`      | Bitwise **XOR**     |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">&#124;</span> | Bitwise **OR**      |
| `~`      | Bitwise negation    |
| `!`      | Logical negation    |
| `&&`     | Logical **AND**     |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">&#124;&#124;</span> | Logical **OR**      |

<!SLIDE>
# Assignment Operators

| Operator | Description        |
| -------- | -----------        |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;"><i>var</i>++</span> | Post-increment |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;"><i>var</i>--</span> | Post-decrement |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">++<i>var</i></span> | Pre-increment  |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">--<i>var</i></span> | Pre-decrement  |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">=</span> | Assignment  |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">&#42;=</span> | Assignment with multiplication |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">/=</span> | Assignment with division |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">%=</span> | Assignment with modulo |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">+=</span> | Assignment with addition |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">-=</span> | Assignment with subtraction |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">&lt;&lt;=</span> | Assignment with left bitwise shift |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">&gt;&gt;=</span> | Assignment with right bitwise shift |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">&amp;=</span> | Assignment with bitwise **AND** |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">^=</span> | Assignment with bitwise **XOR** |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;">&#124;=</span> | Assignment with bitwise **OR** |

<!SLIDE>
# Comparison Operators, Etc.

| Operator | Description           |
| -------- | -----------           |
| `==`     | Equals                |
| `!=`     | Not equals            |
| `<`      | Less than             |
| `>`      | Greater than          |
| `<=`     | Less than or equal    |
| `>=`     | Greater than or equal |
| <span style="font-family: monospace; border: 1px solid #666; background-color: #ededed; font-size: 1.1em;"><i>expression</i> ? <i>true_expression</i> : <i>false_expression</i></span> | Conditional (ternary) operator |
| `,`      | Compound expression   |
