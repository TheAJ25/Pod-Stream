import React from "react";
import styled from "styled-components";
import MuiAvatar from "@mui/material/Avatar"; // Change the import name
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  align-items: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 16px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness (1.3);
  }
  &:hover ${PlayIcon} {
    display: flex;
    transition: all 0.4s ease-in-out;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;
const Favourite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 50};
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;
const CardImage = styled.img`
  object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;
const CardInformation = styled.div`
  display: flex;
  align-item: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;
const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;
const Decryption = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
  font-size: 12px;
`;
const CreatersInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;
const Creator = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const AvatarStyled = styled(MuiAvatar)``; // Rename the styled component
const CreatorName = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;
const Views = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
`;

const PodcastCards = () => {
  return (
    <Card>
      <div>
        <Top>
          <Favourite>
            <FavoriteIcon style={{ width: "16px", height: "16px" }} />
          </Favourite>
          <CardImage src="https://marketplace.canva.com/EAFppE37eEY/1/0/1600w/canva-pink-illustrative-podcast-logo-sfkREt8-P-U.jpg" />
        </Top>
        <CardInformation>
          <MainInfo>
            <Title>The Tim Ferriss Show</Title>
            <Decryption>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              officiis odio numquam ad architecto deleniti accusamus excepturi
              amet, perferendis exercitationem.
            </Decryption>
            <CreatersInfo>
              <Creator>
                <AvatarStyled style={{ width: "26px", height: "26px" }}>
                  R
                </AvatarStyled>
                <CreatorName>Rishav</CreatorName>
              </Creator>
              <Views>- 12 Views</Views>
            </CreatersInfo>
          </MainInfo>
        </CardInformation>
      </div>
      <PlayIcon>
        {"video" === "video" ?(
          <PlayArrowIcon styled={{width: "28px", height: "28px"}}/>
        ) : (
          <HeadphonesIcon styled={{width: "28px", height: "28px"}}/>
        )}
      </PlayIcon>
    </Card>
  );
};

export default PodcastCards;
