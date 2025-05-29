import { AnimalEvent } from "./voiceCounter";

// 鳴き声から動物種別を判定する責務
export class AnimalJudge {
	judge(input: string): AnimalEvent {
		if (
			input === "ワン" ||
			input === "わんわん" ||
			input === "ワンワン" ||
			input === "わん"
		) {
			return AnimalEvent.Dog;
		}
		if (
			input === "ニャン" ||
			input === "にゃん" ||
			input === "にゃんにゃん" ||
			input === "にゃーん"
		) {
			return AnimalEvent.Cat;
		}
		return AnimalEvent.Unknown;
	}
}
