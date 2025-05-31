import { AnimalEvent } from "./voiceCounter";

// 鳴き声判定ルールの型（ポリシーオブジェクト）
export type AnimalJudgePolicy = {
	[animal in AnimalEvent]?: string[];
};

// デフォルトの鳴き声判定ルール
export const animalJudgePolicy: AnimalJudgePolicy = {
	[AnimalEvent.Dog]: ["ワン", "わんわん", "ワンワン", "わん"],
	[AnimalEvent.Cat]: ["ニャン", "にゃん", "にゃんにゃん", "にゃーん"],
};
