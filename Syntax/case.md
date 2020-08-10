<!SLIDE>
# `case`

`case` can be used to conditionally execute code based on pattern matching.

    @@@ bash
    case string_to_match in
        pattern1)
            # Block to execute if pattern1
            # matches string_to_match
            ;;
        pattern2|pattern3)
            # Block to execute if
            # pattern2 *or* pattern3
            # matches string_to_match
            ;;
        *)
            # Block to execute if none of
            # the above patterns match
            ;;
    esac

<!SLIDE>
# Pattern matching

The pattern matching used in `case` expressions are often referred to as *wildcards* or *globs*.

| Pattern | Matches |
| ------- | ------- |
| `*`     | Any string |
| `?`     | Any single character |
| `[abc]` | Any of the characters `a`, `b`, or `c` |
| `[a-c]` | Any of the characters `a`, `b`, or `c` |
| `[^abc]` | Any character *except* `a`, `b`, or `c` |
| `[!abc]` | Any character *except* `a`, `b`, or `c` |
| `[[:alnum:]]` | Any character in the class `[:alnum:]` |

~~~SECTION:notes~~~

There are several additional pattern matching operators available when the `extglob` shell option is enabled (with `shopt -s extglob`).

~~~ENDSECTION~~~
