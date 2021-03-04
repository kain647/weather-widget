import styled from "styled-components";

export const ImageBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 830px;
  img {
    position: absolute;
    width: 540px;
    pointer-events: none;
    z-index: 15;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  position: relative;
  width: 330px;
  height: 720px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #48d9b8;
  user-select: none;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  border-radius: 33px;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
`;
export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Sun = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 40px;
  color: #fff;
  font-weight: 500;
  padding: 15px;
`;
export const Sunrise = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  //margin-left: 10px;
`;
export const Sunset = styled.div`
  display: flex;
  //margin-right: 10px;
`;
export const City = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: flex-start;
  font-size: 22px;
  font-weight: 600;
`;
export const Icon = styled.div`
  display: flex;
  margin-right: 5px;
  margin-top: 14px;
  padding: 5px;
  justify-content: center;
`;
export const Name = styled.div`
  display: flex;
  margin-top: 15px;
  margin-right: 5px;
`;
export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  margin-top: 10px;
`;
export const CenterIcon = styled.div.attrs(props => ({
  className: `owf owf-${props.iconCode}`
}))`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: flex-start;
  font-size: 120px;
  color: #fff;
  margin-bottom: 40px;
`;
export const StatsContainer = styled.div`
  display: flex;
  height: auto;
  width: 80%;
  flex-direction: row;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FirstText = styled.div`
  display: flex;
  text-transform: uppercase;
`;
export const FirstT = styled.div`
  display: flex;
`;
export const DayContainer = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(7, 1fr);
  box-sizing: border-box;
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  color: #fff;
`;
export const NameDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  height: 30px;
  background-color: ${({ active }) => (active ? "#48d9b8" : "#27b494")};
  padding: 4px;
  :last-child {
    margin-right: 0;
  }
`;
export const Updated = styled.div`
  display: flex;
  color: #fff;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const Country = styled.div`
  display: flex;
  margin-top: 15px;
`;
export const FormContainer = styled.form`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
  padding: 10px 10px;
`;
export const Button = styled.button`
  display: flex;
  box-shadow: 0px 10px 14px -7px #3e7327;
  background: linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
  background-color: #77b55a;
  border-radius: 4px;
  border: 0px solid #4b8f29;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  padding: 6px 12px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #5b8a3c;
  :hover {
    background: linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
    background-color: #72b352;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const Input = styled.input`
  display: flex;
  margin-right: 10px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 6px 12px;
  //box-shadow: 0px 10px 14px -7px #bfbfbf;
`;
