import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PodcastCards from "../components/PodcastCards";

const DashboeardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Span = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const ShowLink = styled(Link)`
  text-decoration: none;
`;

const Podcasts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  @media(max-width: 550px){
    justify-content: center;
  }
`;

const Dashboard = () => {
  return (
    <DashboeardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <ShowLink to={`/showpodcasts/mostpopular`}>
            <Span>Show All</Span>
          </ShowLink>
        </Topic>
        <Podcasts>
          <PodcastCards/>
          <PodcastCards/>
          <PodcastCards/>
          <PodcastCards/>
          <PodcastCards/>
          <PodcastCards/>
          <PodcastCards/>
          <PodcastCards/>
          <PodcastCards/>
        </Podcasts>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          Comedy
          <ShowLink to={`/showpodcasts/comedy`}>
            <Span>Show All</Span>
          </ShowLink>
        </Topic>
        <Podcasts>
          <PodcastCards/>
          <PodcastCards/>
          <PodcastCards/>
        </Podcasts>
      </FilterContainer>
    </DashboeardMain>
  );
};

export default Dashboard;
