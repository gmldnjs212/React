import React, { Component } from "react";

export class ExpenseFrom extends Component {
  render() {
    return (
      <form>
        <div className="form-center">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="예) 렌트비"
            />
          </div>
          <div className="form-group"></div>
        </div>
        <button type="submit" className="btn">
          제출
        </button>
      </form>
    );
  }
}

export default ExpenseFrom;
