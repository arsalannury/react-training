import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import CommentsLoading from "../../Loading/CommentLoading/CommentsLoading";

const CommentsAds = () => {
  const [commentOne, getCommentOne] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.freerealapi.com/comments/618a862db883dbaafa9449c5"
      );
      try {
        console.log(response.data.comment);
        getCommentOne(response.data.comment);
        setLoading(false);
      } catch (error) {
        throw new Error("کاربر مورد نظر وجود ندارد");
        setLoading(true);
      }
    };
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <CommentsLoading />
      ) : (
        <Container
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Information
            container
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            flexDirection={"column"}
          >
            <H2>نظرات مشتریان انگلیسی زبان</H2>
            <P>میتوانید با یک خرید</P>
            <P>به جامعه ی بزرگ زود باش متصل شوید</P>
          </Information>

          <Comments item xs={12} sm={12} md={6} lg={6}>
            <SingleComment
              container
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              <TextComment>{commentOne.text}</TextComment>
              <Name>{commentOne.user.name}</Name>
              <Email>{commentOne.user.email}</Email>
            </SingleComment>
          </Comments>
        </Container>
      )}
    </>
  );
};

export default CommentsAds;

const Container = styled(Grid)`
  height: 400px;
`;
const Comments = styled(Grid)``;
const Comment = styled(Grid)``;

const Information = styled(Grid)``;
const H2 = styled.h2``;
const P = styled.p``;

const SingleComment = styled(Grid)`
  direction: ltr;
  box-shadow: 0 0 15px #ccc;
  border-radius: 5px;
  margin: 0 0 0 10px;
  padding: 10px;
`;
const TextComment = styled.p``;
const Name = styled.p``;
const Email = styled.p``;
