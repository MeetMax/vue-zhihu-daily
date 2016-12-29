import App from './App'

export default [
	{
		path:'/header',
		component:App.components.vHeader,
		name:'header'
	},
	{
		path:'/hello',
		component:App.components.Hello,
		name:'hello'
	},
	{
		path:'/slide',
		component:App.components.Slide,
		name:'slide'
	}
]