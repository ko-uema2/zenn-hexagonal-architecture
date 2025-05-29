import type { RecordStorage } from "./recordStorage";
import type { RecordType } from "./voiceCounter";
import type { VoiceInterface } from "./voiceInterface";

export class VoiceResultHandler {
	private voiceInterface: VoiceInterface;
	private recordStorage: RecordStorage;

	constructor(voiceInterface: VoiceInterface, recordStorage: RecordStorage) {
		this.voiceInterface = voiceInterface;
		this.recordStorage = recordStorage;
	}

	handleResult(result: {
		record: RecordType;
		updatedAnimal: keyof RecordType;
	}) {
		if (result.updatedAnimal === "unknown") {
			this.voiceInterface.playSound("知らない鳴き声を受け取りました");
		}
		this.recordStorage.save(result.record);
	}
}
