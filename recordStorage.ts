// アプリケーション・サービス層: ストレージ（record.json）を扱うリポジトリ
import * as fs from "node:fs";

export class RecordStorage {
	private filePath: string;

	constructor(filePath: string) {
		this.filePath = filePath;
	}

	// record.jsonへの保存
	save(record: { dog: number; cat: number; unknown: number }) {
		fs.writeFileSync(this.filePath, JSON.stringify(record, null, 2), "utf-8");
	}

	// record.jsonからの読込
	load(): { dog: number; cat: number; unknown: number } {
		if (fs.existsSync(this.filePath)) {
			const data = fs.readFileSync(this.filePath, "utf-8");
			return JSON.parse(data);
		}
		return { dog: 0, cat: 0, unknown: 0 };
	}
}
