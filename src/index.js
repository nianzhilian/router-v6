import React, {
  useId,
  useState,
  useEffect,
  useReducer,
  useCallback,
  useImperativeHandle,
  useRef,
  useMemo,
  useContext,
  createRef,
} from "react";
import ReactDOM from "react-dom/client";

import { Container, Alert, Button, AlertHeading } from "react-bootstrap";
import reportWebVitals from "./reportWebVitals";
import {
  Transition,
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import queryString from "query-string";
import { v4 as uuid } from "uuid";
//只运行一次该模块不做任何的导入
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

//deashboard页面 和 home页面
//通过路由去匹配组件 从而实现不刷新页面的情况下就能实现页面的切换

/*function Dashboard(props) {
  console.log(props);
  return <div>dashboard页面</div>;
}

function Home(props) {
  console.log(props);
  return <div>首页</div>;
}

function RouterWraper({ Component }) {
  const location = useLocation();
  const navigate = useNavigate();
  return <Component location={location} navigate={navigate} />;
}

function App() {
  return (
    <>
      <Router
        getUserConfirmation={(msg, cb) => {
          cb(window.confirm(msg));
        }}
      >
        <nav>
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/a",
                  search: "?name=123&age=23",
                  hash: "#abc",
                  state: { from: "/a" },
                }}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/b">首页</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/a"
            element={<RouterWraper Component={Dashboard} />}
          ></Route>
          <Route path="/b" element={<RouterWraper Component={Home} />} />
        </Routes>
      </Router>
    </>
  );
}*/

function Input(props,ref){
  console.log(props)
  return (
    <input ref={ref} type="text" />
  )
}

Input = React.forwardRef(Input);

class App extends React.Component{
  constructor(props){
    super(props);
    this.pref = React.createRef(null);
  }
  componentDidMount(){
    this.pref.current.focus();
    console.log(this.pref)
  }
  render(){
    return (
      <div style={{marginTop:"10px",marginLeft:'10px'}}>
        <Input abc="123" ref={this.pref} />
      </div>
    )
  }
}


root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
