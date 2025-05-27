import * as fs from "node:fs";
import * as readline from "node:readline";

const RECORD_FILE = "./storage/record.json";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let record: { dog: number; cat: number; unknown: number };
if (fs.existsSync(RECORD_FILE)) {
	const data = fs.readFileSync(RECORD_FILE, "utf-8");
	record = JSON.parse(data);
} else {
	record = { dog: 0, cat: 0, unknown: 0 };
}

rl.question("鳴き声を入力してください: ", (answer) => {
	const input = answer.trim();
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
		console.log("知らない鳴き声を受け取りました");
	}
	fs.writeFileSync(RECORD_FILE, JSON.stringify(record, null, 2), "utf-8");
	rl.close();
});
