import {default as disjuctionRewrite} from "./simple/disjunction";
import {default as addDot} from "./errors/addDot"
import {default as removeHead} from "./errors/removeVariableInHead"
import {default as addDomainAtom} from "./errors/addDomainAtom"

let plugins;
export default plugins = [
	disjuctionRewrite,
	addDot,
	removeHead,
	addDomainAtom
];