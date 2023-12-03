import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import RegisterUser from "./components/RegisterUser";
import NewCandidate from "./components/NewCandidate";
import RegisterClient from "./components/RegisterClient";
import NewElection from "./components/NewElection";
import NewElectionPosition from "./components/NewElectionPosition";
import Elections from "./components/Elections";
import Login from "./components/Login";
import AllElectionResults from "./components/AllElectionResults";
import ElectionResult from "./components/ElectionResult";
import AllCandidates from "./components/AllCandidates";
import AllElectionPositions from "./components/AllElectionPositions";
import AllUsers from "./components/AllUsers";
import GuestNavbar from "./components/GuestNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <GuestNavbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<RegisterUser />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/election" element={<ElectionResult />}></Route>
          <Route
            exact
            path="/register/candidate"
            element={<NewCandidate />}
          ></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/dashboard/members" element={<AllUsers />}></Route>
          <Route
            exact
            path="/dashboard/add-client"
            element={<RegisterClient />}
          ></Route>
          <Route
            exact
            path="/dashboard/election"
            element={<Elections />}
          ></Route>
          <Route
            exact
            path="/dashboard/election/candidates"
            element={<AllCandidates />}
          ></Route>
          <Route
            exact
            path="/dashboard/election/new"
            element={<NewElection />}
          ></Route>
          <Route
            exact
            path="/dashboard/election/position"
            element={<AllElectionPositions />}
          ></Route>
          <Route
            exact
            path="/dashboard/election/position/new"
            element={<NewElectionPosition />}
          ></Route>
          <Route
            exact
            path="/dashboard/election/result"
            element={<AllElectionResults />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
