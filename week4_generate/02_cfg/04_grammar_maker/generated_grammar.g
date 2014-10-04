#  This grammar file is based on Daniel Howe's Haiku grammar
#  Which is based on a grammar by G.B. Kaminaga
#  line-breaks are noted by '%' sign

<start> -> <5-line> % <7-line> % <5-line>
<5-line> ->  <1> <4>  |  <1> <3> <1>  |  <1> <1> <3>  |  <1> <2> <2>  |  <1> <2> <1> <1>  |  <1> <1> <2> <1>  |  <1> <1> <1> <2>  |  <1> <1> <1> <1> <1>  |  <2> <3>  |  <2> <2> <1>  |  <2> <1> <2>  |  <2> <1> <1> <1>  |  <3> <2>  |  <3> <1> <1>  |  <4> <1>  |  <5>
<7-line> -><1> <1> <5-line>  |  <2> <5-line>  |  <5-line> <1> <1>  |  <5-line> <2> 
<1> ->this | is | some | 
<2> ->sample | 
<3> ->
<4> ->
<5> ->