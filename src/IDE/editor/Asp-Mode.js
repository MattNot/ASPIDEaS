const TextMode = window.ace.acequire("ace/mode/text").Mode;

export class AspHighLightsRules extends window.ace.acequire("ace/mode/text_highlight_rules").TextHighlightRules {
	constructor() {
		super();
		this.$rules = {
			"start": [
				{
					token: "keyword", //Atoms with terms
					regex: "[a-z]\\w*\\(",
					next: "atomDef"
				},
				{
					token: "variable", //Atoms w/o terms
					regex: "[a-z]\\w*"
				},
				{
					token: "keyword",
					regex: ":-"
				},
				{
					token: "keyword",
					regex: "^:~"
				},
				{
					token: "keyword",
					regex: "\\."
				},
				{
					token: "keyword.operator",
					regex: "#(max|min|sum|count)\\{",
					next: "aggrCicle"
				},
				{
					token: "keyword.operator",
					regex: "}"
				},
				{
					token: "comment",
					regex: "%.+"
				}
			],
			"atomDef": [
				{
					token: "variable",
					regex: "[A-Z]\\w*",
					next: "termList"
				},
				{
					token: "variable",
					regex: "\\w+",
					next: "termList"
				},
				{
					token: "variable",
					regex: "\"\\w+\"",
					next: "termList"
				}
			],
			"termList": [
				{
					token: "text",
					regex: ",",
					next: "atomDef"
				},
				{
					token: "keyword",
					regex: "\\)\\.*",
					next: "start"
				}
			],
			"aggrList": [
				{
					token: "text",
					regex: ",",
					next: "aggrCicle"
				},
				{
					token: "text",
					regex: ":",
					next: "start"
				}
			],
			"aggrCicle": [
				{
					token: "storage.type",
					regex: "[A-Z]\\w*",
					next: "aggrList"
				}
			]
		};
	}
}

export default class CustomAspMode extends TextMode {
	constructor() {
		super();
		this.HighlightRules = AspHighLightsRules;
		this.lineCommentStart = "%";
	}
}