import React from "react";
import { Wrapper, Content } from "./EndPoints.styles";

const EndPoints = ({
        moviesEndpoint,
        setMoviesEndpoint,
        titlesEndpoint,
        setTitlesEndpoint
}) => {
  return (
    <div>
        <Wrapper>
        getMovies endpoint:
        <Content>
            <input
                type="text"
                placeholder="getMovies endpoint..."
                onChange={(event) => setMoviesEndpoint(event.target.value)}
                value={moviesEndpoint}
            />
        </Content>
        </Wrapper>
        <Wrapper>
        getTitles endpoint:
        <Content>
            <input
                type="text"
                placeholder="getTitles endpoint..."
                onChange={(event) => setTitlesEndpoint(event.target.value)}
                value={titlesEndpoint}
            />
        </Content>
        </Wrapper>
    </div>
  );
};

export default EndPoints;
