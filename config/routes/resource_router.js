var express = require('express');
var router = express.Router();
var _ = require('lodash')

router.params("id", (req, res, next, id) =>{
    next()
})

router.setMiddlewares = (middlewares) => {
	var self = this;
	_.each(middlewares, (middleware) => {
		self.use(middleware);
	})
}

router.index = (indexAction) => {
		this.get('/', indexAction);
		return this;
}
router.show = (showAction) => {
    this.get('/:id', showAction);
		return this;
}
router.create = (createAction) => {
    this.post('/', createAction);
		return this;
}
router.update = (updateAction) => {
    this.put('/:id', updateAction);
		return this;
}
router.destroy = (deleteAction) => {
    this.delete('/:id', deleteAction);
		return this;
}
router.collection = (restVerb = 'get', actionName, action) => {
    this[restVerb](actionName, action);
		return this;
}
router.memember = (restVerb = 'get', actionName, action) => {
    this[restVerb]('/:id/' + actionName, action);
		return this;
}
router.resource = (controller, params = {}) => {
	var exceptActions = params.except
	var onlyActions = params.only
	if (onlyActions && onlyActions.length > 0){
		_.each(onlyActions, (action) => {
			this[action](controller[action])
		})
	} else {
		_.each(controller, (action, actionName) => {
			var mapper = router[actionName]
			// RESTFUL mapper exists and actionName is not in the except list 
			if (mapper !== null && _.indexOf(exceptActions, actionName) < 0){
				mapper(action)
			}
		})
	};
	if(params.middlewares && params.middlewares.lenght > 0){
		this.setMiddlewares(params.middlewares)
	}
	return this;
}

module.exports = router;