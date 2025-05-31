import { AnimalJudge } from "./animalJudge";
import { animalJudgePolicy } from "./animalJudgePolicy";
import { RecordStorage } from "./recordStorage";
import { VoiceCounter } from "./voiceCounter";
import { VoiceInterface } from "./voiceInterface";
import { VoiceResultHandler } from "./voiceResultHandler";

const voiceInterface = new VoiceInterface();
const RECORD_FILE = "./storage/record.json";
const recordStorage = new RecordStorage(RECORD_FILE);
const record = recordStorage.load();
const animalJudge = new AnimalJudge(animalJudgePolicy);
const voiceCounter = new VoiceCounter(record);
const voiceResultHandler = new VoiceResultHandler(
	voiceInterface,
	recordStorage,
);

voiceInterface.hearVoice("鳴き声を入力してください: ", (input: string) => {
	const animalEvent = animalJudge.judge(input);
	const updatedRecord = voiceCounter.increment(animalEvent);
	voiceResultHandler.handleResult({
		record: updatedRecord,
		updatedAnimal: animalEvent,
	});
});
