import downsize from "downsize";

const getExcerpt = (html, truncateOptions) => {
	truncateOptions = truncateOptions || {};

	// Strip inline and bottom footnotes
	let excerpt = html.replace(/<a href="#fn.*?rel="footnote">.*?<\/a>/gi, '');
	excerpt = excerpt.replace(/<div class="footnotes"><ol>.*?<\/ol><\/div>/, '');
	excerpt = excerpt.replace(/<\/?[^>]+>/gi, '');
	excerpt = excerpt.replace(/(\r\n|\n|\r)+/gm, ' ');

	if(!truncateOptions.words && !truncateOptions.characters){
		truncateOptions.words = 50;
	}

	return downsize(excerpt, truncateOptions);
};

export default getExcerpt;
