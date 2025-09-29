import React from 'react';
import styled from 'styled-components';

const Button = () => {
    const handleGithubClick = () => {
        window.open('https://github.com/denverdelamasa', '_blank');
    };
    return (
        <StyledWrapper>
        <button className="GalleryBtn" onClick={handleGithubClick}>
            <div className="Gallerysign">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
            </div>
            <div className="Gallerytext">Github</div>
        </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .GalleryBtn {
    font-family: Ubuntu, sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: #100f0f;
  }

  /* plus sign */
  .Gallerysign {
    width: 100%;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Gallerysign svg {
    width: 17px;
  }

  .Gallerysign svg path {
    fill: #fff2ff;
  }
  /* text */
  .Gallerytext {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: #fff2ff;
    font-size: 1em;
    font-weight: 400;
    transition-duration: 0.3s;
  }
  /* hover effect on button width */
  .GalleryBtn:hover {
    width: 125px;
    border-radius: 10px;
    transition-duration: 0.3s;
  }

  .GalleryBtn:hover .Gallerysign {
    width: 30%;
    transition-duration: 0.3s;
    padding-left: 20px;
  }
  /* hover effect button's text */
  .GalleryBtn:hover .Gallerytext {
    opacity: 1;
    width: 70%;
    transition-duration: 0.3s;
    padding-right: 10px;
  }
  /* button click effect*/
  .GalleryBtn:active {
    transform: translate(2px, 2px);
  }`;

export default Button;