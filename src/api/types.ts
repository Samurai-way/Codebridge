export type CardObject = RootObjectChild[];
export type RootObjectChildLaunches = {
	id: string;
	provider: string;
}
export type RootObjectChildEvents = {
	id: string;
	provider: string;
}
export type RootObjectChild = {
	id: number;
	featured: boolean;
	title: string;
	url: string;
	imageUrl: string;
	newsSite: string;
	summary: string;
	publishedAt: string;
	launches: RootObjectChildLaunches[];
	events: RootObjectChildEvents[];
}

export type CardType = {
	id: number,
	title: string,
	url: string,
	imageUrl: string,
	newsSite: string,
	summary: string,
	publishedAt: string,
	updatedAt: string,
	featured: boolean,
	launches: [],
	events: []
}