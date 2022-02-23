import { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import CommentsLoading from "../../Loading/CommentLoading/CommentsLoading";
import getCommentsApi from "./GetComments";
import Slide from 'react-reveal/Slide';

const CommentsAds = () => {
  const [comments, getComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [more, getMore] = useState(false);

  useEffect(() => {
    getMore(false)
    const getData = async () => {
      const response = await axios.get(
        "https://api.freerealapi.com/comments/618a862db883dbaafa9449c5"
      );
      try {
        console.log([response.data.comment]);
        getComments([response.data.comment]);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        throw new Error("کاربر مورد نظر وجود ندارد");
      }
    };
    getData();
  }, []);

  const handleButtonMore = () => {
    getCommentsApi(getComments, comments);
    getMore(true);
  };

  const handleButtonLess = () => {
    getComments(
      comments.filter((comment) => comment._id === "618a862db883dbaafa9449c5")
    );
    getMore(false)
  };

  return (
    <>
      {loading ? (
        <CommentsLoading />
      ) : (
        <Container
          container
          justifyContent={"space-between"}
          alignItems={"flex-start"}
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
            <P>
              به جامعه ی بزرگ <Span>زود باش</Span> متصل شوید
            </P>
          </Information>

          <Comments
            item
            container
            xs={12}
            sm={12}
            md={6}
            lg={6}
            justifyContent={"center"}
          >
            {comments.map((cmt, index) => (
              <Slides top>
              <SingleComment
                key={index}
                container
                flexDirection={"column"}
                alignItems={"flex-start"}
              >
                <TextComment>{cmt.text}</TextComment>
                <UserPersonal
                  container
                  alignItems={"flex-end"}
                  justifyContent={"space-evenly"}
                  flexDirection={"column"}
                >
                  <Name>{cmt.user.name}</Name>
                  <Email>{cmt.user.email}</Email>
                </UserPersonal>
              </SingleComment>
              </Slides>
            ))}

            {!more ? (
              <ButtonMore
                onClick={handleButtonMore}
                sx={{ fontFamily: "inherit" }}
                variant="outlined"
              >
                موارد بیشتر
              </ButtonMore>
            ) : (
              <ButtonLess
                variant="outlined"
                sx={{ fontFamily: "inherit" }}
                onClick={handleButtonLess}
              >
                موارد کمتر
              </ButtonLess>
            )}
          </Comments>
        </Container>
      )}
    </>
  );
};
export default CommentsAds;

const Container = styled(Grid)`
  height: 400px;
  margin: 10px 0 0 0;
`;
const Comments = styled(Grid)``;

const UserPersonal = styled(Grid)`
  margin-top: 10px;
`;

const Information = styled(Grid)``;
const H2 = styled.h2`
margin-top: 10px;
`;
const P = styled.p`
margin-top: 10px;
`;
const Span = styled.span`
  color: #cd1c1c;
`;

const SingleComment = styled(Grid)`
  direction: ltr;
  box-shadow: 0 0 15px #ccc;
  border-radius: 5px;
  margin: 20px 15px 0 15px;
  padding: 10px;
`;
const Slides = styled(Slide)`
direction: ltr;
box-shadow: 0 0 15px #ccc;
border-radius: 5px;
margin: 20px 15px 0 15px;
padding: 10px;
`
const TextComment = styled.p`
  color: #333;
`;
const Name = styled.p`
  font-size: 0.8em;
  color: #0096c7;
`;
const Email = styled(Name)``;
const ButtonMore = styled(Button)`
  margin: 30px 0 30px 0;
`;
const ButtonLess = styled(ButtonMore)``;
