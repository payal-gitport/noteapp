import React from "react"
//import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Components/Login"
import Signup from "./Components/Signup"

function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App
//<Container
//className="d-flex align-items-center justify-content-center"
//style={{ minHeight: "100vh" }}>
//<div className="w-100" style={{ maxWidth: "400px" }}>
    
//</div>
//</Container>