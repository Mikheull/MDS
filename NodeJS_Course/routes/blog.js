const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('blog/index')
});


/* GET articles page. */
router.get('/articles/', function(req, res, next) {
    var array = ['article1', 'article2', 'article3', 'article4', 'article5'];

    res.render('blog/articles', {
        listeArticles: array
    })
});


/* GET article page. */
router.get('/articles/:article/', function(req, res, next) {
    var article = req.params.article;
    console.log(article);

	res.render('blog/article', {
        nomArticle: article,
        nomAuteur: 'Mikhael',
    })
});


/* GET article page. */
router.get('/recherche/:name?', function(req, res, next) {
    var name = req.params.name;

    console.log(name);
    
	res.send('recherche d\'article')
});

module.exports = router;
