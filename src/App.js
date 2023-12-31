import { Component } from "react";
import "./App.css";
import ExpenseFrom from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component {
  initialExpenses = [
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 }
  ]

  handleDelete=(id)=>{
    const newExpenses = this.initialExpenses.filter(expense=>expense.id !== id)
    console.log(newExpenses);
  }

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* Expense Form */}
          <ExpenseFrom />
        </div>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* Expens List */}
          <ExpenseList 
            initialExpenses={this.initialExpenses}
            handleDelete={this.handleDelete}
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
        >
          <p style={{ fontSize: "2rem" }}>
            총지출:
            <span>원</span>
          </p>
        </div>
      </main>
    );
  };
};

// App 컴포넌트를 export default로 내보내면 index.js에서 받는다.
export default App;
