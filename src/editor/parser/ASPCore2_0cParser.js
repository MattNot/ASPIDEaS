// Generated from .\ASPCore2_0c.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ASPCore2_0cListener = require('./ASPCore2_0cListener').ASPCore2_0cListener;
var grammarFileName = "ASPCore2_0c.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
	"\u0003*\u0113\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
	"\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
	"\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
	"\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
	"\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
	"\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
	"\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
	"\u001b\u0004\u001c\t\u001c\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
	"\u0002\u0003\u0002\u0003\u0002\u0005\u0002?\n\u0002\u0003\u0003\u0003",
	"\u0003\u0005\u0003C\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
	"\u0005\u0003\u0005\u0005\u0005J\n\u0005\u0003\u0005\u0003\u0005\u0003",
	"\u0005\u0003\u0005\u0005\u0005P\n\u0005\u0005\u0005R\n\u0005\u0003\u0005",
	"\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005X\n\u0005\u0003\u0005",
	"\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
	"\u0003\u0005\u0005\u0005b\n\u0005\u0003\u0006\u0003\u0006\u0005\u0006",
	"f\n\u0006\u0003\u0007\u0003\u0007\u0005\u0007j\n\u0007\u0003\u0007\u0005",
	"\u0007m\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007q\n\u0007\u0003\b",
	"\u0003\b\u0003\b\u0005\bv\n\b\u0003\t\u0003\t\u0003\t\u0005\t{\n\t\u0003",
	"\t\u0003\t\u0005\t\u007f\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t",
	"\u0085\n\t\u0003\n\u0003\n\u0003\n\u0005\n\u008a\n\n\u0003\u000b\u0003",
	"\u000b\u0003\u000b\u0005\u000b\u008f\n\u000b\u0005\u000b\u0091\n\u000b",
	"\u0003\f\u0003\f\u0003\f\u0005\f\u0096\n\f\u0003\f\u0003\f\u0003\f\u0005",
	"\f\u009b\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00a1\n\f\u0003",
	"\r\u0003\r\u0003\r\u0005\r\u00a6\n\r\u0003\u000e\u0005\u000e\u00a9\n",
	"\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00ad\n\u000e\u0005\u000e",
	"\u00af\n\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
	"\u0010\u0005\u0010\u00b6\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
	"\u0003\u0011\u0003\u0011\u0005\u0011\u00bd\n\u0011\u0003\u0012\u0003",
	"\u0012\u0003\u0012\u0005\u0012\u00c2\n\u0012\u0005\u0012\u00c4\n\u0012",
	"\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
	"\u00cb\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00cf\n\u0014\u0003",
	"\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00d4\n\u0015\u0003\u0016",
	"\u0005\u0016\u00d7\n\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00db",
	"\n\u0016\u0003\u0017\u0005\u0017\u00de\n\u0017\u0003\u0017\u0003\u0017",
	"\u0003\u0017\u0005\u0017\u00e3\n\u0017\u0003\u0017\u0005\u0017\u00e6",
	"\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
	"\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00f1\n",
	"\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u00f7",
	"\n\u001b\u0003\u001b\u0005\u001b\u00fa\n\u001b\u0003\u001b\u0003\u001b",
	"\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
	"\u0003\u001b\u0003\u001b\u0005\u001b\u0106\n\u001b\u0003\u001b\u0003",
	"\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u010c\n\u001b\f\u001b\u000e",
	"\u001b\u010f\u000b\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0002\u0003",
	"4\u001d\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
	"\u001a\u001c\u001e \"$&(*,.0246\u0002\u0006\u0003\u0002\"%\u0003\u0002",
	"&\'\u0003\u0002\u001c!\u0003\u0002\u0011\u0014\u0002\u012a\u0002>\u0003",
	"\u0002\u0002\u0002\u0004@\u0003\u0002\u0002\u0002\u0006D\u0003\u0002",
	"\u0002\u0002\ba\u0003\u0002\u0002\u0002\ne\u0003\u0002\u0002\u0002\f",
	"l\u0003\u0002\u0002\u0002\u000er\u0003\u0002\u0002\u0002\u0010z\u0003",
	"\u0002\u0002\u0002\u0012\u0086\u0003\u0002\u0002\u0002\u0014\u008b\u0003",
	"\u0002\u0002\u0002\u0016\u0095\u0003\u0002\u0002\u0002\u0018\u00a2\u0003",
	"\u0002\u0002\u0002\u001a\u00a8\u0003\u0002\u0002\u0002\u001c\u00b0\u0003",
	"\u0002\u0002\u0002\u001e\u00b2\u0003\u0002\u0002\u0002 \u00b9\u0003",
	"\u0002\u0002\u0002\"\u00be\u0003\u0002\u0002\u0002$\u00c5\u0003\u0002",
	"\u0002\u0002&\u00c7\u0003\u0002\u0002\u0002(\u00d0\u0003\u0002\u0002",
	"\u0002*\u00da\u0003\u0002\u0002\u0002,\u00dd\u0003\u0002\u0002\u0002",
	".\u00e7\u0003\u0002\u0002\u00020\u00eb\u0003\u0002\u0002\u00022\u00ed",
	"\u0003\u0002\u0002\u00024\u0105\u0003\u0002\u0002\u00026\u0110\u0003",
	"\u0002\u0002\u00028?\u0005\u0004\u0003\u00029?\u0005\u0006\u0004\u0002",
	":;\u0005\u0004\u0003\u0002;<\u0005\u0006\u0004\u0002<?\u0003\u0002\u0002",
	"\u0002=?\u0003\u0002\u0002\u0002>8\u0003\u0002\u0002\u0002>9\u0003\u0002",
	"\u0002\u0002>:\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?\u0003",
	"\u0003\u0002\u0002\u0002@B\u0005\b\u0005\u0002AC\u0005\u0004\u0003\u0002",
	"BA\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002C\u0005\u0003\u0002",
	"\u0002\u0002DE\u0005,\u0017\u0002EF\u0007\u000b\u0002\u0002F\u0007\u0003",
	"\u0002\u0002\u0002GI\u0007\u000f\u0002\u0002HJ\u0005\f\u0007\u0002I",
	"H\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002",
	"\u0002Kb\u0007\t\u0002\u0002LQ\u0005\n\u0006\u0002MO\u0007\u000f\u0002",
	"\u0002NP\u0005\f\u0007\u0002ON\u0003\u0002\u0002\u0002OP\u0003\u0002",
	"\u0002\u0002PR\u0003\u0002\u0002\u0002QM\u0003\u0002\u0002\u0002QR\u0003",
	"\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002ST\u0007\t\u0002\u0002T",
	"b\u0003\u0002\u0002\u0002UW\u0007\u0010\u0002\u0002VX\u0005\f\u0007",
	"\u0002WV\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0003\u0002",
	"\u0002\u0002YZ\u0007\t\u0002\u0002Z[\u0007\u0018\u0002\u0002[\\\u0005",
	"&\u0014\u0002\\]\u0007\u0019\u0002\u0002]b\u0003\u0002\u0002\u0002^",
	"_\u0005\u001e\u0010\u0002_`\u0007\t\u0002\u0002`b\u0003\u0002\u0002",
	"\u0002aG\u0003\u0002\u0002\u0002aL\u0003\u0002\u0002\u0002aU\u0003\u0002",
	"\u0002\u0002a^\u0003\u0002\u0002\u0002b\t\u0003\u0002\u0002\u0002cf",
	"\u0005\u000e\b\u0002df\u0005\u0010\t\u0002ec\u0003\u0002\u0002\u0002",
	"ed\u0003\u0002\u0002\u0002f\u000b\u0003\u0002\u0002\u0002gm\u0005*\u0016",
	"\u0002hj\u0007\u0003\u0002\u0002ih\u0003\u0002\u0002\u0002ij\u0003\u0002",
	"\u0002\u0002jk\u0003\u0002\u0002\u0002km\u0005\u0016\f\u0002lg\u0003",
	"\u0002\u0002\u0002li\u0003\u0002\u0002\u0002mp\u0003\u0002\u0002\u0002",
	"no\u0007\n\u0002\u0002oq\u0005\f\u0007\u0002pn\u0003\u0002\u0002\u0002",
	"pq\u0003\u0002\u0002\u0002q\r\u0003\u0002\u0002\u0002ru\u0005,\u0017",
	"\u0002st\u0007\u000e\u0002\u0002tv\u0005\u000e\b\u0002us\u0003\u0002",
	"\u0002\u0002uv\u0003\u0002\u0002\u0002v\u000f\u0003\u0002\u0002\u0002",
	"wx\u00054\u001b\u0002xy\u00050\u0019\u0002y{\u0003\u0002\u0002\u0002",
	"zw\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
	"\u0002|~\u0007\u001a\u0002\u0002}\u007f\u0005\u0012\n\u0002~}\u0003",
	"\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
	"\u0002\u0002\u0002\u0080\u0084\u0007\u001b\u0002\u0002\u0081\u0082\u0005",
	"0\u0019\u0002\u0082\u0083\u00054\u001b\u0002\u0083\u0085\u0003\u0002",
	"\u0002\u0002\u0084\u0081\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002",
	"\u0002\u0002\u0085\u0011\u0003\u0002\u0002\u0002\u0086\u0089\u0005\u0014",
	"\u000b\u0002\u0087\u0088\u0007\r\u0002\u0002\u0088\u008a\u0005\u0012",
	"\n\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002",
	"\u0002\u0002\u008a\u0013\u0003\u0002\u0002\u0002\u008b\u0090\u0005,",
	"\u0017\u0002\u008c\u008e\u0007\f\u0002\u0002\u008d\u008f\u0005(\u0015",
	"\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002",
	"\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090\u008c\u0003\u0002\u0002",
	"\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0015\u0003\u0002\u0002",
	"\u0002\u0092\u0093\u00054\u001b\u0002\u0093\u0094\u00050\u0019\u0002",
	"\u0094\u0096\u0003\u0002\u0002\u0002\u0095\u0092\u0003\u0002\u0002\u0002",
	"\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002",
	"\u0097\u0098\u0005\u001c\u000f\u0002\u0098\u009a\u0007\u001a\u0002\u0002",
	"\u0099\u009b\u0005\u0018\r\u0002\u009a\u0099\u0003\u0002\u0002\u0002",
	"\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002",
	"\u009c\u00a0\u0007\u001b\u0002\u0002\u009d\u009e\u00050\u0019\u0002",
	"\u009e\u009f\u00054\u001b\u0002\u009f\u00a1\u0003\u0002\u0002\u0002",
	"\u00a0\u009d\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002",
	"\u00a1\u0017\u0003\u0002\u0002\u0002\u00a2\u00a5\u0005\u001a\u000e\u0002",
	"\u00a3\u00a4\u0007\r\u0002\u0002\u00a4\u00a6\u0005\u0018\r\u0002\u00a5",
	"\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6",
	"\u0019\u0003\u0002\u0002\u0002\u00a7\u00a9\u00052\u001a\u0002\u00a8",
	"\u00a7\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9",
	"\u00ae\u0003\u0002\u0002\u0002\u00aa\u00ac\u0007\f\u0002\u0002\u00ab",
	"\u00ad\u0005(\u0015\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ac",
	"\u00ad\u0003\u0002\u0002\u0002\u00ad\u00af\u0003\u0002\u0002\u0002\u00ae",
	"\u00aa\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af",
	"\u001b\u0003\u0002\u0002\u0002\u00b0\u00b1\t\u0002\u0002\u0002\u00b1",
	"\u001d\u0003\u0002\u0002\u0002\u00b2\u00b3\u0005$\u0013\u0002\u00b3",
	"\u00b5\u0007\u001a\u0002\u0002\u00b4\u00b6\u0005 \u0011\u0002\u00b5",
	"\u00b4\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6",
	"\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007\u001b\u0002\u0002\u00b8",
	"\u001f\u0003\u0002\u0002\u0002\u00b9\u00bc\u0005\"\u0012\u0002\u00ba",
	"\u00bb\u0007\r\u0002\u0002\u00bb\u00bd\u0005 \u0011\u0002\u00bc\u00ba",
	"\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd!",
	"\u0003\u0002\u0002\u0002\u00be\u00c3\u0005&\u0014\u0002\u00bf\u00c1",
	"\u0007\f\u0002\u0002\u00c0\u00c2\u0005(\u0015\u0002\u00c1\u00c0\u0003",
	"\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c4\u0003",
	"\u0002\u0002\u0002\u00c3\u00bf\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003",
	"\u0002\u0002\u0002\u00c4#\u0003\u0002\u0002\u0002\u00c5\u00c6\t\u0003",
	"\u0002\u0002\u00c6%\u0003\u0002\u0002\u0002\u00c7\u00ca\u00054\u001b",
	"\u0002\u00c8\u00c9\u0007\u0015\u0002\u0002\u00c9\u00cb\u00054\u001b",
	"\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002",
	"\u0002\u00cb\u00ce\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007\n\u0002",
	"\u0002\u00cd\u00cf\u00052\u001a\u0002\u00ce\u00cc\u0003\u0002\u0002",
	"\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\'\u0003\u0002\u0002",
	"\u0002\u00d0\u00d3\u0005*\u0016\u0002\u00d1\u00d2\u0007\n\u0002\u0002",
	"\u00d2\u00d4\u0005(\u0015\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002",
	"\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4)\u0003\u0002\u0002\u0002",
	"\u00d5\u00d7\u0007\u0003\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002",
	"\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002",
	"\u00d8\u00db\u0005,\u0017\u0002\u00d9\u00db\u0005.\u0018\u0002\u00da",
	"\u00d6\u0003\u0002\u0002\u0002\u00da\u00d9\u0003\u0002\u0002\u0002\u00db",
	"+\u0003\u0002\u0002\u0002\u00dc\u00de\u0007\u0012\u0002\u0002\u00dd",
	"\u00dc\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de",
	"\u00df\u0003\u0002\u0002\u0002\u00df\u00e5\u0007\u0004\u0002\u0002\u00e0",
	"\u00e2\u0007\u0016\u0002\u0002\u00e1\u00e3\u00052\u001a\u0002\u00e2",
	"\u00e1\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3",
	"\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e6\u0007\u0017\u0002\u0002\u00e5",
	"\u00e0\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6",
	"-\u0003\u0002\u0002\u0002\u00e7\u00e8\u00054\u001b\u0002\u00e8\u00e9",
	"\u00050\u0019\u0002\u00e9\u00ea\u00054\u001b\u0002\u00ea/\u0003\u0002",
	"\u0002\u0002\u00eb\u00ec\t\u0004\u0002\u0002\u00ec1\u0003\u0002\u0002",
	"\u0002\u00ed\u00f0\u00054\u001b\u0002\u00ee\u00ef\u0007\n\u0002\u0002",
	"\u00ef\u00f1\u00052\u001a\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002",
	"\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f13\u0003\u0002\u0002\u0002",
	"\u00f2\u00f3\b\u001b\u0001\u0002\u00f3\u00f9\u0007\u0004\u0002\u0002",
	"\u00f4\u00f6\u0007\u0016\u0002\u0002\u00f5\u00f7\u00052\u001a\u0002",
	"\u00f6\u00f5\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002",
	"\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00fa\u0007\u0017\u0002\u0002",
	"\u00f9\u00f4\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002",
	"\u00fa\u0106\u0003\u0002\u0002\u0002\u00fb\u0106\u0007\u0007\u0002\u0002",
	"\u00fc\u0106\u0007\u0006\u0002\u0002\u00fd\u0106\u0007\u0005\u0002\u0002",
	"\u00fe\u0106\u0007\b\u0002\u0002\u00ff\u0100\u0007\u0016\u0002\u0002",
	"\u0100\u0101\u00054\u001b\u0002\u0101\u0102\u0007\u0017\u0002\u0002",
	"\u0102\u0106\u0003\u0002\u0002\u0002\u0103\u0104\u0007\u0012\u0002\u0002",
	"\u0104\u0106\u00054\u001b\u0004\u0105\u00f2\u0003\u0002\u0002\u0002",
	"\u0105\u00fb\u0003\u0002\u0002\u0002\u0105\u00fc\u0003\u0002\u0002\u0002",
	"\u0105\u00fd\u0003\u0002\u0002\u0002\u0105\u00fe\u0003\u0002\u0002\u0002",
	"\u0105\u00ff\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002",
	"\u0106\u010d\u0003\u0002\u0002\u0002\u0107\u0108\f\u0003\u0002\u0002",
	"\u0108\u0109\u00056\u001c\u0002\u0109\u010a\u00054\u001b\u0004\u010a",
	"\u010c\u0003\u0002\u0002\u0002\u010b\u0107\u0003\u0002\u0002\u0002\u010c",
	"\u010f\u0003\u0002\u0002\u0002\u010d\u010b\u0003\u0002\u0002\u0002\u010d",
	"\u010e\u0003\u0002\u0002\u0002\u010e5\u0003\u0002\u0002\u0002\u010f",
	"\u010d\u0003\u0002\u0002\u0002\u0110\u0111\t\u0005\u0002\u0002\u0111",
	"7\u0003\u0002\u0002\u0002,>BIOQWaeilpuz~\u0084\u0089\u008e\u0090\u0095",
	"\u009a\u00a0\u00a5\u00a8\u00ac\u00ae\u00b5\u00bc\u00c1\u00c3\u00ca\u00ce",
	"\u00d3\u00d6\u00da\u00dd\u00e2\u00e5\u00f0\u00f6\u00f9\u0105\u010d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
	return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'not'", null, null, null, null, "'_'", "'.'",
	"','", "'?'", "':'", "';'", "'|'", "':-'", "':~'",
	"'+'", "'-'", "'*'", "'/'", "'@'", "'('", "')'", "'['",
	"']'", "'{'", "'}'", "'='", null, "'<'", "'>'", "'<='",
	"'>='", "'#count'", "'#max'", "'#min'", "'#sum'"];

var symbolicNames = [null, "NAF", "ID", "VARIABLE", "STRING", "NUMBER",
	"ANONYMOUS_VARIABLE", "DOT", "COMMA", "QUERY_MARK",
	"COLON", "SEMICOLON", "OR", "CONS", "WCONS", "PLUS",
	"MINUS", "TIMES", "DIV", "AT", "PAREN_OPEN", "PAREN_CLOSE",
	"SQUARE_OPEN", "SQUARE_CLOSE", "CURLY_OPEN", "CURLY_CLOSE",
	"EQUAL", "UNEQUAL", "LESS", "GREATER", "LESS_OR_EQ",
	"GREATER_OR_EQ", "AGGREGATE_COUNT", "AGGREGATE_MAX",
	"AGGREGATE_MIN", "AGGREGATE_SUM", "MINIMIZE", "MAXIMIZE",
	"COMMENT", "LINE_COMMENT", "BLANK"];

var ruleNames = ["program", "statements", "query", "statement", "head",
	"body", "disjunction", "choice", "choice_elements", "choice_element",
	"aggregate", "aggregate_elements", "aggregate_element",
	"aggregate_function", "optimize", "optimize_elements",
	"optimize_element", "optimize_function", "weight_at_level",
	"naf_literals", "naf_literal", "classical_literal", "builtin_atom",
	"binop", "terms", "term", "arithop"];

function ASPCore2_0cParser(input) {
	antlr4.Parser.call(this, input);
	this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
	this.ruleNames = ruleNames;
	this.literalNames = literalNames;
	this.symbolicNames = symbolicNames;
	return this;
}

ASPCore2_0cParser.prototype = Object.create(antlr4.Parser.prototype);
ASPCore2_0cParser.prototype.constructor = ASPCore2_0cParser;

Object.defineProperty(ASPCore2_0cParser.prototype, "atn", {
	get: function () {
		return atn;
	}
});

ASPCore2_0cParser.EOF = antlr4.Token.EOF;
ASPCore2_0cParser.NAF = 1;
ASPCore2_0cParser.ID = 2;
ASPCore2_0cParser.VARIABLE = 3;
ASPCore2_0cParser.STRING = 4;
ASPCore2_0cParser.NUMBER = 5;
ASPCore2_0cParser.ANONYMOUS_VARIABLE = 6;
ASPCore2_0cParser.DOT = 7;
ASPCore2_0cParser.COMMA = 8;
ASPCore2_0cParser.QUERY_MARK = 9;
ASPCore2_0cParser.COLON = 10;
ASPCore2_0cParser.SEMICOLON = 11;
ASPCore2_0cParser.OR = 12;
ASPCore2_0cParser.CONS = 13;
ASPCore2_0cParser.WCONS = 14;
ASPCore2_0cParser.PLUS = 15;
ASPCore2_0cParser.MINUS = 16;
ASPCore2_0cParser.TIMES = 17;
ASPCore2_0cParser.DIV = 18;
ASPCore2_0cParser.AT = 19;
ASPCore2_0cParser.PAREN_OPEN = 20;
ASPCore2_0cParser.PAREN_CLOSE = 21;
ASPCore2_0cParser.SQUARE_OPEN = 22;
ASPCore2_0cParser.SQUARE_CLOSE = 23;
ASPCore2_0cParser.CURLY_OPEN = 24;
ASPCore2_0cParser.CURLY_CLOSE = 25;
ASPCore2_0cParser.EQUAL = 26;
ASPCore2_0cParser.UNEQUAL = 27;
ASPCore2_0cParser.LESS = 28;
ASPCore2_0cParser.GREATER = 29;
ASPCore2_0cParser.LESS_OR_EQ = 30;
ASPCore2_0cParser.GREATER_OR_EQ = 31;
ASPCore2_0cParser.AGGREGATE_COUNT = 32;
ASPCore2_0cParser.AGGREGATE_MAX = 33;
ASPCore2_0cParser.AGGREGATE_MIN = 34;
ASPCore2_0cParser.AGGREGATE_SUM = 35;
ASPCore2_0cParser.MINIMIZE = 36;
ASPCore2_0cParser.MAXIMIZE = 37;
ASPCore2_0cParser.COMMENT = 38;
ASPCore2_0cParser.LINE_COMMENT = 39;
ASPCore2_0cParser.BLANK = 40;

ASPCore2_0cParser.RULE_program = 0;
ASPCore2_0cParser.RULE_statements = 1;
ASPCore2_0cParser.RULE_query = 2;
ASPCore2_0cParser.RULE_statement = 3;
ASPCore2_0cParser.RULE_head = 4;
ASPCore2_0cParser.RULE_body = 5;
ASPCore2_0cParser.RULE_disjunction = 6;
ASPCore2_0cParser.RULE_choice = 7;
ASPCore2_0cParser.RULE_choice_elements = 8;
ASPCore2_0cParser.RULE_choice_element = 9;
ASPCore2_0cParser.RULE_aggregate = 10;
ASPCore2_0cParser.RULE_aggregate_elements = 11;
ASPCore2_0cParser.RULE_aggregate_element = 12;
ASPCore2_0cParser.RULE_aggregate_function = 13;
ASPCore2_0cParser.RULE_optimize = 14;
ASPCore2_0cParser.RULE_optimize_elements = 15;
ASPCore2_0cParser.RULE_optimize_element = 16;
ASPCore2_0cParser.RULE_optimize_function = 17;
ASPCore2_0cParser.RULE_weight_at_level = 18;
ASPCore2_0cParser.RULE_naf_literals = 19;
ASPCore2_0cParser.RULE_naf_literal = 20;
ASPCore2_0cParser.RULE_classical_literal = 21;
ASPCore2_0cParser.RULE_builtin_atom = 22;
ASPCore2_0cParser.RULE_binop = 23;
ASPCore2_0cParser.RULE_terms = 24;
ASPCore2_0cParser.RULE_term = 25;
ASPCore2_0cParser.RULE_arithop = 26;


function ProgramContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_program;
	return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statements = function () {
	return this.getTypedRuleContext(StatementsContext, 0);
};

ProgramContext.prototype.query = function () {
	return this.getTypedRuleContext(QueryContext, 0);
};

ProgramContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitProgram(this);
	}
};


ASPCore2_0cParser.ProgramContext = ProgramContext;

ASPCore2_0cParser.prototype.program = function () {

	var localctx = new ProgramContext(this, this._ctx, this.state);
	this.enterRule(localctx, 0, ASPCore2_0cParser.RULE_program);
	try {
		this.state = 60;
		this._errHandler.sync(this);
		var la_ = this._interp.adaptivePredict(this._input, 0, this._ctx);
		switch (la_) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				this.state = 54;
				this.statements();
				break;

			case 2:
				this.enterOuterAlt(localctx, 2);
				this.state = 55;
				this.query();
				break;

			case 3:
				this.enterOuterAlt(localctx, 3);
				this.state = 56;
				this.statements();
				this.state = 57;
				this.query();
				break;

			case 4:
				this.enterOuterAlt(localctx, 4);

				break;

		}
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function StatementsContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_statements;
	return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.statement = function () {
	return this.getTypedRuleContext(StatementContext, 0);
};

StatementsContext.prototype.statements = function () {
	return this.getTypedRuleContext(StatementsContext, 0);
};

StatementsContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterStatements(this);
	}
};

StatementsContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitStatements(this);
	}
};


ASPCore2_0cParser.StatementsContext = StatementsContext;

ASPCore2_0cParser.prototype.statements = function () {

	var localctx = new StatementsContext(this, this._ctx, this.state);
	this.enterRule(localctx, 2, ASPCore2_0cParser.RULE_statements);
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 62;
		this.statement();
		this.state = 64;
		this._errHandler.sync(this);
		var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
		if (la_ === 1) {
			this.state = 63;
			this.statements();

		}
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function QueryContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_query;
	return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.classical_literal = function () {
	return this.getTypedRuleContext(Classical_literalContext, 0);
};

QueryContext.prototype.QUERY_MARK = function () {
	return this.getToken(ASPCore2_0cParser.QUERY_MARK, 0);
};

QueryContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitQuery(this);
	}
};


ASPCore2_0cParser.QueryContext = QueryContext;

ASPCore2_0cParser.prototype.query = function () {

	var localctx = new QueryContext(this, this._ctx, this.state);
	this.enterRule(localctx, 4, ASPCore2_0cParser.RULE_query);
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 66;
		this.classical_literal();
		this.state = 67;
		this.match(ASPCore2_0cParser.QUERY_MARK);
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_statement;
	return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.CONS = function () {
	return this.getToken(ASPCore2_0cParser.CONS, 0);
};

StatementContext.prototype.DOT = function () {
	return this.getToken(ASPCore2_0cParser.DOT, 0);
};

StatementContext.prototype.body = function () {
	return this.getTypedRuleContext(BodyContext, 0);
};

StatementContext.prototype.head = function () {
	return this.getTypedRuleContext(HeadContext, 0);
};

StatementContext.prototype.WCONS = function () {
	return this.getToken(ASPCore2_0cParser.WCONS, 0);
};

StatementContext.prototype.SQUARE_OPEN = function () {
	return this.getToken(ASPCore2_0cParser.SQUARE_OPEN, 0);
};

StatementContext.prototype.weight_at_level = function () {
	return this.getTypedRuleContext(Weight_at_levelContext, 0);
};

StatementContext.prototype.SQUARE_CLOSE = function () {
	return this.getToken(ASPCore2_0cParser.SQUARE_CLOSE, 0);
};

StatementContext.prototype.optimize = function () {
	return this.getTypedRuleContext(OptimizeContext, 0);
};

StatementContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitStatement(this);
	}
};


ASPCore2_0cParser.StatementContext = StatementContext;

ASPCore2_0cParser.prototype.statement = function () {

	var localctx = new StatementContext(this, this._ctx, this.state);
	this.enterRule(localctx, 6, ASPCore2_0cParser.RULE_statement);
	var _la = 0; // Token type
	try {
		this.state = 95;
		this._errHandler.sync(this);
		switch (this._input.LA(1)) {
			case ASPCore2_0cParser.CONS:
				this.enterOuterAlt(localctx, 1);
				this.state = 69;
				this.match(ASPCore2_0cParser.CONS);
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.NAF) | (1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ASPCore2_0cParser.AGGREGATE_COUNT - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_MAX - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_MIN - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_SUM - 32)))) !== 0)) {
					this.state = 70;
					this.body();
				}

				this.state = 73;
				this.match(ASPCore2_0cParser.DOT);
				break;
			case ASPCore2_0cParser.ID:
			case ASPCore2_0cParser.VARIABLE:
			case ASPCore2_0cParser.STRING:
			case ASPCore2_0cParser.NUMBER:
			case ASPCore2_0cParser.ANONYMOUS_VARIABLE:
			case ASPCore2_0cParser.MINUS:
			case ASPCore2_0cParser.PAREN_OPEN:
			case ASPCore2_0cParser.CURLY_OPEN:
				this.enterOuterAlt(localctx, 2);
				this.state = 74;
				this.head();
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASPCore2_0cParser.CONS) {
					this.state = 75;
					this.match(ASPCore2_0cParser.CONS);
					this.state = 77;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.NAF) | (1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ASPCore2_0cParser.AGGREGATE_COUNT - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_MAX - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_MIN - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_SUM - 32)))) !== 0)) {
						this.state = 76;
						this.body();
					}

				}

				this.state = 81;
				this.match(ASPCore2_0cParser.DOT);
				break;
			case ASPCore2_0cParser.WCONS:
				this.enterOuterAlt(localctx, 3);
				this.state = 83;
				this.match(ASPCore2_0cParser.WCONS);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.NAF) | (1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ASPCore2_0cParser.AGGREGATE_COUNT - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_MAX - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_MIN - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_SUM - 32)))) !== 0)) {
					this.state = 84;
					this.body();
				}

				this.state = 87;
				this.match(ASPCore2_0cParser.DOT);
				this.state = 88;
				this.match(ASPCore2_0cParser.SQUARE_OPEN);
				this.state = 89;
				this.weight_at_level();
				this.state = 90;
				this.match(ASPCore2_0cParser.SQUARE_CLOSE);
				break;
			case ASPCore2_0cParser.MINIMIZE:
			case ASPCore2_0cParser.MAXIMIZE:
				this.enterOuterAlt(localctx, 4);
				this.state = 92;
				this.optimize();
				this.state = 93;
				this.match(ASPCore2_0cParser.DOT);
				break;
			default:
				throw new antlr4.error.NoViableAltException(this);
		}
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function HeadContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_head;
	return this;
}

HeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadContext.prototype.constructor = HeadContext;

HeadContext.prototype.disjunction = function () {
	return this.getTypedRuleContext(DisjunctionContext, 0);
};

HeadContext.prototype.choice = function () {
	return this.getTypedRuleContext(ChoiceContext, 0);
};

HeadContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterHead(this);
	}
};

HeadContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitHead(this);
	}
};


ASPCore2_0cParser.HeadContext = HeadContext;

ASPCore2_0cParser.prototype.head = function () {

	var localctx = new HeadContext(this, this._ctx, this.state);
	this.enterRule(localctx, 8, ASPCore2_0cParser.RULE_head);
	try {
		this.state = 99;
		this._errHandler.sync(this);
		var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
		switch (la_) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				this.state = 97;
				this.disjunction();
				break;

			case 2:
				this.enterOuterAlt(localctx, 2);
				this.state = 98;
				this.choice();
				break;

		}
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function BodyContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_body;
	return this;
}

BodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BodyContext.prototype.constructor = BodyContext;

BodyContext.prototype.naf_literal = function () {
	return this.getTypedRuleContext(Naf_literalContext, 0);
};

BodyContext.prototype.aggregate = function () {
	return this.getTypedRuleContext(AggregateContext, 0);
};

BodyContext.prototype.COMMA = function () {
	return this.getToken(ASPCore2_0cParser.COMMA, 0);
};

BodyContext.prototype.body = function () {
	return this.getTypedRuleContext(BodyContext, 0);
};

BodyContext.prototype.NAF = function () {
	return this.getToken(ASPCore2_0cParser.NAF, 0);
};

BodyContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterBody(this);
	}
};

BodyContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitBody(this);
	}
};


ASPCore2_0cParser.BodyContext = BodyContext;

ASPCore2_0cParser.prototype.body = function () {

	var localctx = new BodyContext(this, this._ctx, this.state);
	this.enterRule(localctx, 10, ASPCore2_0cParser.RULE_body);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 106;
		this._errHandler.sync(this);
		var la_ = this._interp.adaptivePredict(this._input, 9, this._ctx);
		switch (la_) {
			case 1:
				this.state = 101;
				this.naf_literal();
				break;

			case 2:
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASPCore2_0cParser.NAF) {
					this.state = 102;
					this.match(ASPCore2_0cParser.NAF);
				}

				this.state = 105;
				this.aggregate();
				break;

		}
		this.state = 110;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.COMMA) {
			this.state = 108;
			this.match(ASPCore2_0cParser.COMMA);
			this.state = 109;
			this.body();
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function DisjunctionContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_disjunction;
	return this;
}

DisjunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DisjunctionContext.prototype.constructor = DisjunctionContext;

DisjunctionContext.prototype.classical_literal = function () {
	return this.getTypedRuleContext(Classical_literalContext, 0);
};

DisjunctionContext.prototype.OR = function () {
	return this.getToken(ASPCore2_0cParser.OR, 0);
};

DisjunctionContext.prototype.disjunction = function () {
	return this.getTypedRuleContext(DisjunctionContext, 0);
};

DisjunctionContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterDisjunction(this);
	}
};

DisjunctionContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitDisjunction(this);
	}
};


ASPCore2_0cParser.DisjunctionContext = DisjunctionContext;

ASPCore2_0cParser.prototype.disjunction = function () {

	var localctx = new DisjunctionContext(this, this._ctx, this.state);
	this.enterRule(localctx, 12, ASPCore2_0cParser.RULE_disjunction);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 112;
		this.classical_literal();
		this.state = 115;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.OR) {
			this.state = 113;
			this.match(ASPCore2_0cParser.OR);
			this.state = 114;
			this.disjunction();
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function ChoiceContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_choice;
	return this;
}

ChoiceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChoiceContext.prototype.constructor = ChoiceContext;

ChoiceContext.prototype.CURLY_OPEN = function () {
	return this.getToken(ASPCore2_0cParser.CURLY_OPEN, 0);
};

ChoiceContext.prototype.CURLY_CLOSE = function () {
	return this.getToken(ASPCore2_0cParser.CURLY_CLOSE, 0);
};

ChoiceContext.prototype.term = function (i) {
	if (i === undefined) {
		i = null;
	}
	if (i === null) {
		return this.getTypedRuleContexts(TermContext);
	} else {
		return this.getTypedRuleContext(TermContext, i);
	}
};

ChoiceContext.prototype.binop = function (i) {
	if (i === undefined) {
		i = null;
	}
	if (i === null) {
		return this.getTypedRuleContexts(BinopContext);
	} else {
		return this.getTypedRuleContext(BinopContext, i);
	}
};

ChoiceContext.prototype.choice_elements = function () {
	return this.getTypedRuleContext(Choice_elementsContext, 0);
};

ChoiceContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterChoice(this);
	}
};

ChoiceContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitChoice(this);
	}
};


ASPCore2_0cParser.ChoiceContext = ChoiceContext;

ASPCore2_0cParser.prototype.choice = function () {

	var localctx = new ChoiceContext(this, this._ctx, this.state);
	this.enterRule(localctx, 14, ASPCore2_0cParser.RULE_choice);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 120;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0)) {
			this.state = 117;
			this.term(0);
			this.state = 118;
			this.binop();
		}

		this.state = 122;
		this.match(ASPCore2_0cParser.CURLY_OPEN);
		this.state = 124;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.ID || _la === ASPCore2_0cParser.MINUS) {
			this.state = 123;
			this.choice_elements();
		}

		this.state = 126;
		this.match(ASPCore2_0cParser.CURLY_CLOSE);
		this.state = 130;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.EQUAL) | (1 << ASPCore2_0cParser.UNEQUAL) | (1 << ASPCore2_0cParser.LESS) | (1 << ASPCore2_0cParser.GREATER) | (1 << ASPCore2_0cParser.LESS_OR_EQ) | (1 << ASPCore2_0cParser.GREATER_OR_EQ))) !== 0)) {
			this.state = 127;
			this.binop();
			this.state = 128;
			this.term(0);
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Choice_elementsContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_choice_elements;
	return this;
}

Choice_elementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Choice_elementsContext.prototype.constructor = Choice_elementsContext;

Choice_elementsContext.prototype.choice_element = function () {
	return this.getTypedRuleContext(Choice_elementContext, 0);
};

Choice_elementsContext.prototype.SEMICOLON = function () {
	return this.getToken(ASPCore2_0cParser.SEMICOLON, 0);
};

Choice_elementsContext.prototype.choice_elements = function () {
	return this.getTypedRuleContext(Choice_elementsContext, 0);
};

Choice_elementsContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterChoice_elements(this);
	}
};

Choice_elementsContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitChoice_elements(this);
	}
};


ASPCore2_0cParser.Choice_elementsContext = Choice_elementsContext;

ASPCore2_0cParser.prototype.choice_elements = function () {

	var localctx = new Choice_elementsContext(this, this._ctx, this.state);
	this.enterRule(localctx, 16, ASPCore2_0cParser.RULE_choice_elements);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 132;
		this.choice_element();
		this.state = 135;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.SEMICOLON) {
			this.state = 133;
			this.match(ASPCore2_0cParser.SEMICOLON);
			this.state = 134;
			this.choice_elements();
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Choice_elementContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_choice_element;
	return this;
}

Choice_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Choice_elementContext.prototype.constructor = Choice_elementContext;

Choice_elementContext.prototype.classical_literal = function () {
	return this.getTypedRuleContext(Classical_literalContext, 0);
};

Choice_elementContext.prototype.COLON = function () {
	return this.getToken(ASPCore2_0cParser.COLON, 0);
};

Choice_elementContext.prototype.naf_literals = function () {
	return this.getTypedRuleContext(Naf_literalsContext, 0);
};

Choice_elementContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterChoice_element(this);
	}
};

Choice_elementContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitChoice_element(this);
	}
};


ASPCore2_0cParser.Choice_elementContext = Choice_elementContext;

ASPCore2_0cParser.prototype.choice_element = function () {

	var localctx = new Choice_elementContext(this, this._ctx, this.state);
	this.enterRule(localctx, 18, ASPCore2_0cParser.RULE_choice_element);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 137;
		this.classical_literal();
		this.state = 142;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.COLON) {
			this.state = 138;
			this.match(ASPCore2_0cParser.COLON);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.NAF) | (1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0)) {
				this.state = 139;
				this.naf_literals();
			}

		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function AggregateContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_aggregate;
	return this;
}

AggregateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AggregateContext.prototype.constructor = AggregateContext;

AggregateContext.prototype.aggregate_function = function () {
	return this.getTypedRuleContext(Aggregate_functionContext, 0);
};

AggregateContext.prototype.CURLY_OPEN = function () {
	return this.getToken(ASPCore2_0cParser.CURLY_OPEN, 0);
};

AggregateContext.prototype.CURLY_CLOSE = function () {
	return this.getToken(ASPCore2_0cParser.CURLY_CLOSE, 0);
};

AggregateContext.prototype.term = function (i) {
	if (i === undefined) {
		i = null;
	}
	if (i === null) {
		return this.getTypedRuleContexts(TermContext);
	} else {
		return this.getTypedRuleContext(TermContext, i);
	}
};

AggregateContext.prototype.binop = function (i) {
	if (i === undefined) {
		i = null;
	}
	if (i === null) {
		return this.getTypedRuleContexts(BinopContext);
	} else {
		return this.getTypedRuleContext(BinopContext, i);
	}
};

AggregateContext.prototype.aggregate_elements = function () {
	return this.getTypedRuleContext(Aggregate_elementsContext, 0);
};

AggregateContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterAggregate(this);
	}
};

AggregateContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitAggregate(this);
	}
};


ASPCore2_0cParser.AggregateContext = AggregateContext;

ASPCore2_0cParser.prototype.aggregate = function () {

	var localctx = new AggregateContext(this, this._ctx, this.state);
	this.enterRule(localctx, 20, ASPCore2_0cParser.RULE_aggregate);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 147;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0)) {
			this.state = 144;
			this.term(0);
			this.state = 145;
			this.binop();
		}

		this.state = 149;
		this.aggregate_function();
		this.state = 150;
		this.match(ASPCore2_0cParser.CURLY_OPEN);
		this.state = 152;
		this._errHandler.sync(this);
		var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
		if (la_ === 1) {
			this.state = 151;
			this.aggregate_elements();

		}
		this.state = 154;
		this.match(ASPCore2_0cParser.CURLY_CLOSE);
		this.state = 158;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.EQUAL) | (1 << ASPCore2_0cParser.UNEQUAL) | (1 << ASPCore2_0cParser.LESS) | (1 << ASPCore2_0cParser.GREATER) | (1 << ASPCore2_0cParser.LESS_OR_EQ) | (1 << ASPCore2_0cParser.GREATER_OR_EQ))) !== 0)) {
			this.state = 155;
			this.binop();
			this.state = 156;
			this.term(0);
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Aggregate_elementsContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_aggregate_elements;
	return this;
}

Aggregate_elementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Aggregate_elementsContext.prototype.constructor = Aggregate_elementsContext;

Aggregate_elementsContext.prototype.aggregate_element = function () {
	return this.getTypedRuleContext(Aggregate_elementContext, 0);
};

Aggregate_elementsContext.prototype.SEMICOLON = function () {
	return this.getToken(ASPCore2_0cParser.SEMICOLON, 0);
};

Aggregate_elementsContext.prototype.aggregate_elements = function () {
	return this.getTypedRuleContext(Aggregate_elementsContext, 0);
};

Aggregate_elementsContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterAggregate_elements(this);
	}
};

Aggregate_elementsContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitAggregate_elements(this);
	}
};


ASPCore2_0cParser.Aggregate_elementsContext = Aggregate_elementsContext;

ASPCore2_0cParser.prototype.aggregate_elements = function () {

	var localctx = new Aggregate_elementsContext(this, this._ctx, this.state);
	this.enterRule(localctx, 22, ASPCore2_0cParser.RULE_aggregate_elements);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 160;
		this.aggregate_element();
		this.state = 163;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.SEMICOLON) {
			this.state = 161;
			this.match(ASPCore2_0cParser.SEMICOLON);
			this.state = 162;
			this.aggregate_elements();
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Aggregate_elementContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_aggregate_element;
	return this;
}

Aggregate_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Aggregate_elementContext.prototype.constructor = Aggregate_elementContext;

Aggregate_elementContext.prototype.terms = function () {
	return this.getTypedRuleContext(TermsContext, 0);
};

Aggregate_elementContext.prototype.COLON = function () {
	return this.getToken(ASPCore2_0cParser.COLON, 0);
};

Aggregate_elementContext.prototype.naf_literals = function () {
	return this.getTypedRuleContext(Naf_literalsContext, 0);
};

Aggregate_elementContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterAggregate_element(this);
	}
};

Aggregate_elementContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitAggregate_element(this);
	}
};


ASPCore2_0cParser.Aggregate_elementContext = Aggregate_elementContext;

ASPCore2_0cParser.prototype.aggregate_element = function () {

	var localctx = new Aggregate_elementContext(this, this._ctx, this.state);
	this.enterRule(localctx, 24, ASPCore2_0cParser.RULE_aggregate_element);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 166;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0)) {
			this.state = 165;
			this.terms();
		}

		this.state = 172;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.COLON) {
			this.state = 168;
			this.match(ASPCore2_0cParser.COLON);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.NAF) | (1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0)) {
				this.state = 169;
				this.naf_literals();
			}

		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Aggregate_functionContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_aggregate_function;
	return this;
}

Aggregate_functionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Aggregate_functionContext.prototype.constructor = Aggregate_functionContext;

Aggregate_functionContext.prototype.AGGREGATE_COUNT = function () {
	return this.getToken(ASPCore2_0cParser.AGGREGATE_COUNT, 0);
};

Aggregate_functionContext.prototype.AGGREGATE_MAX = function () {
	return this.getToken(ASPCore2_0cParser.AGGREGATE_MAX, 0);
};

Aggregate_functionContext.prototype.AGGREGATE_MIN = function () {
	return this.getToken(ASPCore2_0cParser.AGGREGATE_MIN, 0);
};

Aggregate_functionContext.prototype.AGGREGATE_SUM = function () {
	return this.getToken(ASPCore2_0cParser.AGGREGATE_SUM, 0);
};

Aggregate_functionContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterAggregate_function(this);
	}
};

Aggregate_functionContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitAggregate_function(this);
	}
};


ASPCore2_0cParser.Aggregate_functionContext = Aggregate_functionContext;

ASPCore2_0cParser.prototype.aggregate_function = function () {

	var localctx = new Aggregate_functionContext(this, this._ctx, this.state);
	this.enterRule(localctx, 26, ASPCore2_0cParser.RULE_aggregate_function);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 174;
		_la = this._input.LA(1);
		if (!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ASPCore2_0cParser.AGGREGATE_COUNT - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_MAX - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_MIN - 32)) | (1 << (ASPCore2_0cParser.AGGREGATE_SUM - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
		} else {
			this._errHandler.reportMatch(this);
			this.consume();
		}
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function OptimizeContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_optimize;
	return this;
}

OptimizeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptimizeContext.prototype.constructor = OptimizeContext;

OptimizeContext.prototype.optimize_function = function () {
	return this.getTypedRuleContext(Optimize_functionContext, 0);
};

OptimizeContext.prototype.CURLY_OPEN = function () {
	return this.getToken(ASPCore2_0cParser.CURLY_OPEN, 0);
};

OptimizeContext.prototype.CURLY_CLOSE = function () {
	return this.getToken(ASPCore2_0cParser.CURLY_CLOSE, 0);
};

OptimizeContext.prototype.optimize_elements = function () {
	return this.getTypedRuleContext(Optimize_elementsContext, 0);
};

OptimizeContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterOptimize(this);
	}
};

OptimizeContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitOptimize(this);
	}
};


ASPCore2_0cParser.OptimizeContext = OptimizeContext;

ASPCore2_0cParser.prototype.optimize = function () {

	var localctx = new OptimizeContext(this, this._ctx, this.state);
	this.enterRule(localctx, 28, ASPCore2_0cParser.RULE_optimize);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 176;
		this.optimize_function();
		this.state = 177;
		this.match(ASPCore2_0cParser.CURLY_OPEN);
		this.state = 179;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0)) {
			this.state = 178;
			this.optimize_elements();
		}

		this.state = 181;
		this.match(ASPCore2_0cParser.CURLY_CLOSE);
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Optimize_elementsContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_optimize_elements;
	return this;
}

Optimize_elementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Optimize_elementsContext.prototype.constructor = Optimize_elementsContext;

Optimize_elementsContext.prototype.optimize_element = function () {
	return this.getTypedRuleContext(Optimize_elementContext, 0);
};

Optimize_elementsContext.prototype.SEMICOLON = function () {
	return this.getToken(ASPCore2_0cParser.SEMICOLON, 0);
};

Optimize_elementsContext.prototype.optimize_elements = function () {
	return this.getTypedRuleContext(Optimize_elementsContext, 0);
};

Optimize_elementsContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterOptimize_elements(this);
	}
};

Optimize_elementsContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitOptimize_elements(this);
	}
};


ASPCore2_0cParser.Optimize_elementsContext = Optimize_elementsContext;

ASPCore2_0cParser.prototype.optimize_elements = function () {

	var localctx = new Optimize_elementsContext(this, this._ctx, this.state);
	this.enterRule(localctx, 30, ASPCore2_0cParser.RULE_optimize_elements);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 183;
		this.optimize_element();
		this.state = 186;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.SEMICOLON) {
			this.state = 184;
			this.match(ASPCore2_0cParser.SEMICOLON);
			this.state = 185;
			this.optimize_elements();
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Optimize_elementContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_optimize_element;
	return this;
}

Optimize_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Optimize_elementContext.prototype.constructor = Optimize_elementContext;

Optimize_elementContext.prototype.weight_at_level = function () {
	return this.getTypedRuleContext(Weight_at_levelContext, 0);
};

Optimize_elementContext.prototype.COLON = function () {
	return this.getToken(ASPCore2_0cParser.COLON, 0);
};

Optimize_elementContext.prototype.naf_literals = function () {
	return this.getTypedRuleContext(Naf_literalsContext, 0);
};

Optimize_elementContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterOptimize_element(this);
	}
};

Optimize_elementContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitOptimize_element(this);
	}
};


ASPCore2_0cParser.Optimize_elementContext = Optimize_elementContext;

ASPCore2_0cParser.prototype.optimize_element = function () {

	var localctx = new Optimize_elementContext(this, this._ctx, this.state);
	this.enterRule(localctx, 32, ASPCore2_0cParser.RULE_optimize_element);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 188;
		this.weight_at_level();
		this.state = 193;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.COLON) {
			this.state = 189;
			this.match(ASPCore2_0cParser.COLON);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.NAF) | (1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0)) {
				this.state = 190;
				this.naf_literals();
			}

		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Optimize_functionContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_optimize_function;
	return this;
}

Optimize_functionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Optimize_functionContext.prototype.constructor = Optimize_functionContext;

Optimize_functionContext.prototype.MAXIMIZE = function () {
	return this.getToken(ASPCore2_0cParser.MAXIMIZE, 0);
};

Optimize_functionContext.prototype.MINIMIZE = function () {
	return this.getToken(ASPCore2_0cParser.MINIMIZE, 0);
};

Optimize_functionContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterOptimize_function(this);
	}
};

Optimize_functionContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitOptimize_function(this);
	}
};


ASPCore2_0cParser.Optimize_functionContext = Optimize_functionContext;

ASPCore2_0cParser.prototype.optimize_function = function () {

	var localctx = new Optimize_functionContext(this, this._ctx, this.state);
	this.enterRule(localctx, 34, ASPCore2_0cParser.RULE_optimize_function);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 195;
		_la = this._input.LA(1);
		if (!(_la === ASPCore2_0cParser.MINIMIZE || _la === ASPCore2_0cParser.MAXIMIZE)) {
			this._errHandler.recoverInline(this);
		} else {
			this._errHandler.reportMatch(this);
			this.consume();
		}
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Weight_at_levelContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_weight_at_level;
	return this;
}

Weight_at_levelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Weight_at_levelContext.prototype.constructor = Weight_at_levelContext;

Weight_at_levelContext.prototype.term = function (i) {
	if (i === undefined) {
		i = null;
	}
	if (i === null) {
		return this.getTypedRuleContexts(TermContext);
	} else {
		return this.getTypedRuleContext(TermContext, i);
	}
};

Weight_at_levelContext.prototype.AT = function () {
	return this.getToken(ASPCore2_0cParser.AT, 0);
};

Weight_at_levelContext.prototype.COMMA = function () {
	return this.getToken(ASPCore2_0cParser.COMMA, 0);
};

Weight_at_levelContext.prototype.terms = function () {
	return this.getTypedRuleContext(TermsContext, 0);
};

Weight_at_levelContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterWeight_at_level(this);
	}
};

Weight_at_levelContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitWeight_at_level(this);
	}
};


ASPCore2_0cParser.Weight_at_levelContext = Weight_at_levelContext;

ASPCore2_0cParser.prototype.weight_at_level = function () {

	var localctx = new Weight_at_levelContext(this, this._ctx, this.state);
	this.enterRule(localctx, 36, ASPCore2_0cParser.RULE_weight_at_level);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 197;
		this.term(0);
		this.state = 200;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.AT) {
			this.state = 198;
			this.match(ASPCore2_0cParser.AT);
			this.state = 199;
			this.term(0);
		}

		this.state = 204;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.COMMA) {
			this.state = 202;
			this.match(ASPCore2_0cParser.COMMA);
			this.state = 203;
			this.terms();
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Naf_literalsContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_naf_literals;
	return this;
}

Naf_literalsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Naf_literalsContext.prototype.constructor = Naf_literalsContext;

Naf_literalsContext.prototype.naf_literal = function () {
	return this.getTypedRuleContext(Naf_literalContext, 0);
};

Naf_literalsContext.prototype.COMMA = function () {
	return this.getToken(ASPCore2_0cParser.COMMA, 0);
};

Naf_literalsContext.prototype.naf_literals = function () {
	return this.getTypedRuleContext(Naf_literalsContext, 0);
};

Naf_literalsContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterNaf_literals(this);
	}
};

Naf_literalsContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitNaf_literals(this);
	}
};


ASPCore2_0cParser.Naf_literalsContext = Naf_literalsContext;

ASPCore2_0cParser.prototype.naf_literals = function () {

	var localctx = new Naf_literalsContext(this, this._ctx, this.state);
	this.enterRule(localctx, 38, ASPCore2_0cParser.RULE_naf_literals);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 206;
		this.naf_literal();
		this.state = 209;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.COMMA) {
			this.state = 207;
			this.match(ASPCore2_0cParser.COMMA);
			this.state = 208;
			this.naf_literals();
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Naf_literalContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_naf_literal;
	return this;
}

Naf_literalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Naf_literalContext.prototype.constructor = Naf_literalContext;

Naf_literalContext.prototype.classical_literal = function () {
	return this.getTypedRuleContext(Classical_literalContext, 0);
};

Naf_literalContext.prototype.NAF = function () {
	return this.getToken(ASPCore2_0cParser.NAF, 0);
};

Naf_literalContext.prototype.builtin_atom = function () {
	return this.getTypedRuleContext(Builtin_atomContext, 0);
};

Naf_literalContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterNaf_literal(this);
	}
};

Naf_literalContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitNaf_literal(this);
	}
};


ASPCore2_0cParser.Naf_literalContext = Naf_literalContext;

ASPCore2_0cParser.prototype.naf_literal = function () {

	var localctx = new Naf_literalContext(this, this._ctx, this.state);
	this.enterRule(localctx, 40, ASPCore2_0cParser.RULE_naf_literal);
	var _la = 0; // Token type
	try {
		this.state = 216;
		this._errHandler.sync(this);
		var la_ = this._interp.adaptivePredict(this._input, 33, this._ctx);
		switch (la_) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASPCore2_0cParser.NAF) {
					this.state = 211;
					this.match(ASPCore2_0cParser.NAF);
				}

				this.state = 214;
				this.classical_literal();
				break;

			case 2:
				this.enterOuterAlt(localctx, 2);
				this.state = 215;
				this.builtin_atom();
				break;

		}
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Classical_literalContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_classical_literal;
	return this;
}

Classical_literalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Classical_literalContext.prototype.constructor = Classical_literalContext;

Classical_literalContext.prototype.ID = function () {
	return this.getToken(ASPCore2_0cParser.ID, 0);
};

Classical_literalContext.prototype.MINUS = function () {
	return this.getToken(ASPCore2_0cParser.MINUS, 0);
};

Classical_literalContext.prototype.PAREN_OPEN = function () {
	return this.getToken(ASPCore2_0cParser.PAREN_OPEN, 0);
};

Classical_literalContext.prototype.PAREN_CLOSE = function () {
	return this.getToken(ASPCore2_0cParser.PAREN_CLOSE, 0);
};

Classical_literalContext.prototype.terms = function () {
	return this.getTypedRuleContext(TermsContext, 0);
};

Classical_literalContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterClassical_literal(this);
	}
};

Classical_literalContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitClassical_literal(this);
	}
};


ASPCore2_0cParser.Classical_literalContext = Classical_literalContext;

ASPCore2_0cParser.prototype.classical_literal = function () {

	var localctx = new Classical_literalContext(this, this._ctx, this.state);
	this.enterRule(localctx, 42, ASPCore2_0cParser.RULE_classical_literal);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 219;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.MINUS) {
			this.state = 218;
			this.match(ASPCore2_0cParser.MINUS);
		}

		this.state = 221;
		this.match(ASPCore2_0cParser.ID);
		this.state = 227;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.PAREN_OPEN) {
			this.state = 222;
			this.match(ASPCore2_0cParser.PAREN_OPEN);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0)) {
				this.state = 223;
				this.terms();
			}

			this.state = 226;
			this.match(ASPCore2_0cParser.PAREN_CLOSE);
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function Builtin_atomContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_builtin_atom;
	return this;
}

Builtin_atomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Builtin_atomContext.prototype.constructor = Builtin_atomContext;

Builtin_atomContext.prototype.term = function (i) {
	if (i === undefined) {
		i = null;
	}
	if (i === null) {
		return this.getTypedRuleContexts(TermContext);
	} else {
		return this.getTypedRuleContext(TermContext, i);
	}
};

Builtin_atomContext.prototype.binop = function () {
	return this.getTypedRuleContext(BinopContext, 0);
};

Builtin_atomContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterBuiltin_atom(this);
	}
};

Builtin_atomContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitBuiltin_atom(this);
	}
};


ASPCore2_0cParser.Builtin_atomContext = Builtin_atomContext;

ASPCore2_0cParser.prototype.builtin_atom = function () {

	var localctx = new Builtin_atomContext(this, this._ctx, this.state);
	this.enterRule(localctx, 44, ASPCore2_0cParser.RULE_builtin_atom);
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 229;
		this.term(0);
		this.state = 230;
		this.binop();
		this.state = 231;
		this.term(0);
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function BinopContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_binop;
	return this;
}

BinopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinopContext.prototype.constructor = BinopContext;

BinopContext.prototype.EQUAL = function () {
	return this.getToken(ASPCore2_0cParser.EQUAL, 0);
};

BinopContext.prototype.UNEQUAL = function () {
	return this.getToken(ASPCore2_0cParser.UNEQUAL, 0);
};

BinopContext.prototype.LESS = function () {
	return this.getToken(ASPCore2_0cParser.LESS, 0);
};

BinopContext.prototype.GREATER = function () {
	return this.getToken(ASPCore2_0cParser.GREATER, 0);
};

BinopContext.prototype.LESS_OR_EQ = function () {
	return this.getToken(ASPCore2_0cParser.LESS_OR_EQ, 0);
};

BinopContext.prototype.GREATER_OR_EQ = function () {
	return this.getToken(ASPCore2_0cParser.GREATER_OR_EQ, 0);
};

BinopContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterBinop(this);
	}
};

BinopContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitBinop(this);
	}
};


ASPCore2_0cParser.BinopContext = BinopContext;

ASPCore2_0cParser.prototype.binop = function () {

	var localctx = new BinopContext(this, this._ctx, this.state);
	this.enterRule(localctx, 46, ASPCore2_0cParser.RULE_binop);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 233;
		_la = this._input.LA(1);
		if (!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.EQUAL) | (1 << ASPCore2_0cParser.UNEQUAL) | (1 << ASPCore2_0cParser.LESS) | (1 << ASPCore2_0cParser.GREATER) | (1 << ASPCore2_0cParser.LESS_OR_EQ) | (1 << ASPCore2_0cParser.GREATER_OR_EQ))) !== 0))) {
			this._errHandler.recoverInline(this);
		} else {
			this._errHandler.reportMatch(this);
			this.consume();
		}
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function TermsContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_terms;
	return this;
}

TermsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermsContext.prototype.constructor = TermsContext;

TermsContext.prototype.term = function () {
	return this.getTypedRuleContext(TermContext, 0);
};

TermsContext.prototype.COMMA = function () {
	return this.getToken(ASPCore2_0cParser.COMMA, 0);
};

TermsContext.prototype.terms = function () {
	return this.getTypedRuleContext(TermsContext, 0);
};

TermsContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterTerms(this);
	}
};

TermsContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitTerms(this);
	}
};


ASPCore2_0cParser.TermsContext = TermsContext;

ASPCore2_0cParser.prototype.terms = function () {

	var localctx = new TermsContext(this, this._ctx, this.state);
	this.enterRule(localctx, 48, ASPCore2_0cParser.RULE_terms);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 235;
		this.term(0);
		this.state = 238;
		this._errHandler.sync(this);
		_la = this._input.LA(1);
		if (_la === ASPCore2_0cParser.COMMA) {
			this.state = 236;
			this.match(ASPCore2_0cParser.COMMA);
			this.state = 237;
			this.terms();
		}

	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


function TermContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_term;
	return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.ID = function () {
	return this.getToken(ASPCore2_0cParser.ID, 0);
};

TermContext.prototype.PAREN_OPEN = function () {
	return this.getToken(ASPCore2_0cParser.PAREN_OPEN, 0);
};

TermContext.prototype.PAREN_CLOSE = function () {
	return this.getToken(ASPCore2_0cParser.PAREN_CLOSE, 0);
};

TermContext.prototype.terms = function () {
	return this.getTypedRuleContext(TermsContext, 0);
};

TermContext.prototype.NUMBER = function () {
	return this.getToken(ASPCore2_0cParser.NUMBER, 0);
};

TermContext.prototype.STRING = function () {
	return this.getToken(ASPCore2_0cParser.STRING, 0);
};

TermContext.prototype.VARIABLE = function () {
	return this.getToken(ASPCore2_0cParser.VARIABLE, 0);
};

TermContext.prototype.ANONYMOUS_VARIABLE = function () {
	return this.getToken(ASPCore2_0cParser.ANONYMOUS_VARIABLE, 0);
};

TermContext.prototype.term = function (i) {
	if (i === undefined) {
		i = null;
	}
	if (i === null) {
		return this.getTypedRuleContexts(TermContext);
	} else {
		return this.getTypedRuleContext(TermContext, i);
	}
};

TermContext.prototype.MINUS = function () {
	return this.getToken(ASPCore2_0cParser.MINUS, 0);
};

TermContext.prototype.arithop = function () {
	return this.getTypedRuleContext(ArithopContext, 0);
};

TermContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitTerm(this);
	}
};


ASPCore2_0cParser.prototype.term = function (_p) {
	if (_p === undefined) {
		_p = 0;
	}
	var _parentctx = this._ctx;
	var _parentState = this.state;
	var localctx = new TermContext(this, this._ctx, _parentState);
	var _prevctx = localctx;
	var _startState = 50;
	this.enterRecursionRule(localctx, 50, ASPCore2_0cParser.RULE_term, _p);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 259;
		this._errHandler.sync(this);
		switch (this._input.LA(1)) {
			case ASPCore2_0cParser.ID:
				this.state = 241;
				this.match(ASPCore2_0cParser.ID);
				this.state = 247;
				this._errHandler.sync(this);
				var la_ = this._interp.adaptivePredict(this._input, 39, this._ctx);
				if (la_ === 1) {
					this.state = 242;
					this.match(ASPCore2_0cParser.PAREN_OPEN);
					this.state = 244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.ID) | (1 << ASPCore2_0cParser.VARIABLE) | (1 << ASPCore2_0cParser.STRING) | (1 << ASPCore2_0cParser.NUMBER) | (1 << ASPCore2_0cParser.ANONYMOUS_VARIABLE) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.PAREN_OPEN))) !== 0)) {
						this.state = 243;
						this.terms();
					}

					this.state = 246;
					this.match(ASPCore2_0cParser.PAREN_CLOSE);

				}
				break;
			case ASPCore2_0cParser.NUMBER:
				this.state = 249;
				this.match(ASPCore2_0cParser.NUMBER);
				break;
			case ASPCore2_0cParser.STRING:
				this.state = 250;
				this.match(ASPCore2_0cParser.STRING);
				break;
			case ASPCore2_0cParser.VARIABLE:
				this.state = 251;
				this.match(ASPCore2_0cParser.VARIABLE);
				break;
			case ASPCore2_0cParser.ANONYMOUS_VARIABLE:
				this.state = 252;
				this.match(ASPCore2_0cParser.ANONYMOUS_VARIABLE);
				break;
			case ASPCore2_0cParser.PAREN_OPEN:
				this.state = 253;
				this.match(ASPCore2_0cParser.PAREN_OPEN);
				this.state = 254;
				this.term(0);
				this.state = 255;
				this.match(ASPCore2_0cParser.PAREN_CLOSE);
				break;
			case ASPCore2_0cParser.MINUS:
				this.state = 257;
				this.match(ASPCore2_0cParser.MINUS);
				this.state = 258;
				this.term(2);
				break;
			default:
				throw new antlr4.error.NoViableAltException(this);
		}
		this._ctx.stop = this._input.LT(-1);
		this.state = 267;
		this._errHandler.sync(this);
		var _alt = this._interp.adaptivePredict(this._input, 41, this._ctx)
		while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
			if (_alt === 1) {
				if (this._parseListeners !== null) {
					this.triggerExitRuleEvent();
				}
				_prevctx = localctx;
				localctx = new TermContext(this, _parentctx, _parentState);
				this.pushNewRecursionContext(localctx, _startState, ASPCore2_0cParser.RULE_term);
				this.state = 261;
				if (!(this.precpred(this._ctx, 1))) {
					throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
				}
				this.state = 262;
				this.arithop();
				this.state = 263;
				this.term(2);
			}
			this.state = 269;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
		}

	} catch (error) {
		if (error instanceof antlr4.error.RecognitionException) {
			localctx.exception = error;
			this._errHandler.reportError(this, error);
			this._errHandler.recover(this, error);
		} else {
			throw error;
		}
	} finally {
		this.unrollRecursionContexts(_parentctx)
	}
	return localctx;
};


function ArithopContext(parser, parent, invokingState) {
	if (parent === undefined) {
		parent = null;
	}
	if (invokingState === undefined || invokingState === null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
	this.parser = parser;
	this.ruleIndex = ASPCore2_0cParser.RULE_arithop;
	return this;
}

ArithopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArithopContext.prototype.constructor = ArithopContext;

ArithopContext.prototype.PLUS = function () {
	return this.getToken(ASPCore2_0cParser.PLUS, 0);
};

ArithopContext.prototype.MINUS = function () {
	return this.getToken(ASPCore2_0cParser.MINUS, 0);
};

ArithopContext.prototype.TIMES = function () {
	return this.getToken(ASPCore2_0cParser.TIMES, 0);
};

ArithopContext.prototype.DIV = function () {
	return this.getToken(ASPCore2_0cParser.DIV, 0);
};

ArithopContext.prototype.enterRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.enterArithop(this);
	}
};

ArithopContext.prototype.exitRule = function (listener) {
	if (listener instanceof ASPCore2_0cListener) {
		listener.exitArithop(this);
	}
};


ASPCore2_0cParser.ArithopContext = ArithopContext;

ASPCore2_0cParser.prototype.arithop = function () {

	var localctx = new ArithopContext(this, this._ctx, this.state);
	this.enterRule(localctx, 52, ASPCore2_0cParser.RULE_arithop);
	var _la = 0; // Token type
	try {
		this.enterOuterAlt(localctx, 1);
		this.state = 270;
		_la = this._input.LA(1);
		if (!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ASPCore2_0cParser.PLUS) | (1 << ASPCore2_0cParser.MINUS) | (1 << ASPCore2_0cParser.TIMES) | (1 << ASPCore2_0cParser.DIV))) !== 0))) {
			this._errHandler.recoverInline(this);
		} else {
			this._errHandler.reportMatch(this);
			this.consume();
		}
	} catch (re) {
		if (re instanceof antlr4.error.RecognitionException) {
			localctx.exception = re;
			this._errHandler.reportError(this, re);
			this._errHandler.recover(this, re);
		} else {
			throw re;
		}
	} finally {
		this.exitRule();
	}
	return localctx;
};


ASPCore2_0cParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 25:
			return this.term_sempred(localctx, predIndex);
		default:
			throw "No predicate with index:" + ruleIndex;
	}
};

ASPCore2_0cParser.prototype.term_sempred = function (localctx, predIndex) {
	switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ASPCore2_0cParser = ASPCore2_0cParser;
