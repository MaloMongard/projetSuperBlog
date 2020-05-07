export class Post {

	createdAt: string;
	loveIts: number;

	constructor(public title: string,
				public content: string) {
		this.createdAt = new Date().toString();
		this.loveIts = 0;
	}
}