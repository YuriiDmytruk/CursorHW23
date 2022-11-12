import styled from "styled-components";

const IMG_SIZE = 48;

const PublicationS = styled.div`
  display: inline-block;

  .retweets {
    cursor: pointer;
    user-select: none;
  }

  .likes {
    cursor: pointer;
    user-select: none;
  }

  .comments {
    cursor: pointer;
    user-select: none;
  }

  img {
    max-width: 100%;
  }
  .avator {
    border-radius: 50%;
    width: ${IMG_SIZE}px;
    height: ${IMG_SIZE}px;
    margin-right: 15px;
  }

  .tweet-wrap {
    max-width: 490px;
    background: #fff;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 3px;
    padding: 30px;
    border-bottom: 1px solid #e6ecf0;
    border-top: 1px solid #e6ecf0;
  }

  .tweet-header {
    display: flex;
    align-items: flex-start;
    font-size: 14px;
  }
  .tweet-header-info {
    font-weight: bold;
  }
  .tweet-header-info span {
    color: #657786;
    font-weight: normal;
    margin-left: 5px;
  }
  .tweet-header-info p {
    font-weight: normal;
    margin-top: 5px;
  }
  .tweet-img-wrap {
    padding-left: 60px;
  }

  .tweet-info-counts {
    display: flex;
    margin-left: 60px;
    margin-top: 10px;
  }
  .tweet-info-counts div {
    display: flex;
    margin-right: 20px;
  }
  .tweet-info-counts div svg {
    color: #657786;
    margin-right: 10px;
  }
  @media screen and (max-width: 430px) {
    body {
      padding-left: 20px;
      padding-right: 20px;
    }
    .tweet-header {
      flex-direction: column;
    }
    .tweet-header img {
      margin-bottom: 20px;
    }
    .tweet-header-info p {
      margin-bottom: 30px;
    }
    .tweet-img-wrap {
      padding-left: 0;
    }
    .tweet-info-counts {
      display: flex;
      margin-left: 0;
    }
    .tweet-info-counts div {
      margin-right: 10px;
    }
  }
`;

export default PublicationS;
