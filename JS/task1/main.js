"1" + 2 + 0; // ="120"  ; numbers 2 and 0 convert to string  
"1" - 1 + 2; // =2  ; string "1" converts to number
true + false; // =1  ; true converts to number 1, false converts to number 0
10 / "5"; // =2  ; string "5" converts to umber
"2" * "3"; // =6  ; strings "2" and "3" convert to numbers
4 + 5 + "px"; // ="9px"  ; number 9 converts to string
"$" + 4 + 5; // "$45"  ; numbers 4 and 5 convert to string
"42" - 2; // =40  ; string "42" converts to number
"4px" - 2; // NaN  ; "4px" converts to NaN
7 / 0; // =Infinity
"  -9\n" + 5; //="  -9\n5"  ; number 5 converts to string
"  -9\n" - 5; // =14  ; "  -9\n" converts to number
5 && 2; // =2  ; 5-true, 2-true -- last true  - 2
2 && 5; // =5  ; 2-trye, 5-true -- last true - 5
5 || 0; // =5  ; 5 true -- first true - 5
0 || 5; // =5  ; 0-false, 5-true -- first true - 5
null + 1; // =1  ; null converts to number 0
undefined + 1; // =NaN; undefined converts to NaN
null == "\n0\n"; // false  ; only null == undefined
+null == +"\n0\n"; // true; +operator converts null to number 0 and string "\n0\n" to number 0
