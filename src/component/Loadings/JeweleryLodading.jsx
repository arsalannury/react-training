import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components';


function JeweleryLodading() {
    return (
       <>
       <Loading>
       {Array(1).fill({}).map(() => (
           <>
           <LoadingBody>
           <Skeleton height={300} width={1500} />
           </LoadingBody>
           </>
       ))}
       </Loading>
       </>
    )
}

export default JeweleryLodading;

const Loading = styled.div`
display : flex;
align-items : center;
justify-content : space-evenly;
margin-top: 120px;
`

const LoadingBody = styled.div`
display : flex;
align-items : center;
justify-content : space-evenly;
flex-direction : column;
height : 250px;

`