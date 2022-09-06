
//cjs module
const simple=require('./modulesecond.mjs')

simple()

//result:this is common js module.

//mjs module
import {simple} from "./modulesecond.mjs"

simple()

//result:this is mjs module