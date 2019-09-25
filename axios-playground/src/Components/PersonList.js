import React from 'react';
import axios from 'axios';


export default class PersonList extends React.Component {
   state = {
       person: [],
   };

   componentDidMount() {
       axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(res => {
             console.log(res);
             this.setState({person: res.data});
         });
   }
}