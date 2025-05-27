export type RecordType = { dog: number; cat: number; unknown: number };

export class VoiceCounter {
	private record: RecordType;

	constructor(record: RecordType) {
		this.record = record;
	}

	increment(input: string): {
		record: RecordType;
		updatedProperty: keyof RecordType;
	} {
		if (
			input === "ワン" ||
			input === "わんわん" ||
			input === "ワンワン" ||
			input === "わん"
		) {
			this.record.dog += 1;
			return { record: { ...this.record }, updatedProperty: "dog" };
		}

		if (
			input === "ニャン" ||
			input === "にゃん" ||
			input === "にゃんにゃん" ||
			input === "にゃーん"
		) {
			this.record.cat += 1;
			return { record: { ...this.record }, updatedProperty: "cat" };
		}

		this.record.unknown += 1;
		return { record: { ...this.record }, updatedProperty: "unknown" };
	}
}
