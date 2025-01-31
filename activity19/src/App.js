
import React, { Component } from 'react'

document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.backgroundColor = 'gray';

class Card extends Component {
  state = {
    count: 0
  };

  vote = () => {
    if (this.state.count < 10) {
      this.setState({count: this.state.count + 1});
    } else {
      alert("Cannot Vote more");
    }
  };

  unvote = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
    } else {
      alert("Cannot unvote");
    }
  }

  render() {
    return (
      <div style={{backgroundColor: "blanchedalmond", width: "750px", border: "2px solid black", borderRadius: "15px"}}>

        <div style={{display: 'flex', flexDirection: 'column'}}>

          <div style={{display: 'flex'}}>

            <div style={{display: 'flex', flexDirection: 'column', width: "100%", margin: "1.2rem 0 0 1.2rem", gap: "1.5rem"}}>

              <div style={{fontSize: "1.5rem", fontWeight: "bold"}}>
                {this.props.type}
              </div>

              <div style={{fontSize: "1rem", fontWeight: "bold"}}>
                {this.props.name}
              </div>

              <div>
                {this.props.detail}
              </div>

            </div>

            <div style={{width: "50%", margin: "1.2rem"}}>
              <img src={this.props.pic} alt={this.props.name} style={{width: "100%"}}/>
            </div>

          </div>

          <div style={{display:'flex', justifyContent: 'center',margin: "0.5rem", gap: "1rem"}}>

            <button style={{margin: "1rem 0.5rem 0.3rem", padding: "0.5rem"}} onClick={this.vote}>
              Click to Vote
            </button>

            <div style={{backgroundColor: 'lawngreen', border: '2px solid black', borderRadius: '20%', padding: '0.5rem', fontWeight: 'bold', fontSize: '1.5rem', color: 'purple'}}>
              {this.state.count === 0 ? "MIN" : this.state.count === 10 ? "MAX" : this.state.count} 
            </div>

            <button style={{margin: "1rem 0.5rem 0.3rem", padding: "0.5rem"}} onClick={this.unvote}>
              Click to Unvote
            </button>
            
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {

  foods = [
    {
      id: 0,
      type: "อาหารคาว",
      name: "ข้าวผัด",
      detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, aut vero pariatur quas officia ducimus, explicabo sapiente soluta sint saepe ea laboriosam vitae. Minima aliquam sapiente molestiae error sed. Obcaecati.",
      pic: "https://www.thep-center.org/wp-content/uploads/2022/11/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%97%E0%B8%B5%E0%B9%88-1-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%88%E0%B8%B5%E0%B8%99.jpg"
    },
    {
      id: 1,
      type: "อาหารหวาน",
      name: "บัวลอย",
      detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, aut vero pariatur quas officia ducimus, explicabo sapiente soluta sint saepe ea laboriosam vitae. Minima aliquam sapiente molestiae error sed. Obcaecati.",
      pic: "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/01/dumplings-in-coconut-cream.jpg"
    },
  ];

  render() {
    return (
      <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
        <h1 style={{textAlign: 'center', color: 'gold', margin: "2.5rem"}}>
          โหวตอาหาร
        </h1>
        <div style={{display: "flex",flexDirection: 'column', justifyContent: "center"}}>
          {this.foods.map((food) => (
            <Card key={food.id} type={food.type} name={food.name} detail={food.detail} pic={food.pic}/>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
