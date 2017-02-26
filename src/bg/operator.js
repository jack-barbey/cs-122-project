var full_text = get_text();
console.log("FULLLLLL")
console.log(full_text)
var article = get_article(full_text);
var names = find_names_in_article_mod(article);
var sentences = get_sentences(article);
var returns = sentiment_analysis(sentences, names)
console.log(returns);
