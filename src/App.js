// import { Header } from './my_components/Header';
// import { Hero_section } from './my_components/Hero_section';
// import { Features } from './my_components/Features';
// import { Culture } from './my_components/Culture';
// import { Property_managment } from './my_components/Property_managment';
// import { Review } from './my_components/Review';
// import { Footer } from './my_components/Footer';
// import { Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import Header from './my_components/Header/Header';
import { Footer } from './my_components/Header/Footer';
import { Hero_section } from './my_components/Components/Hero_section';
import { Features } from './my_components/Components/Features';
import { Culture } from './my_components/Components/Culture';
import { Property_managment } from './my_components/Property_managmnt_page/Property_managment';
import { Review } from './my_components/Components/Review';
import { Contact_us } from './my_components/Contact_us_page/Contact_us';
import { Listing } from './my_components/Listing_page/Listing';
import { Find_hotels_form } from './my_components/Components/Find_hotels_form';
import { Single_listing_page } from './my_components/Single_listing_page/Single_listing_page';
import Loadable from 'react-loadable';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	return (
		<>		
		<Router>
		<Header/>
		
		<Switch>
		<Route exact path="/" render={() =>{
			return(
				<>
				<Hero_section />
				<Features />
				<Culture />
				<Property_managment />
				<Review />
				</>
				)
		}}>
		</Route>
		<Route exact path="/listing" render={() =>{
			return(
				<>
				<Listing />
				

				</>
				)
			}}>
		</Route>
		<Route exact path="/single_listing" render={()=> {
				return(
					<>
					<Single_listing_page />
					</>
					)
			}} >
			</Route>
			<Route exact path="/contact" render={()=> {
				return(
					<>
					<Contact_us/ >
					</>
					)
			}} >
			</Route>
			
			</Switch>


			<Footer />
			</Router>

			</>
			);
		}

		export default App;
// function App() {
// 	return (
// 		<>
// 		<Header />
// 		<Hero_section />
// 		<Features />
// 		<Culture />
// 		<Property_managment />
// 		<Review />
// 		<Footer />
// 		</>
// 		);
// 		<Router>
	    
// 	</Router>
// 	}


// 	export default App;
