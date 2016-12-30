import App from './App'

export default [
  {
    path:'/',
    component:App.components.Index,
    name:'index'
  },
  {
    path:'/news',
    component:App.components.News,
    name:'news-list'
  },
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
	},
  {
    path:'/side',
    component:App.components.Side,
    name:'side'
  }
]
