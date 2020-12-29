require("dotenv").config();
const yaml = require("js-yaml");
const sampleSize = require("lodash.samplesize");

const flattenArticles = require("./flatten-articles");

module.exports = function(eleventyConfig) {
	eleventyConfig.addDataExtension("yaml", (contents) => yaml.safeLoad(contents));

	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("inc");
	eleventyConfig.addPassthroughCopy("dl");
	eleventyConfig.addPassthroughCopy("views/newsletter/pdf/*.pdf");
	eleventyConfig.addPassthroughCopy("views/newsletter/articles/**/*.jpg");
	eleventyConfig.addPassthroughCopy("views/newsletter/articles/**/*.png");

	eleventyConfig.addFilter("pad", function(value, targetLength, char = "0") {
		if (typeof value === "number") {
			value = value.toString();
		}
		const len = value.toString().length;
		return new Array(Math.max(0, targetLength - len)).fill(char).join("") + value;
	});

	eleventyConfig.addFilter("where", function(value, key, match = undefined) {
		if (match !== undefined) {
			return value.filter((item) => item[key] == match);
		}
		return value.filter((item) => item[key]);
	});

	eleventyConfig.addFilter("sampleSize", function(value, count = 1) {
		return sampleSize(value, count);
	});

	eleventyConfig.addFilter("getAllArticles", function(value) {
		return flattenArticles(value);
	});

	eleventyConfig.addFilter("json", function(value) {
		return JSON.stringify(value);
	});

	return {
		dir: {
			input: "views",
		},
	};
};
