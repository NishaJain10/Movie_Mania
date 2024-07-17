import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";
import {AdminLayout} from "./Components//layouts/Admin-Layout"
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUpdate } from "./pages/Admin-Update";


// react-router-dom is used to create URLs for different web pages

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/ >}/>
          <Route path="contacts" element={<AdminContacts/>}/>
          <Route path ="users/:id/edit" element={<AdminUpdate/>}/>
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// If we export a component using "export default ___", we import it without using curly braces. If we export it with "export" keyword directly when declaring the function, we import it using curly braces.

