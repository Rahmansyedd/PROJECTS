import './App.css'
import Card from './components/card';

function App() {


  // var
  let myObj = {
    name: 'syed',
    gender: 'male',
    addres: {
      city: 'hyderabad',
      state: 'telangana',
      country: 'india'
    }
  }
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // object


  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>vite with tailwind</h1>
      <Card username="SYED"
        // myArry={[1,2,3]}
        myArry={newArr}
      />
      <Card username='json' post='staff' url='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      
      <Card />
    </>
  )
}


export default App

