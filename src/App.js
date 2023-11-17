import { Component } from "react";
import "./App.css";
import ExpenseFrom from "./components/ExpenseFrom";

class App extends Component {
  render() {
    return(
      <main className="main-container">

        <h1>예산 계산기</h1>

        <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
          {/* Expense Form */}
          <ExpenseFrom/>
        </div>

        <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
          {/* Expens List */}
        </div>

        <div style={{display: 'flex', justifyContent:'end', marginTop:'1rem'}}>
          <p style={{fontSize:'2rem'}}>
            총지출:
            <span>원</span>
          </p>
        </div>

      </main>
    )
  }
}

// App 컴포넌트를 export default로 내보내면 index.js에서 받는다.
export default App;
