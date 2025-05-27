import * as readline from "node:readline";

export class VoiceInterface {
	hearVoice(prompt: string, callback: (input: string) => void) {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rl.question(prompt, (answer) => {
			callback(answer.trim());
			rl.close();
		});
	}

	playSound(message: string) {
		console.log(message);
	}
}
