type Mio = Instance & Indexable<Instance>;

const a = {} as Mio;

if (a.ClassName === "DataModel") {
	const x = a.Noodle;
}
