import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './components/SearchResults/SearchResult';

export const BASE_URL = "http://localhost:9000";


const App = () => {
  const [data, SetData] = useState(null); //FOR BRINGING DATA BACK TP FRONT
  const [filterData, SetFilterData] = useState(null);
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState(null);
  const [selectBtn, setSelectBtn] = useState("all")


  //network call preform
  useEffect(() => {
    const fetchFoodData = async () => {
      SetLoading(true)

      try {
        const response = await fetch(BASE_URL);

        const json = await response.json()

        SetData(json)
        SetFilterData(json)
        SetLoading(false)
      } catch (error) {
        SetError("Unable to fetch data")
      }
    }

    fetchFoodData();

  }, [])
  // console.log(data)

  const searchfood = (e) => {
    const searchValue = e.target.value

    console.log(searchValue)
    if (searchfood === "") {
      SetFilterData(null)
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    SetFilterData(filter)
  };


  const filterFood = (type) => {
    if (type === "all") {
      SetFilterData(data)
      setSelectBtn("all")
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    )
    SetFilterData(filter)
    setSelectBtn(type)



  }

  const filterBtns = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    },

  ]



  if (error) return <div>{error}</div>
  if (loading) return <div>loading....</div>

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchfood} placeholder="search Food.." />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              isSelected={selectBtn === value.type}
              key={value.name} onClick={() => filterFood(value.type)}>{value.name}</Button>
          ))}
          {/* <Button onClick={() => filterFood("all")}>All</Button>
          <Button onClick={() => filterFood("breakfest")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("dinner")}>Dinner</Button> */}
        </FilterContainer>
      </Container>
      <SearchResult data={filterData} />
    </>
  )
}

export default App;

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;

const TopContainer = styled.section`
height: 140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

.search{
  input{    
  background-color: transparent;
  border: 1px solid red;
  color: white;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder{
    color: white;
  }
  }
}

@media (0 < width < 600px){
  flex-direction: column;
  height: 120px;

}

`;

const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 14px;
padding-bottom: 40px;

`;

export const Button = styled.button`
background:${({isSelected})=>(isSelected ? "#f22f2f" : "#ff4343")} ;
outline:1px solid ${({isSelected})=>(isSelected ? "white" : "#ff4343")} ;
border-radius: 5px;
padding: 6px 12px;
border: none;
color: white;
cursor: pointer;
&:hover{
  background-color: #f22f2f;
}
`;
