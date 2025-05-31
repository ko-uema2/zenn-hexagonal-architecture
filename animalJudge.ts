import type { AnimalJudgePolicy } from "./animalJudgePolicy";
import { AnimalEvent } from "./voiceCounter";

// 鳴き声から動物種別を判定する責務（ポリシーパターン適用）
export class AnimalJudge {
	private policy: AnimalJudgePolicy;

	constructor(policy: AnimalJudgePolicy) {
		this.policy = policy;
	}

	judge(input: string): AnimalEvent {
		for (const animal of Object.values(AnimalEvent)) {
			if (this.policy[animal]?.includes(input)) {
				return animal;
			}
		}
		return AnimalEvent.Unknown;
	}
}
