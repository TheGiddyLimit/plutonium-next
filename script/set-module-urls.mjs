import fs from "fs";

const [, , tag] = process.argv;
if (!tag) throw new Error(`No tag specified!`);

const downloadUrlBase = `https://github.com/TheGiddyLimit/plutonium-next/releases/download/${tag}`
const moduleMetas = {};

fs.readdirSync(".")
	.forEach(fname => {
		const mModule = /module-(?<ver>.*)\.json/.exec(fname);
		if (mModule) {
			const tgt = (moduleMetas[mModule.groups.ver] ||= {});
			tgt.manifestUrl = `${downloadUrlBase}/${fname}`;
			tgt.manifestJson = JSON.parse(fs.readFileSync(fname, "utf-8"));
			tgt.manifestFile = fname;
			return;
		}

		const mPlutonium = /plutonium-(?<ver>.*)\.zip/.exec(fname);
		if (mPlutonium) {
			const tgt = (moduleMetas[mPlutonium.groups.ver] ||= {});
			tgt.downloadUrl = `${downloadUrlBase}/${fname}`;
			return;
		}
	});

Object.values(moduleMetas)
	.forEach(meta => {
		meta.manifestJson.manifest = meta.manifestUrl;
		meta.manifestJson.download = meta.downloadUrl;
		fs.writeFileSync(meta.manifestFile, JSON.stringify(meta.manifestJson, null, "\t"), "utf-8");
	})
