import {default as disjuctionRewrite} from "./simple/disjunction";
import {default as addDot} from "./errors/addDot"
import {default as removeHead} from "./errors/removeVariableInHead"
import {default as addDomainAtom} from "./errors/addDomainAtom"

export let plugins = [
	disjuctionRewrite,
	addDot,
	removeHead,
	addDomainAtom
];