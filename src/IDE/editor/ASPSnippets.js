// eslint-disable-next-line
const snippet = '# Heads\n\
snippet fact\n\
	${1:fact}.\n\
snippet f1\n\
	${1:fact}(${2:X}).\n\
snippet hb1\n\
	head(${1:X}) :- body(${1}).\n\
snippet hb2\n\
	head(${1:X},${2:Y}) :- body(${1},${2}).\n\
snippet hb3\n\
	head(${1:X},${2:Y},${3:Z}) :- body(${1},${2},${3}).\n\
#               Disjunctions\n\
snippet dj0\n\
	${1:a} | ${2:b}\n\
snippet dj1\n\
	${1:a}(${2:X}) | ${3:b}(${4:X})\n\
snippet dj2\n\
	${1:a}(${2:X}, ${3:Y}) | ${4:b}(${5:X},${6:Y})\n\
#               Aggregatates\n\
snippet max\n\
	#max{${1:A}:${2:atom}}\n\
';

export default snippet;