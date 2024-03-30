import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import About from "./Pages/About"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Dashboard from "./Pages/Dashboard"
import Projects from "./Pages/Projects"
import PrivateRoute from "./Components/PrivateRoute"
import CreatePost from "./Pages/CreatePost"
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute"
import UpdatePost from "./Pages/UpdatePost"
import PostPage from "./Pages/PostPage"

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sign-in" element={<SignIn/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/about" element={<About/>} />
    <Route element={<PrivateRoute/>}>
    <Route path="/dashboard" element={<Dashboard/>} />
    </Route>
    <Route element={<OnlyAdminPrivateRoute/>}>
    <Route path="/create-post" element={<CreatePost/>} />
    <Route path="/update-post/:postId" element={<UpdatePost/>} />
    </Route>
   
    <Route path="/projects" element={<Projects/>} />
    <Route path="/post/:postSlug" element={<PostPage/>} />
  </Routes>
  <Footer/>

  </BrowserRouter>
}
