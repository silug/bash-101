<!SLIDE>
    @@@ bash
    #!/bin/bash

    status () {
        echo -e 'el1\nhpa 0' | tput -S

        echo -n $1
    }

    boo () {
        status $'\U1F641'
    }

    trap boo EXIT

    states=( $'\U1f600' $'\U1f923' $'\U1f92a' $'\U1f643' )

    n=0

    while : ; do
        status ${states[ $[ $n % ${#states[@]} ] ]}

        (( n++ ))

        sleep 1
    done

<!SLIDE>
![](/_images/spinner.gif)
