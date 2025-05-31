import { AnimalJudge } from "./animalJudge";
import { animalJudgePolicy } from "./animalJudgePolicy";
import { RecordHolder } from "./recordHolder";
import { RecordStorage } from "./recordStorage";
import { VoiceInterface } from "./voiceInterface";
import { VoiceResultHandler } from "./voiceResultHandler";

const voiceInterface = new VoiceInterface();
const RECORD_FILE = "./storage/record.json";
const recordStorage = new RecordStorage(RECORD_FILE);
const record = recordStorage.load();
const animalJudge = new AnimalJudge(animalJudgePolicy);
const recordHolder = new RecordHolder(record);
const voiceResultHandler = new VoiceResultHandler(
	voiceInterface,
	recordStorage,
);

voiceInterface.hearVoice("鳴き声を入力してください: ", (input: string) => {
	const animalEvent = animalJudge.judge(input);
	const updatedRecord = recordHolder.increment(animalEvent);
	voiceResultHandler.handleResult({
		record: updatedRecord,
		updatedAnimal: animalEvent,
	});
});
