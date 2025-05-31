export type RecordType = { dog: number; cat: number; unknown: number };

// record.jsonに格納されている値を保持し、値をインクリメントする責務のクラス
export class RecordHolder {
	private record: RecordType;

	constructor(record: RecordType) {
		this.record = record;
	}

	increment(key: keyof RecordType): RecordType {
		return { ...this.record, [key]: this.record[key] + 1 };
	}
}
