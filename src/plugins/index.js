import {default as disjuctionRewrite} from "./simple/disjunction";
import {default as addDot} from "./errors/addDot"
import {default as removeHead} from "./errors/removeVariableInHead"

export let plugins = [
	disjuctionRewrite,
	addDot,
	removeHead
];