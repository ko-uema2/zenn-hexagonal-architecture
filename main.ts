import * as fs from "node:fs";
import { VoiceInterface } from "./voiceInterface";

const RECORD_FILE = "./storage/record.json";
const voiceInterface = new VoiceInterface();

let record: { dog: number; cat: number; unknown: number };
if (fs.existsSync(RECORD_FILE)) {
	const data = fs.readFileSync(RECORD_FILE, "utf-8");
	record = JSON.parse(data);
} else {
	record = { dog: 0, cat: 0, unknown: 0 };
}

voiceInterface.hearVoice("鳴き声を聞き取っています: ", (input) => {
	if (
		input === "ワン" ||
		input === "わんわん" ||
		input === "ワンワン" ||
		input === "わん"
	) {
		record.dog += 1;
	} else if (
		input === "ニャン" ||
		input === "にゃん" ||
		input === "にゃんにゃん" ||
		input === "にゃーん"
	) {
		record.cat += 1;
	} else {
		record.unknown += 1;
		voiceInterface.playSound("知らない鳴き声を受け取りました");
	}
	fs.writeFileSync(RECORD_FILE, JSON.stringify(record, null, 2), "utf-8");
});
