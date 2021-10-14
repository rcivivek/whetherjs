class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Miami';
    this.defaultState = 'FL';
  }
  
  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    
    if(localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }

      return {
         state: this.state,
        city: this.city
      }
 

  }

  setLocationsData(city,state) {
    localStorage.setItem('city',city);
    localStorage.setItem('state',state);
  }


}