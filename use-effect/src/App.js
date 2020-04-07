import React, {useState, useEffect} from "react"
import "./App.scss"
import queryString from "query-string"
import PostList from "./components/PostList"
import Pagination from "./components/Pagination"

function App() {
	const [postList, setPostList] = useState([])
	const [panigation, setPanigation] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 1,
	})
	const [filters, setFilters] = useState({
		_limit: 10,
		_page: 1,
	})

	useEffect(() => {
		async function fetchPostList() {
			try {
				const paramString = queryString.stringify(filters)
				const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`
				const response = await fetch(requestUrl)
				const responseJSON = await response.json()
				console.log({responseJSON})

				const {data, pagination} = responseJSON
				setPostList(data)
				setPanigation(pagination)
			} catch (error) {
				console.log(`Failed to fetch post list: `, error.message)
			}
		}
		console.log(`POST list effect`)
		fetchPostList()
	}, [filters])

	useEffect(() => {
		console.log(`TO DO list effect`)
	})

	function handlePageChange(newPage) {
		console.log(`New page: `, newPage)
		setFilters({
			...filters,
			_page: newPage
		})
	}

	return (
		<div className="app">
			<h1>useEffect</h1>

			<PostList posts={postList} />
			<Pagination pagination={panigation} onPageChange={handlePageChange} />
		</div>
	)
}

export default App
