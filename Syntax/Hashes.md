<!SLIDE>
# Associative Arrays

Bash also supports **Associative Arrays** (AKA Hashes in some other languages), which are arrays that use strings as subscripts (keys) instead of integers.

Associative arrays must be created with the `declare -A` command.

    @@@ Console
    $ declare -A hash
    $ hash=( [key1]=value1 [key2]=value2 )
    $ echo "${!hash[@]}"
    key2 key1
    $ echo "${hash[@]}"
    value2 value1
    $ echo "${hash[key1]}"
    value1
