
import styled from "styled-components"

const NumberSelector = ({ setError,error, selectedNumber,setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6]


    const NumberHandler =(value) =>{
        setSelectedNumber(value);
        setError("")
    }
      //using this state to select unumbers//

    // console.log(selectedNumber)
    return (
        <NumberSelectorContainer >
            <p className="error">{error}</p>
            <div className="flex">
                {/* use to add all numbers */}
                {
                    arrNumber.map((value, i) => (
                        <Box
                            isselected={value === selectedNumber}   //check// //we can use props on components aslo;after this see 34 35
                            key={i} onClick={() => NumberHandler(value)} >{value}</Box>

                    ))
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>

    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}

p{
    font-size: 24px;
    font-weight: 700;
}

.error{
    color: red;
}

    
`

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-weight: 700;
font-size: 24px;
background-color:${(props) => (props.isselected ? "black" : "white")};
color : ${(props) => (!props.isselected ? "black" : "white")}



`
