import { Component } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

class ElectronicLoading extends Component {
  render() {
    return (
      <>
        {Array(6)
          .fill({})
          .map(() => {
            return (
              <>
                <Grid>
                  <Skeleton width={120} height={120} circle={true} />
                  <Skeleton width={400} height={20} count={2} />
                </Grid>
              </>
            );
          })}
      </>
    );
  }
}

export default ElectronicLoading;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 90px;
`;
