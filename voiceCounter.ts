export type RecordType = { dog: number; cat: number; unknown: number };

export enum AnimalEvent {
	Dog = "Dog",
	Cat = "Cat",
	Unknown = "Unknown",
}

// recordを更新する責務
export class VoiceCounter {
	private record: RecordType;

	constructor(record: RecordType) {
		this.record = record;
	}

	increment(animalEvent: AnimalEvent): RecordType {
		if (animalEvent === AnimalEvent.Dog) this.record.dog += 1;
		else if (animalEvent === AnimalEvent.Cat) this.record.cat += 1;
		else this.record.unknown += 1;
		return { ...this.record };
	}
}
