export type RecordType = { dog: number; cat: number; unknown: number };

export class VoiceCounter {
	private record: RecordType;

	constructor(record: RecordType) {
		this.record = record;
	}

	// 鳴き声から動物種別を判定
	static judgeAnimal(input: string): keyof RecordType {
		if (
			input === "ワン" ||
			input === "わんわん" ||
			input === "ワンワン" ||
			input === "わん"
		) {
			return "dog";
		}
		if (
			input === "ニャン" ||
			input === "にゃん" ||
			input === "にゃんにゃん" ||
			input === "にゃーん"
		) {
			return "cat";
		}
		return "unknown";
	}

	// recordを更新
	incrementAnimal(animal: keyof RecordType): RecordType {
		this.record[animal] += 1;
		return { ...this.record };
	}
}
