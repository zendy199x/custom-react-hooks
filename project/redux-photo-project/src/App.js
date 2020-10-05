import React, {Suspense, useState, useEffect} from "react"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import "./App.scss"
import Header from "./components/Header"
import NotFound from "./components/NotFound"
import productApi from "api/productApi"

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"))

function App() {
	const [productList, setProductList] = useState([])

	useEffect(() => {
		const fetchProductList = async () => {
			try {
				const params = {
					_page: 1,
					_limit: 10,
				}
				const response = await productApi.getAll(params)
				console.log(response)
				setProductList(response.data)
			} catch (error) {
				console.log("Fetch to fetch product list: ", error)
			}
		}
		fetchProductList()
	}, [])

	return (
		<div className="photo-app">
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Header />

					<Switch>
						<Redirect exact from="/" to="/photos" />

						<Route path="/photos" component={Photo} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</div>
	)
}

export default App
