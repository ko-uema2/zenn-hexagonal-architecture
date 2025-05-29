export type RecordType = { dog: number; cat: number; unknown: number };

export class VoiceCounter {
	private record: RecordType;

	constructor(record: RecordType) {
		this.record = record;
	}

	// 鳴き声から動物種別を判定（privateメソッド化）
	private judgeAnimal(input: string): keyof RecordType {
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

	// recordを更新（鳴き声を直接受け取り、内部でjudgeAnimalを利用）
	incrementAnimal(input: string): {
		record: RecordType;
		updatedAnimal: keyof RecordType;
	} {
		const animal = this.judgeAnimal(input);
		this.record[animal] += 1;
		return { record: { ...this.record }, updatedAnimal: animal };
	}
}
