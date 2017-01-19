import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      hotels: [
        {
          "id": "46893",
          "name": "Espahotel Gran Via 65",
          "slug": "espahotel-gran-via-65-46893",
          "stars": 3,
          "position": [
            40.42267,
            -3.70992
          ],
          "image": "//images.almundo.com/201/1000000/70000/64100/64013/64013_44_b.jpg",
          "price": {
            "discount": 0,
            "amount": 1546.25,
            "code": "ARS"
          },
          "recommended": true,
          "hotel_chain": ""
        }
      ]
    };
  }


  render() {
    return (
      <section>
        almundo
      </section>
    );
  }
}

export default App;
