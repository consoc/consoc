const flattenArticles = require("../../../flatten-articles");

module.exports = {
	layout: "layout-article.liquid",

	eleventyComputed: {

		// Get article metadata
		article: (data) => {
			if (!/^\/newsletter\/articles\/\d\d\d\/[^/]+$/.test(data?.page?.filePathStem)) {
				return null;
			}
			const pagePath = data.page.filePathStem.split("/");
			const number = parseInt(pagePath[pagePath.length - 2], 10);

			const articles = flattenArticles(data.newsletters);
			const article = articles.find((a) => a.newsletterNumber === number && a.url === data.page.fileSlug);
			return article;
		},

		// Get the newsletter this article was published in
		newsletter: (data) => {
			if (!/^\/newsletter\/articles\/\d\d\d\/[^/]+$/.test(data?.page?.filePathStem)) {
				return null;
			}
			const pagePath = data.page.filePathStem.split("/");
			const number = parseInt(pagePath[pagePath.length - 2], 10);

			return data.newsletters.find((n) => n.number === number);
		},

		// Get other articles which have at least one tag in common
		similar: (data) => {
			if (!/^\/newsletter\/articles\/\d\d\d\/[^/]+$/.test(data?.page?.filePathStem)) {
				return null;
			}
			const pagePath = data.page.filePathStem.split("/");
			const number = parseInt(pagePath[pagePath.length - 2], 10);

			if (!data.article) return [];
			if (!data.article.tags || data.article.tags.length === 0) return [];
			const articles = flattenArticles(data.newsletters);
			return articles.filter((article) => {
				if (article.newsletterNumber === number && article.url === data.page.fileSlug) return false;
				if (!article.tags || article.tags.length === 0) return false;
				if (!article.url) return false;
				return data.article.tags.some((tag) => article.tags.includes(tag));
			});
		},

	},
};
