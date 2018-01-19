import React from 'react';

const Addincome = (props) => {
  return(
    <div>
      <button className="group-income__add">+ Add Income</button>
      <form className="group-income__add-new" >
        <label htmlFor="income-title">Income Title:</label>
        <input id="income-title" type="text" value={props.incomeInputTitle}/>
        <label htmlFor="income-amount">Income Amount:</label>
        <input id="income-title" type="number" min="1" step="any" value={props.incomeInput} />
      </form>
    </div>
  );
}

const IncomeItemTitle = (props) => {
  return(
    <span className="group-income__item-title">
      {props.title}
    </span>
  );
}

const IncomeItemAmount = (props) => {
  return(
    <span className="group-income__item-amount">
      ${props.amount}
    </span>
  );
}

const IncomeItems = (props) => {
  return(
      <div className="group-income__item">
        <IncomeItemTitle title={props.itemTitle} />
        <IncomeItemAmount  amount={props.itemAmount} />
      </div>
  );
}

class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newIncomeTitle: '',
      newIncome: '0.00',
    } 
  }

  render() {
    return(
      <div className="group-income">
        <h2 className="group-income__title">Income Title</h2>
        <IncomeItems itemTitle="Paycheck 1" itemAmount="2000" />
        <IncomeItems itemTitle="Paycheck 2" itemAmount="2000" />
        <Addincome incomeInputTitle={this.state.newIncomeTitle} incomeInput={this.state.newIncome}/>
        <hr/>
        <div className="group-income__total">$4000</div>
      </div>
    );
  }
}

const Expenses = (props) => {
  return(
    <div className="group-expenses">
      <h2 className="group-expenses__title">Expenses Title</h2>
      <div className="group-expenses__item">Item 1</div>
      <div className="group-expenses__item">Item 2</div>
      <div className="group-expenses__item">Item 3</div>
    </div>
  );
}

class App extends React.Component {
  render() {
    return(
      <div>
        <Income />
        <Expenses />
      </div>
    );
  }
}

export default App;