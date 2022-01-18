import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const UsersLoading = () => {
  return (
    <>
      <Loading>
        <Skeleton width={1300} height={300} />
      </Loading>
    </>
  );
};

export default UsersLoading;

const Loading = styled.div`
  margin: 160px 0;
`;
