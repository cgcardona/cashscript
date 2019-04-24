// Generated from src/grammar/CashScript.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CashScriptLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly Bytes = 41;
	public static readonly BooleanLiteral = 42;
	public static readonly NumberUnit = 43;
	public static readonly NumberLiteral = 44;
	public static readonly StringLiteral = 45;
	public static readonly HexLiteral = 46;
	public static readonly ReservedFunctions = 47;
	public static readonly Identifier = 48;
	public static readonly WHITESPACE = 49;
	public static readonly COMMENT = 50;
	public static readonly LINE_COMMENT = 51;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "Bytes", 
		"BooleanLiteral", "NumberUnit", "NumberLiteral", "StringLiteral", "HexLiteral", 
		"ReservedFunctions", "Identifier", "WHITESPACE", "COMMENT", "LINE_COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'contract'", "'{'", "'}'", "'function'", "'='", "';'", "'if'", 
		"'('", "')'", "'else'", "'return'", "','", "'.'", "'++'", "'--'", "'!'", 
		"'~'", "'+'", "'-'", "'/'", "'%'", "'<'", "'<='", "'>'", "'>='", "'=='", 
		"'!='", "'==='", "'!=='", "'&'", "'^'", "'|'", "'&&'", "'||'", "'int'", 
		"'bool'", "'string'", "'address'", "'pubkey'", "'sig'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "Bytes", 
		"BooleanLiteral", "NumberUnit", "NumberLiteral", "StringLiteral", "HexLiteral", 
		"ReservedFunctions", "Identifier", "WHITESPACE", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CashScriptLexer._LITERAL_NAMES, CashScriptLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CashScriptLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CashScriptLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CashScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return CashScriptLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CashScriptLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CashScriptLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CashScriptLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x025\u01F7\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03" +
		" \x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03%" +
		"\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		")\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0107\n*\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0112\n+\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u014D\n,\x03" +
		"-\x03-\x07-\u0151\n-\f-\x0E-\u0154\v-\x03-\x03-\x06-\u0158\n-\r-\x0E-" +
		"\u0159\x05-\u015C\n-\x03.\x03.\x07.\u0160\n.\f.\x0E.\u0163\v.\x03.\x03" +
		".\x03.\x07.\u0168\n.\f.\x0E.\u016B\v.\x03.\x05.\u016E\n.\x03/\x03/\x03" +
		"/\x06/\u0173\n/\r/\x0E/\u0174\x030\x030\x030\x030\x030\x030\x030\x030" +
		"\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u01CF\n0\x03" +
		"1\x031\x071\u01D3\n1\f1\x0E1\u01D6\v1\x032\x062\u01D9\n2\r2\x0E2\u01DA" +
		"\x032\x032\x033\x033\x033\x033\x073\u01E3\n3\f3\x0E3\u01E6\v3\x033\x03" +
		"3\x033\x033\x033\x034\x034\x034\x034\x074\u01F1\n4\f4\x0E4\u01F4\v4\x03" +
		"4\x034\x03\u01E4\x02\x025\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
		"\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I" +
		"\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x02" +
		"1a\x022c\x023e\x024g\x025\x03\x02\r\x03\x023;\x03\x022;\x04\x02GGgg\x06" +
		"\x02\f\f\x0F\x0F$$^^\x06\x02\f\f\x0F\x0F))^^\x04\x02ZZzz\x05\x022;CHc" +
		"h\x04\x02C\\c|\x07\x02&&2;C\\aac|\x05\x02\v\f\x0E\x0F\"\"\x04\x02\f\f" +
		"\x0F\x0F\x02\u0219\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
		"\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r" +
		"\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13" +
		"\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19" +
		"\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F" +
		"\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02" +
		"\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02" +
		"\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03" +
		"\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02" +
		"\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02" +
		"A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02" +
		"\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02" +
		"\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03" +
		"\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02" +
		"\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02" +
		"c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x03i\x03\x02" +
		"\x02\x02\x05r\x03\x02\x02\x02\x07t\x03\x02\x02\x02\tv\x03\x02\x02\x02" +
		"\v\x7F\x03\x02\x02\x02\r\x81\x03\x02\x02\x02\x0F\x83\x03\x02\x02\x02\x11" +
		"\x86\x03\x02\x02\x02\x13\x88\x03\x02\x02\x02\x15\x8A\x03\x02\x02\x02\x17" +
		"\x8F\x03\x02\x02\x02\x19\x96\x03\x02\x02\x02\x1B\x98\x03\x02\x02\x02\x1D" +
		"\x9A\x03\x02\x02\x02\x1F\x9D\x03\x02\x02\x02!\xA0\x03\x02\x02\x02#\xA2" +
		"\x03\x02\x02\x02%\xA4\x03\x02\x02\x02\'\xA6\x03\x02\x02\x02)\xA8\x03\x02" +
		"\x02\x02+\xAA\x03\x02\x02\x02-\xAC\x03\x02\x02\x02/\xAE\x03\x02\x02\x02" +
		"1\xB1\x03\x02\x02\x023\xB3\x03\x02\x02\x025\xB6\x03\x02\x02\x027\xB9\x03" +
		"\x02\x02\x029\xBC\x03\x02\x02\x02;\xC0\x03\x02\x02\x02=\xC4\x03\x02\x02" +
		"\x02?\xC6\x03\x02\x02\x02A\xC8\x03\x02\x02\x02C\xCA\x03\x02\x02\x02E\xCD" +
		"\x03\x02\x02\x02G\xD0\x03\x02\x02\x02I\xD4\x03\x02\x02\x02K\xD9\x03\x02" +
		"\x02\x02M\xE0\x03\x02\x02\x02O\xE8\x03\x02\x02\x02Q\xEF\x03\x02\x02\x02" +
		"S\u0106\x03\x02\x02\x02U\u0111\x03\x02\x02\x02W\u014C\x03\x02\x02\x02" +
		"Y\u014E\x03\x02\x02\x02[\u016D\x03\x02\x02\x02]\u016F\x03\x02\x02\x02" +
		"_\u01CE\x03\x02\x02\x02a\u01D0\x03\x02\x02\x02c\u01D8\x03\x02\x02\x02" +
		"e\u01DE\x03\x02\x02\x02g\u01EC\x03\x02\x02\x02ij\x07e\x02\x02jk\x07q\x02" +
		"\x02kl\x07p\x02\x02lm\x07v\x02\x02mn\x07t\x02\x02no\x07c\x02\x02op\x07" +
		"e\x02\x02pq\x07v\x02\x02q\x04\x03\x02\x02\x02rs\x07}\x02\x02s\x06\x03" +
		"\x02\x02\x02tu\x07\x7F\x02\x02u\b\x03\x02\x02\x02vw\x07h\x02\x02wx\x07" +
		"w\x02\x02xy\x07p\x02\x02yz\x07e\x02\x02z{\x07v\x02\x02{|\x07k\x02\x02" +
		"|}\x07q\x02\x02}~\x07p\x02\x02~\n\x03\x02\x02\x02\x7F\x80\x07?\x02\x02" +
		"\x80\f\x03\x02\x02\x02\x81\x82\x07=\x02\x02\x82\x0E\x03\x02\x02\x02\x83" +
		"\x84\x07k\x02\x02\x84\x85\x07h\x02\x02\x85\x10\x03\x02\x02\x02\x86\x87" +
		"\x07*\x02\x02\x87\x12\x03\x02\x02\x02\x88\x89\x07+\x02\x02\x89\x14\x03" +
		"\x02\x02\x02\x8A\x8B\x07g\x02\x02\x8B\x8C\x07n\x02\x02\x8C\x8D\x07u\x02" +
		"\x02\x8D\x8E\x07g\x02\x02\x8E\x16\x03\x02\x02\x02\x8F\x90\x07t\x02\x02" +
		"\x90\x91\x07g\x02\x02\x91\x92\x07v\x02\x02\x92\x93\x07w\x02\x02\x93\x94" +
		"\x07t\x02\x02\x94\x95\x07p\x02\x02\x95\x18\x03\x02\x02\x02\x96\x97\x07" +
		".\x02\x02\x97\x1A\x03\x02\x02\x02\x98\x99\x070\x02\x02\x99\x1C\x03\x02" +
		"\x02\x02\x9A\x9B\x07-\x02\x02\x9B\x9C\x07-\x02\x02\x9C\x1E\x03\x02\x02" +
		"\x02\x9D\x9E\x07/\x02\x02\x9E\x9F\x07/\x02\x02\x9F \x03\x02\x02\x02\xA0" +
		"\xA1\x07#\x02\x02\xA1\"\x03\x02\x02\x02\xA2\xA3\x07\x80\x02\x02\xA3$\x03" +
		"\x02\x02\x02\xA4\xA5\x07-\x02\x02\xA5&\x03\x02\x02\x02\xA6\xA7\x07/\x02" +
		"\x02\xA7(\x03\x02\x02\x02\xA8\xA9\x071\x02\x02\xA9*\x03\x02\x02\x02\xAA" +
		"\xAB\x07\'\x02\x02\xAB,\x03\x02\x02\x02\xAC\xAD\x07>\x02\x02\xAD.\x03" +
		"\x02\x02\x02\xAE\xAF\x07>\x02\x02\xAF\xB0\x07?\x02\x02\xB00\x03\x02\x02" +
		"\x02\xB1\xB2\x07@\x02\x02\xB22\x03\x02\x02\x02\xB3\xB4\x07@\x02\x02\xB4" +
		"\xB5\x07?\x02\x02\xB54\x03\x02\x02\x02\xB6\xB7\x07?\x02\x02\xB7\xB8\x07" +
		"?\x02\x02\xB86\x03\x02\x02\x02\xB9\xBA\x07#\x02\x02\xBA\xBB\x07?\x02\x02" +
		"\xBB8\x03\x02\x02\x02\xBC\xBD\x07?\x02\x02\xBD\xBE\x07?\x02\x02\xBE\xBF" +
		"\x07?\x02\x02\xBF:\x03\x02\x02\x02\xC0\xC1\x07#\x02\x02\xC1\xC2\x07?\x02" +
		"\x02\xC2\xC3\x07?\x02\x02\xC3<\x03\x02\x02\x02\xC4\xC5\x07(\x02\x02\xC5" +
		">\x03\x02\x02\x02\xC6\xC7\x07`\x02\x02\xC7@\x03\x02\x02\x02\xC8\xC9\x07" +
		"~\x02\x02\xC9B\x03\x02\x02\x02\xCA\xCB\x07(\x02\x02\xCB\xCC\x07(\x02\x02" +
		"\xCCD\x03\x02\x02\x02\xCD\xCE\x07~\x02\x02\xCE\xCF\x07~\x02\x02\xCFF\x03" +
		"\x02\x02\x02\xD0\xD1\x07k\x02\x02\xD1\xD2\x07p\x02\x02\xD2\xD3\x07v\x02" +
		"\x02\xD3H\x03\x02\x02\x02\xD4\xD5\x07d\x02\x02\xD5\xD6\x07q\x02\x02\xD6" +
		"\xD7\x07q\x02\x02\xD7\xD8\x07n\x02\x02\xD8J\x03\x02\x02\x02\xD9\xDA\x07" +
		"u\x02\x02\xDA\xDB\x07v\x02\x02\xDB\xDC\x07t\x02\x02\xDC\xDD\x07k\x02\x02" +
		"\xDD\xDE\x07p\x02\x02\xDE\xDF\x07i\x02\x02\xDFL\x03\x02\x02\x02\xE0\xE1" +
		"\x07c\x02\x02\xE1\xE2\x07f\x02\x02\xE2\xE3\x07f\x02\x02\xE3\xE4\x07t\x02" +
		"\x02\xE4\xE5\x07g\x02\x02\xE5\xE6\x07u\x02\x02\xE6\xE7\x07u\x02\x02\xE7" +
		"N\x03\x02\x02\x02\xE8\xE9\x07r\x02\x02\xE9\xEA\x07w\x02\x02\xEA\xEB\x07" +
		"d\x02\x02\xEB\xEC\x07m\x02\x02\xEC\xED\x07g\x02\x02\xED\xEE\x07{\x02\x02" +
		"\xEEP\x03\x02\x02\x02\xEF\xF0\x07u\x02\x02\xF0\xF1\x07k\x02\x02\xF1\xF2" +
		"\x07i\x02\x02\xF2R\x03\x02\x02\x02\xF3\xF4\x07d\x02\x02\xF4\xF5\x07{\x02" +
		"\x02\xF5\xF6\x07v\x02\x02\xF6\xF7\x07g\x02\x02\xF7\u0107\x07u\x02\x02" +
		"\xF8\xF9\x07d\x02\x02\xF9\xFA\x07{\x02\x02\xFA\xFB\x07v\x02\x02\xFB\xFC" +
		"\x07g\x02\x02\xFC\xFD\x07u\x02\x02\xFD\xFE\x074\x02\x02\xFE\u0107\x07" +
		"2\x02\x02\xFF\u0100\x07d\x02\x02\u0100\u0101\x07{\x02\x02\u0101\u0102" +
		"\x07v\x02\x02\u0102\u0103\x07g\x02\x02\u0103\u0104\x07u\x02\x02\u0104" +
		"\u0105\x075\x02\x02\u0105\u0107\x074\x02\x02\u0106\xF3\x03\x02\x02\x02" +
		"\u0106\xF8\x03\x02\x02\x02\u0106\xFF\x03\x02\x02\x02\u0107T\x03\x02\x02" +
		"\x02\u0108\u0109\x07v\x02\x02\u0109\u010A\x07t\x02\x02\u010A\u010B\x07" +
		"w\x02\x02\u010B\u0112\x07g\x02\x02\u010C\u010D\x07h\x02\x02\u010D\u010E" +
		"\x07c\x02\x02\u010E\u010F\x07n\x02\x02\u010F\u0110\x07u\x02\x02\u0110" +
		"\u0112\x07g\x02\x02\u0111\u0108\x03\x02\x02\x02\u0111\u010C\x03\x02\x02" +
		"\x02\u0112V\x03\x02\x02\x02\u0113\u0114\x07u\x02\x02\u0114\u0115\x07c" +
		"\x02\x02\u0115\u0116\x07v\x02\x02\u0116\u0117\x07q\x02\x02\u0117\u0118" +
		"\x07u\x02\x02\u0118\u0119\x07j\x02\x02\u0119\u011A\x07k\x02\x02\u011A" +
		"\u014D\x07u\x02\x02\u011B\u011C\x07u\x02\x02\u011C\u011D\x07c\x02\x02" +
		"\u011D\u011E\x07v\x02\x02\u011E\u014D\x07u\x02\x02\u011F\u0120\x07h\x02" +
		"\x02\u0120\u0121\x07k\x02\x02\u0121\u0122\x07p\x02\x02\u0122\u0123\x07" +
		"p\x02\x02\u0123\u0124\x07g\x02\x02\u0124\u014D\x07{\x02\x02\u0125\u0126" +
		"\x07d\x02\x02\u0126\u0127\x07k\x02\x02\u0127\u0128\x07v\x02\x02\u0128" +
		"\u014D\x07u\x02\x02\u0129\u012A\x07d\x02\x02\u012A\u012B\x07k\x02\x02" +
		"\u012B\u012C\x07v\x02\x02\u012C\u012D\x07e\x02\x02\u012D\u012E\x07q\x02" +
		"\x02\u012E\u012F\x07k\x02\x02\u012F\u014D\x07p\x02\x02\u0130\u0131\x07" +
		"u\x02\x02\u0131\u0132\x07g\x02\x02\u0132\u0133\x07e\x02\x02\u0133\u0134" +
		"\x07q\x02\x02\u0134\u0135\x07p\x02\x02\u0135\u0136\x07f\x02\x02\u0136" +
		"\u014D\x07u\x02\x02\u0137\u0138\x07o\x02\x02\u0138\u0139\x07k\x02\x02" +
		"\u0139\u013A\x07p\x02\x02\u013A\u013B\x07w\x02\x02\u013B\u013C\x07v\x02" +
		"\x02\u013C\u013D\x07g\x02\x02\u013D\u014D\x07u\x02\x02\u013E\u013F\x07" +
		"j\x02\x02\u013F\u0140\x07q\x02\x02\u0140\u0141\x07w\x02\x02\u0141\u0142" +
		"\x07t\x02\x02\u0142\u014D\x07u\x02\x02\u0143\u0144\x07f\x02\x02\u0144" +
		"\u0145\x07c\x02\x02\u0145\u0146\x07{\x02\x02\u0146\u014D\x07u\x02\x02" +
		"\u0147\u0148\x07y\x02\x02\u0148\u0149\x07g\x02\x02\u0149\u014A\x07g\x02" +
		"\x02\u014A\u014B\x07m\x02\x02\u014B\u014D\x07u\x02\x02\u014C\u0113\x03" +
		"\x02\x02\x02\u014C\u011B\x03\x02\x02\x02\u014C\u011F\x03\x02\x02\x02\u014C" +
		"\u0125\x03\x02\x02\x02\u014C\u0129\x03\x02\x02\x02\u014C\u0130\x03\x02" +
		"\x02\x02\u014C\u0137\x03\x02\x02\x02\u014C\u013E\x03\x02\x02\x02\u014C" +
		"\u0143\x03\x02\x02\x02\u014C\u0147\x03\x02\x02\x02\u014DX\x03\x02\x02" +
		"\x02\u014E\u0152\t\x02\x02\x02\u014F\u0151\t\x03\x02\x02\u0150\u014F\x03" +
		"\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152" +
		"\u0153\x03\x02\x02\x02\u0153\u015B\x03\x02\x02\x02\u0154\u0152\x03\x02" +
		"\x02\x02\u0155\u0157\t\x04\x02\x02\u0156\u0158\t\x03\x02\x02\u0157\u0156" +
		"\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02" +
		"\u0159\u015A\x03\x02\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u0155\x03" +
		"\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015CZ\x03\x02\x02\x02\u015D" +
		"\u0161\x07$\x02\x02\u015E\u0160\n\x05\x02\x02\u015F\u015E\x03\x02\x02" +
		"\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0162" +
		"\x03\x02\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02" +
		"\u0164\u016E\x07$\x02\x02\u0165\u0169\x07)\x02\x02\u0166\u0168\n\x06\x02" +
		"\x02\u0167\u0166\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167" +
		"\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x03\x02\x02\x02" +
		"\u016B\u0169\x03\x02\x02\x02\u016C\u016E\x07)\x02\x02\u016D\u015D\x03" +
		"\x02\x02\x02\u016D\u0165\x03\x02\x02\x02\u016E\\\x03\x02\x02\x02\u016F" +
		"\u0170\x072\x02\x02\u0170\u0172\t\x07\x02\x02\u0171\u0173\t\b\x02\x02" +
		"\u0172\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0172\x03" +
		"\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175^\x03\x02\x02\x02\u0176" +
		"\u0177\x07t\x02\x02\u0177\u0178\x07g\x02\x02\u0178\u0179\x07s\x02\x02" +
		"\u0179\u017A\x07w\x02\x02\u017A\u017B\x07k\x02\x02\u017B\u017C\x07t\x02" +
		"\x02\u017C\u01CF\x07g\x02\x02\u017D\u017E\x07c\x02\x02\u017E\u017F\x07" +
		"d\x02\x02\u017F\u01CF\x07u\x02\x02\u0180\u0181\x07o\x02\x02\u0181\u0182" +
		"\x07k\x02\x02\u0182\u01CF\x07p\x02\x02\u0183\u0184\x07o\x02\x02\u0184" +
		"\u0185\x07c\x02\x02\u0185\u01CF\x07z\x02\x02\u0186\u0187\x07y\x02\x02" +
		"\u0187\u0188\x07k\x02\x02\u0188\u0189\x07v\x02\x02\u0189\u018A\x07j\x02" +
		"\x02\u018A\u018B\x07k\x02\x02\u018B\u01CF\x07p\x02\x02\u018C\u018D\x07" +
		"t\x02\x02\u018D\u018E\x07k\x02\x02\u018E\u018F\x07r\x02\x02\u018F\u0190" +
		"\x07g\x02\x02\u0190\u0191\x07o\x02\x02\u0191\u0192\x07f\x02\x02\u0192" +
		"\u0193\x073\x02\x02\u0193\u0194\x078\x02\x02\u0194\u01CF\x072\x02\x02" +
		"\u0195\u0196\x07u\x02\x02\u0196\u0197\x07j\x02\x02\u0197\u0198\x07c\x02" +
		"\x02\u0198\u01CF\x073\x02\x02\u0199\u019A\x07u\x02\x02\u019A\u019B\x07" +
		"j\x02\x02\u019B\u019C\x07c\x02\x02\u019C\u019D\x074\x02\x02\u019D\u019E" +
		"\x077\x02\x02\u019E\u01CF\x078\x02\x02\u019F\u01A0\x07j\x02\x02\u01A0" +
		"\u01A1\x07c\x02\x02\u01A1\u01A2\x07u\x02\x02\u01A2\u01A3\x07j\x02\x02" +
		"\u01A3\u01A4\x073\x02\x02\u01A4\u01A5\x078\x02\x02\u01A5\u01CF\x072\x02" +
		"\x02\u01A6\u01A7\x07j\x02\x02\u01A7\u01A8\x07c\x02\x02\u01A8\u01A9\x07" +
		"u\x02\x02\u01A9\u01AA\x07j\x02\x02\u01AA\u01AB\x074\x02\x02\u01AB\u01AC" +
		"\x077\x02\x02\u01AC\u01CF\x078\x02\x02\u01AD\u01AE\x07e\x02\x02\u01AE" +
		"\u01AF\x07j\x02\x02\u01AF\u01B0\x07g\x02\x02\u01B0\u01B1\x07e\x02\x02" +
		"\u01B1\u01B2\x07m\x02\x02\u01B2\u01B3\x07U\x02\x02\u01B3\u01B4\x07k\x02" +
		"\x02\u01B4\u01CF\x07i\x02\x02\u01B5\u01B6\x07e\x02\x02\u01B6\u01B7\x07" +
		"j\x02\x02\u01B7\u01B8\x07g\x02\x02\u01B8\u01B9\x07e\x02\x02\u01B9\u01BA" +
		"\x07m\x02\x02\u01BA\u01BB\x07F\x02\x02\u01BB\u01BC\x07c\x02\x02\u01BC" +
		"\u01BD\x07v\x02\x02\u01BD\u01BE\x07c\x02\x02\u01BE\u01BF\x07U\x02\x02" +
		"\u01BF\u01C0\x07k\x02\x02\u01C0\u01CF\x07i\x02\x02\u01C1\u01C2\x07e\x02" +
		"\x02\u01C2\u01C3\x07j\x02\x02\u01C3\u01C4\x07g\x02\x02\u01C4\u01C5\x07" +
		"e\x02\x02\u01C5\u01C6\x07m\x02\x02\u01C6\u01C7\x07O\x02\x02\u01C7\u01C8" +
		"\x07w\x02\x02\u01C8\u01C9\x07n\x02\x02\u01C9\u01CA\x07v\x02\x02\u01CA" +
		"\u01CB\x07k\x02\x02\u01CB\u01CC\x07U\x02\x02\u01CC\u01CD\x07k\x02\x02" +
		"\u01CD\u01CF\x07i\x02\x02\u01CE\u0176\x03\x02\x02\x02\u01CE\u017D\x03" +
		"\x02\x02\x02\u01CE\u0180\x03\x02\x02\x02\u01CE\u0183\x03\x02\x02\x02\u01CE" +
		"\u0186\x03\x02\x02\x02\u01CE\u018C\x03\x02\x02\x02\u01CE\u0195\x03\x02" +
		"\x02\x02\u01CE\u0199\x03\x02\x02\x02\u01CE\u019F\x03\x02\x02\x02\u01CE" +
		"\u01A6\x03\x02\x02\x02\u01CE\u01AD\x03\x02\x02\x02\u01CE\u01B5\x03\x02" +
		"\x02\x02\u01CE\u01C1\x03\x02\x02\x02\u01CF`\x03\x02\x02\x02\u01D0\u01D4" +
		"\t\t\x02\x02\u01D1\u01D3\t\n\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3" +
		"\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02" +
		"\x02\x02\u01D5b\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01D9" +
		"\t\v\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA" +
		"\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02" +
		"\x02\x02\u01DC\u01DD\b2\x02\x02\u01DDd\x03\x02\x02\x02\u01DE\u01DF\x07" +
		"1\x02\x02\u01DF\u01E0\x07,\x02\x02\u01E0\u01E4\x03\x02\x02\x02\u01E1\u01E3" +
		"\v\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02" +
		"\u01E4\u01E5\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01E7\x03" +
		"\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01E8\x07,\x02\x02\u01E8" +
		"\u01E9\x071\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\b3\x03\x02" +
		"\u01EBf\x03\x02\x02\x02\u01EC\u01ED\x071\x02\x02\u01ED\u01EE\x071\x02" +
		"\x02\u01EE\u01F2\x03\x02\x02\x02\u01EF\u01F1\n\f\x02\x02\u01F0\u01EF\x03" +
		"\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2" +
		"\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03\x02\x02\x02\u01F4\u01F2\x03\x02" +
		"\x02\x02\u01F5\u01F6\b4\x03\x02\u01F6h\x03\x02\x02\x02\x12\x02\u0106\u0111" +
		"\u014C\u0152\u0159\u015B\u0161\u0169\u016D\u0174\u01CE\u01D4\u01DA\u01E4" +
		"\u01F2\x04\b\x02\x02\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CashScriptLexer.__ATN) {
			CashScriptLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CashScriptLexer._serializedATN));
		}

		return CashScriptLexer.__ATN;
	}

}
