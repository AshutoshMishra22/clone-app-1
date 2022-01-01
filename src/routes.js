import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./Components/Registration";
import LoginFb from "./Components/FacebookLogin";
// const App = () => {
// 	let routes = useRoutes([
// 		{ path: "/registration", element: <Registration /> },
// 		// ...
// 	]);
// 	return routes;
// };
const routes = (
	<Router>
		<Routes>
			<Route exact path="/" element={<LoginFb />} />
			<Route path="/registration" element={<Registration />} />
		</Routes>
	</Router>
);
export default routes;
