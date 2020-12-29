module.exports = function flattenArticles(newsletters) {
	return newsletters.map((nl) => nl.contents.map((article) => ({...article, newsletterNumber: nl.number}))).reduce((acc, articles) => {
		acc = acc.concat(articles);
		for (const article of articles) {
			if (article.sub) {
				acc = acc.concat(article.sub.map((sub) => ({...sub, newsletterNumber: article.newsletterNumber})));
			}
		}
		return acc;
	}, []);
}
