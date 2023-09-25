
import './App.css';
import Customer from './components/Customer';

const customers=[
  {
  'id': 'ksg',
  'image':'http://placeimg.com/64/64/any',
  'name':'김선규',
  'birthday':'19870910',
  'gender':'남',
  'age':'36',
  'job':'사원'
},
{
  'id': 'haemi',
  'image':'http://placeimg.com/64/64/any',
  'name':'김해미',
  'birthday':'19891220',
  'gender':'여',
  'age':'34',
  'job':'사원'
},
{
  'id': 'haemi2',
  'image':'http://placeimg.com/64/64/any',
  'name':'김해미2',
  'birthday':'19891220',
  'gender':'여',
  'age':'34',
  'job':'사원'
}
]

function App() {
  return (
   <div>
  {
    customers.map(i=>{
      return(
        <Customer
          key={i.id}
          id={i.id}
          image={i.image}
          name={i.name}
          birthday={i.birthday}
          gender={i.gender}
          age={i.age}
          job={i.job}
        />
      );
    })
  }
   </div>
  );
}

export default App;
