import styled from 'styled-components'

const RoleDice = ({CurrentDice, roleDice}) => {

    return (
        <DiceContainer>
            <div className='dice'
                onClick={roleDice}
            >
                <img src={`/images/dice/dice_${CurrentDice}.png`} alt="dice" />
                <p>Click On Dice To Roll</p>
            </div>

        </DiceContainer>
    )
}

export default RoleDice
const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;


p{
    font-size: 24px;
}

.dice{
    cursor: pointer;
}

    
`
