grammar ASPCore2_0c;
inizio: program | <EOF>;
program: statements
    | query
    | statements query;
statements : statement statements?;
query : classical_literal QUERY_MARK;
statement : CONS  body? DOT
          | head  (CONS  body?)? DOT
          | WCONS  body? DOT SQUARE_OPEN weight_at_level SQUARE_CLOSE
	      | WCONS body? SQUARE_OPEN weight_at_level SQUARE_CLOSE DOT {this.notifyErrorListeners("Syntax error: DOT must be before [weight@level]");}
	      | optimize DOT
| testDirective;

statementsForTest: statementForTest statementsForTest?;

entireBlockTest: startBlock statementsForTest endBlock;

startBlock: AT 'start-block' PAREN_OPEN 'name' EQUAL STRING PAREN_CLOSE;

endBlock: AT 'end-block';

statementForTest:
	CONS body? DOT
	| head (CONS body?)? DOT
	| WCONS body? DOT SQUARE_OPEN weight_at_level SQUARE_CLOSE
	| WCONS body? SQUARE_OPEN weight_at_level SQUARE_CLOSE DOT {this.notifyErrorListeners("Syntax error: DOT must be before [weight@level]");}
	| optimize DOT;


testDirective: DIRECTIVE_START annotation DIRECTIVE_END;
annotation: AT (ruleTest | blockTest | testTest);
ruleTest: 'rule' PAREN_OPEN 'name' EQUAL STRING (COMMA 'block' EQUAL STRING)? PAREN_CLOSE;
blockTest: 'block' PAREN_OPEN 'name' EQUAL STRING (COMMA 'rules' EQUAL CURLY_OPEN (STRING COMMA?)+ CURLY_CLOSE)? PAREN_CLOSE;
testTest: 'test' PAREN_OPEN 'name' EQUAL STRING COMMA 'scope' EQUAL CURLY_OPEN (STRING COMMA?)+ CURLY_CLOSE (COMMA programFilesTest)? (COMMA inputTest)? (COMMA inputFilesTest)? COMMA assertTest PAREN_CLOSE;
programFilesTest: 'programFiles' EQUAL CURLY_OPEN (STRING COMMA?)+ CURLY_CLOSE;
inputTest: 'input' EQUAL SINGLE_QUOTE statementsForTest SINGLE_QUOTE;
inputFilesTest: 'inputFiles' EQUAL CURLY_OPEN (STRING COMMA?)+ CURLY_CLOSE;

assertTest: 'assert' EQUAL CURLY_OPEN assertions CURLY_CLOSE;
assertions: assertion (COMMA assertions)?;
assertion: AT ('noAnswerSet' | trueIn | constraintIn | bestModelCost);
trueIn: (trueInAll | trueInAtLeast | trueInAtMost | trueInExactly);
trueInAll: 'trueInAll' PAREN_OPEN 'atoms' EQUAL SINGLE_QUOTE (classical_literal DOT)+ SINGLE_QUOTE PAREN_CLOSE;
trueInAtLeast: 'trueInAtLeast' PAREN_OPEN 'number' EQUAL NUMBER COMMA 'atoms' EQUAL SINGLE_QUOTE (classical_literal DOT)+ SINGLE_QUOTE PAREN_CLOSE;
trueInAtMost:'trueInAtMost' PAREN_OPEN 'number' EQUAL NUMBER COMMA 'atoms' EQUAL SINGLE_QUOTE (classical_literal DOT)+ SINGLE_QUOTE PAREN_CLOSE;
trueInExactly:'trueInExactly' PAREN_OPEN 'number' EQUAL NUMBER COMMA 'atoms' EQUAL SINGLE_QUOTE (classical_literal DOT)+ SINGLE_QUOTE PAREN_CLOSE;
constraintIn: (constraintForAll
		| constraintInAtLeast
		| constraintInAtMost
		| constraintInExactly);
constraintEqual: 'constraint' EQUAL SINGLE_QUOTE CONS body? DOT SINGLE_QUOTE;
constraintForAll: 'constraintForAll' PAREN_OPEN constraintEqual PAREN_CLOSE;
constraintInAtLeast:
	'constraintInAtLeast' PAREN_OPEN 'number' EQUAL NUMBER COMMA constraintEqual PAREN_CLOSE;
constraintInAtMost:
	'constraintInAtMost' PAREN_OPEN 'number' EQUAL NUMBER COMMA constraintEqual PAREN_CLOSE;
constraintInExactly:
	'constraintInExactly' PAREN_OPEN 'number' EQUAL NUMBER COMMA constraintEqual PAREN_CLOSE;

bestModelCost: 'bestModelCost' PAREN_OPEN 'cost' EQUAL NUMBER COMMA 'level' EQUAL NUMBER PAREN_CLOSE;

head : disjunction | choice;

body : (naf_literal |  NAF? aggregate)  (COMMA body)?;
disjunction :  classical_literal (OR disjunction)?;
choice :  (term binop)? CURLY_OPEN  choice_elements? CURLY_CLOSE  (binop term)?;
choice_elements : choice_element (SEMICOLON choice_elements)?;
choice_element : classical_literal  (COLON  naf_literals?)?;
aggregate :  (term binop)? aggregate_function CURLY_OPEN  aggregate_elements? CURLY_CLOSE  (binop term)?;
aggregate_elements :  aggregate_element (SEMICOLON aggregate_elements)?;
aggregate_element :  terms (COLON  naf_literals?)?
	| COLON naf_literals? {this.notifyErrorListeners("There must be at least one element to aggregate");}
	;
aggregate_function : AGGREGATE_COUNT | AGGREGATE_MAX | AGGREGATE_MIN | AGGREGATE_SUM;
optimize : optimize_function CURLY_OPEN  optimize_elements? CURLY_CLOSE;
optimize_elements : optimize_element (SEMICOLON optimize_elements)?;
optimize_element : weight_at_level  (COLON  naf_literals?)?;
optimize_function : MAXIMIZE | MINIMIZE;
weight_at_level : term  (AT term)?  (COMMA terms)?;
naf_literals :  naf_literal (COMMA naf_literals)?;
naf_literal :  NAF? classical_literal | builtin_atom;
classical_literal :  MINUS? ID  (PAREN_OPEN  terms? PAREN_CLOSE)?;
builtin_atom : term binop term;
binop : EQUAL | UNEQUAL | LESS | GREATER | LESS_OR_EQ | GREATER_OR_EQ;
terms :  term (COMMA terms)?
	| term COMMA {this.notifyErrorListeners("Missing term in list of terms");}
    | COMMA term {this.notifyErrorListeners("Missing term in list of terms");}
;
term : ID  (PAREN_OPEN  terms? PAREN_CLOSE)?
     | NUMBER
     | STRING
     | VARIABLE
     | ANONYMOUS_VARIABLE
     | PAREN_OPEN term PAREN_CLOSE
     | MINUS term
     | term arithop term;
arithop : PLUS
        | MINUS
        | TIMES
        | DIV;

SINGLE_QUOTE: '\'';
NAF: 'not';
DIRECTIVE_START: '%**';
DIRECTIVE_END: '**%';
ID: [a-z][A-Za-z0-9_]*;
VARIABLE: [A-Z]([A-Za-z0-9_]*);
STRING: '"' .*? '"';
NUMBER: '0' | [1-9][0-9]*;
ANONYMOUS_VARIABLE: '_';
DOT: '.';
COMMA: ',';
QUERY_MARK: '?';
COLON: ':';
SEMICOLON: ';';
OR: '|';
CONS: ':-';
WCONS: ':~';
PLUS: '+';
MINUS: '-';
TIMES: '*';
DIV: '/';
AT: '@';
PAREN_OPEN: '(';
PAREN_CLOSE: ')';
SQUARE_OPEN: '[';
SQUARE_CLOSE: ']';
CURLY_OPEN: '{';
CURLY_CLOSE: '}';
EQUAL: '=';
UNEQUAL: '<>' | '!=';
LESS: '<';
GREATER: '>';
LESS_OR_EQ: '<=';
GREATER_OR_EQ: '>=';
AGGREGATE_COUNT: '#count';
AGGREGATE_MAX: '#max';
AGGREGATE_MIN: '#min';
AGGREGATE_SUM: '#sum';
MINIMIZE: '#minimi' [zs] 'e';
MAXIMIZE: '#maximi' [zs] 'e';
HASH: '#';
BLANK: [ \t\n\r]+ -> skip;
MULTI_LINE_COMMENT:
	'%*' ~[*].*?~[*] '*%' ->skip;
LINE_COMMENT:
	'%' ~[*\r\n]* -> skip;