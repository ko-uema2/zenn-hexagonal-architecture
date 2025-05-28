import { RecordStorage } from "./recordStorage";
import { VoiceCounter } from "./voiceCounter";
import { VoiceInterface } from "./voiceInterface";

const voiceInterface = new VoiceInterface();

const RECORD_FILE = "./storage/record.json";
const recordStorage = new RecordStorage(RECORD_FILE);
const record = recordStorage.load();
const voiceCounter = new VoiceCounter(record);

voiceInterface.hearVoice("鳴き声を入力してください: ", (input: string) => {
	const animal = VoiceCounter.judgeAnimal(input);
	const updatedRecord = voiceCounter.incrementAnimal(animal);
	if (animal === "unknown") {
		voiceInterface.playSound("知らない鳴き声を受け取りました");
	}
	recordStorage.save(updatedRecord);
});
