import { RecordStorage } from "./recordStorage";
import { VoiceCounter } from "./voiceCounter";
import { VoiceInterface } from "./voiceInterface";
import { VoiceResultHandler } from "./voiceResultHandler";

const voiceInterface = new VoiceInterface();
const RECORD_FILE = "./storage/record.json";
const recordStorage = new RecordStorage(RECORD_FILE);
const record = recordStorage.load();
const voiceCounter = new VoiceCounter(record);
const voiceResultHandler = new VoiceResultHandler(
	voiceInterface,
	recordStorage,
);

voiceInterface.hearVoice("鳴き声を入力してください: ", (input: string) => {
	const result = voiceCounter.incrementAnimal(input);
	voiceResultHandler.handleResult(result);
});
